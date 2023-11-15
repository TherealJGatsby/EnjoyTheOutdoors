document.addEventListener("DOMContentLoaded", () => {
    const stateSelected = document.getElementById("stateSelected");
    stateSelected.onchange = filterStates;
    const parkType = document.getElementById("parkType");
    parkType.onchange = filterStates;

    populateStates();
    populateParkType();
})

function populateStates() {
    const statesList = document.getElementById("statesList");

    for (let state of locationsArray) {

        // console.log(state)
        const option = new Option(state)
        statesList.appendChild(option)
    }
}

function populateParkType() {
    const parkType = document.getElementById("parkType");

    for (let park of parkTypesArray) {
        const option = new Option(park)
        parkType.appendChild(option)
    }


}

function filterStates() {
    const state = document.getElementById("statesList").value;
    const parkType = document.getElementById("parkType").value;
    // console.log(parkType)
    // state selected from array
    let filteredStates = nationalParksArray;
    if (state != "Select state") {
        filteredStates = filteredStates.filter(f => f.State == state)
    }
    console.log(filteredStates);
    if (parkType != "Select type") {
        filteredStates = filteredStates.filter(f => f.LocationName.includes(parkType));
    }

    console.log(filteredStates);

    displayStates(filteredStates);

}

function displayStates(filteredStates) {

    const statesContainer = document.querySelector("#stateName")
    statesContainer.classList.add("card")
    // clear all elements
    statesContainer.innerHTML = "";

    filteredStates.forEach(state => {

        displayName(state, statesContainer);
        addAddress(state, statesContainer);
        addCity(state, statesContainer);
        addState(state, statesContainer);
        addZipCode(state, statesContainer);
        addPhone(state, statesContainer);
        addFax(state, statesContainer);
        addLatitude(state, statesContainer);
        addLongitude(state, statesContainer);

    });

    console.log
}

function displayName(state, parentDiv) {
    // create a div for each state
    const stateDiv = document.createElement("div");
    stateDiv.classList.add("card");
    stateDiv.innerText = "Name: " + state.LocationName;
    // add product to the container
    parentDiv.appendChild(stateDiv);

}

function addAddress(state, parentDiv) {
    const parkAddress = document.createElement("p");
    parkAddress.innerText = "Address: " + state.Address;
    parentDiv.appendChild(parkAddress);


}

function addCity(state, parentDiv) {
    const parkCity = document.createElement("p");
    parkCity.innerText = "City: " + state.City;

    parentDiv.appendChild(parkCity);
}

function addState(state, parentDiv) {
    const parkState = document.createElement("p");
    parkState.innerText = "State: " + state.State;
    parentDiv.appendChild(parkState);
}

function addZipCode(state, parentDiv) {
    const parkZipCode = document.createElement("p");
    parkZipCode.innerText = "Zip Code: " + state.ZipCode;
    parentDiv.appendChild(parkZipCode);
}

function addPhone(state, parentDiv) {
    const parkPhone = document.createElement("p");
    parkPhone.innerText = "Phone number: " + state.Phone;
    parentDiv.appendChild(parkPhone);
}

function addFax(state, parentDiv) {
    const parkFax = document.createElement("p");
    parkFax.innerText = "Fax number: " + state.Fax;
    parentDiv.appendChild(parkFax);
}

function addLatitude(state, parentDiv) {
    const parkLatitude = document.createElement("p");
    parkLatitude.innerText = "Latitude: " + state.Latitude;
    parentDiv.appendChild(parkLatitude);
}

function addLongitude(state, parentDiv) {
    const parkLongitude = document.createElement("p");
    parkLongitude.innerText = "Longitude: " + state.Longitude;
    parentDiv.appendChild(parkLongitude);
}


