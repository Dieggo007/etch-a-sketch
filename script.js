"use strict";

const container = document.querySelector(".container");
const btnCreateGrid = document.querySelector(".create-grid");

function createRow(length) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < length; i++) {
        const rowItem = document.createElement("div");
        rowItem.classList.add("row-item");  
        row.append(rowItem);
    }
    container.append(row);
}

function createGrid(length) {
    for (let i = 0; i < length; i++) createRow(length);
}

const onMouseover = (e) => {
    if (e.target.classList.contains("row-item")) {
        e.target.style.backgroundColor = "black";
    }
}

const createNewGrid = () => {
    const length = prompt("How large do you want your grid?(max: 100)");
    if (length > 100 || length < 0) {
        alert("You have introduced a wrong value, please try again");
        return;
    }
    container.replaceChildren();
    createGrid(length);
}

container.addEventListener("mouseover", onMouseover); 

btnCreateGrid.addEventListener("click", createNewGrid);

createGrid(20);

