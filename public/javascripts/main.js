const likesCountElem = document.querySelector('span')
const likeButton = document.querySelector('button')

// Update likes count on click
likeButton.addEventListener('click', () => {
  // Обновить количество лайков
  let likesCount = Number(likesCountElem.innerText)
  likesCount++
  likesCountElem.innerText = likesCount

  // Отправить запрос на сервер чтобы сервер у себя обновил количество лайков
  fetch('http://localhost:3000/likes/update', {
    method: 'POST',
    body: likesCount
  })
    .then(response => response.text())
    .then(response => console.log(response))
})