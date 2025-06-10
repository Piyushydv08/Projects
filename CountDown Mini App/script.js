let x; 

document.getElementById("start-btn").addEventListener("click", function() {
    if (x) clearInterval(x);

    const startInput = document.getElementById("start-input").value;
    const endInput = document.getElementById("end-input").value;

    if (!startInput || !endInput) {
        alert("Please enter both start and end dates.");
        return;
    }

    const startDate = new Date(startInput).getTime();
    const endDate = new Date(endInput).getTime();

    if (endDate <= startDate) {
        alert("End date must be after start date.");
        return;
    }

    x = setInterval(function updateTimer() {
        const now = new Date().getTime();

        const distanceCovered = now - startDate;
        const distancePending = endDate - now;

        const oneDayInMillis = (24*60*60*1000);
        const oneHrsInMillis = (60*60*1000);
        const oneMinsInMillis = (60*1000);
        const oneSecsInMillis = (1000);

        const days = Math.floor(distancePending / oneDayInMillis);
        const hrs = Math.floor((distancePending % oneDayInMillis) / oneHrsInMillis);
        const mins = Math.floor((distancePending % oneHrsInMillis) / oneMinsInMillis);
        const secs = Math.floor((distancePending % oneMinsInMillis) / oneSecsInMillis);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hrs").innerHTML = hrs;
        document.getElementById("mins").innerHTML = mins;
        document.getElementById("secs").innerHTML = secs;

        const totalDistance = endDate - startDate;
        const percentageDistance = (distanceCovered / totalDistance) * 100;
        document.getElementById("progress-bar").style.width = (percentageDistance) + "%";

        if (distancePending <= 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
            document.getElementById("progress-bar").style.width = "100%";
        }
    }, 1000);
});