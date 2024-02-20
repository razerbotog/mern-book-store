# MERN Book Store

This project is a full-stack book store application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## Upcoming Features

- User authentication: Users can sign up, log in, and log out.
- Browse books: Users can view a list of available books with details such as title, author, and price.
- Search functionality: Users can search for books by title or author.
- Add to cart: Users can add books to their shopping cart and proceed to checkout.
- Checkout: Users can review their cart items and complete the purchase.

## Technologies Used

- **Frontend**: React.js, Axios, Notistack
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JSON Web Tokens (JWT) (Will be use)
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB Atlas account (for cloud database)
- Stripe account (for payment processing)

### Installation

1. Clone the repository:

```
git clone https://github.com/razerbotog/mern-book-store.git
```

2. Install dependencies:

```
cd mern-book-store
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add the following variables:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Usage

1. Start the backend server:

```
npm start
```

2. Start the frontend development server:

```
cd client
npm start
```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
