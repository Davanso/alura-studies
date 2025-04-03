export function timeToSeconds(time: string){
    const [hours= "0", minutes= "0", seconds= "0"] = time.split(":");

    const totalSeconds = Number(hours) * 3600;
    const totalMinutes = Number(minutes) * 60;

    return totalSeconds + totalMinutes + Number(seconds);
}