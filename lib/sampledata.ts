import { SavedStop, Stop, StopTimeResponse } from "./models";

export const sampleStopTimes = {
    "stopName": "Union Station",
    "routeName": "Lakeshore East",
    "stopTimes": [
        {
            "arrivalTime": "11:39:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9215",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": "12"
        },
        {
            "arrivalTime": "11:50:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9314",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": "12"
        },
        {
            "arrivalTime": "12:09:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9017",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": "12"
        },
        {
            "arrivalTime": "12:20:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9116",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "12:39:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9217",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": "12"
        },
        {
            "arrivalTime": "12:50:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9316",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "13:09:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9019",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "13:20:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9118",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "13:39:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9219",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "13:50:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9318",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "14:09:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9021",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "14:20:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9120",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "14:39:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9221",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "14:50:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9320",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "15:09:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9023",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "15:20:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9122",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "15:24:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9123",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "15:35:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9222",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "15:39:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9223",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "15:50:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9322",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "15:54:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9323",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "16:05:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9024",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "16:09:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9025",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "16:20:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9124",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "16:24:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9125",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "16:35:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9224",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "16:39:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9225",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "16:50:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9324",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "16:54:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9325",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "17:05:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9026",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "17:09:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9027",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "17:20:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9126",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "17:24:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9127",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "17:35:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9226",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "17:39:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9227",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "17:50:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9326",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "17:54:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9327",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "18:05:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9028",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "18:09:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9029",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "18:20:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9128",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "18:24:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9129",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "18:35:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9228",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "18:39:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9229",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "18:50:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9328",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "18:54:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9329",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "19:05:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9030",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "19:09:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9031",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "19:20:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9130",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "19:24:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9131",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "19:35:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9230",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "19:39:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9231",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "19:50:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9330",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "19:54:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9331",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "20:05:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9032",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "20:09:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9033",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "20:20:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9132",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "20:24:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9133",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "20:35:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9232",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "20:39:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9233",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "20:50:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9332",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "20:54:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9333",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "21:05:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9034",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "21:09:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9035",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "21:20:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9134",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "21:24:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9135",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "21:35:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9234",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "21:39:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9235",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "21:50:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9334",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "21:54:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9335",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "22:05:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9036",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "22:09:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9037",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "22:20:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9136",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "22:24:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9137",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "22:35:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9236",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "22:39:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9237",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "22:50:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9336",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "22:54:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9337",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "23:05:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9038",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "23:09:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9039",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "23:20:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9138",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "23:24:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9139",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "23:40:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9239",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "23:50:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9338",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "24:10:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9041",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "24:20:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9140",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "24:40:00",
            "headsign": "LE - Union Station",
            "tripNumber": "9241",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        },
        {
            "arrivalTime": "24:50:00",
            "headsign": "LE - Durham College Oshawa GO",
            "tripNumber": "9340",
            "scheduledPlatform": null,
            "actualPlatform": null,
            "actualArrivalTime": null,
            "trainLength": null
        }
    ]
} as StopTimeResponse;

