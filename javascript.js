const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL = submitpage.html
const messageContainer = document.createElement('div');
messageContainer.id = 'message-container';
const messageBox = document.createElement('textarea');
messageBox.id = 'message-box';
messageBox.placeholder = 'Type your message here...';

form.addEventListener('submit', e => {
  submitButton.disabled = true
  let requestBody = new FormData(form)
  fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
       alert('Success!', response)
       submitButton.disabled = false
      })
    .catch(error => {
    alert('Error!', error.message)
      submitButton.disabled = false

    }
    )
})