import { Link } from "react-router-dom";
import { getBoard } from "../api/getBoard";

export const Paging = ({ setBoardList, boards, setPage }) => {
  return (
    <div className="pagingBtn">
      {boards.prev ? (
        <span
          className="numbtn"
          onClick={() => {
            getBoard(
              setBoardList,
              boards.start - boards.size >= 1
                ? boards.start - boards.size
                : boards.page
            );
          }}
        >
          이전 페이지
        </span>
      ) : (
        <></>
      )}
      {boards.pageList.map((page) => {
        return (
          <span
            className="numbtn"
            onClick={() => {
              setPage(page);
            }}
            key={page}
          >
            {page}
          </span>
        );
      })}
      {boards.next ? (
        <span
          className="numbtn"
          onClick={() => {
            getBoard(
              setBoardList,
              boards.start + boards.size > boards.totalPage
                ? boards.page
                : boards.start + boards.size
            );
          }}
        >
          다음 페이지
        </span>
      ) : (
        <></>
      )}
    </div>
  );
};
