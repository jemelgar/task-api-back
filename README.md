# To-Do App API

Welcome to the **CTD Frontend II API (my version of it)** repository! This guide will help you set up and run the API server on your local machine.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/get-npm)
- [MongoDB](https://docs.mongodb.com/manual/installation/) (install and run MongoDB on your OS)

## Installation

1. **Clone this repository**

   ```sh
   git clone https://github.com/jemelgar/task-api-back.git
   ```

2. **Install all dependencies**
   ```sh
   npm install
   ```

## Usage

1. **Start MongoDB**
   Ensure MongoDB is running on your machine. You can start MongoDB with the following command:

   ```sh
   mongod
   ```

2. **Run the API server**

   ```sh
   npm start
   ```

3. **Enjoy!**
   The API server should now be running on `http://localhost:3000`.

## API Documentation

For detailed information on the available API endpoints and their usage, refer to the [API Documentation](http://localhost:3000/api-docs) provided by Swagger.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
