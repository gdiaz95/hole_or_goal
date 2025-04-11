# Goal or Hole Game

A simple command-line game written in Node.js where you navigate a dynamic playing field in search of your goal. Avoid holes and stay within the field boundaries to win!

## Overview

In this game, you start at the top-left corner of a 20x20 grid, represented by an asterisk (`*`). The objective is to locate the goal (`^`), which is hidden randomly somewhere in the field. The game field is filled with a default character (`░`) that represents open space, and holes (`O`) are scattered randomly in the grid. The game will end if:
- You find the goal (win condition).
- You fall into a hole.
- You move outside the boundaries of the field.

At the end of the game, you'll be prompted to "Press any key to exit..." so that the final board state and outcome remain visible.

## Modules and Dependencies

This project is built using Node.js and leverages the following npm modules:

- **prompt-sync**  
  Used to capture synchronous user input from the command line.  
  - **ansi-regex** (dependency): Helps to match ANSI escape codes in strings.  
  - **strip-ansi** (dependency): Strips ANSI escape codes from strings.

> **Note:** The `node_modules` directory is excluded from version control via a `.gitignore` file. To install the required modules, run `npm install prompt-sync` in the project root.

## How to Run 

**To run the game:**

Open a terminal (or command prompt) in the project folder.
Execute the following command:

node main.js

The game will launch and display a 10x10 grid.

## How to play

- When prompted, enter one of the following commands to move:
  - **u**: Move up
  - **d**: Move down
  - **l**: Move left
  - **r**: Move right

- **Objective:**  
  Navigate the grid to locate the hat (`^`). Avoid falling into holes (`O`) or moving outside the field boundaries.

- **Game End Conditions:**
  - **Win:** You find the hat.
  - **Lose:** You fall into a hole or move out of bounds.

After the game concludes, you'll see the final board state and a prompt to "Press any key to exit..." allowing you to review the outcome before the terminal closes.

Enjoy the game!



