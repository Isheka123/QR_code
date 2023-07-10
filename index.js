/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";


const userInputQuestions = [
  {
    type: 'input',
    name: 'userInput',
    message: 'Enter the text to encode in the QR code and save in the file:',
  },
];

inquirer.prompt(userInputQuestions)
  .then(answers => {
    const { userInput } = answers;
    const url = userInput;
    const qrFilename = 'qrcode.png'; // Specify the filename for the QR code image
    const textFilename = 'user_input.txt'; // Specify the filename for the text file

    // Generate QR code
    const qrCode = qr.image(url, { type: 'png' });
    qrCode.pipe(fs.createWriteStream(qrFilename));

    console.log('QR code generated successfully!');
    console.log('QR code saved as:', qrFilename);

    // Save user input to text file
    fs.writeFile(textFilename, userInput, (error) => {
      if (error) {
        console.error('Error saving file:', error);
      } else {
        console.log('File saved successfully!');
        console.log('File name:', textFilename);
      }
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
