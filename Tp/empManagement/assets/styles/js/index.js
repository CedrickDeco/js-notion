let theId = document.getElementById("id");
let theName = document.getElementById("name");
let theLastName = document.getElementById("last-name");
let theEmail = document.getElementById("email");
let theOfficeCode = document.getElementById("office-code");
let theJobTitle = document.getElementById("job-title");
let theProfilePic = document.getElementById("profile-pic");
let theUploadPic = document.getElementById("upload-field");
let registerBtn = document.getElementById("register-btn");
let updateBtn = document.getElementById("update-btn");
let registerForm = document.getElementById("register-form");

userData = [];
let dataUser;
let imgURL;
registerBtn.disabled = false;
updateBtn.disabled = true;

/**Start opening modal*/

const createBtn = document.getElementById("create-btn");
const clearBtn = document.getElementById("clear-btn");
const closeBtn = document.getElementById("close-btn");
const createModalContainer = document.getElementById("create-modal-container");

createBtn.addEventListener(("click"), () => {
    createModalContainer.classList.add("active");
    registerForm.reset();
    registerBtn.disabled = false;
    updateBtn.disabled = true;
    theProfilePic.src = "./assets/img/avatar2.png";
});
closeBtn.addEventListener(("click"), () => {
    createModalContainer.classList.remove("active");
});

/**End opening modal*/

/**Start employe registration*/

/**Start image upload */

theUploadPic.addEventListener("change", (e) => {
    if (theUploadPic.files[0].size < 1000000) {
        let fReader = new FileReader();
        fReader.addEventListener("load", (e) => {
            imgURL = e.target.result
            theProfilePic.src = imgURL;
        })
        fReader.readAsDataURL(theUploadPic.files[0]);
    } else {
        alert("le fichier est volumineux")
    }
});

/**End image upload */

const saveData = () => {
    userData.push({
        id: theId.value,
        name: theName.value,
        lastName: theLastName.value,
        email: theEmail.value,
        officeCode: theOfficeCode.value,
        jobTitle: theJobTitle.value,
        profilePic: imgURL == undefined ? "./assets/img/avatar2.png" : imgURL
    });
    dataString = JSON.stringify(userData);
    localStorage.setItem("userData", dataString);
    swal("Good job!", "Registration success!", "success");
};

registerBtn.addEventListener(("click"), (e) => {
    e.preventDefault();
    saveData();
    displayData();
    registerForm.reset();
    theProfilePic.src = "./assets/img/avatar2.png"
    closeBtn.click();

});

/**End emloye registration */


/**Affichage des données */

const tableData = document.getElementById("table-data");

