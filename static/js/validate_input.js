const passwordInput = document.getElementById('create-user-password');
const submitButton = document.getElementById('create-user-submit');
const passowrdLengthError = document.getElementById('password-length-error');
submitButton.disabled = true;
passwordInput.addEventListener('input', function() {
  // validates Password length
  if (passwordInput.value.length >= 6) {
    submitButton.disabled = false;
    passowrdLengthError.classList.remove('d-none');
  
  } else {
    submitButton.disabled = true;
    passowrdLengthError.classList.remove('d-none');

  }
});
