

const showDuctForm = document.querySelector(".showDuctForm");
const ductForm = document.querySelector(".ductForm");
const ductDescription = document.querySelector(".ductDescription");
const ductModalBtn = document.getElementById("ductModalBtn");


const showRepairForm = document.querySelector(".showRepairForm");
const repairForm = document.querySelector(".repairForm");
const repairDescription = document.querySelector(".repairDescription");


const showAssembleForm = document.querySelector(".showAssembleForm");
const assembleForm = document.querySelector(".assembleForm");
const assembleDescription = document.querySelector(".assembleDescription");

const showTmdeedForm = document.querySelector(".showTmdeedForm");
const tmdeedForm = document.querySelector(".tmdeedForm");
const tmdeedDescription = document.querySelector(".tmdeedDescription");



const openForm =(event,showForm,formBlock,formDescription)=>{    
    event.preventDefault();
    // showForm.addEventListener("click", (e) => {
  if (formBlock.style.opacity === "0") {
    console.log("if");
    // 👇️ this SHOWS the form
    formDescription.style.cssText = "opacity:0; transition:0.2s;";
    showForm.style.cssText = "opacity:0; transition:0.2s;";
    ductModalBtn.style.cssText = "opacity:0; transition:0.2s;";
    setTimeout(() => {
        formDescription.style.display = "none";
      ductModalBtn.style.display = "none";
    }, 250);
    setTimeout(() => {
        formBlock.style.display = "block";
    }, 300);
    setTimeout(() => {
        formBlock.style.cssText = "opacity:1; transition:0.2s;";
        showForm.innerText = "الغاء طلب";
        showForm.style.cssText = "opacity:1;";
    }, 350);
  } else if (formBlock.style.opacity === "1") {
    console.log("else if");
    // 👇️ this HIDES the form
    formBlock.style.cssText = "opacity:0 ; transition:0.4s;";
    showForm.style.cssText = "opacity:0 ; transition:0.4s;";
    setTimeout(() => {
        formBlock.style.display = "none";
        formDescription.style.cssText = "opacity:1; transition:0.5s;";
        showForm.style.cssText = "opacity:1 ; transition:0.4s;";
      ductModalBtn.style.cssText = "opacity:1 ; transition:0.4s;";
      showForm.innerText = "طلب خدمة";
      ductModalBtn.style.display = "block";
    }, 400);
  }
// }
// );
}


// Open Whatsapp and send the form details.
const genSend = (formId, formName, formMobile, formDetails) => {
    const category = document.getElementById(formId.id).value;
    const userName = document.getElementById(formName.id).value;
    const userMobile = document.getElementById(formMobile.id).value;
    const userDetails = document.getElementById(formDetails.id).value;
    // %0a = new line
    // %20 = space
    let urlNumber = `https://wa.me/+966580332559?text=الخدمة%20:%20${category}%0aالاسم%20:%20${userName}%0aرقم%20الجوال%20:%20${userMobile}%0aتفاصيل%20الطلب%20:%20${userDetails}%20`;
    window.open(urlNumber, "_blank");
  };