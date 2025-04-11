# Hat Game

A simple command-line game written in Node.js where you navigate a dynamic playing field to find your hat. Avoid holes and the boundaries of the field!

## Overview

In this game, you start at the top-left corner of a grid marked with an asterisk (`*`). Your goal is to locate the hat (`^`), which is hidden somewhere in the field. The field is filled with default characters (`░`), and holes (`O`) are placed at random locations. The player moves using these commands:
- **u** for up,
- **d** for down,
- **l** for left,
- **r** for right.

The game ends when:
- You find the hat (you win),
- You fall into a hole (game over),
- Or you step outside the bounds of the field (game over).

At the end of the game, you'll be prompted to "Press any key to exit..." so you can see the final board state and the game outcome before the terminal closes.

## Getting Started

### Prerequisites

- **Node.js**: Download and install from [nodejs.org](https://nodejs.org/).
- **prompt-sync**: This package is used for capturing command-line input. Install it via npm.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/hat-game.git
   cd hat-game
