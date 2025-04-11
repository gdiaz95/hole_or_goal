const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
      this.field = field;

      this.playerPosition = [0, 0];
  
      this.field[0][0] = pathCharacter;
    }
  
    print() {
      const output = this.field.map(row => row.join('')).join('\n');
      console.log(output);
    }
    move(direction) {
      direction = direction.toLowerCase();
  
      let [row, col] = this.playerPosition;
      switch (direction) {
        case 'u': row--; break;
        case 'd': row++; break;
        case 'l': col--; break;
        case 'r': col++; break;
        default:
          console.log("Invalid input. Please use 'u', 'd', 'l', or 'r'.");
          return 'continue';
      }
  
      if (row < 0 || row >= this.field.length || col < 0 || col >= this.field[0].length) {
        return 'out-of-bound';
      }
  
      const cell = this.field[row][col];
  
      if (cell === hole) {
        return 'hole';
      } else if (cell === hat) {
        this.field[row][col] = pathCharacter;
        this.playerPosition = [row, col];
        return 'hat';
      } else {
        this.field[row][col] = pathCharacter;
        this.playerPosition = [row, col];
        return 'continue';
      }
    }
  
    static generateField(height, width, holePercentage) {
      const field = [];
      for (let row = 0; row < height; row++) {
        field[row] = [];
        for (let col = 0; col < width; col++) {
          field[row][col] = fieldCharacter;
        }
      }
  
      for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
          if (row === 0 && col === 0) continue; 
          if (Math.random() < holePercentage / 100) {
            field[row][col] = hole;
          }
        }
      }
  
      let hatPlaced = false;
      while (!hatPlaced) {
        const randRow = Math.floor(Math.random() * height);
        const randCol = Math.floor(Math.random() * width);
        if (randRow === 0 && randCol === 0) continue;
        field[randRow][randCol] = hat;
        hatPlaced = true;
      }
  
      let holeExists = field.some(row => row.includes(hole));
      if (!holeExists) {
        let placed = false;
        while (!placed) {
          const randRow = Math.floor(Math.random() * height);
          const randCol = Math.floor(Math.random() * width);
          if ((randRow === 0 && randCol === 0) || field[randRow][randCol] === hat) continue;
          field[randRow][randCol] = hole;
          placed = true;
        }
      }
      return field;
    }
  }

console.clear();
const generatedField = Field.generateField(10, 10, 20);
const myField = new Field(generatedField);

let gameStatus = 'continue';
while (gameStatus === 'continue') {
    console.clear();
    myField.print();
    const direction = prompt("Which way? (u = up, d = down, l = left, r = right): ");
    gameStatus = myField.move(direction);
  
    if (gameStatus === 'hat') {
      console.clear();
      myField.print();
      console.log("Congrats! You found your goal! You win!");
      break;
    } else if (gameStatus === 'hole') {
      console.clear();
      myField.print();
      console.log("Oh no! You fell in a hole! Game over!");
      break;
    } else if (gameStatus === 'out-of-bound') {
      console.clear();
      myField.print();
      console.log("Oops! You moved outside the field! Game over!");
      break;
    }
  }

  prompt("Press any key to exit...");
  console.clear();
