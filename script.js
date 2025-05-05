let songs = [
  {
    songName: "Kesariya",
    filePath: "./Song/song1.mp3",
    coverPath: "./image/image1.jpg",
    timestamp: "4:28",
  },
  {
    songName: "Besharam Rang",
    filePath: "./Song/song2.mp3",
    coverPath: "./image/image2.jpg",
    timestamp: "4:18",
  },
  {
    songName: "Srivalli",
    filePath: "./Song/song3.mp3",
    coverPath: "./image/image3.jpg",
    timestamp: "3:44",
  },
  {
    songName: "Chaleya",
    filePath: "./Song/song4.mp3",
    coverPath: "./image/image4.jpg",
    timestamp: "3:20",
  },
  {
    songName: "Not Ramaiya Vastavaiya",
    filePath: "./Song/song5.mp3",
    coverPath: "./image/image5.jpg",
    timestamp: "3:22",
  },
  {
    songName: "Ishq Jaisa Kuch",
    filePath: "./Song/song6.mp3",
    coverPath: "./image/image6.jpg",
    timestamp: "2:49",
  },
  {
    songName: "Apna Bana Le",
    filePath: "./Song/song7.mp3",
    coverPath: "./image/image7.jpg",
    timestamp: "4:21",
  },
  {
    songName: "Tum Kya Mile",
    filePath: "./Song/song8.mp3",
    coverPath: "./image/image8.jpg",
    timestamp: "4:37",
  },
  {
    songName: "Jhoome Jo Pathaan",
    filePath: "./Song/song9.mp3",
    coverPath: "./image/image9.jpg",
    timestamp: "3:28",
  },
  {
    songName: "Main Nikla Gaddi Leke",
    filePath: "./Song/song10.mp3",
    coverPath: "./image/image10.jpg",
    timestamp: "3:50",
  },
  {
    songName: "Tere Pyaar Mein",
    filePath: "./Song/song11.mp3",
    coverPath: "./image/image11.jpg",
    timestamp: "4:26",
  },
  {
    songName: "Fitoor (Shamshera)",
    filePath: "./Song/song12.mp3",
    coverPath: "./image/image12.jpg",
    timestamp: "5:08",
  },
  {
    songName: "Daku",
    filePath: "./Song/song13.mp3",
    coverPath: "./image/image13.jpg",
    timestamp: "2:11",
  },
  {
    songName: "Kya Loge Tum",
    filePath: "./Song/song14.mp3",
    coverPath: "./image/image14.jpg",
    timestamp: "3:53",
  },
  {
    songName: "Baarish Ban Jaana",
    filePath: "./Song/song15.mp3",
    coverPath: "./image/image15.jpg",
    timestamp: "3:20",
  },
  {
    songName: "Lut Gaye",
    filePath: "./Song/song16.mp3",
    coverPath: "./image/image16.jpg",
    timestamp: "3:48",
  },
  {
    songName: "Raatan Lambiyan",
    filePath: "./Song/song17.mp3",
    coverPath: "./image/image17.jpg",
    timestamp: "3:50",
  },
  {
    songName: "Mann Bharryaa 2.0",
    filePath: "./Song/song18.mp3",
    coverPath: "./image/image18.jpg",
    timestamp: "4:26",
  },
  {
    songName: "Meri Zindagi Hai Tu",
    filePath: "./Song/song19.mp3",
    coverPath: "./image/image19.jpg",
    timestamp: "4:44",
  },
  {
    songName: "Tu Hai Kahan",
    filePath: "./Song/song20.mp3",
    coverPath: "./image/image20.jpg",
    timestamp: "4:23",
  },
  {
    songName: "Ratiyaan",
    filePath: "./Song/song21.mp3",
    coverPath: "./image/image21.jpg",
    timestamp: "2:55",
  },
  {
    songName: "Galliyan Returns",
    filePath: "./Song/song22.mp3",
    coverPath: "./image/image22.jpg",
    timestamp: "5:50",
  },
  {
    songName: "Phir Aur Kya Chahiye",
    filePath: "./Song/song23.mp3",
    coverPath: "./image/image23.jpg",
    timestamp: "4:26",
  },
  {
    songName: "O Maahi",
    filePath: "./Song/song24.mp3",
    coverPath: "./image/image24.jpg",
    timestamp: "3:53",
  },
  {
    songName: "Deva Deva",
    filePath: "./Song/song25.mp3",
    coverPath: "./image/image25.jpg",
    timestamp: "4:39",
  },
];
document.addEventListener("DOMContentLoaded", () => {
  let songIndex = 0;
  let audioElement = new Audio(songs[songIndex].filePath);
  let masterPlay = document.getElementById("masterPlay");
  let myProgressBar = document.getElementById("myProgressBar");
  let gif = document.getElementById("gif");
  let masterSongName = document.getElementById("masterSongName");
  let songItems = Array.from(document.getElementsByClassName("songItem"));

  if (masterSongName) {
    masterSongName.innerText = songs[songIndex].songName;
  }

  songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element.getElementsByClassName("timestamp")[0].innerHTML = `
        <span class="songlistplay">${songs[i].timestamp}</span>
        <i class="fas fa-play-circle songItemPlay" id="${i}"></i>`;
  });

  const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    });
  };

  const updateCurrentSongButton = () => {
    const currentSongButton = document.getElementById(songIndex);
    if (currentSongButton) {
      makeAllPlays();
      currentSongButton.classList.remove("fa-play-circle");
      currentSongButton.classList.add("fa-pause-circle");
    }
  };

  Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
      const clickedIndex = parseInt(e.target.id);
      
      if (clickedIndex === songIndex && !audioElement.paused) {
        audioElement.pause();
        makeAllPlays();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
      } else {
        songIndex = clickedIndex;
        makeAllPlays();
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
      }
    });
  });

  masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
      updateCurrentSongButton();
      gif.style.opacity = 1;
    } else {
      audioElement.pause();
      masterPlay.classList.remove("fa-pause-circle");
      masterPlay.classList.add("fa-play-circle");
      makeAllPlays();
      gif.style.opacity = 0;
    }
  });

  const scrollToCurrentSong = () => {
      const currentSongElement = document.getElementById(songIndex).closest('.songItem');
      if (currentSongElement) {
        currentSongElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    document.getElementById("next").addEventListener("click", () => {
      if (songIndex >= songs.length - 1) {
        songIndex = 0;
      } else {
        songIndex += 1;
      }
      audioElement.src = songs[songIndex].filePath;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      updateCurrentSongButton();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
      gif.style.opacity = 1;
      scrollToCurrentSong();
    });

    document.getElementById("previous").addEventListener("click", () => {
      if (songIndex <= 0) {
        songIndex = songs.length - 1;
      } else {
        songIndex -= 1;
      }
      audioElement.src = songs[songIndex].filePath;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      updateCurrentSongButton();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
      gif.style.opacity = 1;
      scrollToCurrentSong();
    });

  audioElement.addEventListener("timeupdate", () => {
    let progress = parseInt(
      (audioElement.currentTime / audioElement.duration) * 100
    );
    myProgressBar.value = progress;
  });

  myProgressBar.addEventListener("change", () => {
    audioElement.currentTime =
      (myProgressBar.value * audioElement.duration) / 100;
  });
});
