# smartGO
Never miss your train again!

This app shows updated train times for Metrolinx GO trains in Ontario, Canada.

<img width="534" alt="image" src="https://github.com/user-attachments/assets/3d1884aa-8852-4d89-9776-d96b7d87f9b7">

## Motivation
I created this app to check platform numbers and train length on the fly. Too often I missed the train by taking a minute too long to check the screen for platform number or not accounting for the train being short and needing to run across the platform.

## How it works
This app consumes [smartGO-api](https://github.com/eilayk/smartgo/tree/main), which works by combining scheduled routes from [published GTFS data](https://www.metrolinx.com/en/about-us/open-data) with realtime updates from [Metrolinx's GO API](https://api.openmetrolinx.com/OpenDataAPI/Help).

## Run locally with expo
1. Clone the repository
```bash
git clone https://github.com/eilayk/smartgo-app
```

2. Install dependencies
```bash
cd smartgo-app
npm install
```

3. run with expo
```bash
npm run start
```
