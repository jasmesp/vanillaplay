const divButton = (ID:string, TEXT:string) =>  document.getElementById(ID).innerHTML = `<input type=button value='${TEXT}'></input>`;
const divSel = (ID:string) => document.getElementById(ID);
const divNew = (ID:string, TEXT:string) =>  document.getElementById(ID).innerHTML = `${TEXT}`;
const date = new Date();


const div1 = divSel("1");
divButton("1", "sex");
divNew("2", "?!?");


var switching = { state: "string" };
function toggleDateCount(state:string) {switching.state = state};
function toggleDate() {
    if (switching.state == "tdate") displaySex(); else displayDate();
}

function displayDate() {
    let x = date.getDate().toString();
    divButton("1", x);
    toggleDateCount("tdate");
}

function displaySex(){
    divButton("1", "SEX");
    toggleDateCount("sex");
}






