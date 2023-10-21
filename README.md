# QR Code Generator and Text Saver

This is a simple Node.js application that allows users to enter text, generate a QR code image from the text, and save the text to a text file.

## Introduction

This application leverages the Inquirer, qr-image, and fs npm packages to facilitate the process of creating a QR code from user input and saving the input text in a text file.

## Getting Started

Follow these instructions to set up the development environment and run the application on your local machine.

### Prerequisites

Make sure you have Node.js and npm installed on your computer.

### Installation

1. Clone the repository or download the source code.

   ```bash
   git clone https://github.com/yourusername/qr_code.git
   ```
2. Navigate to the project directory.

```bash

   cd qr_code

```
3. Install the project dependencies.

```bash

   npm install

```
### Usage
- Start the application.

 ```bash
   node app.js 
 ```
- The application will prompt you to enter text to be encoded in a QR code and saved in a text file.

- Enter the desired text and press Enter.

- The application will generate a QR code image from the input text and save it as 'qrcode.png' in the project directory.

- The input text will be saved in a text file named 'user_input.txt' in the project directory.

 ## Contributing

  Feel free to contribute to this project if you'd like to add more features or improve it.

 ### Acknowledgments
- Inquirer for providing an interactive command-line user interface.
- qr-image for generating QR codes.
- fs (Node.js native module) for handling file operations.