const displayData = () => {
    if (localStorage.getItem("userData")) {
        dataUser = JSON.parse(localStorage.getItem("userData"));
        tableData.innerHTML = "";
        dataUser.forEach((data, index) => {
            //console.log(data.profilePic);
            tableData.innerHTML += `
      <tr index=${index}>
        <td>${index + 1}</td>
        <td><img src=${data.profilePic} style="height: 50px; width: 50px;" alt=""></td>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.lastName}</td>
        <td>${data.email}</td>
        <td>${data.officeCode}</td>
        <td>${data.jobTitle}</td>
        <td>
          <button class="edit-btn" >
            <i class="fa-solid fa-eye"></i>
          </button>
          <button class="del-btn">
            <i class="fa-solid fa-trash" ></i>
          </button>
        </td>
      </tr>
    `;
        });

    };

    /**delete data */

    let i;
    let delBtn = document.querySelectorAll(".del-btn");

    for (i = 0; i < delBtn.length; i++) {
        let t = i;
        delBtn[t].addEventListener("click", (e) => {
            let tr = e.target.parentElement.parentElement.parentElement;
            let id = tr.getAttribute("index");
            swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this imaginary file!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        userData.splice(id, 1);
                        localStorage.setItem("userData", JSON.stringify(userData));
                        tr.remove();
                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                        });
                    } else {
                        swal("Your imaginary file is safe!");
                    }
                });
        })
    }
    /**end deleting data */

    /**Start updating data */

    let editBtn = document.querySelectorAll(".edit-btn");
    for (i = 0; i < editBtn.length; i++) {
        let k = i;
        editBtn[k].addEventListener(("click"), (e) => {
            let tr = e.target.parentElement.parentElement.parentElement;
            let td = tr.getElementsByTagName("TD");
            let index = tr.getAttribute("index");
            let imgTag = td[1].getElementsByTagName("IMG");
            let profilePic = imgTag[0].src;
            let id = td[2].innerHTML;
            let name = td[3].innerHTML;
            let lastName = td[4].innerHTML;
            let email = td[5].innerHTML;
            let officeCode = td[6].innerHTML;
            let jobTitle = td[7].innerHTML;
            createModalContainer.classList.add("active");
            registerBtn.disabled = true;
            updateBtn.disabled = false;
            theId.value = id;
            theName.value = name;
            theLastName.value = lastName
            theEmail.value = email;
            theOfficeCode.value = officeCode;
            theJobTitle.value = jobTitle;
            theProfilePic.src = profilePic;
            registerBtn.disabled = true;
            updateBtn.disabled = false;
            updateBtn.addEventListener(("click"), (e) => {
                e.preventDefault();
                userData[index] = {
                    id: theId.value,
                    name: theName.value,
                    lastName: theLastName.value,
                    email: theEmail.value,
                    officeCode: theOfficeCode.value,
                    jobTitle: theJobTitle.value,
                    profilePic: theUploadPic.value == "" ? profilePic : imgURL
                }
                localStorage.setItem("userData", JSON.stringify(userData));
                displayData();
                closeBtn.click();
            })
        })
    }

    /**End updating data */
};
displayData();
















// registerBtn.addEventListener(("click"), (e) => {
//     e.preventDefault();
//     registrationData();
//     getDataFromLocal();
//     registerForm.reset("") /** cette fonction permet de vider les champs du formulaire en apres validation de ce dernier  */
//         //resetForm(); /** cette fonction permet aussi de vider les champs du formulaire mais j'ai choisis d'utiliser celle au dessus */
//         //createModalContainer.classList.remove("active");
//     closeBtn.click(); /**c'est une autre maniere de fermer le modal.Ici elle se fait juste en appelant la fonction click() sur le boutton closeBtn. la ligne du haut fait la même chose */
// });


// const registrationData = () => {
//     userData.push({
//         id: theId.value,
//         name: theName.value,
//         lastName: theLastName.value,
//         email: theEmail.value,
//         officeCode: theOfficeCode.value,
//         jobTitle: theJobTitle.value
//     });
//     let userString = JSON.stringify(userData);
//     localStorage.setItem("userData", userString);
// }
// if (localStorage.getItem("userData") != null) {
//     dataUser = JSON.parse(localStorage.getItem("userData"));
// }
// // const resetForm = () => {
// //     document.getElementById("id").value = null;
// //     document.getElementById("name").value = null;
// //     document.getElementById("last-name").value = null;
// //     document.getElementById("email").value = null;
// //     document.getElementById("office-code").value = null;
// //     document.getElementById("job-title").value = null;
// // }

// //Affichage des données
// tableData = document.getElementById("table-data");



// const getDataFromLocal = () => {
//     dataUser.forEach((item, index) => {
//         console.log(item.lastName);
//         tableData.innerHTML += `
//       <tr index='${index}'>
//                     <td>${index+1}</td>
//                     <td>${index}</td>
//                     <td>${item.id}</td>
//                     <td>${item.name}</td>
//                     <td>${item.lastName}</td>
//                     <td>${item.email}</td>
//                     <td>${item.officeCode}</td>
//                     <td>${item.jobTitle}</td>
//                     <td>
//                         <button>
//                                 <i class="fa-solid fa-eye"></i>
//                             </button>
//                         <button>
//                                 <i class="fa-solid fa-trash"></i>
//                             </button>
//                     </td>
//         `
//     })
// }
// getDataFromLocal();