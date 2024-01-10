// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Contact form submission
// import { getFormData } from './contactForm';
// getFormData()

// render schedule data
import { getScheduleHtml } from './schedule';
getScheduleHtml()

import { getMixedRecordingsHtml } from './recordings';
getMixedRecordingsHtml()

import { getLinksHtml } from './links';
getLinksHtml() 

// simple fix to collapse mobile nav menu on each click
// const navLinks = document.querySelectorAll('.nav-item')
// const menuToggle = document.getElementById('navItems')
// const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
// navLinks.forEach((l) => {l.addEventListener('click', () => { bsCollapse.toggle() })
// })