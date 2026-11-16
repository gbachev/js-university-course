export const orderMessage = (firstName, lastName, price, quantity) => {
    const fullName = firstName + ' ' + lastName;
    return fullName + ', your order total is ' + price * quantity + '.';
};
