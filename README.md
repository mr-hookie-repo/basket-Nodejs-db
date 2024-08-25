# MR Proposed Acme Widget Co Sales Nodejs Proposed Solutioon

This project implements a proof of concept for Acme Widget Co's new sales system. It includes a basket implementation that handles product management, offer applications, and delivery charge calculations.

## Features

- In-memory database for product and offer storage
- Product management with add and retrieve functionality
- Basket implementation with add, remove, and total calculation
- Offer application system
- Delivery charge calculation based on order total
- Unit and integration tests
- Docker support for easy deployment

## Prerequisites

- Node.js 14+
- Docker (optional)
- 
## Installation

1. Clone the repository:
git clone https://github.com/yourusername/acme-widget-co.git

3. Install dependencies:
npm install
npm install --save-dev jest

4. Run tests:
npm test

5. Start the application:
npm start

## Docker

To run the application using Docker:
docker-compose up

## Assumptions

- Products are uniquely identified by their product code.
- Offers are applied to specific products and can be of different types.
- The system can handle multiple offers on the same product.
- Invalid product codes or unavailable products are handled with appropriate error messages.
- The system can handle removal of products from the basket.

## Future Improvements

- Implement a more robust offer system to handle various types of discounts.
- Add persistence layer for long-term storage of product and offer data.
- Implement user authentication and authorization for secure access to the system.
- Expand test coverage to include more edge cases and integration scenarios.


## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
