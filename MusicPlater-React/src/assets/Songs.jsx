

export function Songs({songs, setIndexMainSong}){
    
    const setNewMainSong = (index) =>{
        setIndexMainSong(index)
    }
    
    return (
        <div className="songs-grid">
            {songs.map((song,index)=>{
                return(
                    <div key={song.id} className="song-container">
                        <button className="btn-repSong" onClick={()=>{
                            setNewMainSong(index)
                            }}>
                            <img src={song.image} className="song-image"/>
                            <h3 className="song-name">{song.name}</h3>
                        </button>
                    </div>
                );
            })}
        </div>
    )
}

