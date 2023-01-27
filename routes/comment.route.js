const router = require('express').Router();
const { Comment } = require('../db/models');

router.post('/:id', async (req, res) => {
  const { commentId } = req.params;
  const { comment } = req.body;
  const newComment = await Comment.create({
    text: comment,
    user_id: req.session.id,
  });
  res.renderComponent();
});

module.exports = router;
