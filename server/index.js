const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const cookie_parser = require('cookie-parser')
const port = 3000

require('dotenv').config()
const { writeFile, readFile } = require('fs');
const GSheetReader = require('g-sheets-api');

app.use(express.json())    
app.use(cookie_parser(process.env.SECRET, {maxAge: 600}))  
app.use(express.urlencoded({extended: true})); 
app.use(express.static(path.join(__dirname, '../client/src/dist/')))
app.use('admin', express.static(__dirname + '/views'))


app.use(cors({
  origin: 'http://localhost:8080'
}));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client', 'src', 'dist', 'index.html'))
// })

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'admin-login.html'))
})

app.post('/admin', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  if (username == process.env.ADMIN_USERNAME &&
      password == process.env.ADMIN_PW) {
        res.cookie('username', 'admin', {signed: true})
        res.redirect('/admin/updates')
      }
      else {
        res.redirect('/admin')
      }
})

app.get('/admin/updates/', (req, res) => {
  if(req.signedCookies.username == 'admin') {
    res.sendFile(path.join(__dirname, 'views', 'admin.html'))
  }
  else {
    res.redirect('/admin')
  }
})

// THESE UPDATE ROUTES WORK BUT NEED UPDATING...now that I have the admin route working I should refactor these to be function that I can run from the dashboard
 
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




