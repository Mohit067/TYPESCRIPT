interface Product {
    price: number;
    quantity: number;
}

function total(products: Product[]): number {
    return products.reduce((total, products) => {
        return total + products.price * products.quantity
    }, 0);
}

let cart : Product[] = [
    {price: 100, quantity: 2},
    {price: 200, quantity: 1},
];

console.log(total(cart));
