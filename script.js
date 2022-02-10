
//function
function compute() {
      //assign variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year  = new Date().getFullYear()+parseInt(years);

// 14.Add validation for "Principal" input box. If the user enters zero or negative values, show an alert "Enter a positive number"
    if (principal <= "0"){
        alert("Enter a positive number"); //15 Once the user clicks on the alert "OK" button, take the user back to the "Principal" input box, by setting the focus on this box.
        document.getElementById("principal").focus(); //back focus to the field Principal
        return false;
    } else {
    // combining result
    result= "If you deposit <mark>" + principal + "</mark>,<br \/>at an interest rate of <mark>" +  rate + "</mark>.<br \/>You will receive an amount of <mark>" + interest + "</mark>,<br \/>in the year <mark>" + year +"</mark>.<br \/><br \/>";

    //result sent to the resulp place in span
    document.getElementById ("result").innerHTML= result;

    //focus back to the field principal at the end
    document.getElementById("principal").focus();

    //prevent the page close
    event.preventDefault();
  }

}

// range dynamicaly change
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
