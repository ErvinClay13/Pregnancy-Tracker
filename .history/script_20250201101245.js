let currentWeek = 0; // Tracks the current week
let diffInDays = 0; // Track the difference in days

const trackerBtn = document.getElementById("trackerBtn");

trackerBtn.addEventListener("click", () => {
    trackPregnancy();
    clearDates();
});

function clearDates() {
    document.getElementById("startDate").value = "";
}

function trackPregnancy() {
    const MS_PER_DAY = 24 * 60 * 60 * 1000;
    const DAYS_IN_PREGNANCY = 280;

    const startDateInput = document.getElementById("startDate").value;
    if (!startDateInput) {
        document.getElementById("result").innerText = "Please enter a valid date.";
        return;
    }

    const startDate = new Date(startDateInput);
    const today = new Date();

    if (startDate > today) {
        document.getElementById("result").innerText = "The start date cannot be in the future.";
        return;
    }

    diffInDays = Math.floor((today - startDate) / MS_PER_DAY); // Calculate total days difference
    currentWeek = Math.floor(diffInDays / 7); // Calculate the current week

    // Ensure week is within valid range
    currentWeek = Math.min(40, Math.max(0, currentWeek));

    // Display the results
    updateResults();
    updateImages();
    updateButtons();
}

function changeWeekBy(offset) {
    const MAX_WEEKS = 40;
    currentWeek = Math.min(MAX_WEEKS, Math.max(0, currentWeek + offset)); // Keep week within bounds

    updateResults();
    updateImages();
    updateButtons();
}

function updateResults() {
    // Calculate the days in the current week using modulo
    const daysInCurrentWeek = diffInDays % 7; // Get the days within the current week (0 to 6)

    document.getElementById("result").innerHTML = `
        <strong>Pregnancy Details:</strong><br>
        Weeks: ${currentWeek}<br>
        Days: ${daysInCurrentWeek}<br>
    `;
} 