export const sampleStops = [
    {
        "stopId": "WR",
        "stopName": "West Harbour GO"
    },
    {
        "stopId": "WH",
        "stopName": "Whitby GO"
    },
    {
        "stopId": "WE",
        "stopName": "Weston GO"
    },
    {
        "stopId": "UN",
        "stopName": "Union Station"
    },
    {
        "stopId": "UI",
        "stopName": "Unionville GO"
    },
    {
        "stopId": "ST",
        "stopName": "Stouffville GO"
    },
    {
        "stopId": "SR",
        "stopName": "Streetsville GO"
    },
    {
        "stopId": "SCTH",
        "stopName": "St. Catharines GO"
    },
    {
        "stopId": "SC",
        "stopName": "Scarborough GO"
    },
    {
        "stopId": "RU",
        "stopName": "Rutherford GO"
    },
    {
        "stopId": "RO",
        "stopName": "Rouge Hill GO"
    },
    {
        "stopId": "RI",
        "stopName": "Richmond Hill GO"
    },
    {
        "stopId": "PO",
        "stopName": "Port Credit GO"
    },
    {
        "stopId": "PIN",
        "stopName": "Pickering GO"
    },
    {
        "stopId": "OS",
        "stopName": "Durham College Oshawa GO"
    },
    {
        "stopId": "OR",
        "stopName": "Oriole GO"
    },
    {
        "stopId": "OL",
        "stopName": "Old Cummer GO"
    },
    {
        "stopId": "OA",
        "stopName": "Oakville GO"
    },
    {
        "stopId": "NI",
        "stopName": "Niagara Falls GO"
    },
    {
        "stopId": "NE",
        "stopName": "Newmarket GO"
    },
    {
        "stopId": "MR",
        "stopName": "Markham GO"
    },
    {
        "stopId": "MP",
        "stopName": "Maple GO"
    },
    {
        "stopId": "MO",
        "stopName": "Mount Pleasant GO"
    },
    {
        "stopId": "ML",
        "stopName": "Milton GO"
    },
    {
        "stopId": "MK",
        "stopName": "Milliken GO"
    },
    {
        "stopId": "MJ",
        "stopName": "Mount Joy GO"
    },
    {
        "stopId": "MI",
        "stopName": "Mimico GO"
    },
    {
        "stopId": "ME",
        "stopName": "Meadowvale GO"
    },
    {
        "stopId": "MA",
        "stopName": "Malton GO"
    },
    {
        "stopId": "LS",
        "stopName": "Lisgar GO"
    },
    {
        "stopId": "LO",
        "stopName": "Long Branch GO"
    },
    {
        "stopId": "LI",
        "stopName": "Old Elm GO"
    },
    {
        "stopId": "LA",
        "stopName": "Langstaff GO"
    },
    {
        "stopId": "KP",
        "stopName": "Kipling GO"
    },
    {
        "stopId": "KI",
        "stopName": "Kitchener GO"
    },
    {
        "stopId": "KE",
        "stopName": "Kennedy GO"
    },
    {
        "stopId": "KC",
        "stopName": "King City GO"
    },
    {
        "stopId": "HA",
        "stopName": "Hamilton GO Centre"
    },
    {
        "stopId": "GU",
        "stopName": "Guildwood GO"
    },
    {
        "stopId": "GO",
        "stopName": "Gormley GO"
    },
    {
        "stopId": "GL",
        "stopName": "Guelph Central GO"
    },
    {
        "stopId": "GE",
        "stopName": "Georgetown GO"
    },
    {
        "stopId": "EX",
        "stopName": "Exhibition GO"
    },
    {
        "stopId": "ET",
        "stopName": "Etobicoke North GO"
    },
    {
        "stopId": "ER",
        "stopName": "Erindale GO"
    },
    {
        "stopId": "EG",
        "stopName": "Eglinton GO"
    },
    {
        "stopId": "EA",
        "stopName": "East Gwillimbury GO"
    },
    {
        "stopId": "DW",
        "stopName": "Downsview Park GO"
    },
    {
        "stopId": "DI",
        "stopName": "Dixie GO"
    },
    {
        "stopId": "DA",
        "stopName": "Danforth GO"
    },
    {
        "stopId": "CO",
        "stopName": "Cooksville GO"
    },
    {
        "stopId": "CL",
        "stopName": "Clarkson GO"
    },
    {
        "stopId": "CE",
        "stopName": "Centennial GO"
    },
    {
        "stopId": "BU",
        "stopName": "Burlington GO"
    },
    {
        "stopId": "BR",
        "stopName": "Brampton Innovation District GO"
    },
    {
        "stopId": "BO",
        "stopName": "Bronte GO"
    },
    {
        "stopId": "BM",
        "stopName": "Bloomington GO"
    },
    {
        "stopId": "BL",
        "stopName": "Bloor GO"
    },
    {
        "stopId": "BE",
        "stopName": "Bramalea GO"
    },
    {
        "stopId": "BD",
        "stopName": "Bradford GO"
    },
    {
        "stopId": "BA",
        "stopName": "Barrie South GO"
    },
    {
        "stopId": "AU",
        "stopName": "Aurora GO"
    },
    {
        "stopId": "AP",
        "stopName": "Appleby GO"
    },
    {
        "stopId": "AL",
        "stopName": "Aldershot GO"
    },
    {
        "stopId": "AJ",
        "stopName": "Ajax GO"
    },
    {
        "stopId": "AG",
        "stopName": "Agincourt GO"
    },
    {
        "stopId": "AD",
        "stopName": "Allandale Waterfront GO"
    },
    {
        "stopId": "AC",
        "stopName": "Acton GO"
    }
] as Stop[];

export const sampleSavedStops = [
    {
        "stopId": "UN",
        "stopName": "Union Station",
        "routeName": "Lakeshore East",
        "routeId": "LE"
    },
    {
        "stopId": "OS",
        "stopName": "Durham College Oshawa GO",
        "routeName": "Lakeshore East",
        "routeId": "LE"
    },
    {
        "stopId": "WH",
        "stopName": "Whitby GO",
        routeName: "Lakeshore East",
        routeId: "LE"
    }
] as SavedStop[];