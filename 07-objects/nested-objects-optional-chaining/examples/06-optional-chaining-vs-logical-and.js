// The same read with && checks and with optional chaining.
let apiResponse = {
    data: {
        user: {
            profile: {
                email: 'john.doe@example.com'
            }
        }
    }
};

// Before
let email =
    apiResponse &&
    apiResponse.data &&
    apiResponse.data.user &&
    apiResponse.data.user.profile &&
    apiResponse.data.user.profile.email;
console.log(email); // john.doe@example.com

// After
email = apiResponse.data?.user?.profile?.email;
console.log(email); // john.doe@example.com
