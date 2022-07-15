import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBoard } from "../api/getBoard";
import { BoardListTable } from "../Component/BoardListTable";
import { Paging } from "../Component/Paging";
import "./BoardList.css";
export const BoardListPage = () => {
  const [boards, setBoardList] = useState();
  const [page, setPage] = useState(1);
  useEffect(() => {
    getBoard(setBoardList, page);
  }, [page]);
  return (
    <div className="boardList">
      <div className="header">
        <span>게시판</span>
        <span>
          <Link to="/board">등록</Link>
        </span>
      </div>
      <div className="container">
        <BoardListTable boards={boards} />
        {boards && (
          <Paging
            setBoardList={setBoardList}
            boards={boards}
            setPage={setPage}
          />
        )}
      </div>
    </div>
  );
};
