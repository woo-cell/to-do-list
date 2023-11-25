const inputText = document.getElementById("input");
const addButton = document.getElementById("add");
const entries = document.getElementById("entries");

addButton.addEventListener("click",insertEntry);


function insertEntry() {
    if (inputText.value) {
        const entry = document.createElement("div");
        entry.classList.add("entry");
        entry.addEventListener("click",changeLook)
        const para = document.createElement("p");
        para.textContent = inputText.value;
        entry.appendChild(para);
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click",removeEntry);
        entry.appendChild(removeButton);
        entries.appendChild(entry);
        resetInputText();
    }
}

function resetInputText() {
    inputText.value = "";
}

function removeEntry(e) {
    e.target.parentElement.remove();
}


function changeLook(e) {
    e.target.classList.add("stroked");
}
