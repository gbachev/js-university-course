// Optional chaining is handy for deep data from an API.
let apiResponse = {
    data: {
        user: {
            profile: {
                email: 'john.doe@example.com'
            }
        }
    }
};

console.log(apiResponse.data?.user?.profile?.email); // john.doe@example.com
