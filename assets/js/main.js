const dateFormEl = document.querySelector("#dateForm")
const dayImageContainerEl = document.querySelector("#dayImage")

const myDate = new Date(); // Assuming myDate is a Date object

const year = myDate.getFullYear();
const month = String(myDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
const day = String(myDate.getDate()).padStart(2, '0');

const result = `${year}-${month}-${day}`;

const finalResult = `https://www.prokerala.com/general/calendar/imgs/daily/${result}.png`

dayImageContainerEl.src = finalResult;
dayImageContainerEl.alt = result;

console.log(finalResult);