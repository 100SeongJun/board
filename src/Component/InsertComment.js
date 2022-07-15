import { InsertCommentApi } from "../api/getComment";

export const InsertComment = ({
  url,
  userEmail,
  setInsertCheck,
  insertCheck,
}) => {
  return (
    <div className="border">
      <div>
        댓글 작성자: <input id="insertCommenter" placeholder="작성자 별명" />
      </div>
      <div>
        댓글 내용: <input id="insertContent" placeholder="내용" />
      </div>
      <span
        className="border"
        onClick={() => {
          const boardNo = url.board.boardNo;

          const comment = {
            commenter: document.getElementById("insertCommenter").value,
            commentContent: document.getElementById("insertContent").value,
            board: {
              boardNo: boardNo,
              user: {
                userEmail: userEmail,
              },
            },
          };
          InsertCommentApi(comment, setInsertCheck, insertCheck);
        }}
      >
        작성
      </span>
    </div>
  );
};
