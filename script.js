const inputText = document.getElementById("input");
const addButton = document.getElementById("add");
const entries = document.getElementById("entries");

addButton.addEventListener("click",insertEntry);


function insertEntry() {
    if (inputText.value) {
        const entry = document.createElement("div");
        entry.classList.add("entry");
        entry.addEventListener("click",changeEntryState)
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

function changeEntryState(e) {
    if (e.target.classList.contains("stroked")) {
        e.target.classList.remove("stroked");
    } else {
        e.target.classList.add("stroked");
    }
}

