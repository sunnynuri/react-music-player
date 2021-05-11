import React, { useState , useRef } from "react";

// adding components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
// import data
import data from "./data";


// importing style sheets
import "./styles/app.scss";

function App() {
  const audioRef = useRef(null);

  // states

  const [songs, setSongs] = useState(data());

  // state for current song
  const [currentSong, setCurrentSong] = useState(songs[0]);

  // state for song is playing or not

  const [isPlaying, setIsPlaying] = useState(false);

  // state for toggle library
  const [libraryStatus , setLibraryStatus] = useState(false)

  //song info handler
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  // time update handler
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };
  // setting values to change songs
  // let index = songs.indexOf(currentSong);
  // let item, nextItem;

  // function for getting next song
  // const nextSongHandler = () => {
  //   // let index
    // let item
    // , value=songs.indexOf(currentSong) ,nextItem;
    // // getting value
    // // console.log("value",value)
    //     index = value;
    // getting index
    // console.log("index",index)

    // if (index >= 0 && index < songs.length - 1) nextItem = songs[index + 1];
    // item = songs.indexOf(nextItem);

    // getting item
    // console.log("item", item)
    // setCurrentSong(songs[item]);

    // getting nextItem
    // console.log("nextitem",nextItem)
  // };

  //  function for getting previous song
  // const previousSongHandler = () => {
  //   //   let index =songs.indexOf(currentSong)
  //   // let item ,nextItem;
  //   if (index >= 0 && index < songs.length - 1) {
  //   }
  //   nextItem = songs[index - 1];
  //   item = songs.indexOf(nextItem);
  //   setCurrentSong(songs[item]);
  //   console.log(item);
  // };

  // to take out random song from the list use below state
  // const [currentSong, setcurrentSong] = useState(songs[Math.floor(Math.random() * songs.length)]);

  const onEndHandler= async()=>{
    let currentIndex = songs.findIndex((song)=> song.id === currentSong.id);
      await setCurrentSong(songs[(currentIndex + 1) % songs.length] )
      if(isPlaying) audioRef.current.play()
  }

  return (
    <div className={`App ${libraryStatus ? 'library-active': ' '}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        // previousSongHandler={previousSongHandler}
        // nextSongHandler={nextSongHandler}
        audioRef={audioRef}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
  setSongInfo={setSongInfo}
  songs={songs}
  setCurrentSong={setCurrentSong}
  setSongs={setSongs}

 
      />
      <Library songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs} libraryStatus={libraryStatus}/>
      <audio
          onTimeUpdate={timeUpdateHandler}
          onLoadedMetadata={timeUpdateHandler}
          ref={audioRef}
          src={currentSong.audio}
          onEnded={onEndHandler}
        ></audio>
    
    </div>
  );
}

export default App;
