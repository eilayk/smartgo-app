const formatDateComponent = (dateComponent: number) => dateComponent < 10 ? `0${dateComponent}` : `${dateComponent}`

export const getDateTime = () => {
    const today = new Date();
    const date = `${today.getFullYear()}${formatDateComponent(today.getMonth())}${formatDateComponent(today.getDay())}`;
    const time = ` ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    return { date, time };
}