function displayPortfolio(){

    let folder = document.querySelector("#portfolio-folder")
    let portfolio = document.querySelector("#portfolio")    
    folder.addEventListener("dblclick", (e) => {
        portfolio.style.display = "block"
        let closeWindow = document.querySelector("#close-window")
        closeWindow.addEventListener("click", (e) => {
            portfolio.style.display ="none"
        });    
    });    
}
displayPortfolio();

function displayCv(){
    let cv = document.querySelector("#cv-file")    
    cv.addEventListener("dblclick", (e) => {
        window.open("cv.html","CV","menubar=no, status=no");
    });    
}
displayCv();

function displayCurrentDate(){
    const dateSpace  = document.querySelector("#date")
    const hourSpace  = document.querySelector("#hour")

    const currentDate = new Date();
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    function addZeroInFrontOfNumber(n) {
        return n<10 ? '0'+n : n
    }
    const dateString = addZeroInFrontOfNumber(currentDayOfMonth) + "/" + addZeroInFrontOfNumber(currentMonth + 1) + "/" + currentYear;
    const hour = currentDate.getHours() +":"+ currentDate.getMinutes();
      
    dateSpace.innerHTML = dateString
    hourSpace.innerHTML = hour
}

displayCurrentDate()

