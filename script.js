
const musicContainer = document.querySelector('.music-container')

const playButt = document.getElementById('play') 
const prevButt = document.getElementById('prev')
const nextButt = document.getElementById('next')
const repeatButt = document.getElementById('repeat')

const audio = document.getElementById('audio')
const title = document.getElementById('title')

const progressContainer = document.querySelector('.progress-container')
const progress = document.querySelector('.progress')
const duration = document.querySelector('.duration')
const cover = document.getElementById('cover')



const Album = [{
    name:'You Know You Like It',
    image: 'images/Hel.png',
    song: 'music/AlunaGeorge - You Know You Like It (Tchami Remix).mp3'
},{
    name:'Purple Line',
    image: 'images/godIsLonely.png',
    song: 'music/Ben Böhmer - Purple Line.mp3'
},{
    name:'Rock The Disco',
    image: 'images/lobo.png',
    song: 'music/Chiqito - Rock The Disco (Original Mix).mp3'
}
]

let currentSong = 0
let repeatItself = false


loadMusic()

function loadMusic(){
    audio.src = Album[currentSong].song
    cover.src = Album[currentSong].image
    title.innerText = Album[currentSong].name
}


nextButt.addEventListener('click',()=>{
    pauseMusic()
    currentSong = currentSong == Album.length-1 ? 0: currentSong+1
    loadMusic()
    playMusic()
})

prevButt.addEventListener('click',()=>{
    pauseMusic()
    currentSong = currentSong == 0 ? Album.length-1: currentSong-1
    loadMusic()
    playMusic()
})

playButt.addEventListener('click',()=>{
    let isPlaying = musicContainer.classList.contains('play')
    if(isPlaying)
        pauseMusic()
    else 
        playMusic()
})

repeatButt.addEventListener('click',()=>{
    repeatItself = !repeatItself

    if(!repeatButt.classList.contains('btnON'))
        repeatButt.classList.add('btnON')
    else 
        repeatButt.classList.remove('btnON')
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



function updateProgress(){
    const {duration,currentTime} = this
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`    
}


function changeProgress(e){
    const widthContainer = this.clientWidth;
    const clickWidth = e.offsetX
    audio.currentTime = (clickWidth/widthContainer)*audio.duration
}





document.addEventListener('keydown',(e)=>{
    if(e.key == 'Enter' || e.key ==' '){
        e.preventDefault(); 
        playButt.click()
    }
})

progressContainer.addEventListener('click',changeProgress)

audio.addEventListener('timeupdate', updateProgress);


audio.addEventListener('ended', ()=>{
    if(!repeatItself)
        nextButt.click()
    else 
        playMusic()
});



