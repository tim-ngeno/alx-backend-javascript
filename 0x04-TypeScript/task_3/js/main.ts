/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
const CRUD = require('./crud.js');

// Create a row object
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

// Insert row
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Insert row {firstName: "${row.firstName}", lastName: "${row.lastName}"}`);

// Update rowelement
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`Update row ${newRowID} {firstName: "${row.firstName}", lastName: "${row.lastName}", age: 23}`);

// Delete row
CRUD.deleteRow(newRowID);
console.log(`Delete row id ${newRowID}`);
