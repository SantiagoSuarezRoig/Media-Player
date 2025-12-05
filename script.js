
const musicContainer = document.querySelector('.music-container')

const playButt = document.getElementById('play') 
const prevButt = document.getElementById('prev')
const nextButt = document.getElementById('next')
const audio = document.getElementById('audio')
const title = document.getElementById('title')
const progressContainer = document.querySelector('.progress-container')
const progress = document.querySelector('.progress')
const cover = document.getElementById('cover')



const Album = [{
    name:'You Know You Like It',
    image: 'images/Angel.png',
    song: 'music/AlunaGeorge - You Know You Like It (Tchami Remix).mp3'
},{
    name:'Purple Line',
    image: 'images/Caballero.png',
    song: 'music/Ben Böhmer - Purple Line.mp3'
},{
    name:'Rock The Disco',
    image: 'images/Jesus.png',
    song: 'music/Chiqito - Rock The Disco (Original Mix).mp3'
}
]

let currentSong = 0



loadMusic()

function loadMusic(){
    audio.src = Album[currentSong].song
    cover.src = Album[currentSong].image
    title.innerText = Album[currentSong].name
}


nextButt.addEventListener('click',()=>{
    currentSong = currentSong == Album.length-1 ? 0: currentSong+1
    loadMusic()
    if(!musicContainer.classList.contains('play'))
        playButt.click()
    audio.play()
})

prevButt.addEventListener('click',()=>{
    currentSong = currentSong == 0 ? Album.length-1: currentSong-1
    loadMusic()
    if(!musicContainer.classList.contains('play'))
        playButt.click()
    audio.play()
})

function playMusic(){
    musicContainer.classList.add('play')
    playButt.querySelector('.fas').classList.remove('fa-play')
    playButt.querySelector('.fas').classList.add('fa-pause')

    audio.play()
}

function pauseMusic(){
    musicContainer.classList.remove('play')
    playButt.querySelector('.fas').classList.remove('fa-pause')
    playButt.querySelector('.fas').classList.add('fa-play')
    
    audio.pause()
}

function updateProgress(event){
    const {duration,currentTime} = event.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`
}


playButt.addEventListener('click',()=>{
    let isPlaying = musicContainer.classList.contains('play') 

    if(isPlaying)
        pauseMusic()
    else 
        playMusic()
})


audio.addEventListener('timeupdate', updateProgress);



