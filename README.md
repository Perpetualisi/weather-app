
# 🌦️ Weather App

A simple and responsive weather app built using **React**. This app allows users to check the current weather conditions for any city around the world, with details such as temperature, humidity, and weather description.

## 🚀 Features

- **Search City**: Users can enter the name of a city to get the weather details.
- **Weather Information**: Displays temperature, humidity, weather conditions, and more.
- **Responsive Design**: Fully mobile-friendly and adaptable to different screen sizes.
- **Live Weather Data**: Fetches real-time weather information from a public API.
- **Error Handling**: Provides a friendly error message when the city is not found or if there’s an issue with the weather data.

## 🛠️ Technologies Used

- **React**: JavaScript library for building the user interface.
- **OpenWeather API**: Used to fetch live weather data.
- **CSS**: For styling the app and making it responsive.

## 🌍 How to Use

1. Clone the repository:

    ```bash
    git clone https://github.com/Perpetualisi/weather-app.git
    cd weather-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the app locally:

    ```bash
    npm run dev
    ```

    After running the command, the app will be available at `http://localhost:3000`.

## 🔗 Live Demo

You can view the live demo of the app here:

[Weather App - Live Demo](https://weather-app-sigma-taupe-59.vercel.app/)

## 🏗️ Project Structure

```
/src
  /components
    /WeatherDisplay.js
    /SearchBar.js
  /assets
  /styles
    /App.css
/public
  index.html
```

- **/components**: Contains React components for displaying weather data and the search bar.
- **/assets**: Stores any images or icons used in the app.
- **/styles**: Contains the global CSS for styling the app.

## 🔧 Configuration

Before using the app, you'll need to obtain an API key from [OpenWeather API](https://openweathermap.org/api) and add it to your `.env` file like this:

```bash
REACT_APP_API_KEY=your-api-key-here
```

## 🤝 Contributing

Contributions are welcome! To contribute to the project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to your branch (`git push origin feature-branch`).
6. Open a pull request.

## 📩 Contact

- **Name**: Okan Perpetual Isi
- **Email**: perpetualokan0@gmail.com
- **Location**: Lagos, Nigeria

## 📝 License

This project is open-source and available under the MIT License.
```
