import { TileType } from './tileTypes.js';

/*************************************************************
 *  2. Define Levels
 *     Each level is an object with { board, maxMoves }.
 *     'board' is 6x6 array, 'maxMoves' is number of moves allowed.
 *************************************************************/
export const levels = [  
    {
      // Level 0
      level_title : "the beginning",
      board: [
        [TileType.ARROW_RIGHT, TileType.BLANK, TileType.BLOCK, TileType.BLANK, TileType.BLANK, TileType.HOLE],
        [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
        [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
        [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
        [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
        [TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK, TileType.BLANK],
      ],
      maxMoves: 5,
    },
    {
      // Level 1
      level_title : "the beginning",
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
      level_title : "the clones",
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