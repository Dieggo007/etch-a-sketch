"use strict";

const container = document.querySelector(".container");
const btnCreateGrid = document.querySelector(".create-grid");

function createRow(length) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < length; i++) {
        const rowItem = document.createElement("div");
        rowItem.setAttribute("data-filter", 100);
        rowItem.classList.add("row-item");  
        row.append(rowItem);
    }
    container.append(row);
}

function createGrid(length) {
    for (let i = 0; i < length; i++) createRow(length);
}

const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

const darkenElementColor = (target) => {
    const filter = parseInt(target.getAttribute("data-filter"));
    target.style.filter = `brightness(${filter}%)`;
    target.setAttribute("data-filter", filter - 10);
}

const onMouseover = (e) => {
    if (!(e.target.classList.contains("row-item"))) return;
    if (e.target.classList.contains("colored")) {
        darkenElementColor(e.target);
        return;
    }
    e.target.style.backgroundColor = getRandomColor();
    e.target.style.borderColor = "transparent"; 
    e.target.classList.add("colored");
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

