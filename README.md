
# Radio Web App

This is a simple web application that allows users to listen to live radio streams, control volume and speed, and change the background color of the webpage. The project consists of HTML, CSS, and JavaScript code to implement the functionality and user interface.

## Features

- **Live Radio Streaming**: Users can listen to various radio stations by selecting a station. The app includes several predefined radio URLs.
- **Play/Pause Control**: Users can start or stop the audio stream with a play/pause button.
- **Next/Previous Station**: Users can navigate through different radio stations using next and back buttons.
- **Volume Control**: Users can adjust the audio volume using a slider.
- **Speed Control**: Users can change the playback speed of the radio stream.
- **Background Color Change**: Users can change the background color of the webpage by selecting different color themes.

## Technologies Used

- **HTML**: Markup language for structuring the content of the webpage.
- **CSS**: Stylesheet used for designing the layout and improving the UI.
- **JavaScript**: Used for adding interactivity and dynamic content on the webpage.

## Installation

To run this project locally on your machine, follow these steps:

1. **Clone the repository** or download the project files.
   ```bash
   git clone https://github.com/yourusername/radio-web-app.git
   ```
Navigate to the project directory:

cd radio-web-app
Open the index.html file in your browser to start using the radio web app.

File Structure
index.html: The main HTML file containing the structure and layout of the app.
files/css/styl.css: The CSS file that defines the styles for the webpage, including layout, color schemes, and button designs.
files/js/radio.js: JavaScript file handling the radio station logic, including play/pause, next/back navigation, and saving the current station state in localStorage.
files/js/color.js: JavaScript file managing the background color change feature of the page.
How It Works
HTML (index.html)
The HTML file provides the basic structure of the app. It includes the audio element, buttons for play/pause, next/back, and controls for volume and speed adjustment. Additionally, it includes buttons for changing the background color.

CSS (files/css/styl.css)
The CSS file is responsible for styling the app. It defines the layout of the elements, buttons, and input fields. It also sets background colors and hover effects to improve user interaction.

JavaScript (files/js/radio.js and files/js/color.js)
radio.js: This file handles the core functionality of the radio app. It provides the logic for controlling the playback of the radio stream, navigating between stations, and updating the audio element's src.
color.js: This file handles the background color change functionality. It allows users to select different color schemes for the background and stores the selection in localStorage to persist the user's choice across sessions.
Features in Detail
1. Radio Station Control
The app allows users to listen to multiple live radio stations. The stations are predefined in the JavaScript file. Users can switch between stations using the "Next" and "Back" buttons.

2. Volume Control
The user can adjust the volume of the audio stream using a volume slider. The slider's value is stored and applied to the audio element to control the volume.

3. Speed Control
Users can change the playback speed of the radio stream using a speed slider. This adjusts the playbackRate property of the audio element, allowing for faster or slower playback.

4. Background Color Change
The app includes buttons that allow users to change the background color of the webpage. The colors are stored in localStorage so the user's preference is retained when they revisit the page.

Example Usage
Click the Play button to start listening to the current radio station.
Use the Next and Back buttons to switch between stations.
Adjust the Volume slider to control the audio volume.
Use the Speed slider to change the playback speed of the radio stream.
Change the Background Color by clicking on one of the color buttons.
Credits
Radio Stations: The radio URLs used in this project are publicly available streaming links.
Icons: The play, pause, next, and back buttons use custom images (.png files) stored in the files/img directory.
License
This project is open source and available under the MIT License. See the LICENSE file for more information.

