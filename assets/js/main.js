const dateFormEl = document.querySelector("#dateForm")
const dayImageContainerEl = document.querySelector("#dayImage")

dateFormEl.addEventListener("submit",(e)=>{
    e.preventDefault();

    const inputDate = e.target[0].value;

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

