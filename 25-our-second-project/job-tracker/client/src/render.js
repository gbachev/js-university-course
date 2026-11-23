import {
    STATUS_LABELS,
    emptyListText,
    filterLabel,
    formatDay,
    isWebLink,
} from './state.js';

const template = document.querySelector('#application-template');

// Copy the <template> and fill it in. textContent treats the data as plain text,
// never as HTML, so a company called <img src=x onerror=alert(1)> shows up as
// exactly those characters.
function applicationItem(application) {
    const item = template.content.firstElementChild.cloneNode(true);
    const name = `${application.company}, ${application.role}`;
    item.dataset.id = application.id;
    item.querySelector('.company').textContent = application.company;
    item.querySelector('.role').textContent = application.role;

    const badge = item.querySelector('.badge');
    badge.textContent = STATUS_LABELS[application.status];
    badge.dataset.status = application.status;

    const appliedOn = item.querySelector('.applied-on');
    if (application.appliedOn) {
        appliedOn.textContent = `Applied ${formatDay(application.appliedOn)}`;
    } else {
        appliedOn.remove();
    }

    // A link only for http and https. Anything else is left out.
    const link = item.querySelector('.link');
    if (isWebLink(application.url)) {
        const anchor = link.querySelector('a');
        const { hostname } = new URL(application.url);
        anchor.href = application.url;
        anchor.textContent = hostname;
        anchor.setAttribute('aria-label', `${hostname} (opens in a new tab)`);
    } else {
        link.remove();
    }

    const notes = item.querySelector('.notes');
    if (application.notes) {
        notes.textContent = application.notes;
    } else {
        notes.remove();
    }

    // The buttons say "Edit" and "Delete"; the aria-label adds which one.
    const edit = item.querySelector('[data-action="edit"]');
    const remove = item.querySelector('[data-action="delete"]');
    edit.setAttribute('aria-label', `Edit ${name}`);
    remove.setAttribute('aria-label', `Delete ${name}`);
    return item;
}

function emptyItem(status) {
    const item = document.createElement('li');
    item.className = 'empty';
    item.textContent = emptyListText(status);
    return item;
}

export function renderList(listEl, applications, status) {
    listEl.replaceChildren(
        ...(applications.length
            ? applications.map(applicationItem)
            : [emptyItem(status)]),
    );
}

// The options stay the same; only their text changes: 'Applied (2)'.
export function renderFilter(select, counts) {
    for (const option of select.options) {
        option.textContent = filterLabel(option.value, counts);
    }
}

// The message for the whole form at the top, and one under each field. A field
// with a message gets aria-invalid, so screen readers say it is invalid; its
// aria-describedby already points at the message.
export function renderFormErrors(form, message, fields = {}) {
    form.querySelector('.form-error').textContent = message;
    for (const input of form.querySelectorAll('[name]')) {
        const fieldMessage = fields[input.name] ?? '';
        document.querySelector(`#${input.id}-error`).textContent = fieldMessage;
        if (fieldMessage) {
            input.setAttribute('aria-invalid', 'true');
        } else {
            input.removeAttribute('aria-invalid');
        }
    }
}
