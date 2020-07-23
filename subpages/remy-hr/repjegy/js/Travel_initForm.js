
function initFields(){

    item = document.getElementById("emailList");
    optionArray = ["agnes.csontos@remygroup.com", "dirk.vanrompaey@remygroup.com", "fredrik.markholt@remygroup.com",
                    "janos.szavo@remygroup.com", "kris.mattheus@remygroup.com", "krisztian.bacso@remygroup.com",
                    "mark.rahman@remygroup.com", "martin.klein@remygroup.com", "peter.hansen@remygroup.com",
                    "sascha.wiebers@remygroup.com", "tamas.orosz@remygroup.com", "zoltan.erdei@remygroup.com",
                    "zsuzsa.szokoly@remygroup.com"]

    for (currentOption of optionArray) {
        let optionItem = document.createElement('option'); // Listaelem létrehozása...
        optionItem.innerHTML = currentOption;
        item.appendChild(optionItem);
    } 
    
    //Fill up the outbound flight enum
    item = document.getElementById("outboundDestinationList");
	optionArray = ["Düsseldorf - Budapest", "Frankfurt - Budapest", "Dortmund - Budapest", "Stuttgart - Budapest", "Bécs - Birmingham", 
	                 "Bécs - Brüsszel", "Bécs - Tunisz", "Budapest - Birmingham", "Budapest - Brüsszel", "Budapest - Tunisz"];
   
    for (currentOption of optionArray) {
        let optionItem = document.createElement('option'); // Listaelem létrehozása...
        optionItem.innerHTML = currentOption;
        item.appendChild(optionItem);
    }            


    //Fill up the return flight enum
    item = document.getElementById("inboundDestinationList");
	optionArray = ["Budapest - Düsseldorf", "Budapest - Frankfurt", "Budapest - Dortmund", "Budapest - Stuttgart", "Birmingham - Bécs",
                    "Birmingham - Budapest", "Brüsszel - Bécs", "Brüsszel - Budapest", "Tunisz - Bécs", "Tunisz - Budapest"];
   
    for (currentOption of optionArray) {
        let optionItem = document.createElement('option'); // Listaelem létrehozása...
        optionItem.innerHTML = currentOption;
        item.appendChild(optionItem);
    }   

 
    //Fill up the part of day enums (both)
    items = [document.getElementById("outboundTime"), document.getElementById("inboundTime")];
 	optionArray = ["nincs", "reggel", "délelőtt", "délután", "este"];

    for (item of items) {
        for (currentOption of optionArray) {
            let optionItem = document.createElement('option'); // Listaelem létrehozása...
            optionItem.innerHTML = currentOption;
            item.appendChild(optionItem);
        }
    }

    //Fill up the flight type enum
    //document.getElementById("inboundFlightType").style.disabled = true;

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