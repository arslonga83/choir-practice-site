// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Contact form submission
import { getFormData } from './contactForm';
getFormData()

// render schedule data
import { getScheduleHtml } from './schedule';
getScheduleHtml()

//render recordings data
import { getRecordingsHtml } from './recordings';
getRecordingsHtml()


// render youtube recordings
import { getYoutubeHtml } from './recordings'
getYoutubeHtml()

// render combined recordings
import { getAllRecordingsHtml } from './recordings'
getAllRecordingsHtml()

