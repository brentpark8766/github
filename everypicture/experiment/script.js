(function() {

    "use strict";
    console.log("reading js");

    const img = document.querySelector("img")

    img.addEventListener("mousemove", (e) => {
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
        
        img.style.filter = `blur(${percentage * 14}px)`;
    });

}());