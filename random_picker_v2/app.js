const tagsEl = document.querySelector('.tags');
const textarea = document.getElementById('textarea');
const chooseBtn = document.querySelector('.choose')
const resetBtn = document.querySelector('.reset')

textarea.focus()

textarea.addEventListener('keyup', (e)=>{
  createTags(e.target.value)
})

chooseBtn.addEventListener('click', (e)=>{
  if(tagsEl.innerHTML !== ''){
  randomSelect()
}
})

resetBtn.addEventListener('click', ()=>{
  textarea.value = ""
  tagsEl.innerHTML = ''
})

function createTags(input) {
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
  
  tagsEl.innerHTML = ''

  tags.forEach(tag => {
    const oneTag = document.createElement('span')
    oneTag.classList.add('tag')
    oneTag.innerText = tag
    tagsEl.appendChild(oneTag)
  })
}

function randomSelect() {
  const times = 10
  const interval = setInterval(()=>{
    const randomTag = pickRandomTag()

    highlightTag(randomTag)

    setTimeout(()=>{
      unHighlightTag(randomTag)
    }, 100)

  }, 100)

  setTimeout(()=> {
    clearInterval(interval)

    setTimeout(()=>{
      const randomTag = pickRandomTag()
      highlightTag(randomTag)
    }, 100)

  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight')
}