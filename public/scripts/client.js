// forms
const logForm = document.querySelector('#log-form');
const regForm = document.querySelector('#reg-form');

// logForm
logForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const { name, password, action, method } = event.target;

  const res = await fetch(action, {
    method,
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({
      name: name.value,
      password: password.value,
    }),
  });
  const data = await res.json();
  if (data.login !== 'admin' && data.login === true) {
    window.location.assign(data.url);
  }
  if (data.login === 'admin') {
    window.location.assign(data.url);
  }
  logForm.reset();
});

// regForm
regForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { name, email, password, action, method } = event.target;
  const res = await fetch(action, {
    method,
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      password: password.value,
    }),
  });
  const data = await res.json();
  window.location.assign(data.url);
  regForm.reset();
});
