const Database = require('./models/Database');
const ProductManager = require('./services/ProductManager');
const OfferManager = require('./services/OfferManager');
const Basket = require('./services/Basket');
const config = require('../config/default');

class AcmeWidgetCo {
  constructor() {
    this.database = new Database();
    this.productManager = new ProductManager(this.database);
    this.offerManager = new OfferManager(this.database);
    
    this.initializeProducts();
    this.initializeOffers();
  }

  initializeProducts() {
    config.products.forEach(product => {
      this.productManager.addProduct(product.code, product.name, product.price);
    });
  }

  initializeOffers() {
    config.offers.forEach(offer => {
      this.offerManager.addOffer(offer.productCode, offer.type, offer.value);
    });
  }

  createBasket() {
    return new Basket(this.productManager, this.offerManager);
  }

  runDemo() {
    const basket = this.createBasket();
    
    // Demo scenario 1
    basket.add('B01');
    basket.add('G01');
    console.log('Scenario 1 Total:', basket.total());

    // Reset basket
    basket.items.clear();

    // Demo scenario 2
    basket.add('R01');
    basket.add('R01');
    console.log('Scenario 2 Total:', basket.total());

    // Continue with more scenarios...
  }
}

const app = new AcmeWidgetCo();
app.runDemo();

module.exports = AcmeWidgetCo;