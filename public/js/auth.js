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
  // if (registerForm) {
  //   registerForm.addEventListener('submit', async (e) => {
  //     e.preventDefault();
  //     const firstname = document.getElementById('register-firstname').value;
  //     const lastname = document.getElementById('register-lastname').value;
  //     const email = document.getElementById('register-email').value;
  //     const mobile = document.getElementById('register-mobile').value;
  //     const username = document.getElementById('register-username').value;
  //     const password = document.getElementById('register-password').value;

  //     showSpinner();

  //     const res = await fetch('/api/auth/register', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ firstname, lastname, email, mobile, username, password })
  //     });

  //     const data = await res.json();
  //     hideSpinner();

  //     if (res.ok) {
  //       showToast('Registration successful! Redirecting to login...', 'success');
  //       setTimeout(() => window.location.href = '/login', 1500);
  //     } else {
  //       showToast(data.message || 'Registration failed', 'danger');
  //     }
  //   });
  // }

  if (registerForm) {
    // jQuery Validation rules
    $('#register-form').validate({
      rules: {
        'register-firstname': { required: true },
        'register-lastname': { required: true },
        'register-email': { required: true, email: true },
        'register-mobile': { required: true, digits: true, minlength: 10, maxlength: 12 },
        'register-username': { required: true, minlength: 3, maxlength: 8 },
        'register-password': { required: true, minlength: 6 }
      },
      messages: {
        'register-firstname': "First name is required",
        'register-lastname': "Last name is required",
        'register-email': {
          required: "Email is required",
          email: "Enter a valid email"
        },
        'register-mobile': {
          required: "Mobile is required",
          digits: "Enter only digits",
          minlength: "Mobile must be at least 10 digits",
          maxlength: "Mobile must be at most 12 digits",
        },
        'register-username': {
          required: "Username is required",
          minlength: "Username must be at least 3 digits",
          maxlength: "Username must be at most 8 digits",
        },
        'register-password': {
          required: "Password is required",
          minlength: "Password must be at least 6 characters"
        }
      },
      errorClass: 'is-invalid',
      validClass: 'is-valid',
      errorPlacement: function(error, element) {
        error.addClass('invalid-feedback');
        if (element.parent('.input-group').length) {
          error.insertAfter(element.parent());
        } else {
          error.insertAfter(element);
        }
      },
      highlight: function(element) {
        $(element).addClass('is-invalid').removeClass('is-valid');
      },
      unhighlight: function(element) {
        $(element).removeClass('is-invalid').addClass('is-valid');
      },
      submitHandler: async function(form, event) {

         event.preventDefault(); 

        const firstname = $('#register-firstname').val();
        const lastname = $('#register-lastname').val();
        const email = $('#register-email').val();
        const mobile = $('#register-mobile').val();
        const username = $('#register-username').val();
        const password = $('#register-password').val();

        showSpinner();

        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ firstname, lastname, email, mobile, username, password })
        });

        const data = await res.json();
        hideSpinner();
        console.log('Response status:', res.status);
        console.log('Response JSON:', data);

        if (res.ok) {
          showToast('Registration successful! Redirecting to login...', 'success');
          setTimeout(() => window.location.href = '/login', 1500);
        } else {
           console.error('Fetch error:', error);
          showToast(data.message || 'Registration failed', 'danger');
        }
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
        localStorage.setItem('username', data.username);
        localStorage.setItem('roleId', data.roleId);
        setTimeout(() => window.location.href = '/', 1000);
      } else {
        showToast(data.message || 'Login failed', 'danger');
      }
    });
  }

  

});
