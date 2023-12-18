const title = document.getElementById('music-title'),
  artist = document.getElementById('music-artist'),
  currentTimeEl = document.getElementById('current-time'),
  durationEl = document.getElementById('duration'),
  progress = document.getElementById('progress'),
  playerProgress = document.getElementById('player-progress'),
  prevBtn = document.getElementById('prev'),
  nextBtn = document.getElementById('next'),
  playBtn = document.getElementById('play'),
  background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
  {
    path: 'assets/1.wav',
    displayName: 'Hoy - Nadie espera',
    cover: 'assets/atomicos.png',
    artist: 'Atomicos',
  },
  {
    path: 'assets/2.wav',
    displayName: 'Otra noche',
    cover: 'assets/atomicos.png',
    artist: 'Atomicos',
  },
  {
    path: 'assets/3.wav',
    displayName: 'Pasan',
    cover: 'assets/atomicos.png',
    artist: 'Atomicos',
  },
  {
    path: 'assets/4.wav',
    displayName: 'Buena suerte',
    cover: 'assets/atomicos.png',
    artist: 'Atomicos',
  },
  {
    path: 'assets/5.wav',
    displayName: 'Amanece',
    cover: 'assets/atomicos.png',
    artist: 'Atomicos',
  },
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function playMusic() {
  isPlaying = true;
  // Change play button icon
  playBtn.classList.replace('fa-play', 'fa-pause');
  // Set button hover title
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

function pauseMusic() {
  isPlaying = false;
  // Change pause button icon
  playBtn.classList.replace('fa-pause', 'fa-play');
  // Set button hover title
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    cover.src = song.cover;
    background.src = song.cover;
  }
  

function changeMusic(direction) {
  musicIndex = (musicIndex + direction + songs.length) % songs.length;
  loadMusic(songs[musicIndex]);
  playMusic();
}

function playNextMusic() {
    changeMusic(1);
    playMusic();
  }
  
  function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  
    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
  }
  
  function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
  }
  
  playBtn.addEventListener('click', togglePlay);
  prevBtn.addEventListener('click', () => changeMusic(-1));
  nextBtn.addEventListener('click', () => changeMusic(1));
  music.addEventListener('ended', playNextMusic);
  music.addEventListener('timeupdate', updateProgressBar);
  playerProgress.addEventListener('click', setProgressBar);
  
  loadMusic(songs[musicIndex]);
  
