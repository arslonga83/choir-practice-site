
export async function getScheduleHtml() {

  const response = await fetch('schedule')
  const scheduleData = await response.json()

  const scheduleListGroup = document.getElementById('schedule-list-group')
  let scheduleHtml = ''
  let listLength = 0
  
  for (let item of scheduleData) {
    // these lines skip past dates and limit list to 10 upcoming dates
    // be careful of date format in sheet...I think we will need to include year for this to work
    let date = new Date(Date.parse(Date.UTC(item.date)))
    if (date >= Date.now() && listLength <= 9) {
      scheduleHtml += `
      <li class="list-group-item d-lg-flex  align-items-center justify-content-center text-center">
        <p class="mb-lg-0 mb-md-1">${item.date}</p>
        <h5 class="mx-auto mb-lg-0">${item.name}</h5>
        <p class="mb-lg-0 mb-md-1">${item.time}</p>
      </li>`
      listLength += 1
      }
      scheduleListGroup.innerHTML = scheduleHtml  
    }
}

