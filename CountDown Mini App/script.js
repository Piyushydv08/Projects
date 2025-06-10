const endDate = new Date("10 June, 2025 08:41:00").getTime();
const startDate = new Date().getTime();


let x = setInterval(function updateTimer() {
    const now = new Date().getTime();

    const distanceCovered = now-startDate;
    const distancePending = endDate-now;
    
    //calculate dast, hrs, mins, secs
    const oneDayInMillis = (24*60*60*1000);
    const oneHrsInMillis = (60*60*1000);
    const oneMinsInMillis = (60*1000);
    const oneSecsInMillis = (1000);

    const days = Math.floor(distancePending / (oneDayInMillis));

    const hrs = Math.floor((distancePending % (oneDayInMillis)) / (oneHrsInMillis));

    const mins = Math.floor((distancePending % (oneHrsInMillis)) / (oneMinsInMillis));

    const secs = Math.floor((distancePending % (oneMinsInMillis)) / (oneSecsInMillis));

    //populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hrs").innerHTML = hrs;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("secs").innerHTML = secs;

    //calculate width pecentage for progress bar
    const totalDistance = endDate - startDate;
    const percentageDistance = (distanceCovered/totalDistance)*100;

    //set width for progress bar
    document.getElementById("progress-bar").style.width = percentageDistance + "%";

    if(percentageDistance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width = "100%";
    }
}, 1000);