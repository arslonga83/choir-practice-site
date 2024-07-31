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

getMixedRecordingsHtml()

export async function getMixedRecordingsHtml() {

    const response = await fetch('recordings')
    const recordingsData = await response.json()

    const mixedSection = document.getElementById('mixedRecordings')
    let mixedHtml = ''

    for (let item of recordingsData) {
      
      let anthemHtml = ''
      let offertoryHtml = ''
      let song3Html = ''
      let song4Html = ''
      let song5Html = ''
    
      // skip dates that have passed
      let date = new Date(Date.parse(item.date))
      if (date <= (Date.now() - (3600 * 1000 * 24))) {
        continue
      }

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

      if (item['song3']) {
        song3Html = `
        <p class="card-subtitle py-3 fs-5 fw-bold">${item.song3}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${item['song3-src']}"/>
        </audio>
        </div>
        `
      }
      if (item['song4']) {
        song4Html = `
        <p class="card-subtitle py-3 fs-5 fw-bold">${item.song4}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${item['song4-src']}"/>
        </audio>
        </div>
        `
      }
      if (item['song5']) {
        song5Html = `
        <p class="card-subtitle py-3 fs-5 fw-bold">${item.song5}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${item['song5-src']}"/>
        </audio>
        </div>
        `
      }
      
        mixedHtml += ` 
          <div class="card text-center col-lg-5 col-md-12 rounded bg-primary text-white mt-5" >
            <div class="card-body">
            <h1 class="card-title fw-bolder">${formattedDate}</h1>
            ${item.anthem ? `
            <p class="card-subtitle py-2 fs-5 fw-bold">${item.anthem}</p> ${anthemHtml}` : `<h3 class="py-3">Anthem TBD</h1>`}
            ${item.offertory ? ` 
            <p class="card-subtitle py-3 fs-5 fw-bold">${item.offertory}</p>
            ${offertoryHtml}` : `<h3 class="py-3">Offertory TBD</h1>`}
            ${item.song3 ? `${song3Html}` : ``}
            ${item.song4 ? `${song4Html}` : ``}
            ${item.song5 ? `${song5Html}` : ``}
            </div>
          </div>`
      }
    
    mixedSection.innerHTML += mixedHtml 
      
    initializePlayers()
  }