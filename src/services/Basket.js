const DeliveryCalculator = require('../utils/DeliveryCalculator');

class Basket {
  constructor(productManager, offerManager) {
    this.productManager = productManager;
    this.offerManager = offerManager;
    this.items = Object.create(null);
  }

  /**
   * Adds a product to the basket.
   * If the product is already in the basket, increments its quantity.
   * If the product is not in the basket, adds it with a quantity of 1.
   */
  add(productCode) {
    const product = this.productManager.getProduct(productCode);
    // Increment the quantity of the product in the basket,
    // or set it to 1 if it's not already in the basket.
    this.items.set(productCode, (this.items.get(productCode) || 0) + 1);
  }

  /**
   * Removes one of the given product from the basket.
   * If the product is not in the basket, throws an error.
   * If the product is in the basket but only once, removes it.
   */
  remove(productCode) {
    // Get the current quantity of the product
    const currentQuantity = this.items.get(productCode);
    if (!currentQuantity) {
      throw new Error('Product not in basket');
    }

    // Decrement the quantity of the product
    this.items.set(productCode, currentQuantity - 1);

    // If the quantity is 0, remove the product from the basket
    if (this.items.get(productCode) === 0) {
      this.items.delete(productCode);
    }
  }

  /**
   * Calculates the total price of the items in the basket, including
   * any applicable discounts and delivery charges.
   * the total price of the items in the basket.
   */
  total() {
    let subtotal = 0;
    const products = new Map();

    // Loop through all the items in the basket
    for (const [code, quantity] of this.items) {
      const product = this.productManager.getProduct(code);
      products.set(code, product);
      // Add the price of the item to the subtotal, taking into account the quantity
      subtotal += product.price * quantity;
    }

    // Apply any applicable discounts to the subtotal
    const discountedTotal = this.applyOffers(subtotal, products);
    // Calculate the delivery charge
    const deliveryCharge = DeliveryCalculator.calculate(discountedTotal);

    // Return the total price of the items in the basket, including the delivery charge
    return discountedTotal + deliveryCharge;
  }

  applyOffers(subtotal, products) {
    let discountedTotal = subtotal;

    // Loop through the products and apply the offers
    for (const [code, quantity] of this.items) {
      const product = products.get(code);
      const offer = this.offerManager.getOffer(code);

      // Buy one get one half price offer
      if (offer && offer.type === 'buy_one_get_one_half_price' && quantity >= 2) {
        // Calculate the discount
        const discount = Math.floor(quantity / 2) * (product.price * offer.value);

        // Apply the discount to the total
        discountedTotal -= discount;
      }
    }

    return discountedTotal;
  }
}

module.exports = Basket;