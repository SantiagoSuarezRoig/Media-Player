import { MusicNavigation } from "./MusicNavigation";
import { MusicInfo } from "./MusicInfo";
import { useRef, useState } from "react";
import Grabbable from "./Grabbable"


export function MusicContainer({indexMainSong, mainSong, songs, setIndexMainSong}){
    const [progressWidth, setProgressWidth] = useState(0);
    const musicContainerRef = useRef(null);

    const audio = useRef(null);

    const updateProgress = () => {
        if(!audio.current)
            return;

        const {duration,currentTime} = audio.current
        const progressPercent = (currentTime / duration) * 100;
        setProgressWidth(progressPercent);
    }



    return (
        <Grabbable>
            <div className={`music-container ${audio.current && !audio.current.paused ? 'play' : ''}`}
            ref={musicContainerRef } draggable
            >    

                <MusicInfo audio={audio} mainSong={mainSong} progressWidth={progressWidth}/>

                <audio onTimeUpdate={updateProgress} ref={audio} src={mainSong.song} id="audio"></audio>


                <MusicNavigation songs = {songs} setIndexMainSong={setIndexMainSong} 
                indexMainSong={indexMainSong} audio={audio} mainSong={mainSong}/>

            </div>
        </Grabbable>
    )
}