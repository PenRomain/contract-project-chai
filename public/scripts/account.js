document.querySelector('.teas')?.addEventListener('click', async (e) => {
  e.preventDefault();

  if (e.target.classList.contains('delete_tea')) {
    const { id } = e.target.parentNode.dataset;
    console.log(id);

    const res = await fetch(`/admin/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (data.key > 0) {
      e.target.closest('.tea_tab').remove();
    }
  }
});

const addForm = document
  .querySelector('#addTea')
  ?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const { name, country, image, description, method, action } = e.target;

    const res = await fetch(action, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        country: country.value,
        image: image.value,
        description: description.value,
      }),
    });

    // const data = await res.json()

    const teaHtml = await res.text();

    document.querySelector('.teas')?.insertAdjacentHTML('beforeend', teaHtml);

    addForm.reset();
  });
