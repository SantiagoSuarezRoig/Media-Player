

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
const songsgrid = document.querySelector('.songs-grid')

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
},{
    name:'Bass Inside',
    image: 'images/Caballero.png',
    song: 'music/AC Slater - Bass Inside.mp3'
},{
    name:'After Earth',
    image: 'images/Jesus.png',
    song: 'music/After Earth.mp3'
},{
    name:'Esto no es Paul',
    image: 'images/paulElAmo.png',
    song: 'music/Butane (Original Mix).mp3'
},{
    name:'Daso Meine',
    image: 'images/Temita1.png',
    song: 'music/Daso - Meine.mp3'
},{
    name:'Cosmos',
    image: 'images/VirgenRezando.png',
    song: 'music/Cosmos.mp3'
}
]


function generateSongs(){
    let html = ''
    Album.forEach(option =>{
        html += 
            `<div class="song-container"
            data-song="${option.song}"
            data-name="${option.name}"
            data-image="${option.image}"
            >
                <button class="btn-repSong btn-repSong-${option.name}">
                    <img src="${option.image}" class="song-image">
                    <h3 class="song-name">${option.name}</h4>
                </button>
            </div>
            `
    })
    songsgrid.innerHTML = html;
}

generateSongs()


document.querySelectorAll('.song-container').forEach(songOption=>{
    songOption.addEventListener('click',()=>{
        pauseMusic()
        let {song,name,image} = songOption.dataset
        audio.src = song
        cover.src = image
        title.innerText = name
        playMusic()
    })
})




let currentSong = 0
let repeatItself = false
let Dragging = false
let startX = 0
let startY = 0
let differenciaY = 0
let differenciaX = 0
let initialDistanceContainerTOP = musicContainer.offsetTop
let initialDistanceContainerLEFT = musicContainer.offsetLeft


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



function timeCounter(){
    const totalDuration = formatTime(audio.duration)
    const currentDuration = formatTime(audio.currentTime)
    duration.innerText = audio.duration && audio.currentTime ?`${currentDuration} / ${totalDuration}` :'0:00 / 0:00'

    function formatTime(sec) {
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    }
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

audio.addEventListener('timeupdate', timeCounter);



musicContainer.addEventListener("mousedown",(e)=>{
    Dragging = true;

    startY = e.clientY    
    startX = e.clientX

    initialDistanceContainerTOP = musicContainer.offsetTop
    initialDistanceContainerLEFT = musicContainer.offsetLeft
});

document.addEventListener("mousemove",(e)=>{
    if(!Dragging)
        return;

    differenciaY = e.clientY - startY 
    differenciaX = e.clientX - startX 

    musicContainer.style.top = `${initialDistanceContainerTOP + differenciaY}px`
    musicContainer.style.left = `${initialDistanceContainerLEFT + differenciaX }px`
});


document.addEventListener("mouseup",()=>{
    Dragging = false
} );


