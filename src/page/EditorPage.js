import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { deleteBoard, updateBoard } from "../api/getBoard";
import { getComment } from "../api/getComment";
import { Comment } from "../Component/Comment";
import { InsertComment } from "../Component/InsertComment";
import "./EditorPage.css";
export const EditorPage = () => {
  const data = useLocation().state;
  const [commentData, setCommentData] = useState([]);
  const [check, setCheck] = useState(false);
  const [insertCheck, setInsertCheck] = useState(false);
  useEffect(() => {
    const boardNo = data.board.boardNo;
    getComment(setCommentData, boardNo);
  }, [check, insertCheck]);

  return (
    <div className="headerContainer">
      <div className="header">게시판 보기</div>
      <div className="body">
        <div className="header">제목</div>
        <input id="title" defaultValue={data.board.boardTitle}></input>
        <div className="header">내용</div>
        <input id="content" defaultValue={data.board.boardContent}></input>
        <div className="header">작성자</div>
        <input
          id="userId"
          className="border"
          defaultValue={data.board.user.userEmail}
          disabled
        />
        <div className="header">등록일</div>
        <input
          className="border"
          defaultValue={data.board.registeredDate}
          disabled
        />
        <div className="header">수정일</div>
        <input
          className="border"
          defaultValue={data.board.modifiedDate}
          disabled
        />

        <div>
          <div>
            <a href="/">리스트로</a>
          </div>

          <div>
            <a
              href={"/"}
              onClick={() => {
                const updateData = {
                  boardTitle: document.getElementById("title").value,
                  boardContent: document.getElementById("content").value,
                };
                const oldboard = data.board;
                updateBoard(updateData, oldboard);
              }}
            >
              수정하기
            </a>
          </div>
          <div className="item item_3">
            <a
              href="/"
              onClick={() => {
                deleteBoard(data.board.boardNo);
              }}
            >
              삭제하기
            </a>
          </div>
          <span
            onClick={() => {
              setCheck(!check);
            }}
          >
            댓글[{commentData.length}]
          </span>
          <br />
          <span
            onClick={() => {
              setInsertCheck(!insertCheck);
            }}
          >
            댓글작성
          </span>
        </div>
        {insertCheck && (
          <InsertComment
            url={data}
            userEmail={document.getElementById("userId").value}
            setInsertCheck={setInsertCheck}
            insertCheck={insertCheck}
          />
        )}

        {check && (
          <Comment
            check={check}
            commentData={commentData}
            setCheck={setCheck}
          />
        )}
      </div>
    </div>
  );
};
