document.body.addEventListener('keyup', (event)=>{
        playSound(event.code.toLocaleLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;
    if(song !== ''){
        let song_Array = song.split('');
        playComposition(song_Array);
    }
});


function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);
    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }
    if(keyElement){
        keyElement.classList.add('active');
        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }
}

function playComposition(song_Array){
    let wait = 0;

    for(let songItem of song_Array){

        setTimeout(() =>{

            playSound(`key${songItem}`);

        }, wait);
        wait +=250;

        
    }
}