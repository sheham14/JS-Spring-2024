function $(selector){
    return document.querySelector(selector)
}


function resetForm(){
    $("#transport-id-input").value = "";
    $("#description-input").value = "";
    $("#cargo-weight-input").value = "";
}

totalWeight = 0;

function processCargo(){
    // const manifestHeading = document.createElement("h3");
    const boxCarID = $("#box-car-id-input").value;
    const totalCargoWeight = $("#total-weight-input").value;
    const transportID = $("#transport-id-input").value;
    const description = $("#description-input").value;
    const cargoWeight = parseInt($("#cargo-weight-input").value);
    totalWeight += cargoWeight; 
    // const manifestHeadingText = document.createTextNode("Cargo Box Car Manifest for Box Car " + boxCarID);
    // manifestHeading.appendChild(manifestHeadingText)
    $("#manifest-heading").textContent = "Cargo Box Car Manifest for Box Car " + boxCarID;
    $("#manifest-table").className = "";
    const newRow = document.createElement("tr");
    const newDataTransportId = document.createElement("td");
    const newDataDescription = document.createElement("td");
    const newDataCargoWeight = document.createElement("td");
    newDataTransportId.textContent = transportID;
    newDataDescription.textContent = description;
    newDataCargoWeight.textContent = cargoWeight;
    newRow.appendChild(newDataTransportId)
    newRow.appendChild(newDataDescription)
    newRow.appendChild(newDataCargoWeight)
    const firstRow = $("tr");
    const parentRow = firstRow.parentNode;
    parentRow.after(newRow)
    $("#total-weight-text").textContent = "Total Cargo Weight: " + totalWeight;
    totalCargoWeight.value = totalWeight
    // resetForm();
}


// GSX2037s01	Lamp Oil K1 Drum	10000
// MED2033s02	Medical MX34111	16000
// MED2033s01	Medical MX45000	16000
// TXL2031s02	30,000 Coats	30000
// TXL2031s01	50,000 Shirts	25000