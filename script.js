function compute()
{
    //Create variables 
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    //do calculations
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    
    //compound interest formula
    let compounded = principal * ((1 + ((rate/100)/12)) ** (12*years))
        
    //validate the principal-if negative, 0, or blank, alert user 
    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    
    
}


//display rate by slider     
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    
}

function onclick() 
{
    document.getElementById("result").innerHTML=`If you deposit ${principal},<br>at an interest rate of ${rate}%<br>You will receive an amount of ${amount},<br>in the year ${year}<br>`
}