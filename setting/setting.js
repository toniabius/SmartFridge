function decFridge() {
    let tempElt = document.getElementById("fridgeTemp")
    let currTemp = Number(tempElt.innerText)
    if (currTemp > 25) {
        tempElt.innerText = Number(tempElt.innerText) - 1
    }
}

function decFreezer() {
    let tempElt = document.getElementById("freezerTemp")
    let currTemp = Number(tempElt.innerText)
    if (currTemp > -10) {
        tempElt.innerText = Number(tempElt.innerText) - 1
    }
}

function incFridge() {
    let tempElt = document.getElementById("fridgeTemp")
    let currTemp = Number(tempElt.innerText)
    if (currTemp < 45) {
        tempElt.innerText = Number(tempElt.innerText) + 1
    }
}

function incFreezer() {
    let tempElt = document.getElementById("freezerTemp")
    let currTemp = Number(tempElt.innerText)
    if (currTemp < 5) {
        tempElt.innerText = Number(tempElt.innerText) + 1
    }
}

function createProfile() {
    let name = document.querySelector("#name")
    let nameVal = name.value;
    if (nameVal.length == 0) {
        alert("Name required")
    } else {
        const container = document.getElementById("profiles");
        const profile = document.createElement("figure");
        profile.innerHTML = `<img class="profile" src="/graphics/profile-avatar.png" alt="profile-avatar"/><figcaption>${nameVal}</figcaption>`;
        container.insertBefore(profile, container.firstChild);
    }
    document.getElementById("profile-form").reset()
}

// profile creation modal
window.onload = function(){
    let modalBtn = document.getElementById("newProfileButton")
    modalBtn.onclick = function() {
        document.getElementById("createProfileModal").style.display = "block";
    };

    let closeBtns = [...document.querySelectorAll(".close")];
    closeBtns.forEach(function(btn) {
        btn.onclick = function() {
            let modal = btn.closest('.modal');
            modal.style.display = "none";
        }
    });

    window.onclick = function(event) {
        if(event.target.className === "modal") {
            event.target.style.display = "none";
        }
    }
}
