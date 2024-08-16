
const API_URL = "https://smartgo-api-uqyusptska-uc.a.run.app/api";

const stops = `${API_URL}/stops`;
const getRoutesForStop = (stopId: string) => `${API_URL}/route/stop/${stopId}`;
const getStopTimes = (routeId: string, stopId: string, date: string, time: string) => `${API_URL}/route/${routeId}/stop/${stopId}?day=${date}&time=${time}`;

export const endpoints = { stops, getRoutesForStop, getStopTimes };