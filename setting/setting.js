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

// nav bar
function back() {
    window.open("", "_self");
}
function openHome() {
    window.open("../home/homepage.html", "_self");
}
function openOrder() {
    window.open("../order/order.html", "_self");
}
function openRecipe() {
    window.open("../recipe/recipe.html", "_self");
}
function openSetting() {
    window.open("../setting/setting.html", "_self");
} 
