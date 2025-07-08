import"./main-b0e50acb.js";import{i as m}from"./customPlayers-b2c5c59d.js";function g(l){let s=new Date(Date.parse(l));const n={weekday:"long",month:"long",day:"numeric"};return s.toLocaleString("en-US",n)}u();async function u(){const s=await(await fetch("recordings")).json(),n=document.getElementById("mixedRecordings");let t="";for(let e of s){let o="",a="",c="",i="",r="";if(new Date(Date.parse(e.date))<=Date.now()-3600*1e3*24)continue;let d=g(e.date);e.song1&&(o=`
        <p class="card-subtitle py-3 fs-5 fw-bold">${e.song1}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${e["song1-src"]}"/>
        </audio>
        </div>
        `),e.song2&&(a=`
        <p class="card-subtitle py-3 fs-5 fw-bold">${e.song2}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${e["song2-src"]}"/>
        </audio>
        </div>
        `),e.song3&&(c=`
        <p class="card-subtitle py-3 fs-5 fw-bold">${e.song3}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${e["song3-src"]}"/>
        </audio>
        </div>
        `),e.song4&&(i=`
        <p class="card-subtitle py-3 fs-5 fw-bold">${e.song4}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${e["song4-src"]}"/>
        </audio>
        </div>
        `),e.song5&&(r=`
        <p class="card-subtitle py-3 fs-5 fw-bold">${e.song5}</p>
        <div class="plyr-container">
        <audio class="custom-player" controls preload="none">
          <source src="${e["song5-src"]}"/>
        </audio>
        </div>
        `),t+=` 
          <div class="card text-center col-lg-5 col-md-12 rounded bg-primary text-white mt-5" >
            <div class="card-body">
            <h1 class="card-title fw-bolder">${d}</h1>
           
            ${e.song1?`${o}`:""}
            ${e.song2?`${a}`:""}
            ${e.song3?`${c}`:""}
            ${e.song4?`${i}`:""}
            ${e.song5?`${r}`:""}
            </div>
          </div>`}n.innerHTML+=t,m()}p();async function p(){const s=await(await fetch("schedule")).json(),n=document.getElementById("schedule-list-group");let t="",e=0;for(let o of s)new Date(Date.parse(o.date))>=Date.now()-3600*1e3*24&&e<=9&&(t+=`
      <li class="list-group-item d-lg-flex  align-items-center justify-content-center text-center">
        <p class="mb-lg-0 mb-md-1">${o.date}</p>
        <h5 class="mx-auto mb-lg-0">${o.name}</h5>
        <p class="mb-lg-0 mb-md-1">${o.time}</p>
      </li>`,e+=1),n.innerHTML=t}f();async function f(){const s=await(await fetch("scheduleLinks")).json(),n=document.getElementById("scheduleLinks");let t="";for(let e of s)t+=`
      <a href="${e.Link}" class="btn btn-dark btn-lg text-light d-block mb-5 w-50 mx-auto" target="_blank">${e.Title}</a>
      `;n.innerHTML+=t}b();async function b(){const s=await(await fetch("links")).json(),n=document.getElementById("links");let t="";for(let e of s)t+=`
      <a href="${e.Link}" class="btn btn-dark btn-lg text-light d-block mb-5 w-50 mx-auto" target="_blank">${e.Title}</a>
      `;n.innerHTML=t}
