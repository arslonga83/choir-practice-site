// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// render schedule data
import { getScheduleHtml } from './schedule';
getScheduleHtml()

import { getMixedRecordingsHtml } from './recordings';
getMixedRecordingsHtml()

import { getLinksHtml } from './links';
getLinksHtml() 

import { getScheduleLinksHtml } from './scheduleLinks';
getScheduleLinksHtml() 

import { getPracticeTracksHtml } from './practiceTracks';
getPracticeTracksHtml()
