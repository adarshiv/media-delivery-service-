window.onload = () => {
    const myAudio = document.getElementById("my-audio");
    const myControl = document.getElementById("my-control");

    function switchState() {
        if (myAudio.paused) {
            myAudio.play();
            myControl.textContent = "pause";
        } else {
            myAudio.pause();
            myControl.textContent = "play";
        }
    }

    function checkKey(e) {
        if (e.keycode === 32) {
            // space bar
            switchState();
        }
    }

    myControl.addEventListener(
        "click",
        () => {
            switchState();
        },
        false,
    );

    window.addEventListener("keypress", checkKey, false);
};