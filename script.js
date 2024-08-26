document.addEventListener('DOMContentLoaded', function() {
    function checkTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();

        if (hours === 1 && minutes === 0) {
            window.location.href = 'https://quizleapsbooks.github.io/QuizLeapBooks-Test_Started/';
        } else {
            setTimeout(checkTime, 60000);
        }
    }

    checkTime(); 
});
