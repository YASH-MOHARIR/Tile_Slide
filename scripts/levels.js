import { TileType } from "./tileTypes.js";

/*************************************************************
 *  2. Define Levels
 *     Each level is an object with { board, maxMoves }.
 *     'board' is 6x6 array, 'maxMoves' is number of moves allowed.
 *************************************************************/
export const levels = [
  {
    // Level 0
    level_title: "Slide and Push",
    board: [
      [TileType.ARROW_RIGHT, TileType.BLANK, TileType.BLOCK, TileType.BLANK, TileType.BLANK, TileType.HOLE],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.HOLE, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.ARROW_UP, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
    ],
    maxMoves: 6,
  },
  {
    // Level 1
    level_title: "Carry Forward",
    board: [
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.ARROW_RIGHT, TileType.BLOCK, TileType.BLANK, TileType.HOLE],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.ARROW_UP, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
    ],
    maxMoves: 4,
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
  {
    // Level 3
    level_title: "Lost",
    board: [
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.HOLE, TileType.BLANK],
      [TileType.BLANK, TileType.HOLE, TileType.BLOCK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.ARROW_DOWN, TileType.asd, TileType.asd, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.ARROW_RIGHT, TileType.BLANK, TileType.BLANK, TileType.ARROW_LEFT, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.ARROW_UP, TileType.BLANK, TileType.HOLE],
      [TileType.BLANK, TileType.HOLE, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
    ],
    maxMoves: 14,
  },
  {
    // Level 4
    level_title: "Tug of War",
    board: [
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.HOLE, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLOCK, TileType.BLANK, TileType.BLANK],
      [
        TileType.HOLE,
        TileType.ARROW_RIGHT,
        TileType.ARROW_UP,
        TileType.ARROW_DOWN,
        TileType.ARROW_LEFT,
        TileType.BLANK,
      ],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLOCK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.HOLE, TileType.BLANK, TileType.BLANK, TileType.BLANK],
    ],
    maxMoves: 11,
  },
  {
    // Level 5
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
    // Level 6
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
    // Level 7 -intro to cracks
    level_title: "The Craked Tile",
    board: [
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.ARROW_DOWN, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.ARROW_RIGHT, TileType.CRACKED, TileType.BLANK, TileType.HOLE, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
    ],
    maxMoves: 5,
  },
  {
    // Level 8 -with crakced tiles
    level_title: "Which Way to Go?",
    board: [
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.ARROW_DOWN, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.HOLE, TileType.ARROW_RIGHT, TileType.CRACKED, TileType.CRACKED, TileType.ARROW_LEFT, TileType.HOLE],
      [TileType.BLANK, TileType.BLANK, TileType.ARROW_UP, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
    ],
    maxMoves: 8,
  },
  {
    //Level 9 - with crakced tile -- can be cut
    level_title: "The Gun?",
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
    // Empty Level
    level_title: "Harsh Level 2",
    board: [
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.HOLE, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLOCK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.ARROW_RIGHT, TileType.CRACKED, TileType.HOLE, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.ARROW_UP, TileType.ARROW_LEFT],
      [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.ARROW_UP, TileType.BLANK],
    ],
    maxMoves: 7,
  },

  {
    // Level 10
    level_title: "The Last Slide",
    board: [
      [TileType.BLANK, TileType.BLANK, TileType.ARROW_DOWN, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.CRACKED, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.BLANK, TileType.BLOCK, TileType.HOLE, TileType.BLANK, TileType.BLANK],
      [TileType.ARROW_RIGHT, TileType.ARROW_DOWN, TileType.BLANK, TileType.BLANK, TileType.HOLE, TileType.BLANK],
      [TileType.ARROW_RIGHT, TileType.CRACKED, TileType.BLOCK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      [TileType.BLANK, TileType.HOLE, TileType.BLANK, TileType.BLANK, TileType.ARROW_UP, TileType.ARROW_LEFT],
    ],
    maxMoves: 18,
  },
];
