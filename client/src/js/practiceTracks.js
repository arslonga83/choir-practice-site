import { initializePlayers } from './customPlayers'

  export async function getPracticeTracksHtml() {

    const response = await fetch('practiceTracks')
    const recordingsData = await response.json()

    const practiceTracks = document.getElementById('practiceTracks')
    let practiceTracksHtml = ``

    for (let item of recordingsData) {
      
     
      let track1Html = ''
      let track2Html = ''
      let track3Html = ''
      let track4Html = ''
      let track5Html = ''
      let track6Html = ''
      let track7Html = ''
      let track8Html = ''
      let track9Html = ''


      if (item['track1-title']) {
        track1Html = `
        <p class="card-subtitle py-3 fs-5 fw-bold">${item['track1-title']}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${item['track1-link']}"/>
        </audio>
        </div>
        `
      }
      if (item['track2-title']) {
        track2Html = `
        <p class="card-subtitle py-3 fs-5 fw-bold">${item['track2-title']}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${item['track2-link']}"/>
        </audio>
        </div>
        `
      }
      if (item['track3-title']) {
        track3Html = `
        <p class="card-subtitle py-3 fs-5 fw-bold">${item['track3-title']}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${item['track3-link']}"/>
        </audio>
        </div>
        `
      }
      if (item['track4-title']) {
        track4Html = `
        <p class="card-subtitle py-3 fs-5 fw-bold">${item['track4-title']}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${item['track4-link']}"/>
        </audio>
        </div>
        `
      }
      if (item['track5-title']) {
        track5Html = `
        <p class="card-subtitle py-3 fs-5 fw-bold">${item['track5-title']}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${item['track5-link']}"/>
        </audio>
        </div>
        `
      }
      if (item['track6-title']) {
        track6Html = `
        <p class="card-subtitle py-3 fs-5 fw-bold">${item['track6-title']}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${item['track6-link']}"/>
        </audio>
        </div>
        `
      }
      if (item['track7-title']) {
        track7Html = `
        <p class="card-subtitle py-3 fs-5 fw-bold">${item['track7-title']}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${item['track7-link']}"/>
        </audio>
        </div>
        `
      }
      if (item['track8-title']) {
        track8Html = `
        <p class="card-subtitle py-3 fs-5 fw-bold">${item['track8-title']}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${item['track8-link']}"/>
        </audio>
        </div>
        `
      }
      if (item['track9-title']) {
        track9Html = `
        <p class="card-subtitle py-3 fs-5 fw-bold">${item['track9-title']}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${item['track9-link']}"/>
        </audio>
        </div>
        `
      }
     
      
        practiceTracksHtml += ` 
          <div class="card text-center col-lg-5 col-md-12 rounded bg-dark text-white mt-5" >
            <div class="card-body">
            <h1 class="card-title fw-bolder">${item.title}</h1>
           
            ${item['track1-title'] ? `${track1Html}` : ``}
            ${item['track2-title'] ? `${track2Html}` : ``}
            ${item['track3-title'] ? `${track3Html}` : ``}
            ${item['track4-title'] ? `${track4Html}` : ``}
            ${item['track5-title'] ? `${track5Html}` : ``}
            ${item['track6-title'] ? `${track6Html}` : ``}
            ${item['track7-title'] ? `${track7Html}` : ``}
            ${item['track8-title'] ? `${track8Html}` : ``}
            ${item['track9-title'] ? `${track9Html}` : ``}
            
         
            
            
            </div>
          </div>`
      }
    
    practiceTracks.innerHTML += practiceTracksHtml 
      
    initializePlayers()
  }


