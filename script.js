function showDetails(title, author, description) {
    console.log(title, author, description);
    document.getElementById('book-details').innerHTML = `<strong>${title}</strong> by ${author}<br>${description}`;
}

function startCountdown() {
    let eventDate = new Date("April 27, 2025 18:00:00").getTime();
    setInterval(function() {
        let now = new Date().getTime();
        let remaining = eventDate - now;
        let days = Math.floor(remaining/(1000*60*60*24))
        let hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((remaining % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    }, 1000);
}

startCountdown();

