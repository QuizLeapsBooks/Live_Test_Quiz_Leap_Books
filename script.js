document.addEventListener('DOMContentLoaded', function() {
    const now = new Date().getTime();

    const countDownDate = now + (2 * 24 * 60 * 60 * 1000) + (20 * 60 * 60 * 1000) + (30 * 60 * 1000);

    const x = setInterval(function() {
        const current = new Date().getTime();
        
        const distance = countDownDate - current;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
        
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
            window.location.href = "#"; 
        }
    }, 1000);
});
