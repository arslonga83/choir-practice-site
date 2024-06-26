// these functions make collect any updates from the google sheets...I kept them separate to avoid excess google api calls 
const GSheetReader = require('g-sheets-api');
require('dotenv').config()
const { readFile, writeFile } = require('fs');

function updateSchedule() {
  // from sheet 1 of google doc
    const options = {
    apiKey: process.env.API_KEY,
    sheetId: process.env.SHEET_ID,
    sheetName: 'schedule'
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
      sheetName: 'recordings',
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

  function updateLinks() {
    
      const options = {
      apiKey: process.env.API_KEY,
      sheetId: process.env.SHEET_ID,
      sheetName: 'links',
      }
    
      GSheetReader(options, results => {
        const data = JSON.stringify(results)
        const path = './data/linksData.js';
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

    function updateScheduleLinks() {
      
        const options = {
        apiKey: process.env.API_KEY,
        sheetId: process.env.SHEET_ID,
        sheetName: 'scheduleLinks',
        }
      
        GSheetReader(options, results => {
          const data = JSON.stringify(results)
          const path = './data/scheduleLinksData.js';
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

      function updatePracticeTracks() {
        // from sheet 5 of google doc
        const options = {
          apiKey: process.env.API_KEY,
          sheetId: process.env.SHEET_ID,
          sheetName: 'practiceTracks',
        }
      
        GSheetReader(options, results => {
          const data = JSON.stringify(results)
          const path = './data/practiceTracksData.js';
          const content = data
          console.log(results)
      
          writeFile(path, content, (error) => {
          if (error) {
            console.log('An error has occurred ', error);
            return;
          }
          console.log('Data written successfully to disk');
          })
        }).catch((err) => {
          console.log(err)
        });
      }
  
module.exports = { updateSchedule, updateRecordings, updateLinks, updateScheduleLinks, updatePracticeTracks }
  