import './App.css'
import { useEffect, useState } from 'react'
import { MusicContainer } from './assets/MusicContainer'
import { Songs } from './assets/Songs' 


function App() {

  const songs = [{
      id: crypto.randomUUID(),  
      name:'You Know You Like It',
        image: './src/assets/images/Hel.png',
        song: './src/assets/music/AlunaGeorge - You Know You Like It (Tchami Remix).mp3'
    },{
        id: crypto.randomUUID(),
        name:'Purple Line',
        image: './src/assets/images/godIsLonely.png',
        song: './src/assets/music/Ben Böhmer - Purple Line.mp3'
    },{
        id: crypto.randomUUID(),
        name:'Rock The Disco',
        image: './src/assets/images/lobo.png',
        song: './src/assets/music/Chiqito - Rock The Disco (Original Mix).mp3'
    },{
        id: crypto.randomUUID(),
        name:'Bass Inside',
        image: './src/assets/images/Caballero.png',
        song: './src/assets/music/AC Slater - Bass Inside.mp3'
    },{
        id: crypto.randomUUID(),
        name:'After Earth',
        image: './src/assets/images/Jesus.png',
        song: './src/assets/music/After Earth.mp3'
    },{
        id: crypto.randomUUID(),
        name:'Esto no es Paul',
        image: './src/assets/images/paulElAmo.png',
        song: './src/assets/music/Butane (Original Mix).mp3'
    },{
        id: crypto.randomUUID(),
        name:'Daso Meine',
        image: './src/assets/images/Temita1.png',
        song: './src/assets/music/Daso - Meine.mp3'
    },{
        id: crypto.randomUUID(),
        name:'Cosmos',
        image: './src/assets/images/VirgenRezando.png',
        song: './src/assets/music/Cosmos.mp3'
    }
    ]
  
  const [mainSong, setMainSong] = useState({
      id: crypto.randomUUID(),  
      name:'You Know You Like It',
      image: './src/assets/images/Hel.png',
      song: './src/assets/music/AlunaGeorge - You Know You Like It (Tchami Remix).mp3'
    })
  const [indexMainSong, setIndexMainSong] = useState(0)



  useEffect(()=>{
    setMainSong(songs[indexMainSong])
  },[indexMainSong])


  return (
    <>
        <Songs songs = {songs} setMainSong = {setMainSong} setIndexMainSong={setIndexMainSong} />
        <MusicContainer mainSong={mainSong} songs = {songs} setMainSong = {setMainSong} 
          setIndexMainSong={setIndexMainSong} indexMainSong={indexMainSong}/>
    </>
  )
}

export default App
