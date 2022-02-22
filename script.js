const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const nameEl = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1645013758554-76320af08cd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />'
  title.innerHTML = 'Lorem ipsum dolor sit amet.'
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptas!'
  profile_img.innerHTML =
    ' <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="" />'
  nameEl.innerHTML = 'John Doe'
  date.innerHTML = 'Oct 08, 2022'
  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bgt) => bgt.classList.remove('animated-bg-text'))
}

setTimeout(getData, 2000)
