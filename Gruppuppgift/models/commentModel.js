const Case = require('../schemas/todoSchema');
const Comment = require('../schemas/commentSchema');


exports.addCommentToCase = async (req, res) => {
  const { email, message } = req.body;
  const caseId = req.params.id;

  try {
    const caseTodo = await Case.findById(caseId);
    if (!caseTodo) {
      return res.status(404).json({
        message: `Case with id ${caseId} not found`
      });
    }

    const comment = new Comment({ email, message });
    await comment.save();

    caseTodo.comments.push(comment._id);
    await caseTodo.save();

    res.status(400).json({
      message: "Comment was added to case"
    });
  } catch (err) {
    console.log(error);
    res.status(500).json({
      message: "Something didnt go good when adding comment to case",
      err: err.message
    });
  }
};
