import skeletonBoard from '../board/skeletonBoard.js';

export default class Player {
  // constructor(color, turn, check){
  //     super(color);
  //     this.turn = turn;
  //     this.check = check;
  // }

  state = {
    players: {
      color: 'white',
      turn: false,
      check: false
    }
  };

  Player = (color, turn, check) => {
    this.color = color;
    this.turn = turn;
    this.check = check;
  };

  playerOne = new Player('white');
}
