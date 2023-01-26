const showForm = document.getElementsByClassName('showForm')[0];
const closeForm = document.getElementsByClassName('closeForm')[0];
const form = document.getElementsByClassName('form')[0];
const contentDescription = document.getElementsByClassName("contentDescription")[0];

showForm.addEventListener('click', () => {
    if (form.style.opacity === '0') {
        console.log('if');
        // 👇️ this SHOWS the form
        contentDescription.style.cssText = 'opacity:0; transition:0.2s;';
        showForm.style.cssText = 'opacity:0; transition:0.2s;';
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