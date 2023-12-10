![image](https://github.com/ArnavAnand10/flipkart_clone/assets/97800361/221cf108-9001-4c28-8129-47161fd2e5fe)


<br/>
<p align="center">
  <a href="https://github.com/ArnavAnand10/ flipkart_clone ">
    <img src="" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">MERN Stack Flipkart Clone</h3>

  <p align="center">
    Complete Flipkart Clone using MERN Stack 🚀
    <br/>
    <br/>
    <a href="https://github.com/ArnavAnand10/ flipkart_clone "><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/ArnavAnand10/ flipkart_clone ">View Demo</a>
    .
    <a href="https://github.com/ArnavAnand10/ flipkart_clone /issues">Report Bug</a>
    .
    <a href="https://github.com/ArnavAnand10/ flipkart_clone /issues">Request Feature</a>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/ArnavAnand10/ flipkart_clone /total) ![Contributors](https://img.shields.io/github/contributors/ArnavAnand10/ flipkart_clone ?color=dark-green) ![Forks](https://img.shields.io/github/forks/ArnavAnand10/ flipkart_clone ?style=social) ![Stargazers](https://img.shields.io/github/stars/ArnavAnand10/ flipkart_clone ?style=social) ![Issues](https://img.shields.io/github/issues/ArnavAnand10/ flipkart_clone ) ![License](https://img.shields.io/github/license/ArnavAnand10/ flipkart_clone ) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)

## About The Project

![Screen Shot](images/screenshot.png)

The Flipkart Clone project is a comprehensive e-commerce application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It aims to replicate the functionality and user experience of the popular e-commerce platform Flipkart, incorporating essential features and technologies for a seamless shopping experience.

Key Features
1. User Authentication
The project employs secure user authentication using JSON Web Tokens (JWT). Users can register, log in, and maintain a personalized shopping experience with their accounts.

2. Razor Pay Integration
Seamless payment integration is achieved through Razor Pay, allowing users to make secure transactions for their purchases.

3. Material-UI for Stylish UI Components
The user interface is crafted using Material-UI, providing a modern and responsive design with a rich set of UI components for a visually appealing experience.

4. React Redux for Efficient State Management
React Redux is employed for efficient state management, ensuring a smooth and predictable flow of data throughout the application.

5. React Router DOM for Navigation
Navigation within the application is facilitated by React Router DOM, enabling users to explore different sections effortlessly.

6. RESTful APIs
The backend, powered by Express.js, exposes RESTful APIs for seamless communication between the frontend and backend, handling data requests and updates.

7. Middleware Implementation
Middleware is used for various functionalities, enhancing the application's extensibility and maintaining a clean separation of concerns.

8. Bcrypt for Password Hashing
User passwords are securely stored using Bcrypt, adding an extra layer of protection to sensitive user data.


## Built With

Frontend Technologies
React.js: A powerful JavaScript library for building user interfaces, providing a reactive and component-based structure for the frontend.

Material-UI: A React UI framework that leverages the principles of Google's Material Design, offering a comprehensive set of visually appealing and responsive components.

React Redux: A state management library for React applications, ensuring efficient handling of state throughout the application.

React Router DOM: Facilitates seamless navigation between different sections of the application, enhancing the overall user experience.

Backend Technologies:
Node.js: A runtime environment that allows the execution of JavaScript code server-side, providing the foundation for building scalable and efficient backend services.

Express.js: A minimalist and flexible Node.js web application framework that simplifies the process of building robust and scalable web applications.

MongoDB: A NoSQL database that provides a flexible and scalable solution for handling large amounts of data, crucial for storing product information, user details, and more.

Authentication and Security
JSON Web Tokens (JWT): Employed for secure user authentication, ensuring that user sessions and interactions are authenticated and authorized.

Bcrypt: Utilized for password hashing, enhancing the security of user credentials by converting passwords into a secure and irreversible format.

Payment Integration
Razor Pay: Integrated to facilitate seamless and secure payment transactions, providing users with a reliable and efficient payment gateway.
Middleware
Middleware components are strategically implemented to enhance the application's functionality, including logging, authentication checks, and more.

## Getting Started

Prerequisites
Make sure you have the following installed on your machine:

Node.js: Make sure to install Node.js, which includes npm (Node Package Manager).

MongoDB: Install MongoDB to set up the database for the project.

Clone the Repository
Open your terminal or command prompt and run the following command to clone the Flipkart Clone repository:

bash
Copy code
git clone https://github.com/your-username/flipkart-clone.git
Install Dependencies
Navigate to the project's frontend and backend directories and install the required dependencies:

bash
Copy code
# Go to the frontend directory
cd flipkart-clone/frontend
npm install

# Go to the backend directory
cd ../backend
npm install
Configure the Project
Configure MongoDB:

Set up a MongoDB database.
Update the connection string in backend/config/db.js with your MongoDB connection details.
Configure Razor Pay:

Obtain API keys from Razor Pay.
Update the API keys in the appropriate files in the project.
JWT Secret:

Set a strong secret key for JWT in backend/config/jwt.js.
Start the Application
Start the Backend Server:

bash
Copy code
# Go to the backend directory
cd backend
npm start
Start the Frontend Application:

bash
Copy code
# Go to the frontend directory
cd frontend
npm start
Visit http://localhost:3000 in your web browser to access the Flipkart Clone application.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* npm

```sh
npm install npm@latest -g
```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)

2. Clone the repo

```sh
git clone https://github.com/your_username_/Project-Name.git
```

3. Install NPM packages

```sh
npm install
```

4. Enter your API in `config.js`

```JS
const API_KEY = 'ENTER YOUR API';
```

## Usage

The usage of the Flipkart Clone app involves navigating through its features, making purchases, and experiencing the functionalities inspired by the original Flipkart platform. Here's a guide on how to use the app:

1. User Registration and Login
Create an Account:

Visit the registration page.
Enter your details, including username, email, and password.
Click on the "Register" button to create an account.
Log In:

If you already have an account, go to the login page.
Enter your credentials (username/email and password).
Click on the "Log In" button to access your account.
2. Explore Products
Homepage:

Upon login, you'll be directed to the homepage showcasing featured products.
Explore different categories and products available for purchase.
Product Details:

Click on a product to view its details, images, and specifications.
3. Add to Cart and Checkout
Add to Cart:

From the product details page, click on the "Add to Cart" button.
The selected item will be added to your shopping cart.
View Cart:

Navigate to the shopping cart to review your selected items.
Checkout:

Proceed to the checkout page.
Provide shipping details and choose a payment method.
4. Payment
Razor Pay Integration:
The app integrates Razor Pay for secure payment processing.
Enter your payment details to complete the transaction.

5.Logout:
Logout of your account when done using the app.
Additional Features
Search Functionality:

Utilize the search functionality to find specific products.
Responsive Design:



## Roadmap

See the [open issues](https://github.com/ArnavAnand10/ flipkart_clone /issues) for a list of proposed features (and known issues).

## Contributing



### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Copyright (c) 2023 ArnavAnand10

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Authors

* **Arnav Anand** - *FY at VIT Pune* - [Arnav Anand](https://github.com/ArnavAnand10) - **
* **** - ** - []() - **

## Acknowledgements

* []()
* []()
* []()
