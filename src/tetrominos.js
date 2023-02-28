export const TETROMINOS = {
  0: { shape: [[0]], color: "0,0,0" },
  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    // color: "80,227,230",
    color: "252,186,3",
  },
  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    // color: "36,95,223",
    color: "181,120,34",
  },
  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    // color: "223,175,6",
    color: "242, 245, 71",
  },
  O: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    // color: "223, 217,36",
    color: "245,135,71",
  },
  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    // color: "48,211,56",
    color: "245, 109, 71",
  },
  T: {
    shape: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0],
    ],
    // color: "132,61,198",
    color: "245, 236, 71",
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    // color: "227,78,78",
    color: "245, 94, 71",
  },
};

export const randomTetromino = () => {
  const tetrominos = "IJLOSTZ";
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};
