let products = [];
let idcounter = 1;

module.exports = class Product {

    constructor(id, title, price, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
    }

    save() {
        this.id = idcounter++;
        products.push(this);
        return this;
    }

    update() {
        const index = products.findIndex(prod => prod.id == this.id);
        if (index > -1) {
            const prod = products[index];
            if (this.title) {
                prod.title = this.title;
            }
            if (this.price) {
                prod.price = this.price;
            }
            if (this.description) {
                prod.description = this.description;
            }
        } else {
            throw new Error(`Couldn't find product with id:${id}`);
        }

    }

    static getAll() {
        return products;
    }

    static getProductById(id) {
        const result = products.find(prod => prod.id === parseInt(id))
        if (result) {
            return result;
        } else {
            throw new Error(`Couldn't find product with id:${id}`);
        }
    }

    delete() {
        const index = products.findIndex(prod => prod.id == this.id);
        if (index > -1) {
            products.splice(index, 1);
        } else {
            throw new Error(`Couldn't find product with id: ${id}`);
        }
    }

}