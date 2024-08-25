class Product {
    /**
     * Creates a new instance of Product.
     * @param {string} code The product code.
     * @param {string} name The product name.
     * @param {number} price The product price.
     */
    constructor(code, name, price) {
      if (typeof code !== 'string' || typeof name !== 'string' || typeof price !== 'number') {
        throw new Error('Invalid product data');
      }

      // TODO: add validation
      this.code = code;
      this.name = name;
      this.price = price;
          }
  }
  
  module.exports = Product;