function createEmail() {

    let passengers = document.getElementById("passengerNames").value

    let outboundDate = document.getElementById("outboundDate").value
    let outboundDeparture = document.getElementById("outboundDeparture").innerText
    let outboundArrival = document.getElementById("outboundArrival").innerText
    let outboundTime = document.getElementById("outboundTime").innerText

    let inboundDate = document.getElementById("inboundDate").value
    let inboundDeparture = document.getElementById("inboundDeparture").innerText
    let inboundArrival = document.getElementById("inboundArrival").innerText
    let inboundTime = document.getElementById("inboundTime").innerText

    console.log(passengers)

    let mySubject = "BPI Group Hungary Kft. árajánlat kérés (" +
        passengers + "; " +
        outboundDate + ")"

    console.log(mySubject)

    let myBody = `Hello!<br/><br/>Árajánlatot kérek az alábbiak szerint:<br/><br/>` +
        `<table style="white-space:nowrap">` +
        `<tr><td><b>Utas(ok):</b></td><td>&emsp;${passengers}</td></tr>` +
        `<tr><td><b>Honnan-hova:</b></td><td>&emsp;${outboundDeparture} - ${outboundArrival} </td></tr>` +
        `<tr><td><b>Utazás dátuma:</b></td><td>&emsp;${outboundDate}&emsp;&emsp;(Preferált napszak: ${outboundTime})</td></tr>` +
        `<tr><td><b>Preferált napszak:</b></td><td>&emsp;${outboundTime}</td></tr>` +
        `<tr><td></td><td></td></tr>` +
        `<tr><td><b>Honnan-hova:</b></td><td>&emsp;${inboundDeparture} - ${inboundArrival}</td></tr>` +
        `<tr><td><b>Utazás dátuma:</b></td><td>&emsp;${inboundDate}&emsp;&emsp;(Preferált napszak: ${inboundTime})</td></tr>` +
        `<tr><td></td><td></td></tr>` 
        /*
            "<tr></tr>" &
            "<tr><td><b>Járat:</b></td><td>&emsp;          " & FFAircraftType.Text & "</td></tr>" &
            "<tr></tr>" &
            "<tr><td><b>Utasok email címe:</b></td><td>&emsp; " & FFemails.Text & "</td></tr>"
   
   
       'If FFCarRental.Checked = True Then
       '    myBody = myBody & "<tr><td><b>Autóbérlés:</b></td><td>&emsp;Igen</td></tr>" &
       '                      "<tr><td><b>Sofőr(ök):</b></td><td>&emsp;" & FFDriver.Text & "</td></tr>"
       'Else
       '    myBody = myBody & "<tr><td><b>Autóbérlés:</b></td><td>&emsp;Nem</td></tr>"
       'End If
   
   /*     If FFNotes.Text <> "" Then
           myBody = myBody & "<tr></tr>" &
                             "<tr><td><b>Megjegyés:</b></td><td>&emsp;" & FFNotes.Text & "</td></tr>"
       End If
   
       myBody = myBody & "</table><br/>" &
                     "<br/>Miskolc, " & Date.Today.Year & "." & Format(Date.Today.Month, "00") & "." & Format(Date.Today.Day, "00") & ".<br/><br/>" &
                     "Köszönettel:"
    */

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