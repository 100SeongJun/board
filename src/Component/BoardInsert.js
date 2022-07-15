import { Link, useNavigate } from "react-router-dom";
import { insertBoard } from "../api/getBoard";
import "./Board.css";
export const BoardInsert = () => {
  return (
    <div className="insert">
      <div>게시판 등록</div>
      <div className="insertborder">
        <div className="inputbox">
          <div>
            제목
            <div>
              <input id="title" />
            </div>
          </div>
          <div>
            내용
            <div>
              <input id="content" />
            </div>
          </div>
          <div>
            작성자
            <div>
              <input id="user" />
            </div>
          </div>
        </div>

        <span
          // className="submit"
          onClick={() => {
            const data = {
              boardTitle: document.getElementById("title").value,
              boardContent: document.getElementById("content").value,
              user: {
                userEmail: document.getElementById("user").value,
              },
            };
            insertBoard(data);
          }}
        >
          <a href={"/"} className="submit">
            등록
          </a>
        </span>
      </div>
    </div>
  );
};
