const prompt = require('prompt-sync')({sigint: true});
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(columnas, filas){
    this._Field = [];
    this._columnas = columnas;
    this._filas = filas;
    this._jugadorColumna = 0;
    this._jugadorFila = 0;
    this._hatColumna = 0;
    this._hatFila = 0;
    this._score = 0;
    this.creaJuego();
  }

  creaJuego() {
    // Inicializa el campo con caracteres por defecto
    for(let i = 0; i < this._columnas; i++){
      let fila = [];
      for(let j = 0; j < this._filas; j++){
        fila.push(fieldCharacter);
      }
      this._Field.push(fila);
    }

    // Coloca al jugador en la esquina superior izquierda
    this._Field[this._jugadorColumna][this._jugadorFila] = pathCharacter;

    // Coloca el sombrero en una posición aleatoria
    this._hatColumna = Math.floor(Math.random() * this._columnas);
    this._hatFila = Math.floor(Math.random() * this._filas);
    this._Field[this._hatColumna][this._hatFila] = hat;
  }

  muestraCampo() {
    for (let i = 0; i < this._columnas; i++) {
      console.log(this._Field[i].join(' '));
    }
  }

  mueveJugador(direccion) {
    
    this._Field[this._jugadorColumna][this._jugadorFila] = fieldCharacter;

    
    switch (direccion.toLowerCase()) {
      case 'up':
        this._jugadorColumna = Math.max(0, this._jugadorColumna - 1);
        break;
      case 'down':
        this._jugadorColumna = Math.min(this._columnas - 1, this._jugadorColumna + 1);
        break;
      case 'left':
        this._jugadorFila = Math.max(0, this._jugadorFila - 1);
        break;
      case 'right':
        this._jugadorFila = Math.min(this._filas - 1, this._jugadorFila + 1);
        break;
      default:
        console.log('Dirección no válida');
        break;
    }

    
    this._Field[this._jugadorColumna][this._jugadorFila] = pathCharacter;

    // Verifica si el jugador ha encontrado el sombrero
    if (this._jugadorColumna === this._hatColumna && this._jugadorFila === this._hatFila) {
      console.log('¡YOU FOUND YOUR HAT!.');
      this._score++;
      // Coloca el sombrero en una nueva posición aleatoria
      this._hatColumna = Math.floor(Math.random() * this._columnas);
      this._hatFila = Math.floor(Math.random() * this._filas);
      this._Field[this._hatColumna][this._hatFila] = hat;
    }
  }

  getScore() {
    return this._score;
  }
}


readline.question('What´s your name?', name => {
    console.log(`Hi ${name}!`);
    const newCampo = new Field(3, 3);

    while (true) {
     
      newCampo.muestraCampo();
      
      
      const direccion = prompt('Enter a direcction to move: (up/down/left/right): ');

      
      newCampo.mueveJugador(direccion);

     
      if (newCampo.getScore() > 0) {
        console.log(`¡You win ${newCampo.getScore()} score!`);
        break;
      }
    }

    readline.close();
});
