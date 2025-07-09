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

    // FOR TESTING - UNCOMMENT ABOVE LINES AND DELETE THIS DATA WHEN DONE
    // const recordingsData = [
    //   {"date":"1/12/2026",
    //       "song1":"Song 1",
    //       "song1-link":"https://dl.dropboxusercontent.com/scl/fi/yxrcrs4qz8xklj4f6qou5/luxBeata.mp3?rlkey=wa4f4hpisnxaztkp745pwktpa&st=rz6vyxo8&raw=1",
    //       "song2":"Song 2",
    //       "song2-link":"https://dl.dropboxusercontent.com/scl/fi/5dlc7cwo8sceszseht4zj/lordIsMyShepherd.mp3?rlkey=026j1v4en6h5p2qndlcjda61e&st=nil5ks65&raw=1",
    //       "song5":"Song 5",
    //       "song3-link":"https://dl.dropboxusercontent.com/scl/fi/5dlc7cwo8sceszseht4zj/lordIsMyShepherd.mp3?rlkey=026j1v4en6h5p2qndlcjda61e&st=nil5ks65&raw=1"},
    //     {"date":"1/19/2026",
    //       "anthem":"I'm On My Way",
    //       "anthem-type":"audio",
    //       "anthem-src":"https://dl.dropboxusercontent.com/scl/fi/yvb5u8krq3w42n6g5wj60/I-m-On-My-Way.mp3?rlkey=luc197020apy4cgzyq8y8gat7&st=ux8knub9&raw=1",
    //       "offertory":"We Are Held",
    //       "offertory-type":"audio",
    //       "offertory-src":"https://dl.dropboxusercontent.com/scl/fi/new1xzdz60522tgm1ve8k/We-are-Held.mp3?rlkey=yr2v5322ib1v1x924y5u5j6lz&st=4re036nw&raw=1"},
    //     {"date":"2/9/2025",
    //         "anthem":"This Little Light",
    //         "anthem-type":"audio",
    //         "anthem-src":"https://dl.dropboxusercontent.com/scl/fi/azcluezqjticdwawu0teb/this-little-light-satb.mp3?rlkey=3him39t40o2qmq9otcfv5qudl&st=hqlmjhd5&raw=1",
    //         "offertory":"Light of the World",
    //         "offertory-type":"audio",
    //         "offertory-src":"https://dl.dropboxusercontent.com/scl/fi/xa6dz4jx1b2bwu6ib18rn/light_of_the_world.mp3?rlkey=ygu8efn1z6i2h6u85hls2urwo&st=x7y1oh22&raw=1"}]

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
          <source src="${item['song1-src']}"/>
        </audio>
        </div>
        `
      }
      if (item['song2']) {
        song2Html = `
        <p class="card-subtitle py-3 fs-5 fw-bold">${item.song2}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${item['song2-src']}"/>
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