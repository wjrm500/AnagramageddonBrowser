# Anagramageddon

A multiplayer word game built with React and Redux where players compete to form words by claiming letters on a grid.

## Game Rules

- Players take turns claiming letters on the grid
- Each turn consists of:
    1. Selecting an adjacent square
    2. Forming a valid word using your collected letters
- Score points based on word length
- First player to reach the target score wins
- Timer limits each turn

## Features

- 2-4 player support
- Customisable grid size (5x5 to 15x15)
- Configurable winning score
- Adjustable time limit per turn
- Real-time word validation using dictionary API

## Getting Started

1. Clone the repository
2. Install dependencies:

    ```bash
    npm install
    ```
3. Start the development server:

    ```bash
    npm start
    ```

## Building for Production

Build the project for production deployment:

```bash
docker build -t wjrm500/anagramageddon-local:latest .
```

And push it:

```bash
docker push wjrm500/anagramageddon-local:latest
```