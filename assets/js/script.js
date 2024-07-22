function displayPortfolio(){

    let extend = document.querySelector("#extend"); 
    let windowContent = document.querySelector("#window-main-content");  
    let reduce = document.querySelector("#reduce"); 
    let folderImg = document.querySelector("#folder-img"); 
    let folder = document.querySelector("#portfolio-folder")
    let portfolio = document.querySelector("#portfolio")    
    folder.addEventListener("dblclick", (e) => {
        portfolio.style.display = "block"        
        folderImg.classList.remove("img-folder-undisplayed")
        // When the portfolio's window is expanded
        extend.addEventListener("click", (e) => {  
            if(!portfolio.classList.contains("extend")){
                previousTop = portfolio.style.top;
                previousLeft = portfolio.style.left;
                portfolio.classList.add("extend")
                portfolio.classList.remove("mini")
                portfolio.style.top ="0px"
                portfolio.style.left = "0px"
                windowContent.classList.remove("window-main-content-mini")              
                windowContent.classList.add("window-main-content-extend")              
            }else{
                portfolio.style.top = previousTop;
                portfolio.style.left = previousLeft;
                portfolio.classList.remove("extend")
                portfolio.classList.add("mini") 
                windowContent.classList.add("window-main-content-mini")
                windowContent.classList.remove("window-main-content-extend")              

            }
        }); 

        // When the portfolio's window is reduced
        reduce.addEventListener("click", (e) => {
            portfolio.style.display = "none"
            folderImg.addEventListener("click", (e) => {
                portfolio.style.display = "block"
            });
        }); 

        let closeWindow = document.querySelector("#close-window")
        closeWindow.addEventListener("click", (e) => {
            portfolio.style.display ="none"
            folderImg.classList.add("img-folder-undisplayed")

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
    const hour = currentDate.getHours() +":"+ addZeroInFrontOfNumber(currentDate.getMinutes());
      
    dateSpace.innerHTML = dateString
    hourSpace.innerHTML = hour
}

displayCurrentDate()

setInterval(displayCurrentDate, 5000);

function moveWindow(){

    let portfolio = document.querySelector("#portfolio")    
    let isDown;
    let offset;

    document.addEventListener('mouseup', (e) => {
        isDown = false;
    });
    
    portfolio.addEventListener('mousedown', (e) => {
        isDown = true;
        offset = [
            portfolio.offsetLeft - e.clientX,
            portfolio.offsetTop - e.clientY
        ];
    });
    
    document.addEventListener('mousemove', (e) => {
        if (isDown) {
            mousePosition = {
    
                x: e.clientX,
                y: e.clientY
    
            };
            portfolio.style.left = (mousePosition.x + offset[0]) + 'px';
            portfolio.style.top = (mousePosition.y + offset[1]) + 'px';
        }
    });

}

moveWindow();

