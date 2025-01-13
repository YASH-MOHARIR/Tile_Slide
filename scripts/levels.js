import { TileType } from "./tileTypes.js";

/*************************************************************
 *  2. Define Levels
 *     Each level is an object with { board, maxMoves }.
 *     'board' is 6x6 array, 'maxMoves' is number of moves allowed.
 *************************************************************/
export const levels = [
  {
    level_title: "Arrow Mastery",
    board: [
        [TileType.ARROW_RIGHT, TileType.ARROW_DOWN, TileType.BLANK, TileType.ARROW_DOWN, TileType.HOLE, TileType.BLANK],
        [TileType.ARROW_UP, TileType.BLANK, TileType.ARROW_RIGHT, TileType.BLANK, TileType.BLANK, TileType.ARROW_LEFT],
        [TileType.BLANK, TileType.ARROW_DOWN, TileType.BLANK, TileType.BLOCK, TileType.ARROW_DOWN, TileType.BLANK],
        [TileType.BLANK, TileType.ARROW_LEFT, TileType.CRACKED, TileType.BLANK, TileType.ARROW_RIGHT, TileType.ARROW_UP],
        [TileType.BLANK, TileType.BLANK, TileType.ARROW_LEFT, TileType.ARROW_RIGHT, TileType.ARROW_DOWN, TileType.BLANK],
        [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.ARROW_UP, TileType.BLANK],
    ],
    maxMoves: 14,
}

,
  {
    level_title: "Maze of Walls",
    board: [
        [TileType.WALL, TileType.BLANK, TileType.HOLE, TileType.BLANK, TileType.WALL, TileType.BLANK],
        [TileType.BLANK, TileType.ARROW_DOWN, TileType.WALL, TileType.BLANK, TileType.BLANK, TileType.BLANK],
        [TileType.BLANK, TileType.WALL, TileType.BLOCK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
        [TileType.WALL, TileType.CRACKED, TileType.BLANK, TileType.WALL, TileType.BLANK, TileType.BLANK],
        [TileType.BLANK, TileType.ARROW_RIGHT, TileType.BLANK, TileType.ARROW_LEFT, TileType.BLANK, TileType.BLANK],
        [TileType.BLANK, TileType.WALL, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
    ],
    maxMoves: 12,
}
,
  {
    // Level 5
    level_title: "Tug of War",
    board: [
        [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.HOLE, TileType.BLANK, TileType.BLANK],
        [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLOCK, TileType.BLANK, TileType.BLANK],
        [TileType.HOLE, TileType.ARROW_RIGHT, TileType.ARROW_UP, TileType.ARROW_DOWN, TileType.ARROW_LEFT, TileType.BLANK],
        [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
        [TileType.BLANK, TileType.BLANK, TileType.BLOCK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
        [TileType.BLANK, TileType.BLANK, TileType.HOLE, TileType.BLANK, TileType.BLANK, TileType.BLANK],
    ],
    maxMoves: 11,
}
,
  {
    // Level 5
    level_title: "Blank Canvas",
    board: [
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.ARROW_DOWN, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.HOLE, TileType.BLOCK, TileType.BLOCK, TileType.BLOCK, TileType.CRACKED, TileType.ARROW_LEFT],
      [TileType.BLANK, TileType.BLOCK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.HOLE, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
    ],
    maxMoves: 9,
  },
  {
    // Level - can be 2
    level_title: "Crossroads",
    board: [
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.HOLE, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.HOLE, TileType.BLOCK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.ARROW_LEFT],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.ARROW_UP, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
    ],
    maxMoves: 6,
  },
  {
    // Level 0
    level_title: "the Aisle of Arrows",
    board: [
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.HOLE, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.ARROW_RIGHT, TileType.BLANK, TileType.ARROW_LEFT, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.ARROW_RIGHT, TileType.BLANK, TileType.ARROW_LEFT, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.ARROW_RIGHT, TileType.BLANK, TileType.ARROW_LEFT, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.ARROW_UP, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.ARROW_UP, TileType.BLANK, TileType.BLANK],
    ],
    maxMoves: 14,
  },
  {
    // Level 0
    level_title: "the Harsh Level",
    board: [
      [TileType.BLANK, TileType.BLANK, TileType.ARROW_DOWN, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLOCK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.ARROW_RIGHT, TileType.ARROW_DOWN, TileType.BLANK, TileType.BLANK, TileType.HOLE, TileType.BLANK],
      [TileType.ARROW_RIGHT, TileType.CRACKED, TileType.BLOCK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.HOLE, TileType.BLANK, TileType.ARROW_UP, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
    ],
    maxMoves: 9,
  },
  {
    // Level 0
    level_title: "the beginning",
    board: [
      [TileType.ARROW_RIGHT, TileType.CRACKED, TileType.BLOCK, TileType.BLANK, TileType.BLANK, TileType.HOLE],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.CRACKED, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
    ],
    maxMoves: 5,
  },
  {
    // Level 1
    level_title: "the beginning",
    board: [
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.ARROW_RIGHT, TileType.BLOCK, TileType.BLANK, TileType.HOLE],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.ARROW_UP],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
    ],
    maxMoves: 6,
  },
  {
    // Level 2
    level_title: "the clones",
    board: [
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.HOLE, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.ARROW_RIGHT, TileType.BLOCK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.ARROW_UP, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.ARROW_UP, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
    ],
    maxMoves: 5,
  },
];
