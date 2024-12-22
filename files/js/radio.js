// Station Class: Manages the radio station controls, playback, and navigation
class sation {
    constructor() {
        // Initialize elements related to station name, audio, and controls
        this.sation_N = document.getElementById("sation_N"); // Element to display the current station name
        this.audiosrc = document.getElementById("audiosrc"); // Audio element for playing radio streams
        this.play_P; // Variable to track whether the audio is playing or paused
        this.play1 = document.getElementById("play"); // Play/Pause button
        this.play1.addEventListener("click", () => {
            this.play_pause(); // Call play/pause function when play button is clicked
        });
        
        // Initialize next button to move to the next station
        this.next = document.getElementById("next");
        this.next.addEventListener("click", () => {
            if (this.count < this.radio.length - 1) {
                ++this.count; // Increment count to move to the next station
                this.play_P = false; // Set play to false to pause before changing station
            } else {
                this.count = 0; // Reset to the first station when reaching the end
            }
            localStorage.setItem("save_sta", this.count); // Save the current station index to localStorage
            this.radio_src(); // Update the station source and name
        });

        // Initialize back button to move to the previous station
        this.back = document.getElementById("back");
        this.back.addEventListener("click", () => {
            if (this.count > 0) {
                --this.count; // Decrement count to move to the previous station
                this.play_P = false; // Set play to false to pause before changing station
            } else {
                this.count = this.radio.length - 1; // Reset to the last station when at the beginning
            }
            localStorage.setItem("save_sta", this.count); // Save the current station index to localStorage
            this.radio_src(); // Update the station source and name
        });

        // Array of radio station URLs
        this.radio = [];

        this.radio[3] = `https://webradio.tda.dz/Coran_64K.mp3`; // Quran Algeria
        this.radio[4] = `https://n02.radiojar.com/0tpy1h0kxtzuv`; // Quran Radio KSA
        this.radio[5] = `https://radio.garden/api/ara/content/listen/GQxvGBNK/channel.mp3?1734906629557`; // Quran Kreem  Egypt 
        this.radio[6] = `https://quran-radio.org:8444/;?type=http&amp;nocache=19`; //  Quran Radio Flastine
        this.radio[7] = `https://stream.radiojar.com/4wqre23fytzuv`; // Quran Radio Makkah
        this.radio[0] = `https://live.radiomasr.net/RADIOMASR`; // Radio Masr
        this.radio[1] = `http://178.32.62.154:8957/;stream.mp3`; // Cairo Radio
        this.radio[2] = `https://ice1.securenetsystems.net/DEMOSTN?playSessionID=BFBD4522-20F6-4552-B7AF875B6804B574`; // Nogoum FM

        // Array of station names
        this.radio_N = [];
        this.radio_N[3] = `Quran Kreem Algeria`; // Quran Algeria
        this.radio_N[4] = `Quran Kreem KSA`; // Quran Radio KSA
        this.radio_N[5] = `Quran Kreem  Egypt `; // Quran Kreem  Egypt
        this.radio_N[6] = `Quran Radio Flastine `; // Quran Radio Flastine
        this.radio_N[7] = `Quran Kreem Makkah`; // Quran Kreem Makkah
        this.radio_N[0] = `راديو مصر`; // Radio Masr
        this.radio_N[1] = `القاهره`; // Cairo Radio
        this.radio_N[2] = `نجوم FM`; // Nogoum FM

        // Initialize station index (starting at 0)
        this.count = 0;

        // Call radio source function to set initial station on page load
        this.radio_src();
        this.play_pause(); // Start with play/pause function in the correct state
    }

    // Function to update the radio source (stream URL) and station name
    radio_src() {
        if (localStorage.getItem("save_sta") != null) {
            this.count = localStorage.getItem("save_sta"); // Load station index from localStorage
        }
        this.audiosrc.src = this.radio[this.count]; // Set the audio source to the selected station URL
        this.sation_N.innerHTML = this.radio_N[this.count]; // Update the displayed station name

        // Call play/pause function to ensure the audio is either playing or paused based on state
        this.play_pause();
    }

    // Function to toggle play and pause of the radio stream
    play_pause() {
        if (this.play_P == false) {
            this.play1.src = "./files/img/pause.png"; // Change play button icon to "pause"
            this.audiosrc.play(); // Start playing the radio stream
            this.play_P = true; // Set play state to true
        } else {
            this.play1.src = "./files/img/play.png"; // Change play button icon to "play"
            this.audiosrc.pause(); // Pause the radio stream
            this.play_P = false; // Set play state to false
        }
    }
}

// Initialize the sation class when the page is loaded
onload = new sation();
