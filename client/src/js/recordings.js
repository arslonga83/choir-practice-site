// import { recordingsData } from '../files/data/recordingsData'
import { initializePlayers } from './customPlayers'

function formatDate(givenDate) {
  let date = new Date(Date.parse(givenDate))
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  }
  return date.toLocaleString('en-US', options)
}

  export async function getMixedRecordingsHtml() {

    const response = await fetch('recordings')
    const recordingsData = await response.json()

    const mixedSection = document.getElementById('mixedRecordings')
    let mixedHtml = ''
    let anthemHtml = ''
    let offertoryHtml = ''

    for (let item of recordingsData) {
      let formattedDate = formatDate(item.date)

      if (item['anthem-type'] == 'youtube') {
        anthemHtml = `
        <div class="plyr-container">
        <div class="plyr__video-embedr custom-player" >
          <iframe 
            src="${item['anthem-src']}"
            allowfullscreen
            allowtransparency
            allow="autoplay"
          ></iframe>
        </div>
      </div>`
      } 
      else if (item['anthem-type'] == 'audio') {
        anthemHtml = `
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${item['anthem-src']}"/>
        </audio>
      </div>
        `
      }

      if (item['offertory-type'] == 'youtube') {
        offertoryHtml = `
        <div class="plyr-container">
        <div class="plyr__video-embedr custom-player" >
          <iframe 
            src="${item['offertory-src']}"
            allowfullscreen
            allowtransparency
            allow="autoplay"
          ></iframe>
        </div>
      </div>`
      } 
      else if (item['offertory-type'] == 'audio') {
        offertoryHtml = `
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${item['offertory-src']}"/>
        </audio>
      </div>
        `
      }
      
        mixedHtml += ` <div class="card text-center col-lg-5 col-md-12 rounded bg-secondary text-white mt-5" >
        <div class="card-body">
          <h1 class="card-title fw-bolder">${formattedDate}</h1>
          ${item.anthem ? `
          <p class="card-subtitle py-2 fs-5 fw-bold">${item.anthem}</p> ${anthemHtml}` : `<h3 class="py-3">Anthem TBD</h1>`}
          ${item.offertory ? ` 
          <p class="card-subtitle py-3 fs-5 fw-bold">${item.offertory}</p>
          ${offertoryHtml}` : `<h3 class="py-3">Offertory TBD</h1>`}
          </div>
        </div>`
      }
    
    mixedSection.innerHTML += mixedHtml 
      
    initializePlayers()
  }