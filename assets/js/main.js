const dateFormEl = document.querySelector("#dateForm")
const dayImageContainerEl = document.querySelector("#dayImage")
const dateInputEl = document.querySelector("#dateInput")

dateInputEl.addEventListener("change",(e)=>{
    e.preventDefault();

    const inputDate = e.target.value;
    console.log(inputDate);

    processDate(inputDate);
})



function processDate(date){

    const myDate = date ?  new Date(date) :  new Date()

    const year = myDate.getFullYear();
    const month = String(myDate.getMonth() + 1).padStart(2, '0'); 
    const day = String(myDate.getDate()).padStart(2, '0');
    
    const result = `${year}-${month}-${day}`;
    
    const finalResult = `https://www.prokerala.com/general/calendar/imgs/daily/${result}.png`
    
    dayImageContainerEl.src = finalResult;
    dayImageContainerEl.alt = result;
    
    console.log(finalResult);
};

processDate();

