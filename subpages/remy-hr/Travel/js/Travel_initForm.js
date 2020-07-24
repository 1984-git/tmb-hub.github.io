function initFields() {

    // Fill the email list
    fillOptionList(document.getElementById("emailList"), ["agnes.csontos@remygroup.com", "dirk.vanrompaey@remygroup.com",
        "fredrik.markholt@remygroup.com", "janos.szavo@remygroup.com", "kris.mattheus@remygroup.com",
        "krisztian.bacso@remygroup.com", "mark.rahman@remygroup.com", "martin.klein@remygroup.com",
        "peter.hansen@remygroup.com", "sascha.wiebers@remygroup.com", "tamas.orosz@remygroup.com",
        "zoltan.erdei@remygroup.com", "zsuzsa.szokoly@remygroup.com"])

    //Fill up the part of day buttonlist (both)
    fillButtonList(document.getElementById("outboundTime"), ["nincs", "reggel", "délelőtt", "délután", "este"]);
    fillButtonList(document.getElementById("inboundTime"), ["nincs", "reggel", "délelőtt", "délután", "este"]);

    //Fill up the flight type enum
    document.getElementById("inboundFlightType").disabled = true;
    fillButtonList(document.getElementById("outboundFlightType"), ["Normál (nem fapados)", "Fapados"]);
    fillButtonList(document.getElementById("inboundFlightType"), ["Normál (nem fapados)", "Fapados"]);

    //Fill up the outbound flight list
    let destinations = ["Válassz...", "Birmingham", "Brüsszel", "Budapest", "Bécs", "Dortmund", "Düsseldorf", "Frankfurt", "Stuttgart", "Tunisz"]
    fillButtonList(document.getElementById("outboundDeparture"), destinations);
    fillButtonList(document.getElementById("outboundArrival"), destinations);
    fillButtonList(document.getElementById("inboundDeparture"), destinations);
    fillButtonList(document.getElementById("inboundArrival"), destinations);

    // The flight type can only be changed on the outbound side. The same setting is applied to the inbound one.
    document.getElementById("outboundFlightType").addEventListener("click", function x(){
        document.getElementById("inboundType").innerHTML = this.parentElement.firstElementChild.innerHTML
    })

}


function fillOptionList(item, optionArray) {
    for (currentOption of optionArray) {
        let optionItem = document.createElement('option'); // Listaelem létrehozása...
        optionItem.innerHTML = currentOption;
        item.appendChild(optionItem);
    }
}

function fillButtonList(item, optionArray) {
    for ([i, currentOption] of optionArray.entries()) {
        let optionItem = document.createElement('a'); // Listaelem létrehozása...
        optionItem.className = "dropdown-item"
        optionItem.innerHTML = currentOption
        optionItem.onclick = function test() {
            // When the user clicks on this item we get its parent (div) and it's parent (the buttonGroup)
            // and it's first child which is the button itself. This function changes the text of the button.                
            this.parentElement.parentElement.firstElementChild.innerHTML = this.innerHTML
        }
        item.appendChild(optionItem)

        // If this is the first item them initiate a click so the button text will be initialized as well
        if (!i) {
            optionItem.click();
        }
    }
}