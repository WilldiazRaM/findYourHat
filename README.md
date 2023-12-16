# Find Your Hat Game

This is a simple implementation of the "Find Your Hat" game in Node.js. The game involves navigating a field to find a hidden hat. The player interacts with the game by providing directions ('up', 'down', 'left', 'right').

## Instructions

1. **Clone the repository:**

    ```bash
    git clone git@github.com:WilldiazRaM/findYourHat.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd findYourHat
    ```

3. **Run the game:**

    ```bash
    node main.js
    ```

## Game Rules

- The player is represented by the character '*'.
- The hat is represented by the character '^'.
- Holes are represented by the character 'O'.
- The field is represented by the character '░'.

## How to Play

1. The game initializes with the player ('*') in the top-left corner and the hat ('^') placed randomly on the field.

2. The player must navigate through the field using the following commands:

    - 'up': Move the player up.
    - 'down': Move the player down.
    - 'left': Move the player left.
    - 'right': Move the player right.

3. If the player finds the hat ('^'), they win and the hat is repositioned randomly on the field.

4. The game continues until the player decides to exit.

## Enjoy the Game!

Have fun playing the "Find Your Hat" game! Test your navigation skills and try to find the hat in the field. Good luck!
