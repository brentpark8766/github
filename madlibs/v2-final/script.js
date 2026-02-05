(function() {

    "use strict";
    console.log("reading js");

    const form = document.querySelector("#form");
    const madlibs = document.querySelector("#destiny");
    const title = document.querySelector("#title");
    const btn = document.querySelector(".retry");
    const error = document.querySelector("#error");

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const adj = document.querySelector("#adj").value;
        const noun1 = document.querySelector("#noun1").value;
        const job = document.querySelector("#job").value;
        const place = document.querySelector("#place").value;
        const food = document.querySelector("#food").value;
        const noun2 = document.querySelector("#noun2").value;
        const name = document.querySelector("#name").value;
        const noun3 = document.querySelector("#noun3").value;
        const color = document.querySelector("#color").value;

        let story;
        let userError;

        error.textContent = "";

        if (adj == "") {
            userError = "You must input an Adjective";
            document.querySelector("#adj").focus();
        }

        else if (noun1 == "") {
            userError = "You must input a Noun";
            document.querySelector("#noun1").focus();
        }

        else if (job == "") {
            userError = "You must input a Job";
            document.querySelector("#job").focus();
        }

        else if (place == "") {
            userError = "You must input a Place";
            document.querySelector("#place").focus();
        }

        else if (food == "") {
            userError = "You must input a Food";
            document.querySelector("#food").focus();
        }

        else if (noun2 == "") {
            userError = "You must input another Noun";
            document.querySelector("#noun2").focus();
        }

        else if (name == "") {
            userError = "You must input a Name";
            document.querySelector("#name").focus();
        }

        else if (noun3 == "") {
            userError = "You must input another Noun";
            document.querySelector("#noun3").focus();
        }

        else if (color == "") {
            userError = "You must input a Color";
            document.querySelector("#color").focus();
        }

        else {
            story = `The world you know is ${adj}. It is built on ${noun1}, carefully designed to comfort you. You work as a ${job}, living in a ${place}, eating ${food}, without question. But something feels off. The room goes silent. In front of you sits a ${noun2}, quietly humming, relaxed. It begins, "You've felt it your whole life, ${name}." He then offers, "The blue choice lets you return to the world you know. The red choice shows you the true ${noun3}. Which will it be?" The screen glitches, you pause, and reach out. You choose ${color}. The system makes it clear: There is no going back.`;

            const textFields = document.querySelectorAll("input[type=text]");

            for (let i = 0; i < textFields.length; i++) {
                textFields[i].value = "";
            }

            document.body.classList.add("output")
            title.textContent = "Your Chosen Path"

            madlibs.textContent = story

        }

        error.textContent = userError;

    });

    btn.addEventListener("click", function() {

        document.body.classList.remove("output");

        title.textContent = "Enter Your Destiny";

        error.textContent = "";

        document.querySelector("#adj").focus();

    });

}());