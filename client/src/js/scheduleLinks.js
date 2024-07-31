getScheduleLinksHtml()

export async function getScheduleLinksHtml() {

  const response = await fetch('scheduleLinks')
  const linksData = await response.json()

  const linksSection = document.getElementById('scheduleLinks')
  let linksHtml = ''
  
  
  for (let item of linksData) {
    
      linksHtml += `
      <a href="${item['Link']}" class="btn btn-dark btn-lg text-light d-block mb-5 w-50 mx-auto" target="_blank">${item.Title}</a>
      `
      }
      linksSection.innerHTML += linksHtml  
    }