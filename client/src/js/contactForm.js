
export function getFormData() {
  const contactForm = document.getElementById('contact-form')
  const myModal = document.getElementById('myModal')

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(contactForm)
    const entries = formData.entries()
    const data = Object.fromEntries(entries)

    fetch('http://localhost:3000/', {
    method: 'POST',
    headers: {
      'Content-Type': "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(response => response.text())
    .then(result => {
      console.log(result)
      // myModal.modal('show')
      })
    .catch(error => console.log('error', error));

  contactForm.reset()

  })
}

