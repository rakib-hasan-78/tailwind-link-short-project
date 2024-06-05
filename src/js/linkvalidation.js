const linkForm = document.getElementById('link-form');
const linkInput = document.getElementById('link-input');
const inputBtn = document.getElementById('input-btn');
const errorMsg = document.getElementById('error-msg');


// link validity checker---->

const validChecker=(str)=>{
    let pattern = /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|(\d{1,3}\.){3}\d{1,3}|localhost)(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[a-z\d_-]*)?$/i;

    return !!pattern.test(str);
}




linkForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    if (linkInput.value === '') {
        linkInput.classList.add('border-red-500');
        inputBtn.value = 'button disabled'
        inputBtn.disabled = true;
        inputBtn.classList.add('cursor-not-allowed', 'opacity-50');
        errorMsg.innerText = 'The web link provided is invalid. Please provide the correct ones';
    } else if (!validChecker(linkInput.value)){

        linkInput.classList.add('border-red-500');
        inputBtn.disabled = true;
        inputBtn.classList.add('cursor-not-allowed', 'opacity-50');
        errorMsg.innerText = 'The web links provided are invalid. Please provide the correct ones';
    } else{
        linkInput.classList.remove('border-red-500');
        inputBtn.disabled = false;
        inputBtn.classList.remove('cursor-not-allowed', 'opacity-50');
        errorMsg.innerText = '';
    }

    // Event listener for input changes
    linkInput.addEventListener('input', () => {
    linkInput.classList.remove('border-red-500');
    inputBtn.disabled = false;
    inputBtn.classList.remove('cursor-not-allowed', 'opacity-50');
    errorMsg.innerText = '';
  });
  
});