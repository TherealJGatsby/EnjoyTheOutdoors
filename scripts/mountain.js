document.addEventListener("DOMContentLoaded", () => {
    const mountainForm = document.getElementById("mountainForm");
    mountainForm.onchange = filterMountains;

    populateMountains();
})

function populateMountains() {

    const mountainList = document.getElementById("mountainList");

    for (let mountain of mountainsArray) {

        // console.log(mountain)
        const option = new Option(mountain.name)
        mountainList.appendChild(option)
    }
}

function filterMountains() {

    const mountain = document.getElementById("mountainList").value;

    // mountain selected from array
    let filteredMountains = mountainsArray;
    if (mountain != "Select Mountain") {
        filteredMountains = filteredMountains.find(f => f.name == mountain)
    }
    console.log(filteredMountains);
    displayMountains(filteredMountains);
}

function displayMountains(mountain) {

    const mountainsContainer = document.querySelector("#mountainName")

    // clear all elements
    mountainsContainer.innerHTML = "";

    displayMountain(mountain, mountainsContainer);

}

function displayMountain(mountain, parentDiv) {
    // create a div for each mountain

    const mountainDiv = document.createElement("div");
    mountainDiv.classList.add("card");
    mountainDiv.classList.add("mb-3");
    parentDiv.appendChild(mountainDiv);

    const cardHeader = document.createElement("div")
    cardHeader.classList.add("card-header")
    cardHeader.innerText = "Name: " + mountain.name;
    mountainDiv.appendChild(cardHeader);

    const cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    mountainDiv.appendChild(cardBody);

    addDescription(mountain, cardBody);
    addElevation(mountain, cardBody);
    addEffort(mountain, cardBody);
    addCoordinates(mountain, cardBody);
    addImage(mountain, cardBody);
}

function addDescription(mountain, parentDiv) {
    const mountainDescription = document.createElement("p");
    mountainDescription.innerText = "Description: " + mountain.desc;
    parentDiv.appendChild(mountainDescription);
}

function addElevation(mountain, parentDiv) {
    const mountainElevation = document.createElement("p");
    mountainElevation.innerText = "Elevation: " + mountain.elevation;
    parentDiv.appendChild(mountainElevation);
}

function addEffort(mountain, parentDiv) {
    const mountainEffort = document.createElement("p");
    mountainEffort.innerText = "Effort: " + mountain.effort;
    parentDiv.appendChild(mountainEffort);
}

// ask Gregor for help
// function addCoordinates(mountain, parentDiv) {
//     const mountainCoordinates = document.createElement("p");
//     mountainCoordinates.innerText = "Coordinates: " + mountain.coords.lat.lng;
//     parentDiv.appendChild(mountainCoordinates);
// }

// function addImage(mountain, parentDiv) {
//     const mountainImage = document.createElement("p");
//     mountainImage.innerText = "Image: " + mountain.img;
//     parentDiv.appendChild(mountainImage);
// }