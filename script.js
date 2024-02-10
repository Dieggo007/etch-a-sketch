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
