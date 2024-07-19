function displayPortfolio(){

    let folder = document.querySelector("#portfolio-folder")
    let portfolio = document.querySelector("#portfolio")    
    folder.addEventListener("dblclick", (e) => {
        portfolio.style.display = "block"        

        let extend = document.querySelector("#extend"); 
        let windowContent = document.querySelector("#window-main-content");  
    
        extend.addEventListener("click", (e) => {
            console.log(portfolio)   
            portfolio.classList.toggle("extend")  
            if(portfolio.classList == "extend"){
                portfolio.classList.remove("mini")  
                windowContent.classList.remove("window-main-content-mini")              
            }else{
                portfolio.classList.add("mini") 
                windowContent.classList.add("window-main-content-extend")
            }
        }); 

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
    const hour = currentDate.getHours() +":"+ addZeroInFrontOfNumber(currentDate.getMinutes());
      
    dateSpace.innerHTML = dateString
    hourSpace.innerHTML = hour
}

displayCurrentDate()

// function extendWindow(previousHeight, previousWidth){
//     let extend = document.querySelector("#extend");
//     let portfolio = document.querySelector("#portfolio")    

//     extend.addEventListener("click", (e) => {

//         console.log(previousHeight)        
//         portfolio.style.height="100vh";
//         portfolio.style.width="100vw";
//         portfolio.style.bottom="0px";
//         portfolio.style.left="0px";


//     });   
// }
// extendWindow();