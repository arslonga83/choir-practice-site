const express = require('express')
const app = express()
const path = require('path')
const cookie_parser = require('cookie-parser')
const port = 3000

require('dotenv').config()
const { updateRecordings, updateSchedule } = require('./utils')

app.use(express.json())    
app.use(cookie_parser(process.env.SECRET, {maxAge: 10000}))  
app.use(express.urlencoded({extended: true})); 
app.use(express.static(path.join(__dirname, '../client/src/dist/')))

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

