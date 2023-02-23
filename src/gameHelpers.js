export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y++) {
    for (let x = 0; x < player.tetromino[y].length; x++) {
      // 1. Check we are on a tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. Check the movement is inside the game areas height
          // we shouldn't go through the bottom of the area
          !stage[y + player.pos.y + moveY] ||
          // 3. we shouldn't go outside the game width
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. check the cell we are moving too isn't set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
