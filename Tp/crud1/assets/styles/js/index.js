//Gestion de la navbar

const theNav = document.getElementById("nav");
btn.addEventListener("click", () => {
    theNav.classList.toggle("active");


});

// create modal

const createBtn = document.getElementById("create-btn");
const modalContainer = document.querySelector(".modal-container");
const form = document.querySelector("form");
const modal = document.querySelector(".modal");

createBtn.addEventListener(("click"), () => {
    modalContainer.classList.add("active");
});

window.addEventListener(("click"), (e) => {
    if (e.target == modalContainer) {
        modalContainer.classList.remove("active");
    }
});

// registration

var selectedRow = null

let onFormSubmit = () => {

}

form.addEventListener(("submit"), (e) => {
    e.preventDefault();
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
});


let readFormData = () => {
    var formData = {};
    formData["theName"] = document.getElementById("name").value;
    formData["theFunction"] = document.getElementById("function").value;
    formData["theSalary"] = document.getElementById("salary").value;
    return formData;
}

let insertNewRecord = (data) => {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    console.log(table);
    var newRow = table.insertRow(table.length);
    console.log(newRow);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.theName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.theFunction;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.theSalary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a>Edit</a>`
    cell5 = newRow.insertCell(3);
    cell5.innerHTML = `<a>Delete</a>`;

}

let resetForm = () => {
    document.getElementById("name").value = "";
    document.getElementById("function").value = "";
    document.getElementById("salary").value = "";
    selectedRow = null;
}

let validate = () => {
    isValid = true;
    if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

let onEdit = (td) => {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
let updateRecord = (formData) => {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}

let onDelete = () => {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}