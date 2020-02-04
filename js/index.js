function onConvertButtonClick() {
    let amount = document.getElementById("amount").value;
    console.log('BDT: ' + amount);

    console.log('USD: ' + amount * 84.81);
    console.log('SGD: ' + amount * 1.36);
    console.log('CAD: ' + amount * 1.32);

    var usd = amount * 0.012;
    var sgd = amount * 0.016;
    var cad = amount * 0.016;

    document.getElementById("print_result").innerHTML = "<hr/>"
        + "<h1>Result</h1>"
        + "BDT = " + amount + "&nbsp; Taka"
        + "<br/>USD = " + usd.toFixed(2) + "&nbsp; USD"
        + "<br/>SGD = " + sgd.toFixed(2) + "&nbsp; SGD"
        + "<br/>CAD = " + cad.toFixed(2) + "&nbsp; CAD";
}
