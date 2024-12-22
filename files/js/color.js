// Color Class: Manages the background color change of the body
class color {
    constructor() {
        // Initialize color elements (color buttons)
        this.color1 = document.getElementById("color1");
        this.color2 = document.getElementById("color2");
        this.color3 = document.getElementById("color3");
        this.color4 = document.getElementById("color4");

        // Event listeners for color buttons to change background color
        this.color1.addEventListener("click", () => {
            this.body_color("colorB1"); // Set background color to colorB1
        });

        this.color2.addEventListener("click", () => {
            this.body_color("colorB2"); // Set background color to colorB2
        });

        this.color3.addEventListener("click", () => {
            this.body_color("colorB3"); // Set background color to colorB3
        });

        this.color4.addEventListener("click", () => {
            this.body_color("colorB4"); // Set background color to colorB4
        });

        // If no color preference is saved, set default background to black
        if (localStorage.getItem("ba_gr") == null) {
            document.body.style.background = "black";
        }

        // Set the body background color to the saved preference (if any)
        this.body_color(localStorage.getItem("ba_gr"));
    }

    // Function to change body background color based on selected color
    body_color(color) {
        if (color == "colorB1") {
            document.body.style.background = "rgba(90, 47, 99, 0.86)"; // Purple color
        } else if (color == "colorB2") {
            document.body.style.background = "#162131"; // Dark blue
        } else if (color == "colorB3") {
            document.body.style.background = "#080808"; // Black
        } else if (color == "colorB4") {
            document.body.style.background = "#eff1f1cc"; // Light gray
        }

        // Save the selected background color in localStorage
        localStorage.setItem("ba_gr", color);
    }
}

// Initialize the color class and apply the selected color on page load
onload = new color();

// Volume_r Class: Manages the audio volume control
class Volume_r {
    constructor() {
        // Get the audio element
        this.audiosrc = document.getElementById("audiosrc");

        // Set initial volume to 50% on page load
        var valume1 = document.getElementById("volume");
        this.audiosrc.volume = 50 / 100;

        // Event listener to adjust the volume when the slider value changes
        valume1.addEventListener("change", () => {
            this.audiosrc.volume = valume1.value / 100; // Set audio volume to slider value
        });
    }
}

// Initialize the Volume_r class and handle volume control
onload = new Volume_r();

// valume_p Class: Manages the playback speed control for the audio
class valume_p {
    constructor() {
        // Get the audio element
        this.audiosrc = document.getElementById("audiosrc");

        // Get the playback speed control slider
        var speed1 = document.getElementById("Speed");

        // Event listener to change the playback speed when the slider value changes
        speed1.addEventListener("change", () => {
            this.audiosrc.playbackRate = speed1.value / 100; // Set playback speed to slider value
        });
    }
}

// Initialize the valume_p class to handle playback speed control
onload = new valume_p();

// player Class: Manages the player layout adjustments based on screen width
class player {
    constructor() {
        // Get the main container element
        this.main = document.getElementById("main");

        // If the screen width is less than 500px (mobile size), adjust the width of the main container
        if (screen.width < 500) {
            main.style.width = screen.width + "px"; // Set the width of the main container to the screen width
        }
    }
}

// Initialize the player class to handle responsive layout
onload = new player();
