




document.getElementById('play').addEventListener('click',()=>{
    let musicContainer = document.querySelector('.music-container')
    if(musicContainer.classList.contains('play'))
        musicContainer.classList.remove('play')
    else musicContainer.classList.add('play')
})


