const commentForm = document.querySelector('#comment-form');

commentForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { comment, action, method } = event.target;
  const res = await fetch(action, {
    method,
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({
      text: comment.value,
    }),
  });
  const data = await res.text();
  // insertAdjacentHTML(data)
});
