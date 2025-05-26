// function loadHeaderAndFooter() {
//   fetch('/partials/header.html')
//     .then(res => res.text())
//     .then(data => {
//       document.getElementById('header').innerHTML = data;

//       const username = localStorage.getItem('username');
//       const usernameSpan = document.getElementById('navbar-username');
//       if (usernameSpan) {
//         usernameSpan.innerText = username ? `Hello, ${username}` : 'Hello, Guest';
//       }

//       document.dispatchEvent(new Event('header-loaded'));
//     });

//   fetch('/partials/footer.html')
//     .then(res => res.text())
//     .then(data => {
//       document.getElementById('footer').innerHTML = data;
//     });
// }

// function logout() {
//   localStorage.removeItem('token');
//   localStorage.removeItem('username');
//   window.location.href = '/login.html';
// }

// window.addEventListener('DOMContentLoaded', loadHeaderAndFooter);

function loadPartials() {
  const header = document.getElementById('header');
  const footer = document.getElementById('footer');

  const loadHeader = header
    ? fetch('/partials/header.html')
        .then(res => res.text())
        .then(html => {
          header.innerHTML = html;

          //  Set logout click handler
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            window.location.href = '/login';
        });
        }

        const username = localStorage.getItem('username');
        const usernameSpan = document.getElementById('navbar-username');
        if (usernameSpan) {
            usernameSpan.textContent = username ? `Hello, ${username}` : 'Hello, Guest';
        }

        })
    : Promise.resolve();

  const loadFooter = footer
    ? fetch('/partials/footer.html')
        .then(res => res.text())
        .then(html => {
          footer.innerHTML = html;
        })
    : Promise.resolve();

  return Promise.all([loadHeader, loadFooter]);
}

function whenReady(callback) {
  document.addEventListener('DOMContentLoaded', () => {
    loadPartials().then(callback);
  });
}


