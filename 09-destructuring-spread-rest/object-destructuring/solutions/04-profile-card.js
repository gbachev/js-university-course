export function fillCard(user, card) {
    const { name, role, city = 'Remote' } = user;
    card.querySelector('.name').textContent = name;
    card.querySelector('.role').textContent = role;
    card.querySelector('.city').textContent = city;
    return city;
}
