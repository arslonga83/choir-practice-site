// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Contact form submission
const form = document.getElementById('contact-form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  // GET FORM DATA 
})

// render schedule data
import { getScheduleHtml } from './schedule';
getScheduleHtml()

//render recordings data
import { getRecordingsHtml } from './recordings';
getRecordingsHtml()


// render youtube recordings
import { getYoutubeHtml } from './recordings'
getYoutubeHtml()
