getLinksHtml()

export async function getLinksHtml() {

  const response = await fetch('links')
  const linksData = await response.json()

  const linksSection = document.getElementById('links')
  let linksHtml = ''
  
  
  for (let item of linksData) {
    
      linksHtml += `
      <a href="${item['Link']}" class="btn btn-primary btn-lg text-white d-block mb-5 w-50 mx-auto" target="_blank">${item.Title}</a>
      `
      }
      linksSection.innerHTML = linksHtml  
    }




