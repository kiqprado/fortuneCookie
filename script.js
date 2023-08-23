let pageOne = document.querySelector('.pageOne')
let pageTwo = document.querySelector('.pageTwo')

const randomLucky = [
  'A sorte favorece os corajosos.',
  'Grandes realizações exigem grandes esforços.',
  'O segredo da felicidade está em encontrar alegria nas pequenas coisas.',
  'Siga seus instintos; eles raramente estão errados.',
  'Acredite em si mesmo e outros também acreditarão.',
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
  'A jornada de mil milhas começa com um único passo.',
  'A paciência é uma virtude que traz grandes recompensas.',
  'Ame a vida que você vive e viva a vida que você ama.',
  'A persistência leva à conquista, mesmo diante dos desafios.',
  'A felicidade é um estado de espírito, encontre-a dentro de você.'
]

function pickyLucky() {
  const randomIndex = Math.round(Math.random() * randomLucky.length)
  const choosePhrase = randomLucky[randomIndex]

  const contentElement = document.querySelector('.content p')
  contentElement.textContent = choosePhrase
}

function togglePage() {
  pageOne.classList.toggle('hide')
  pageTwo.classList.toggle('hide')
}

function openCookie() {
  togglePage()
  pickyLucky()
}

function tryAgain() {
  togglePage()
}

function enterEvent(e) {
  if (e.key == 'Enter' && pageOne.classList.contains('hide')) {
    tryAgain()
  }
}

cookie.addEventListener('click', openCookie)
openAgain.addEventListener('click', tryAgain)
document.addEventListener('keydown', enterEvent)
