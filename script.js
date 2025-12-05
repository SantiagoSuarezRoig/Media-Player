
const musicContainer = document.querySelector('.music-container')

const playButt = document.getElementById('play') 
const prevButt = document.getElementById('prev')
const nextButt = document.getElementById('next')
const audio = document.getElementById('audio')
const title = document.getElementById('title')
const progressContainer = document.querySelector('.progress-container')
const progress = document.querySelector('progress')
const cover = document.getElementById('cover')



const songs = []




playButt.addEventListener('click',()=>{
    if(musicContainer.classList.contains('play'))
        musicContainer.classList.remove('play')
    else musicContainer.classList.add('play')
})


