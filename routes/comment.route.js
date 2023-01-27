const router = require('express').Router();
const { CommentDB } = require('../db/models');
const Comment = require('../views/Comment');

router.post('/:id', async (req, res) => {
  try {
    const { comment } = req.body;
    const newComment = await CommentDB.create({
      text: comment,
      user_id: req.session.user.id,
      tea_id: req.params.id,
    });
    res.renderComponent(Comment, { newComment }, { doctype: false });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
