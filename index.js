window.addEventListener("keydown", function(e) {
    // console.log(e);
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const soundPad = this.document.querySelector(`.soundPad[data-key="${e.keyCode}"]`);
    // console.log("soundpad", soundPad);
    if (!audio) return;
    audio.currentTime = -1;
    audio.play();

    soundPad.classList.add("playing");
    // this.setTimeout(function() {
    //     soundPad.classList.remove("playing");
    // }, 2);



    function removeTransition(e) {
        // console.log(e);
        if (e.propertyName !== "transform") return;
        this.classList.remove("playing");
    }

    const soundPads = this.document.querySelectorAll(".soundPad");
    soundPads.forEach((pads) => {
        pads.addEventListener("transitionend", removeTransition)
    })



})