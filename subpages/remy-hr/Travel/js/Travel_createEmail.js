function createEmail() {

    let passengers = document.getElementById("passengerNames").value
    let passengerEmails = document.getElementById("passengerEmailList").innerHTML

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

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + "." + mm + '.' + dd + ".";

    let mySubject = "BPI Group Hungary Kft. árajánlat kérés (" +
        passengers + "; " +
        outboundDate + ")"

    let myBody = `Hello!<br/><br/>Árajánlatot kérek az alábbiak szerint:<br/><br/>` +
        `<table style="white-space:nowrap">` +
        `<tr><td><b>Utas(ok):</b></td><td>&emsp;${passengers}</td></tr>` +
        `<tr><td><b>Honnan-hova:</b></td><td>&emsp;${outboundDeparture} - ${outboundArrival} </td></tr>` +
        `<tr><td><b>Utazás dátuma:</b></td><td>&emsp;${outboundDate}&emsp;&emsp;(Preferált napszak: ${outboundTime})</td></tr>` +
        `<tr><td></td><td></td></tr>` +
        `<tr><td><b>Honnan-hova:</b></td><td>&emsp;${inboundDeparture} - ${inboundArrival}</td></tr>` +
        `<tr><td><b>Utazás dátuma:</b></td><td>&emsp;${inboundDate}&emsp;&emsp;(Preferált napszak: ${inboundTime})</td></tr>` +
        `<tr><td></td><td></td></tr>` +
        `<tr></tr><tr><td><b>Járat:</b></td><td>&emsp;${outboundFlightType}</td></tr>` +
        `<tr></tr>` +
        `<tr><td><b>Utasok email címe:</b></td><td>&emsp;${passengerEmails}</td></tr>`


    // Adding the notes filed if there are any notes
    if(notes){
        myBody += `<tr></tr><tr><td><b>Megjegyés:</b></td><td>&emsp;${notes}</td></tr>`
    }

    // Adding the "thanks" and current date
    myBody += `</table><br/><br/>Miskolc, ${today}<br/><br/>Köszönettel:`


    document.getElementById("emailText").innerHTML = myBody

    copyToClip(myBody)

}


function copyToClip(str) {
    function listener(e) {
        e.clipboardData.setData("text/html", str);
        e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
};