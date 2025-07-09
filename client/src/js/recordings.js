// import { recordingsData } from '../../../server/data/recordingsData'
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
      
      let song1Html = ''
      let song2Html = ''
      let song3Html = ''
      let song4Html = ''
      let song5Html = ''
    
      // skip dates that have passed
      let date = new Date(Date.parse(item.date))
      if (date <= (Date.now() - (3600 * 1000 * 24))) {
        continue
      }

      let formattedDate = formatDate(item.date)

      if (item['song1']) {
        song1Html = `
        <p class="card-subtitle py-3 fs-5 fw-bold">${item.song1}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${item['song1-link']}"/>
        </audio>
        </div>
        `
      }
      if (item['song2']) {
        song2Html = `
        <p class="card-subtitle py-3 fs-5 fw-bold">${item.song2}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${item['song2-link']}"/>
        </audio>
        </div>
        `
      }
      if (item['song3']) {
        song3Html = `
        <p class="card-subtitle py-3 fs-5 fw-bold">${item.song3}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${item['song3-link']}"/>
        </audio>
        </div>
        `
      }
      if (item['song4']) {
        song4Html = `
        <p class="card-subtitle py-3 fs-5 fw-bold">${item.song4}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${item['song4-link']}"/>
        </audio>
        </div>
        `
      }
      if (item['song5']) {
        song5Html = `
        <p class="card-subtitle py-3 fs-5 fw-bold">${item.song5}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${item['song5-link']}"/>
        </audio>
        </div>
        `
      }
      
        mixedHtml += ` 
          <div class="card text-center col-lg-5 col-md-12 rounded bg-primary text-white mt-5" >
            <div class="card-body">
            <h1 class="card-title fw-bolder">${formattedDate}</h1>
           
            ${item.song1 ? `${song1Html}` : ``}
            ${item.song2 ? `${song2Html}` : ``}
            ${item.song3 ? `${song3Html}` : ``}
            ${item.song4 ? `${song4Html}` : ``}
            ${item.song5 ? `${song5Html}` : ``}
            </div>
          </div>`
      }
    
    mixedSection.innerHTML += mixedHtml 
      
    initializePlayers()
  }