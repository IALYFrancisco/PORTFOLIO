const images = ['image/DSC_0007.JPG','image/DSC_0409.JPG','image/IMG_0891.jpeg'];
const img = document.querySelector('img');
var counter = 0;

setInterval(function(){
    
    img.setAttribute('src', images[counter]);

    counter++;

    if(counter==images.length) {
        counter = 0;
    }

}, 2000);
