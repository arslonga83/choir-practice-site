import"./main-e2c09ad7.js";import{i as m}from"./customPlayers-b2c5c59d.js";function p(a){let s=new Date(Date.parse(a));const o={weekday:"long",month:"long",day:"numeric"};return s.toLocaleString("en-US",o)}f();async function f(){const s=await(await fetch("recordings")).json(),o=document.getElementById("mixedRecordings");let t="";for(let e of s){let n="",l="",r="",c="",i="";if(new Date(Date.parse(e.date))<=Date.now()-3600*1e3*24)continue;let d=p(e.date);e["anthem-type"]=="youtube"?n=`
        <div class="plyr-container">
        <div class="plyr__video-embedr custom-player" >
          <iframe 
            src="${e["anthem-src"]}"
            allowfullscreen
            allowtransparency
            allow="autoplay"
          ></iframe>
        </div>
      </div>`:e["anthem-type"]=="audio"&&(n=`
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${e["anthem-src"]}"/>
        </audio>
      </div>
        `),e["offertory-type"]=="youtube"?l=`
        <div class="plyr-container">
        <div class="plyr__video-embedr custom-player" >
          <iframe 
            src="${e["offertory-src"]}"
            allowfullscreen
            allowtransparency
            allow="autoplay"
          ></iframe>
        </div>
      </div>`:e["offertory-type"]=="audio"&&(l=`
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${e["offertory-src"]}"/>
        </audio>
      </div>
        `),e.song3&&(r=`
        <p class="card-subtitle py-3 fs-5 fw-bold">${e.song3}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${e["song3-src"]}"/>
        </audio>
        </div>
        `),e.song4&&(c=`
        <p class="card-subtitle py-3 fs-5 fw-bold">${e.song4}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${e["song4-src"]}"/>
        </audio>
        </div>
        `),e.song5&&(i=`
        <p class="card-subtitle py-3 fs-5 fw-bold">${e.song5}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${e["song5-src"]}"/>
        </audio>
        </div>
        `),t+=` 
          <div class="card text-center col-lg-5 col-md-12 rounded bg-secondary text-white mt-5" >
            <div class="card-body">
            <h1 class="card-title fw-bolder">${d}</h1>
            ${e.anthem?`
            <p class="card-subtitle py-2 fs-5 fw-bold">${e.anthem}</p> ${n}`:'<h3 class="py-3">Anthem TBD</h1>'}
            ${e.offertory?` 
            <p class="card-subtitle py-3 fs-5 fw-bold">${e.offertory}</p>
            ${l}`:'<h3 class="py-3">Offertory TBD</h1>'}
            ${e.song3?`${r}`:""}
            ${e.song4?`${c}`:""}
            ${e.song5?`${i}`:""}
            </div>
          </div>`}o.innerHTML+=t,m()}u();async function u(){const s=await(await fetch("schedule")).json(),o=document.getElementById("schedule-list-group");let t="",e=0;for(let n of s)new Date(Date.parse(n.date))>=Date.now()-3600*1e3*24&&e<=9&&(t+=`
      <li class="list-group-item d-lg-flex  align-items-center justify-content-center text-center">
        <p class="mb-lg-0 mb-md-1">${n.date}</p>
        <h5 class="mx-auto mb-lg-0">${n.name}</h5>
        <p class="mb-lg-0 mb-md-1">${n.time}</p>
      </li>`,e+=1),o.innerHTML=t}y();async function y(){const s=await(await fetch("scheduleLinks")).json(),o=document.getElementById("scheduleLinks");let t="";for(let e of s)t+=`
      <a href="${e.Link}" class="btn btn-primary btn-lg text-white d-block mb-5 w-50 mx-auto" target="_blank">${e.Title}</a>
      `;o.innerHTML+=t}g();async function g(){const s=await(await fetch("links")).json(),o=document.getElementById("links");let t="";for(let e of s)t+=`
      <a href="${e.Link}" class="btn btn-primary btn-lg text-white d-block mb-5 w-50 mx-auto" target="_blank">${e.Title}</a>
      `;o.innerHTML=t}
