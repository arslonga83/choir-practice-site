// these functions make collect any updates from the google sheets...I kept them separate to avoid excess google api calls 
const GSheetReader = require('g-sheets-api');
require('dotenv').config()
const { writeFile } = require('fs');

function updateSchedule() {
  // from sheet 1 of google doc
    const options = {
    apiKey: process.env.API_KEY,
    sheetId: process.env.SHEET_ID,
    }
  
    GSheetReader(options, results => {
      const data = JSON.stringify(results)
      const path = '../client/src/files/data/scheduleData.js';
      const content = `const scheduleData = ${data} \n\nexport { scheduleData }`
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
      const path = '../client/src/files/data/recordingsData.js';
      const content = `const recordingsData = ${data}\n\nexport { recordingsData }`
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
  
module.exports = { updateSchedule, updateRecordings }
  