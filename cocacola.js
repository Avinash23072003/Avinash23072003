function toggleBackgroundColor() {
    var body = document.body;
    var currentColor = window.getComputedStyle(body).backgroundColor;
    
    if (currentColor === 'rgb(255, 255, 255)') {
        // If the background color is white, change it to a different color
        body.style.backgroundColor = 'black';
    } else {
        // If the background color is not white, change it to white
        body.style.backgroundColor = 'white';
    }
}
