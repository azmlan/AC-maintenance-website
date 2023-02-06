const showDuctForm = document.querySelector(".showDuctForm");
const ductForm = document.querySelector(".ductForm");
const ductDescription = document.querySelector(".ductDescription");
const ductModalBtn = document.getElementById("ductModalBtn");

showDuctForm.addEventListener("click", (e) => {
  e.preventDefault();
  if (ductForm.style.opacity === "0") {
    console.log("if");
    // 👇️ this SHOWS the form
    ductDescription.style.cssText = "opacity:0; transition:0.2s;";
    showDuctForm.style.cssText = "opacity:0; transition:0.2s;";
    ductModalBtn.style.cssText = "opacity:0; transition:0.2s;";
    setTimeout(() => {
      ductDescription.style.display = "none";
      ductModalBtn.style.display = "none";
    }, 250);
    setTimeout(() => {
      ductForm.style.display = "block";
    }, 300);
    setTimeout(() => {
      ductForm.style.cssText = "opacity:1; transition:0.2s;";
      showDuctForm.innerText = "الغاء طلب";
      showDuctForm.style.cssText = "opacity:1;";
    }, 350);
  } else if (ductForm.style.opacity === "1") {
    console.log("else if");
    // 👇️ this HIDES the form
    ductForm.style.cssText = "opacity:0 ; transition:0.4s;";
    showDuctForm.style.cssText = "opacity:0 ; transition:0.4s;";
    setTimeout(() => {
      ductForm.style.display = "none";
      ductDescription.style.cssText = "opacity:1; transition:0.5s;";
      showDuctForm.style.cssText = "opacity:1 ; transition:0.4s;";
      ductModalBtn.style.cssText = "opacity:1 ; transition:0.4s;";
      showDuctForm.innerText = "طلب خدمة";
      ductModalBtn.style.display = "block";
    }, 400);
  }
});
///////
if (ductForm.style.opacity === "0") {
  ductForm.style.display = "none";
}
const showForm = document.querySelector(".showForm");
const form = document.querySelector(".form");
const contentDescription = document.querySelector(".contentDescription");

showForm.addEventListener("click", (e) => {
  e.preventDefault();
  if (form.style.opacity === "0") {
    console.log("if");
    // 👇️ this SHOWS the form
    contentDescription.style.cssText = "opacity:0; transition:0.2s;";
    showForm.style.cssText = "opacity:0; transition:0.2s;";
    setTimeout(() => {
      contentDescription.style.display = "none";
    }, 250);
    setTimeout(() => {
      form.style.display = "block";
    }, 300);
    setTimeout(() => {
      form.style.cssText = "opacity:1; transition:0.2s;";
      showForm.innerText = "الغاء طلب";
      showForm.style.cssText = "opacity:1;";
    }, 350);
  } else if (form.style.opacity === "1") {
    console.log("else if");
    // 👇️ this HIDES the form
    form.style.cssText = "opacity:0 ; transition:0.4s;";
    showForm.style.cssText = "opacity:0 ; transition:0.4s;";
    setTimeout(() => {
      form.style.display = "none";
      contentDescription.style.cssText = "opacity:1; transition:0.5s;";
      showForm.style.cssText = "opacity:1 ; transition:0.4s;";
      showForm.innerText = "طلب خدمة";
    }, 400);
  }
});
///////
if (form.style.opacity === "0") {
  form.style.display = "none";
}

const showForm2 = document.querySelector(".showForm2");
const form2 = document.querySelector(".form2");
const contentDescription2 = document.querySelector(".contentDescription2");
showForm2.addEventListener("click", (e) => {
  e.preventDefault();
  if (form2.style.opacity === "0") {
    console.log("if");
    // 👇️ this SHOWS the form
    contentDescription2.style.cssText = "opacity:0; transition:0.2s;";
    showForm2.style.cssText = "opacity:0; transition:0.2s;";
    setTimeout(() => {
      contentDescription2.style.display = "none";
    }, 250);
    setTimeout(() => {
      form2.style.display = "block";
    }, 300);
    setTimeout(() => {
      form2.style.cssText = "opacity:1; transition:0.2s;";
      showForm2.innerText = "الغاء طلب";
      showForm2.style.cssText = "opacity:1;";
    }, 350);
  } else if (form2.style.opacity === "1") {
    console.log("else if");
    // 👇️ this HIDES the form
    form2.style.cssText = "opacity:0 ; transition:0.4s;";
    showForm2.style.cssText = "opacity:0 ; transition:0.4s;";
    setTimeout(() => {
      form2.style.display = "none";
      contentDescription2.style.cssText = "opacity:1; transition:0.5s;";
      showForm2.style.cssText = "opacity:1 ; transition:0.4s;";
      showForm2.innerText = "طلب خدمة";
    }, 400);
  }
});
///////
if (form.style.opacity === "0") {
  form.style.display = "none";
}
const showForm3 = document.querySelector(".showForm3");
const form3 = document.querySelector(".form3");
const contentDescription3 = document.querySelector(".contentDescription3");

showForm3.addEventListener("click", (e) => {
  e.preventDefault();
  if (form3.style.opacity === "0") {
    console.log("if");
    // 👇️ this SHOWS the form
    contentDescription3.style.cssText = "opacity:0; transition:0.2s;";
    showForm3.style.cssText = "opacity:0; transition:0.2s;";
    setTimeout(() => {
      contentDescription3.style.display = "none";
    }, 250);
    setTimeout(() => {
      form3.style.display = "block";
    }, 300);
    setTimeout(() => {
      form3.style.cssText = "opacity:1; transition:0.2s;";
      showForm3.innerText = "الغاء طلب";
      showForm3.style.cssText = "opacity:1;";
    }, 350);
  } else if (form3.style.opacity === "1") {
    console.log("else if");
    // 👇️ this HIDES the form
    form3.style.cssText = "opacity:0 ; transition:0.4s;";
    showForm3.style.cssText = "opacity:0 ; transition:0.4s;";
    setTimeout(() => {
      form3.style.display = "none";
      contentDescription3.style.cssText = "opacity:1; transition:0.5s;";
      showForm3.style.cssText = "opacity:1 ; transition:0.4s;";
      showForm3.innerText = "طلب خدمة";
    }, 400);
  }
});
///////
if (form.style.opacity === "0") {
  form.style.display = "none";
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
