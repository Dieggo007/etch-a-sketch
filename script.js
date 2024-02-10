"use strict";

const container = document.querySelector(".container");

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

container.addEventListener("mouseover", onMouseover); 

createGrid(20);

