import { useState } from "react";



export function MusicInfo({mainSong, audio, progressWidth}){
    
    function formatTime(sec) {
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    }

    function setProgress(event){
        if(!audio.current)
            return;

        const widthContainer = event.currentTarget.clientWidth;
        const clickWidth = event.nativeEvent.offsetX
        audio.current.currentTime = (clickWidth/widthContainer)* audio.current.duration
    }




    

    return ( 
        <>
        <div className="music-info">
                <h4 id="title">{mainSong.name}</h4>
                <div className="progressBar-area">
                    <div className="progress-container" onClick={(event) => setProgress(event)}>
                        <div className="progress" style={{width: `${progressWidth}%`}} ></div>
                    </div>
                    <div className="duration">
                        {audio.current && audio.current.duration && audio.current.currentTime ?
                        `${formatTime(audio.current.currentTime)} / ${formatTime(audio.current.duration)}` :'0:00 / 0:00'}</div>
                </div>
            </div>
        </>
    )
}