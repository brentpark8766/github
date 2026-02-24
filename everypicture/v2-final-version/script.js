(function() {

    "use strict";
    console.log("reading js");

    const img = document.querySelector("img")
    const title = document.querySelector("#title");
    const story = document.querySelector(".story");

    // array stores all the elements that get changed through the function
    const artworks = [
        {src: "images/cartoon.jpg", title: "The Medley", story: "The artwork to represent the start of my journey, and one that captures the childhood energy of colorful doodles and playful characters."}, 
        {src: "images/mononoke.jpg", title: "Mononoke", story: "A shift into structured imagination. My use of color dissipates, signaling the change to a mature study of achromatic shading."}, 
        {src: "images/rose.jpg", title: "Severance", story: "The work that marks my commitment to precise realism. Detailed observations clash with creativity, and technique becomes the focus."}, 
        {src: "images/figure.jpg", title: "Study of Form", story: "This piece represents the peak of my matured study in studio art. My artistic development prioritizes form, proportions, and texture over imagination."}, 
        {src: "images/watercolor.jpg", title: "Metamorphosis", story: "A return to what was once a colorful palette and playful compostions. This painting completes the cycle of my artistic style."}
    ];

    let current = 0;
    let startTimer = false;

    // function that allows mouse position to focus the artwork
    img.addEventListener("mousemove", (e) => {
        // get the positional elements 
        const position = img.getBoundingClientRect();

        const centerX = position.left + position.width / 2;
        const centerY = position.top + position.height / 2;

        const mouseDistanceX = e.clientX - centerX;
        const mouseDistanceY = e.clientY - centerY;
        
        // find distance of mouse from center
        const distance = Math.hypot(mouseDistanceX, mouseDistanceY);

        // find largest possible distance from center
        const maxDistance = Math.hypot(position.width / 2, position.height / 2);

        // converts distance to a percentage of max distance to use as a scale
        const percentage = Math.min(distance / maxDistance, 1);
        
        // calculate how much to blur image based on distance calcs
        const blurValue = percentage * 14
        img.style.filter = `blur(${blurValue}px)`;

        // function that integrate the element change once the image is focused
        if (blurValue < 1 && !startTimer) {
            startTimer = true;

            setTimeout (function () {
                // goes through the array and ensures cycle loop
                current = (current + 1) % artworks.length;

                // change elements
                img.src = artworks[current].src;
                title.textContent = artworks[current].title;
                story.textContent = artworks[current].story;

                // reset blur and timer
                img.style.filter = "blur(14px)";
                startTimer = false;
            }, 5000); 
        }
    });

}());