function updateImages() {
    // Baby image
    const babyImages = [
      
          "./babySizes/bsWeek0.png", // For weeks == 0
          "./babySizes/bsWeek1.png", // For weeks == 1
          "./babySizes/bsWeek2.jpg", // For weeks == 2
          "./babySizes/bsWeek3.jpg", // For weeks == 3
          "./babySizes/bsWeek4.jpg", // For weeks == 4
          "./babySizes/bsWeek5.jpg", // For weeks == 5
          "./babySizes/bsWeek6.jpg", // For weeks == 6
          "./babySizes/bsWeek7.jpg", // For weeks == 7
          "./babySizes/bsWeek8.jpg", // For weeks == 8
          "./babySizes/bsWeek9.jpg", // For weeks == 8
          "./babySizes/bsWeek10.jpg", // For weeks == 10
          "./babySizes/bsWeek11.jpg", // For weeks == 11
          "./babySizes/bsWeek12.jpg", // For weeks == 12
          "./babySizes/bsWeek13.jpg", // For weeks == 13
          "./babySizes/bsWeek14.jpg", // For weeks == 14
          "./babySizes/bsWeek15.jpg", // For weeks == 15
          "./babySizes/bsWeek16.jpg", // For weeks == 16
          "./babySizes/bsWeek17.jpg", // For weeks == 17
          "./babySizes/bsWeek18.jpg", // For weeks == 18
          "./babySizes/bsWeek19.jpg", // For weeks == 19
          "./babySizes/bsWeek20.jpg", // For weeks == 20
          "./babySizes/bsWeek21.jpg", // For weeks == 21
          "./babySizes/bsWeek22.jpg", // For weeks == 22
          "./babySizes/bsWeek23.jpg", // For weeks == 23
          "./babySizes/bsWeek24.jpg", // For weeks == 24
          "./babySizes/bsWeek25.jpg", // For weeks == 25
          "./babySizes/bsWeek26.jpg", // For weeks == 26
          "./babySizes/bsWeek27.jpg", // For weeks == 27
          "./babySizes/bsWeek28.jpg", // For weeks == 28
          "./babySizes/bsWeek29.jpg", // For weeks == 29
          "./babySizes/bsWeek30.jpg", // For weeks == 30
          "./babySizes/bsWeek31.jpg", // For weeks == 31
          "./babySizes/bsWeek32.jpg", // For weeks == 32
          "./babySizes/bsWeek33.jpg", // For weeks == 33
          "./babySizes/bsWeek34.jpg", // For weeks == 34
          "./babySizes/bsWeek35.jpg", // For weeks == 35
          "./babySizes/bsWeek36.jpg", // For weeks == 36
          "./babySizes/bsWeek37.jpg", // For weeks == 37
          "./babySizes/bsWeek38.jpg", // For weeks == 38
          "./babySizes/bsWeek39.jpg", // For weeks == 39               
          "./babySizes/bsWeek40.jpg", // For weeks == 40
    ];
    document.getElementById("imgChange").src = babyImages[currentWeek] || "./defaultImage.jpg";

    // Body image
    const bodyImages = [
        "./womanBody/wbWeek0.png", // For week == 0
        "./womanBody/wbWeek1.png", // For weeks == 1
        "./womanBody/wbWeek2.png", // For week == 2
        "./womanBody/wbWeek3.png", // For weeks == 3
        "./womanBody/wbWeek4.png", // For weeks == 4
        "./womanBody/wbWeek5.png", // For weeks == 5
        "./womanBody/wbWeek6.png", // For weeks == 6
        "./womanBody/wbWeek7.png", // For weeks == 7
        "./womanBody/wbWeek8.png", // For weeks == 8
        "./womanBody/wbWeek9.png", // For weeks == 8
        "./womanBody/wbWeek10.png", // For weeks == 10
        "./womanBody/wbWeek11.png", // For weeks == 11
        "./womanBody/wbWeek12.png", // For weeks == 12
        "./womanBody/wbWeek13.png", // For weeks == 13
        "./womanBody/wbWeek14.png", // For weeks == 14
        "./womanBody/wbWeek15.png", // For weeks == 15
        "./womanBody/wbWeek16.png", // For weeks == 16
        "./womanBody/wbWeek17.png", // For weeks == 17
        "./womanBody/wbWeek18.png", // For weeks == 18
        "./womanBody/wbWeek19.png", // For weeks == 19
        "./womanBody/wbWeek20.png", // For weeks == 20
        "./womanBody/wbWeek21.png", // For weeks == 21
        "./womanBody/wbWeek22.png", // For weeks == 22
        "./womanBody/wbWeek23.png", // For weeks == 23
        "./womanBody/wbWeek24.png", // For weeks == 24
        "./womanBody/wbWeek25.png", // For weeks == 25
        "./womanBody/wbWeek26.png", // For weeks == 26
        "./womanBody/wbWeek27.png", // For weeks == 27
        "./womanBody/wbWeek28.png", // For weeks == 28
        "./womanBody/wbWeek29.png", // For weeks == 29
        "./womanBody/wbWeek30.png", // For weeks == 30
        "./womanBody/wbWeek31.png", // For weeks == 31
        "./womanBody/wbWeek32.png", // For weeks == 32
        "./womanBody/wbWeek33.png", // For weeks == 33
        "./womanBody/wbWeek34.png", // For weeks == 34
        "./womanBody/wbWeek35.png", // For weeks == 35
        "./womanBody/wbWeek36.png", // For weeks == 36
        "./womanBody/wbWeek37.png", // For weeks == 37
        "./womanBody/wbWeek38.png", // For weeks == 38
        "./womanBody/wbWeek39.png", // For weeks == 39
        "./womanBody/wbWeek40.png" // Week 40
    ];
    document.getElementById("bodyChange").src = bodyImages[currentWeek] || "./defaultImage.jpg";

    // Fruit image
    const fruitImages = [
      
        "./foodSize/fruitWeek0.png", // For weeks == 0
        "./foodSize/fruitWeek1.png", // For weeks == 1 
        "./foodSize/fruitWeek2.png", // For weeks == 2
        "./foodSize/fruitWeek3.png", // For weeks == 3
        "./foodSize/fruitWeek4.png", // For weeks == 4
        "./foodSize/fruitWeek5.png", // For weeks == 5
        "./foodSize/fruitWeek6.png", // For weeks == 6
        "./foodSize/fruitWeek7.png", // For weeks == 7
        "./foodSize/fruitWeek8.png", // For weeks == 8
        "./foodSize/fruitWeek9.png", // For weeks == 9
        "./foodSize/fruitWeek10.png", // For weeks == 10
        "./foodSize/fruitWeek11.png", // For weeks == 11
        "./foodSize/fruitWeek12.png", // For weeks == 12
        "./foodSize/fruitWeek13.png", // For weeks == 13
        "./foodSize/fruitWeek14.png", // For weeks == 14
        "./foodSize/fruitWeek15.png", // For weeks == 15
        "./foodSize/fruitWeek16.png", // For weeks == 16
        "./foodSize/fruitWeek17.png", // For weeks == 17
        "./foodSize/fruitWeek18.png", // For weeks == 18
        "./foodSize/fruitWeek19.png", // For weeks == 19
        "./foodSize/fruitWeek20.png", // For weeks == 20
        "./foodSize/fruitWeek21.png", // For weeks == 21
        "./foodSize/fruitWeek22.png", // For weeks == 22
        "./foodSize/fruitWeek23.png", // For weeks == 23
        "./foodSize/fruitWeek24.png", // For weeks == 24
        "./foodSize/fruitWeek25.png", // For weeks == 25
        "./foodSize/fruitWeek26.png", // For weeks == 26
        "./foodSize/fruitWeek27.png", // For weeks == 27
        "./foodSize/fruitWeek28.png", // For weeks == 28
        "./foodSize/fruitWeek29.png", // For weeks == 29
        "./foodSize/fruitWeek30.png", // For weeks == 30
        "./foodSize/fruitWeek31.png", // For weeks == 31
        "./foodSize/fruitWeek32.png", // For weeks == 32
        "./foodSize/fruitWeek33.png", // For weeks == 33
        "./foodSize/fruitWeek34.png", // For weeks == 34
        "./foodSize/fruitWeek35.png", // For weeks == 35
        "./foodSize/fruitWeek36.png", // For weeks == 36
        "./foodSize/fruitWeek37.png", // For weeks == 37
        "./foodSize/fruitWeek38.png", // For weeks == 38
        "./foodSize/fruitWeek39.png", // For weeks == 39
        "./foodSize/fruitWeek40.png" // Week 40
    ];
    document.getElementById("fruitChange").src = fruitImages[currentWeek] || "./defaultImage.jpg";

    // Week image
    const weekImages = [

        "./weekChng/myWeek0.png", // For weeks == 0
        "./weekChng/myWeek1.png", // For weeks == 1
        "./weekChng/myWeek2.png", // For weeks == 2
        "./weekChng/myWeek3.png", // For weeks == 3
        "./weekChng/myWeek4.png", // For weeks == 4
        "./weekChng/myWeek5.png", // For weeks == 5
        "./weekChng/myWeek6.png", // For weeks == 6
        "./weekChng/myWeek7.png", // For weeks == 7
        "./weekChng/myWeek8.png", // For weeks == 8
        "./weekChng/myWeek9.png", // For weeks == 9
        "./weekChng/myWeek10.png", // For weeks == 10
        "./weekChng/myWeek11.png", // For weeks == 11
        "./weekChng/myWeek12.png", // For weeks == 12
        "./weekChng/myWeek13.png", // For weeks == 13
        "./weekChng/myWeek14.png", // For weeks == 14
        "./weekChng/myWeek15.png", // For weeks == 15
        "./weekChng/myWeek16.png", // For weeks == 16
        "./weekChng/myWeek17.png", // For weeks == 17
        "./weekChng/myWeek18.png", // For weeks == 18
        "./weekChng/myWeek19.png", // For weeks == 19
        "./weekChng/myWeek20.png", // For weeks == 20
        "./weekChng/myWeek21.png", // For weeks == 21
        "./weekChng/myWeek22.png", // For weeks == 22
        "./weekChng/myWeek23.png", // For weeks == 23
        "./weekChng/myWeek24.png", // For weeks == 24
        "./weekChng/myWeek25.png", // For weeks == 25
        "./weekChng/myWeek26.png", // For weeks == 26
        "./weekChng/myWeek27.png", // For weeks == 27
        "./weekChng/myWeek28.png", // For weeks == 28
        "./weekChng/myWeek29.png", // For weeks == 29
        "./weekChng/myWeek30.png", // For weeks == 30
        "./weekChng/myWeek31.png", // For weeks == 31
        "./weekChng/myWeek32.png", // For weeks == 32
        "./weekChng/myWeek33.png", // For weeks == 33
        "./weekChng/myWeek34.png", // For weeks == 34
        "./weekChng/myWeek35.png", // For weeks == 35
        "./weekChng/myWeek36.png", // For weeks == 36
        "./weekChng/myWeek37.png", // For weeks == 37
        "./weekChng/myWeek38.png", // For weeks == 38
        "./weekChng/myWeek39.png", // For weeks == 39
        "./weekChng/myWeek40.png" // Week 40
    ];
    document.getElementById("weekChange").src = weekImages[currentWeek] || "./defaultImage.jpg";
}