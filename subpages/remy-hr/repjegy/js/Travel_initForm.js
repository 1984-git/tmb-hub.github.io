function initFields() {

    // Fill the email list
    fillOptionList(document.getElementById("emailList"), ["agnes.csontos@remygroup.com", "dirk.vanrompaey@remygroup.com",
        "fredrik.markholt@remygroup.com", "janos.szavo@remygroup.com", "kris.mattheus@remygroup.com",
        "krisztian.bacso@remygroup.com", "mark.rahman@remygroup.com", "martin.klein@remygroup.com",
        "peter.hansen@remygroup.com", "sascha.wiebers@remygroup.com", "tamas.orosz@remygroup.com",
        "zoltan.erdei@remygroup.com", "zsuzsa.szokoly@remygroup.com"])


    //Fill up the outbound flight enum
    fillOptionList(document.getElementById("outboundDestinationList"), ["Düsseldorf - Budapest", "Frankfurt - Budapest",
        "Dortmund - Budapest", "Stuttgart - Budapest", "Bécs - Birmingham", "Bécs - Brüsszel", "Bécs - Tunisz",
        "Budapest - Birmingham", "Budapest - Brüsszel", "Budapest - Tunisz"]);

    //Fill up the return flight enum
    fillOptionList(document.getElementById("inboundDestinationList"), ["Budapest - Düsseldorf", "Budapest - Frankfurt",
        "Budapest - Dortmund", "Budapest - Stuttgart", "Birmingham - Bécs", "Birmingham - Budapest",
        "Brüsszel - Bécs", "Brüsszel - Budapest", "Tunisz - Bécs", "Tunisz - Budapest"]);


    //Fill up the part of day enums (both)
    fillButtonList(document.getElementById("outboundTime"), ["nincs", "reggel", "délelőtt", "délután", "este"]);
    fillButtonList(document.getElementById("inboundTime"), ["nincs", "reggel", "délelőtt", "délután", "este"]);

    //Fill up the flight type enum
    document.getElementById("inboundFlightType").disabled = true;;

    items = [document.getElementById("outboundFlightType"), document.getElementById("inboundFlightType")];
    optionArray = ["Normál (nem fapados)", "Fapados"];

    for (item of items) {
        for (currentOption of optionArray) {
            let optionItem = document.createElement('option'); // Listaelem létrehozása...
            optionItem.innerHTML = currentOption;
            item.appendChild(optionItem);
        }
    }


    //Fill up the passengers enum
    item = document.getElementById("emailList");
    optionArray = ["agnes.csontos@remygroup.com", "dirk.vanrompaey@remygroup.com", "mark.rahman@remygroup.com",
        "martin.klein@remygroup.com", "tamas.orosz@remygroup.com", "janos.szavo@remygroup.com",
        "zoltan.erdei@remygroup.com", "kris.mattheus@remygroup.com", "zsuzsa.szokoly@remygroup.com",
        "peter.hansen@remygroup.com", "sascha.wiebers@remygroup.com", "krisztian.bacso@remygroup.com",
        "fredrik.markholt@remygroup.com"];

    for (currentOption of optionArray.sort()) {
        let optionItem = document.createElement('option'); // Listaelem létrehozása...
        optionItem.innerHTML = currentOption;
        item.appendChild(optionItem);
    }

}


function fillOptionList (item, optionArray) {
    for (currentOption of optionArray) {
        let optionItem = document.createElement('option'); // Listaelem létrehozása...
        optionItem.innerHTML = currentOption;
        item.appendChild(optionItem);
    }
}


function fillButtonList (item, optionArray) {
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








