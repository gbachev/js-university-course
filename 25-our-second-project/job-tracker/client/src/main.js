import './style.css';
import {
    createApplication,
    currentUser,
    deleteApplication,
    listApplications,
    logIn,
    logOut,
    signUp,
    updateApplication,
} from './api.js';
import { renderFilter, renderFormErrors, renderList } from './render.js';
import {
    addToList,
    countByStatus,
    filterByStatus,
    removeFromList,
    replaceInList,
} from './state.js';

const appStatus = document.querySelector('#app-status');
const account = document.querySelector('#account');
const accountEmail = document.querySelector('#account-email');
const logoutButton = document.querySelector('#logout-button');

const authView = document.querySelector('#auth-view');
const loginHeading = document.querySelector('#login-heading');
const loginForm = document.querySelector('#login-form');
const signupForm = document.querySelector('#signup-form');

const trackerView = document.querySelector('#tracker-view');
const applicationForm = document.querySelector('#application-form');
const formHeading = document.querySelector('#form-heading');
const saveButton = document.querySelector('#save-button');
const cancelButton = document.querySelector('#cancel-button');
const filterSelect = document.querySelector('#status-filter');
const listHeading = document.querySelector('#list-heading');
const listStatus = document.querySelector('#list-status');
const listEl = document.querySelector('#application-list');

const FIELDS = ['company', 'role', 'status', 'appliedOn', 'url', 'notes'];

// The applications of the logged-in user, which status the list shows, and the
// application in the form (null while the form adds a new one).
let applications = [];
let filter = 'all';
let editing = null;

function render() {
    renderFilter(filterSelect, countByStatus(applications));
    renderList(listEl, filterByStatus(applications, filter), filter);
}

function showAuth(message = '') {
    applications = [];
    account.hidden = true;
    trackerView.hidden = true;
    authView.hidden = false;
    appStatus.textContent = message;
    loginHeading.focus();
}

async function showTracker(user) {
    accountEmail.textContent = user.email;
    account.hidden = false;
    authView.hidden = true;
    trackerView.hidden = false;
    appStatus.textContent = '';
    resetForm();
    listHeading.focus();

    listStatus.textContent = 'Loading your applications…';
    try {
        applications = await listApplications();
        listStatus.textContent = '';
        render();
    } catch (error) {
        showError(error, listStatus);
    }
}

const SESSION_ENDED = 'Your session has ended. Please log in again.';

// While logged in, a 401 means the session has ended: it ran out, or we logged
// out in another tab. Back to the log-in view. Any other error shows in `element`.
function showError(error, element) {
    if (error.status === 401) {
        showAuth(SESSION_ENDED);
    } else {
        element.textContent = error.message;
    }
}

// Runs `send` with the form's button disabled, so a double click sends one
// request. An error shows in the form: the message at the top, one under each
// field the server named, and focus on the first of those fields (or the first
// field), ready for the fix.
async function submitForm(form, button, send) {
    renderFormErrors(form, '');
    button.disabled = true;
    try {
        await send();
    } catch (error) {
        // In the application form, a 401 means the session has ended. On the
        // log-in form it means a wrong email or password, shown in the form.
        if (error.status === 401 && form === applicationForm) {
            showAuth(SESSION_ENDED);
            return;
        }
        renderFormErrors(form, error.message, error.fields);
        const firstInvalid = form.querySelector('[aria-invalid="true"]');
        const target = firstInvalid ?? form.elements[0];
        target.focus();
    } finally {
        button.disabled = false;
    }
}

// Log-in and sign-up work the same way: send the email and password with
// `send` (logIn or signUp), then show the tracker for the user that comes back.
function handleAuthForm(form, send) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const { email, password } = Object.fromEntries(new FormData(form));
        const button = form.querySelector('[type="submit"]');
        submitForm(form, button, async () => {
            const user = await send(email, password);
            form.reset();
            await showTracker(user);
        });
    });
}

handleAuthForm(loginForm, logIn);
handleAuthForm(signupForm, signUp);

logoutButton.addEventListener('click', async () => {
    try {
        await logOut();
        showAuth('You are logged out.');
    } catch (error) {
        appStatus.textContent = `Could not log out: ${error.message}`;
    }
});

function resetForm() {
    editing = null;
    applicationForm.reset();
    renderFormErrors(applicationForm, '');
    formHeading.textContent = 'Add an application';
    saveButton.textContent = 'Add application';
    cancelButton.hidden = true;
}

function startEditing(application) {
    editing = application;
    for (const name of FIELDS) {
        applicationForm.elements[name].value = application[name] ?? '';
    }
    renderFormErrors(applicationForm, '');
    formHeading.textContent = `Edit ${application.company}`;
    saveButton.textContent = 'Save changes';
    cancelButton.hidden = false;
    applicationForm.elements.company.focus();
}

applicationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Every field as text: { company: 'Acme', appliedOn: '', ... }. The server
    // turns an empty date or link into null.
    const values = Object.fromEntries(new FormData(applicationForm));

    submitForm(applicationForm, saveButton, async () => {
        if (editing) {
            const saved = await updateApplication(editing.id, values);
            applications = replaceInList(applications, saved);
            listStatus.textContent = `Saved ${saved.company}.`;
        } else {
            const saved = await createApplication(values);
            applications = addToList(applications, saved);
            listStatus.textContent = `Added ${saved.company}.`;
        }
        resetForm();
        render();
        applicationForm.elements.company.focus();
    });
});

cancelButton.addEventListener('click', () => {
    resetForm();
    applicationForm.elements.company.focus();
});

filterSelect.addEventListener('change', () => {
    filter = filterSelect.value;
    render();
});

// One listener handles the Edit and Delete buttons of every row (event
// delegation), including rows rendered later.
listEl.addEventListener('click', async (event) => {
    const button = event.target.closest('[data-action]');
    if (!button) {
        return;
    }
    const id = Number(button.closest('li').dataset.id);
    const application = applications.find((item) => item.id === id);

    if (button.dataset.action === 'edit') {
        startEditing(application);
        return;
    }

    if (!confirm(`Delete ${application.company}, ${application.role}?`)) {
        return;
    }
    button.disabled = true;
    try {
        await deleteApplication(id);
        applications = removeFromList(applications, id);
        if (editing?.id === id) {
            resetForm();
        }
        render();
        listStatus.textContent = `Deleted ${application.company}.`;
        // The row and its button are gone, so focus goes to the list heading.
        listHeading.focus();
    } catch (error) {
        button.disabled = false;
        showError(error, listStatus);
    }
});

// On start, ask the server whether the session cookie still belongs to someone.
async function start() {
    try {
        const user = await currentUser();
        if (user) {
            await showTracker(user);
        } else {
            showAuth();
        }
    } catch (error) {
        appStatus.textContent = `Could not start the app: ${error.message}`;
    }
}

start();
