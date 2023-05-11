const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const port = 3000

require('dotenv').config()
const { writeFile, readFile } = require('fs');
const GSheetReader = require('g-sheets-api');

app.use(express.json())
app.use(express.static(path.join(__dirname, '../client/src/dist/')))
app.use(cors({
  origin: 'http://localhost:8080'
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'src', 'dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

// THESE UPDATE ROUTES WORK BUT NEED UPDATING...want to make them protected so only I can do it....maybe make them post requests and require header credentials? I could eventually make an admin sign in from the front end if I want others to be able to do it...also because the vite site is rolled up it doesn't incorporate this data unless i rebuild....can i trigger a rebuild from here?

app.get('/update/schedule', (req, res) => {
  // from sheet 1 of google doc
  const options = {
    apiKey: process.env.API_KEY,
    sheetId: process.env.SHEET_ID,
  }
  
  GSheetReader(options, results => {
    const data = JSON.stringify(results)
    const path = '../client/src/files/data/scheduleData.js';
    const content = `const scheduleData = ${data} \n\nexport { scheduleData }`
  
    writeFile(path, content, (error) => {
    if (error) {
      console.log('An error has occurred ', error);
      return;
    }
    console.log('Data written successfully to disk');
    });

    res.send('Schedule data updated from Google Sheet')
    }).catch(err => {
      console.log(err)
  });
})

app.get('/update/recordings', (req, res) => {
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
  
    writeFile(path, content, (error) => {
    if (error) {
      console.log('An error has occurred ', error);
      return;
    }
    console.log('Data written successfully to disk');
    });

    res.send('Recordings data updated from Google sheet')
  }).catch(err => {
    console.log(err)
  });
})


