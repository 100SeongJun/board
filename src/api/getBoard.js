import axios from "axios";
const url = "http://3.94.85.13/board";
export const getBoard = async (setBoardList, pages = 1) => {
  await axios.get(url, { params: { page: pages } }).then((response) => {
    setBoardList(response.data);
  });
};

export const insertBoard = async (data) => {
  await axios.post(url, data, {
    headers: {
      contentType: "application/json; charset=UTF-8",
    },
  });
};

export const updateBoard = async (updateData, oldboard) => {
  const boardNo = oldboard.boardNo;
  const result = Object.assign(oldboard, updateData);
  delete result[("boardNo", "registeredDate")];
  await axios.put(url + `/${boardNo}`, result, {
    headers: {
      contentType: "application/json; charset=UTF-8",
    },
  });
};

export const deleteBoard = async (boardNo) => {
  await axios.delete(url + `/${boardNo}`);
};
