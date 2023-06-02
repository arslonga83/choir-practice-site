// these functions make collect any updates from the google sheets...I kept them separate to avoid excess google api calls 
const GSheetReader = require('g-sheets-api');
require('dotenv').config()
const { readFile, writeFile } = require('fs');
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  requireTLS: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

function sendMessage(data) {
  console.log(data)
  const message = {
    from: "arslongatest1@gmail.com",
    to: "arslongatest1@yahoo.com",
    replyTo: data.email,
    subject: `Choir Message from ${data.name}`,
    text: data.message,
  };
  
  transporter.sendMail(message)
}


function updateSchedule() {
  // from sheet 1 of google doc
    const options = {
    apiKey: process.env.API_KEY,
    sheetId: process.env.SHEET_ID,
    }
  
    GSheetReader(options, results => {
      const data = JSON.stringify(results)
      const path = './data/scheduleData.js';
      const content = data
      console.log(data)
    
      writeFile(path, content, (error) => {
      if (error) {
        console.log('An error has occurred ', error);
        return;
      }
      console.log('Data written successfully to disk');
      });
    });
  }
  
  function updateRecordings() {
    // from sheet 2 of google doc
    const options = {
      apiKey: process.env.API_KEY,
      sheetId: process.env.SHEET_ID,
      sheetNumber: 2,
    }
  
    GSheetReader(options, results => {
      const data = JSON.stringify(results)
      const path = './data/recordingsData.js';
      const content = data
      console.log(results)
  
      writeFile(path, content, (error) => {
      if (error) {
        console.log('An error has occurred ', error);
        return;
      }
      console.log('Data written successfully to disk');
      });
    });
  }
  
module.exports = { updateSchedule, updateRecordings, sendMessage }
  