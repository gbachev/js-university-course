export function updateProfile(profile, field, value) {
    if (value === null) {
        delete profile[field];
    } else {
        profile[field] = value;
    }

    return profile;
}
