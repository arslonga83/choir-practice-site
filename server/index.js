const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')
const cookie_parser = require('cookie-parser')
const port = 3000

require('dotenv').config()
const { readFile, writeFile } = require('fs');
const { updateRecordings, updateSchedule, updateLinks,updateScheduleLinks } = require('./utils')

app.use(express.json()) 
app.use(morgan('combined'))
app.use(cors({origin: 'http://localhost:8080'}))   
app.use(cookie_parser(process.env.SECRET, {maxAge: 10000}))  
app.use(express.urlencoded({extended: true})); 
app.use(express.static(path.join(__dirname, '../client/src/dist/')))

updateSchedule()
updateRecordings()
updateLinks()
updateScheduleLinks()

app.post('/', (req, res) => {
  console.log(req.body)
  sendMessage(req.body)
  res.status(200).send(JSON.stringify(req.body))
})

app.get('/schedule', (req, res) => {
  readFile('./data/scheduleData.js', 'utf8', (err, data) => {
    if (err) {
      console.log(err)
      return 
    }
    res.send(data)
  })
})

app.get('/recordings', (req, res) => {
  readFile('./data/recordingsData.js', 'utf8', (err, data) => {
    if (err) {
      console.log(err)
      return 
    }
    res.send(data)
  })
})

app.get('/links', (req, res) => {
  readFile('./data/linksData.js', 'utf8', (err, data) => {
    if (err) {
      console.log(err)
      return 
    }
    res.send(data)
  })
})

app.get('/scheduleLinks', (req, res) => {
  readFile('./data/scheduleLinksData.js', 'utf8', (err, data) => {
    if (err) {
      console.log(err)
      return 
    }
    res.send(data)
  })
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
    console.log('error - login unsuccessful')
    res.redirect('/admin')
  }
})

app.post('/admin/updates/', (req, res) => {
  if (req.signedCookies.username == 'admin' &&
    req.body.makeUpdate == 'schedule') {
      updateSchedule()
      res.send('Schedule updated')
    }
  else if (req.signedCookies.username == 'admin' && req.body.makeUpdate == 'recordings') {
    updateRecordings()
    res.send('Recordings updated')
  }
  else if (req.signedCookies.username == 'admin' && req.body.makeUpdate == 'links') {
    updateLinks()
    res.send('Links updated')
  }
  else if (req.signedCookies.username == 'admin' && req.body.makeUpdate == 'scheduleLinks') {
    updateScheduleLinks()
    res.send('Schedule Links updated')
  }
  else if (req.signedCookies.username == 'admin' && req.body.makeUpdate == 'logout') {
    res.clearCookie('username', {maxAge: 10000})
    res.redirect('/admin')
  }
  else {
    console.log('error - data update failed')
    res.redirect('/admin')
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

