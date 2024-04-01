const getToken = () => localStorage.getItem('Authorization');
const getTotalPrice = (products) => {
    let totalAmount = products.reduce((total, product) =>
        total + Number(product.price * product.quantity), 0
    );
    return totalAmount.toFixed(2);
}
const getTotalTax = (products) => {
    let totalAmount = products.reduce((total, product) =>
        total + Number(product.tax * product.quantity), 0
    );
    return totalAmount.toFixed(2);
}

export { getToken, getTotalPrice, getTotalTax };