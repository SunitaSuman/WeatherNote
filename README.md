Link : https://sunitasuman.github.io/WeatherNote/

## Project Documentation

### Project Overview

This project is a web application designed to serve two main purposes:
1. **Note-Taking Application**: Allows users to create, edit, and delete notes. The notes are stored locally in the browser's local storage, ensuring that the user's data persists even after the page is reloaded.
2. **Weather and Tips Display**: Provides users with real-time weather information based on their geographical location and offers clothing or activity tips based on the current temperature.

### Project Structure

The project is structured with HTML, CSS, and JavaScript files:
- `index.html`: The main HTML file that contains the structure of the webpage.
- `style.css`: The CSS file that styles the webpage.
- `script.js`: The JavaScript file that contains the logic for note-taking and weather fetching.

### Key Components and Logic

#### 1. Note-Taking Application

- **HTML Elements**:
  - `notesContainer`: A container element where notes are displayed.
  - `createBtn`: A button to create new notes.
  - `notes`: A collection of note elements.
  - `cursor`: A custom cursor element for visual feedback.

- **JavaScript Functions**:
  - `prevNotes()`: Loads previously saved notes from local storage and displays them.
  - `storeLocal()`: Saves the current state of the notes to local storage.
  - **Event Listeners**:
    - `createBtn.addEventListener("click", ...)`:
      - Creates a new note (`<p>` element) and an eraser icon (`<img>` element) when the "Create Note" button is clicked.
    - `document.addEventListener('mousemove', ...)`:
      - Updates the position of the custom cursor based on mouse movements.
    - `document.addEventListener('click', ...)`:
      - Animates the custom cursor on click.
    - `notesContainer.addEventListener("click", ...)`:
      - Handles the deletion of notes when the eraser icon is clicked.
      - Sets up the `keyup` event listener for notes to save changes to local storage as the user types.

#### 2. Weather and Tips Display

- **Geolocation**:
  - `window.onload`: Requests the user's geolocation to provide weather updates.
  - `navigator.geolocation.getCurrentPosition(success, error)`: Gets the user's current position and calls the `success` function if successful or the `error` function if unsuccessful.

- **Weather Fetching and Display**:
  - `success(position)`: Called when the user's location is successfully retrieved.
    - Extracts the latitude and longitude from the geolocation result.
    - Calls `getWeather(lat, lon)` to fetch weather data.
  - `error()`: Called when there is an error retrieving the user's location.
    - Alerts the user that their location could not be retrieved.
  - `getWeather(lat, lon)`: Fetches weather data from WeatherAPI using the provided latitude and longitude.
    - `displayWeather(data)`: Displays the fetched weather data on the webpage.
    - `provideTips(data)`: Provides clothing or activity tips based on the current temperature.

### HTML Structure

- **Containers**:
  - `.noteSec`: Main section containing the note-taking and weather display features.
  - `#weather`: Container for displaying weather information.
  - `#tips`: Container for displaying weather-based tips.
  - `.wrightNote`: Container for displaying the notes.
  - `.cursor`: Custom cursor element.

### CSS Styling

- **Custom Cursor**:
  - Styled to follow the mouse movements and animate on click.
- **Note Section**:
  - Styled with a background gradient and specific color scheme.
  - Notes are styled to be editable and visually distinct with an eraser icon for deletion.
- **Weather Display**:
  - Styled to display the weather information prominently with associated icons and text.

### Purpose and Benefits

- **Purpose**: The application serves as a personal assistant, allowing users to keep track of important information through notes and receive real-time weather updates along with practical tips.
- **Benefits**:
  - **Persistent Notes**: Notes are saved locally, ensuring they persist across page reloads.
  - **Real-Time Weather Updates**: Users receive immediate weather information based on their current location.
  - **Practical Tips**: The application provides actionable tips based on the current weather, enhancing user experience.

By integrating note-taking with weather updates and practical tips, this project aims to enhance productivity and convenience for users in their daily lives.
