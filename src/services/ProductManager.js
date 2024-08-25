const Product = require('../models/Product');

class ProductManager {
  constructor(database) {
    this.database = database;
  }

  // Add a product to the product manager's database.
  addProduct(code, name, price) {
    const product = new Product(code, name, price);
    this.database.addProduct(product);
  }

  // Retrieve the product by its code.
  getProduct(code) {
    const product = this.database.getProduct(code);
    if (!product) {
      throw new Error(`Product not found: ${code}`);
    }
    return product;
  }
}

module.exports = ProductManager;