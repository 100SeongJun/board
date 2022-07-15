import { Link } from "react-router-dom";
import "./BoardPaging.css";

export const BoardListTable = ({ boards }) => {
  return (
    <div className="boardTable">
      <table>
        <thead>
          <tr className="cgray">
            <th>#</th>
            <th>제목</th>
            <th>작성자</th>
            <th>등록일</th>
          </tr>
        </thead>
        <tbody>
          {boards &&
            boards.dtoList.map((board) => {
              return (
                <tr key={board.boardNo}>
                  <td>{board.boardNo}</td>
                  <td>
                    <Link
                      to={`/editor/${board.boardNo}`}
                      state={{ board: board }}
                    >
                      {board.boardTitle}
                    </Link>
                    [{board.comments.length}]
                  </td>
                  <td>{board.user.userEmail.split("@")[0]}</td>
                  <td>{board.registeredDate}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
