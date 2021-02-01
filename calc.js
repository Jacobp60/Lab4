$(document).ready(
    //Find the button with jquery
    function ()  {
        //assign function pizzaCalc to run when clicked
        $("button").click(pizzaCalc);
        //assign function pizzaCalc to run when clicked

    }


);

function pizzaCalc() {

    // let pizzaTopping = parseFloat(prompt("How many pizza topping will you use?: "));

    let pizzaTopping = parseFloat( $("input#toppings").val() );

    //let amountOfCoworkers = parseFloat(prompt("How many Co-Workers will you share with?(Include Yourself): "));

    let amountOfCoworkers = parseFloat( $("input#coworker").val());

    let pizzaPrice = 15.00;

    let pizzaToppingCost = pizzaTopping * 1.25;

    let totalCost = pizzaToppingCost + pizzaPrice;

    let amountEachCoWorkerPays =  totalCost / amountOfCoworkers;

    let displayCost = amountEachCoWorkerPays.toFixed(2);

    // alert(`Each Co-Worker will ${displayCost} dollars`);

    $("p#everyonePays").text(`Every Co-Worker will pay ${displayCost} dollars.`);

}
