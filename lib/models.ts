export interface Stop {
    stopId: string;
    stopName: string;
}

export interface Route {
    routeId: string;
    routeName: string;
}

export interface StopTimeResponse {
    stopName: string;
    routeName: string;
    stopTimes: StopTime[];
}

export interface StopTime {
    arrivalTime: string;
    headsign: string;
    scheduledPlatform: string | null;
    tripNumber: string
    actualPlatform: string | null;
    actualArrivalTime: string | null;
    trainLength: string | null;
}

export interface SavedStop {
    stopId: string;
    stopName: string;
    routeId: string;
    routeName: string;
}