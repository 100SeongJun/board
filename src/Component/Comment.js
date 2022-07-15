import { deleteComment, updateComment } from "../api/getComment";

export const Comment = ({ check, commentData, setCheck }) => {
  return (
    <>
      {commentData.map((comment, index) => {
        return (
          <div key={comment.commentNo} className="border">
            <div>
              작성자 :
              <input
                id={`${index}commenter`}
                defaultValue={comment.commenter}
              ></input>
            </div>
            <div>
              댓글 내용 :{" "}
              <input
                id={`${index}Content`}
                defaultValue={comment.commentContent}
              ></input>
            </div>
            <div>
              <button
                onClick={() => {
                  const commenter = document.getElementById(
                    `${index}commenter`
                  ).value;
                  const content = document.getElementById(
                    `${index}Content`
                  ).value;
                  updateComment(commenter, content, comment);
                  alert("수정이 완료되었습니다.");
                }}
              >
                수정
              </button>
              <button
                onClick={() => {
                  const commentNo = comment.commentNo;
                  deleteComment(commentNo, setCheck, check);
                }}
              >
                삭제
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
