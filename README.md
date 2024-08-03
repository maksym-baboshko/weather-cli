# Weather CLI

A simple command-line interface (CLI) to fetch and display weather information for a specified city using the OpenWeatherMap API.

<img width="472" alt="Screenshot 2024-08-04 011741" src="https://github.com/user-attachments/assets/cc9453ad-601c-4daa-840a-3457aeace597">

## Installation

Install the package globally via npm:

```bash
npm i -g @exym/weather
```

## Features

- Display the current weather forecast for a specified city.
- Save your API key securely.
- Save your preferred city for quick weather updates.

## Prerequisites

To use this utility, you need to have:

1. A free API key from [OpenWeatherMap](https://openweathermap.org/api).

## Commands

- `weather -h` - Display the help message
- `weather -t <API_KEY>` - Save the API key
- `weather -c <CITY_NAME>` - Save the city name
- `weather` - Display the weather forecast for the saved city.
