const likesCountElem = document.querySelector('span')
const likeButton = document.querySelector('button')

// Update likes count on click
likeButton.addEventListener('click', () => {
  // Обновить количество лайков
  let likesCount = Number(likesCountElem.innerText)
  likesCount++
  likesCountElem.innerText = likesCount

  // Отправить запрос на сервер чтобы сервер у себя обновил количество лайков
  let url = 'http://localhost:3000/likes/update'
  if (window.isAppRunningOnRender) {
    url = 'https://helpj-express.onrender.com/likes/update'
  }
  fetch(url, {
    method: 'POST',
    body: likesCount
  })
    .then(response => response.text())
    .then(response => console.log(response))
})