
    const showForm = document.querySelector(".showForm");
    const form = document.querySelector(".form");
    const contentDescription = document.querySelector(".contentDescription");


    showForm.addEventListener('click', (e) => {        
        e.preventDefault();
        if (form.style.opacity === '0') {
            console.log('if');
            // 👇️ this SHOWS the form
            contentDescription.style.cssText = 'opacity:0; transition:0.2s;';
            showForm.style.cssText = 'opacity:0; transition:0.2s;';
            setTimeout(() => {
                contentDescription.style.display = 'none';
            }, 250);
            setTimeout(() => {
                form.style.display = 'block';
            }, 300);
            setTimeout(()=>{
                form.style.cssText = 'opacity:1; transition:0.2s;';
                showForm.innerText = "الغاء طلب";
                showForm.style.cssText = 'opacity:1;';
            },350)
            
            
        } else if(form.style.opacity === '1') {
            console.log('else if');
            // 👇️ this HIDES the form
                form.style.cssText = 'opacity:0 ; transition:0.4s;';
                showForm.style.cssText = 'opacity:0 ; transition:0.4s;';
                setTimeout(() => {
                    form.style.display ='none';
                    contentDescription.style.cssText = 'opacity:1; transition:0.5s;';
                    showForm.style.cssText = 'opacity:1 ; transition:0.4s;';
                    showForm.innerText = "طلب خدمة";
                }, 400);
        }
      });
    ///////
      if (form.style.opacity === '0'){
        form.style.display = 'none';
    }
    

    
    const showForm2 = document.querySelector(".showForm2");
    const form2 = document.querySelector(".form2");
    const contentDescription2 = document.querySelector(".contentDescription2");
    showForm2.addEventListener('click', (e) => {        
        e.preventDefault();
        if (form2.style.opacity === '0') {
            console.log('if');
            // 👇️ this SHOWS the form
            contentDescription2.style.cssText = 'opacity:0; transition:0.2s;';
            showForm2.style.cssText = 'opacity:0; transition:0.2s;';
            setTimeout(() => {
                contentDescription2.style.display = 'none';
            }, 250);
            setTimeout(() => {
                form2.style.display = 'block';
            }, 300);
            setTimeout(()=>{
                form2.style.cssText = 'opacity:1; transition:0.2s;';
                showForm2.innerText = "الغاء طلب";
                showForm2.style.cssText = 'opacity:1;';
            },350)
            
            
        } else if(form2.style.opacity === '1') {
            console.log('else if');
            // 👇️ this HIDES the form
                form2.style.cssText = 'opacity:0 ; transition:0.4s;';
                showForm2.style.cssText = 'opacity:0 ; transition:0.4s;';
                setTimeout(() => {
                    form2.style.display ='none';
                    contentDescription2.style.cssText = 'opacity:1; transition:0.5s;';
                    showForm2.style.cssText = 'opacity:1 ; transition:0.4s;';
                    showForm2.innerText = "طلب خدمة";
                }, 400);
        }
      });
    ///////
      if (form.style.opacity === '0'){
        form.style.display = 'none';
    }
    const showForm3 = document.querySelector(".showForm3");
    const form3 = document.querySelector(".form3");
    const contentDescription3 = document.querySelector(".contentDescription3");

    showForm3.addEventListener('click', (e) => {        
        e.preventDefault();
        if (form3.style.opacity === '0') {
            console.log('if');
            // 👇️ this SHOWS the form
            contentDescription3.style.cssText = 'opacity:0; transition:0.2s;';
            showForm3.style.cssText = 'opacity:0; transition:0.2s;';
            setTimeout(() => {
                contentDescription3.style.display = 'none';
            }, 250);
            setTimeout(() => {
                form3.style.display = 'block';
            }, 300);
            setTimeout(()=>{
                form3.style.cssText = 'opacity:1; transition:0.2s;';
                showForm3.innerText = "الغاء طلب";
                showForm3.style.cssText = 'opacity:1;';
            },350)
            
            
        } else if(form3.style.opacity === '1') {
            console.log('else if');
            // 👇️ this HIDES the form
                form3.style.cssText = 'opacity:0 ; transition:0.4s;';
                showForm3.style.cssText = 'opacity:0 ; transition:0.4s;';
                setTimeout(() => {
                    form3.style.display ='none';
                    contentDescription3.style.cssText = 'opacity:1; transition:0.5s;';
                    showForm3.style.cssText = 'opacity:1 ; transition:0.4s;';
                    showForm3.innerText = "طلب خدمة";
                }, 400);
        }
      });
    ///////
      if (form.style.opacity === '0'){
        form.style.display = 'none';
    }
    

    
    // FORM Request Maintanence 


    // let category;
    // let uName;
    // let mobile;
    // let details;
    
    const genSend = (formId,formName,formMobile,formDetails) => {    

        
        const category = document.getElementById(formId.id).value;
        const userName = document.getElementById(formName.id).value;
        const userMobile = document.getElementById(formMobile.id).value;
        const userDetails = document.getElementById(formDetails.id).value;
        
      // %0a = new line
      // %20 = space
      let urlNumber = `https://wa.me/+966580332559?text=الخدمة%20:%20${category}%0aالاسم%20:%20${userName}%0aرقم%20الجوال%20:%20${userMobile}%0aتفاصيل%20الطلب%20:%20${userDetails}%20`;
      window.open(urlNumber, "_blank");
    
    }


    // let category;
    // let uName;
    // let phone;
    // let details;
    
    // const sendRepair = () => {
    //   const repair = document.getElementById("repair");
    //   const repairName = document.getElementById("repairName");
    //   const repairPhone = document.getElementById("repairPhone");
    //   const repairDetails = document.getElementById("repairDetails");
    //   category = repair.value;
    //   name = repairName.value;
    //   phone = repairPhone.value;
    //   details = repairDetails.value;
    //   // %0a = new line
    //   // %20 = space
    //   let urlNumber = `https://wa.me/+966580332559?text=الخدمة%20:%20${category}%0aالاسم%20:%20${name}%0aرقم%20الجوال%20:%20${phone}%0aتفاصيل%20الطلب%20:%20${details}%20`;
    //   window.open(urlNumber, "_blank");
    // };

    // const sendAssemble = () => {
    //   const assemble = document.getElementById("assemble");
    //   const assembleName = document.getElementById("assembleName");
    //   const assemblePhone = document.getElementById("assemblePhone");
    //   const assembleDetails = document.getElementById("assembleDetails");
    //   category = assemble.value;
    //   name = assembleName.value;
    //   phone = assemblePhone.value;
    //   details = assembleDetails.value;
    //   // %0a = new line
    //   // %20 = space
    //   let urlNumber = `https://wa.me/+966580332559?text=الخدمة%20:%20${category}%0aالاسم%20:%20${name}%0aرقم%20الجوال%20:%20${phone}%0aتفاصيل%20الطلب%20:%20${details}%20`;
    //   window.open(urlNumber, "_blank");
    // };