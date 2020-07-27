function createEmail() {

    let passengers = document.getElementById("passengerNames").value

    let outboundDate = document.getElementById("outboundDate").value
    let outboundDeparture = document.getElementById("outboundDeparture").innerText
    let outboundArrival = document.getElementById("outboundArrival").innerText
    let outboundTime = document.getElementById("outboundTime").innerText
    let outboundFlightType = document.getElementById("outboundFlightType").innerText

    let inboundDate = document.getElementById("inboundDate").value
    let inboundDeparture = document.getElementById("inboundDeparture").innerText
    let inboundArrival = document.getElementById("inboundArrival").innerText
    let inboundTime = document.getElementById("inboundTime").innerText

    let notes = document.getElementById("noteText").value

    let passengerEmails = []
    for (let email of document.getElementById("passengerEmailList").children){
        passengerEmails.push(email.innerHTML)
    }
    passengerEmails = passengerEmails.join(", ")
    
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + "." + mm + '.' + dd + ".";

    let mySubject = `BPI Group Hungary Kft. árajánlat kérés (${passengers}; ${outboundDate})`

    let myBody = `Hello!<br/><br/>Árajánlatot kérek az alábbiak szerint:<br/><br/>` +
        `<table>` +
        `<tr><td><b>Utas(ok):&emsp;</b></td><td>${passengers}</td></tr>` +
        `<tr><td><b>Honnan-hova:&emsp;</b></td><td>${outboundDeparture} - ${outboundArrival} </td></tr>` +
        `<tr><td><b>Utazás dátuma:&emsp;</b></td><td>${outboundDate}    (Preferált napszak: ${outboundTime})</td></tr>` +
        `<tr><td></td><td></td></tr>` +
        `<tr><td><b>Honnan-hova:&emsp;</b></td><td>${inboundDeparture} - ${inboundArrival}</td></tr>` +
        `<tr><td><b>Utazás dátuma:&emsp;</b></td><td>${inboundDate}    (Preferált napszak: ${inboundTime})</td></tr>` +
        `<tr><td></td><td></td></tr>` +
        `<tr></tr><tr><td><b>Járat:&emsp;</b></td><td>${outboundFlightType}</td></tr>` +
        `<tr></tr>` +
        `<tr><td><b>Utasok email címe:&emsp;</b></td><td>${passengerEmails}</td></tr>`


    // Adding the notes filed if there are any notes
    if (notes) {
        myBody += `<tr></tr><tr><td><b>Megjegyés:&emsp;</b></td><td>${notes}</td></tr>`
    }

    myBody += `</table>`

    // Adding the "thanks" and current date
    myBody += `<br/><br/>Miskolc, ${today}<br/><br/>Köszönettel:<br/>Csontos Ágnes`

    document.getElementById("emailText").innerHTML = myBody

    copyToClip(myBody)

    window.open(`mailto:istvan.baktai@gmail.com?cc=agnes.csontos@remygroup.com&subject=${mySubject}&body=""`);
    window.open(`ms-outlook://compose?to=istvan.baktai@gmail.com?cc=agnes.csontos@remygroup.com&subject=${mySubject}&body=""`);

}


function copyToClip(str) {
    function listener(e) {
        e.clipboardData.setData("text/html", str);
        e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
}
