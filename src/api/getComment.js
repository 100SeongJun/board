import axios from "axios";
const url = "http://localhost:8080/comment";
export const getComment = (setCommentData, boardNo) => {
  axios.get(url + `/${boardNo}`).then((response) => {
    setCommentData(response.data);
  });
};

export const updateComment = (commenter, content, comment) => {
  const { boardNo, userEmail } = updateRefactoring(comment);
  const commentNo = comment.commentNo;
  axios.put(
    url + `/${commentNo}`,
    {
      commenter: commenter,
      commentContent: content,
      board: { boardNo: boardNo, user: { userEmail: userEmail } },
      user: { userEmail: userEmail },
    },
    {
      headers: {
        contentType: "application/json; charset=UTF-8",
      },
    }
  );
};
export const deleteComment = (commentNo, setCheck, check) => {
  axios.delete(url + `/${commentNo}`).then(() => setCheck(!check));
};

function updateRefactoring(comment) {
  const boardNo = comment.board.boardNo;
  const userEmail = comment.board.user.userEmail;

  return { boardNo, userEmail };
}

export const InsertCommentApi = (comment, setInsertCheck, insertCheck) => {
  axios
    .post(url, comment, {
      headers: {
        contentType: "application/json; charset=UTF-8",
      },
    })
    .then(() => setInsertCheck(!insertCheck));
};
