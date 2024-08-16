import { endpoints } from "./endpoints";
import { Route, Stop, StopTimeResponse } from "./models";

export const getStops = async (): Promise<Stop[]> => {
    let resp = await fetch(endpoints.stops);
    const stops: Stop[] = await resp.json();
    return stops;
}

export const getRoutesForStop = async (stopId: string | undefined): Promise<Route[]> => {
    if (!stopId) {
        return [];
    }

    let resp = await fetch(endpoints.getRoutesForStop(stopId));
    const routes: Route[] = await resp.json();
    return routes;
}

export const getStopTimes = async (stopId: string, routeId: string, date: string, time: string): Promise<StopTimeResponse> => {
    let resp = await fetch(endpoints.getStopTimes(routeId, stopId, date, time));
    const stopTimeResponse: StopTimeResponse = await resp.json();
    return stopTimeResponse;
}