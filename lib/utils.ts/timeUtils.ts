const dateToApiDate = (date: string): string => {
    let [month, day, year] = date.split('/');
    if (month.length === 1) {
        month = `0${month}`;
    }
    if (day.length === 1) {
        day = `0${day}`;
    }
    return `${year}${month}${day}`;
}

const timeToApiTime = (time: string): string => to24Hr(time);

const to24Hr = (time: string): string => {
    const [timeStr, suffix] = time.split(/\s+/);
    let [hr, min, sec] = timeStr.split(':');
    const parsedHr = parseInt(hr);
    if (suffix === 'PM' && parsedHr > 12) {
        hr = (parsedHr + 12).toString();
    }
    return `${hr}:${min}:${sec}`;
}

export const apiTimeToLocalTime = (time: string | null): string => {
    if (!time) {
        return '';
    }

    let [hr, min, sec] = time.split(':');
    let suffix = 'AM';
    let parsedHr = parseInt(hr);
    if (parsedHr > 24) {
        hr = (parsedHr - 24).toString();
    } else if (parsedHr == 24) {
        hr = '12';
    } else if (parsedHr == 12) {
        suffix = 'PM';
    } else if (parsedHr > 12) {
        hr = (parsedHr - 12).toString();
        suffix = 'PM';
    }
    return `${hr}:${min} ${suffix}`;
}

export const getDateTime = () => {
    const today = new Date();
    const localDateString = today.toLocaleDateString("en-US", { timeZone: "America/Toronto" });
    const localTimeString = today.toLocaleTimeString("en-US", { timeZone: "America/Toronto" });

    const apiDate = dateToApiDate(localDateString);
    const apiTime = timeToApiTime(localTimeString);

    return { date: apiDate, time: apiTime }
}
