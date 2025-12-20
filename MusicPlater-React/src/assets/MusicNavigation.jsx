import { useEffect, useState} from "react"

export function MusicNavigation({indexMainSong, setIndexMainSong, songs, audio, mainSong}){
    const [isPlaying, setIsPlaying] = useState(false)
    const [firstRender, setfirstRender] = useState(true);
    const [repeat, setRepeat] = useState(false);
 


    const playClick = () => {
        if (!audio.current)
            return;

        if (audio.current.paused) {
            audio.current.play()
            setIsPlaying(true);
        } else {
            audio.current.pause();
            setIsPlaying(false);
        }

        setfirstRender(false);
    };

    const prev = async () =>{
        const prev = (indexMainSong == 0) ? songs.length-1 : indexMainSong-1 
        setIndexMainSong(prev)
    }

    const next = async () =>{
        const nextIndex = (indexMainSong == songs.length -1) ? 0 : indexMainSong + 1
        setIndexMainSong(nextIndex);
    }


    const repeatItself = () =>{
        if (!audio.current)
            return;

        setRepeat(!repeat);
    }


    useEffect(() => {
        if(firstRender)
            return;

        playClick();
    }, [mainSong]);


    useEffect(() => {
        if (!audio.current)
            return;

        audio.current.loop = repeat;
    }, [repeat]);

    

    
    return (
        <>
            <div className="img-container">
                <img src={mainSong.image} alt="music-cover" id="cover" />
            </div>

            <div className="navigation">
                <button id="prev" className="action-btn" onClick={prev}>
                    <i className="fas fa-backward"></i>
                </button>

                <button id="play"  className="action-btn action-btn-big" onClick={playClick}>
                    <i className={`fas ${isPlaying ? 'fa-pause':'fa-play'}`}></i>
                </button>


                <button id="next" className="action-btn" onClick={next}>
                    <i className="fas fa-forward"></i>
                </button>

                <button id="repeat" className={`action-btn ${repeat ? 'btnON':''}`} onClick={repeatItself}>
                    <i className="fas fa-repeat" onClick={repeatItself}></i>
                </button>
            </div>
        </>
    )
}