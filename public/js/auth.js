document.addEventListener('DOMContentLoaded', () => {

  const registerForm = document.getElementById('register-form');
  const loginForm = document.getElementById('login-form');
  const loadingSpinner = document.getElementById('loading-spinner');



  // Toast helper function
  const showToast = (message, type = 'primary') => {
    const toastEl = document.getElementById('toast');
    const toastBody = document.getElementById('toast-body');

    toastBody.textContent = message;
    toastEl.className = `toast align-items-center text-bg-${type} border-0`;

    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  };
  
  // Spinner control
  const showSpinner = () => {
    loadingSpinner.classList.remove('d-none');
  };

  const hideSpinner = () => {
    loadingSpinner.classList.add('d-none');
  };

  //  Register form handler
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('register-username').value;
      const password = document.getElementById('register-password').value;

      showSpinner();

      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();
      hideSpinner();

      if (res.ok) {
        showToast('Registration successful! Redirecting to login...', 'success');
        setTimeout(() => window.location.href = '/login', 1500);
      } else {
        showToast(data.message || 'Registration failed', 'danger');
      }
    });
  }



  //  Login form handler
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;
      
      showSpinner();

      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();
      hideSpinner();

      if (res.ok) {
        showToast('Login successful! Redirecting...', 'success');
        localStorage.setItem('token', data.token);
        setTimeout(() => window.location.href = '/', 1000);
      } else {
        showToast(data.message || 'Login failed', 'danger');
      }
    });
  }

  

});
