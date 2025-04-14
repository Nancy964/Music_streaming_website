console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/chithyaan.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Chithiyaan - Karan Aujla", filePath: "songs/chithyaan.mp3", coverPath: "covers/chithyaan.jpeg"},
    {songName: "Hair - Karan Aujla", filePath: "songs/Hair.mp3", coverPath: "covers/hair.jpeg"},
    {songName: "Humko humise chura lo", filePath: "songs/Humko Humise Chura Lo i.mp3", coverPath: "covers/humko humise chura lo.jpeg"},
    {songName: "Kaho Naa pyaar hai - Udit Narayan", filePath: "songs/Kaho Naa Pyaar Hai .mp3", coverPath: "covers/khao na pyar hai.jpeg"},
    {songName: "Khoobsurat - Sachin-jigar", filePath: "songs/Khoobsurat .mp3", coverPath: "covers/khoobsurat.jpeg"},
    {songName: "Kyonki itna pyaar - Udit Narayan", filePath: "songs/Kyon Ki Itna Pyar .mp3", coverPath: "covers/kyon ki.jpeg"},
    {songName: "Mahila Mittar - Masoom sharma", filePath: "songs/Mahila Mittar.mp3", coverPath: "covers/Mahila mittar.jpeg"},
    {songName: "pagal - Gurnam bhullar", filePath: "songs/Pagal.mp3", coverPath: "covers/pagal.jpeg"},
    {songName: "Rangeen - Gurnam bhullar", filePath: "songs/Rangeen.mp3", coverPath: "covers/rangeen.jpeg"},
    {songName: "Rim vs Jhanjar - karan Aujla", filePath: "songs/RIM vs JHANJAR.mp3", coverPath: "covers/rim.jpeg"}
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath; // Use the correct file path
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= songs.length - 1){ 
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath; 
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath; 
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})