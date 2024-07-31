import"./main-b0e50acb.js";import{i as u}from"./customPlayers-b2c5c59d.js";$();async function $(){const p=await(await fetch("practiceTracks")).json(),k=document.getElementById("practiceTracks");let c="";for(let t of p){let a="",l="",r="",s="",i="",e="",o="",d="",n="";t["track1-title"]&&(a=`
        <p class="card-subtitle py-3 fs-5 fw-bold">${t["track1-title"]}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${t["track1-link"]}"/>
        </audio>
        </div>
        `),t["track2-title"]&&(l=`
        <p class="card-subtitle py-3 fs-5 fw-bold">${t["track2-title"]}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${t["track2-link"]}"/>
        </audio>
        </div>
        `),t["track3-title"]&&(r=`
        <p class="card-subtitle py-3 fs-5 fw-bold">${t["track3-title"]}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${t["track3-link"]}"/>
        </audio>
        </div>
        `),t["track4-title"]&&(s=`
        <p class="card-subtitle py-3 fs-5 fw-bold">${t["track4-title"]}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${t["track4-link"]}"/>
        </audio>
        </div>
        `),t["track5-title"]&&(i=`
        <p class="card-subtitle py-3 fs-5 fw-bold">${t["track5-title"]}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${t["track5-link"]}"/>
        </audio>
        </div>
        `),t["track6-title"]&&(e=`
        <p class="card-subtitle py-3 fs-5 fw-bold">${t["track6-title"]}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${t["track6-link"]}"/>
        </audio>
        </div>
        `),t["track7-title"]&&(o=`
        <p class="card-subtitle py-3 fs-5 fw-bold">${t["track7-title"]}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${t["track7-link"]}"/>
        </audio>
        </div>
        `),t["track8-title"]&&(d=`
        <p class="card-subtitle py-3 fs-5 fw-bold">${t["track8-title"]}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${t["track8-link"]}"/>
        </audio>
        </div>
        `),t["track9-title"]&&(n=`
        <p class="card-subtitle py-3 fs-5 fw-bold">${t["track9-title"]}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${t["track9-link"]}"/>
        </audio>
        </div>
        `),c+=` 
          <div class="card text-center col-lg-5 col-md-12 rounded bg-dark text-white mt-5" >
            <div class="card-body">
            <h1 class="card-title fw-bolder">${t.title}</h1>
           
            ${t["track1-title"]?`${a}`:""}
            ${t["track2-title"]?`${l}`:""}
            ${t["track3-title"]?`${r}`:""}
            ${t["track4-title"]?`${s}`:""}
            ${t["track5-title"]?`${i}`:""}
            ${t["track6-title"]?`${e}`:""}
            ${t["track7-title"]?`${o}`:""}
            ${t["track8-title"]?`${d}`:""}
            ${t["track9-title"]?`${n}`:""}
            
            </div>
          </div>`}k.innerHTML+=c,u()}
