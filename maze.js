// 0 -> is a wall
// 1 -> is a valid path
// 2 -> is the exit point of our maze
// 3 -> is our marker
const maze = [
    [1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
]

function solve(maze) {

    this.traverse = function (column, row) {
        if (maze[column][row] === 2) {
            console.log("Maze is solved at column: ", column, " and row: ", row)
        } else if (maze[column][row] === 1) {
            // we are on a valid path
            console.log("Valid path on column ", column, " and row ", row)
            // On every valid path that we have passed lets mark it as already been there
            // with a random number.
            // We do this to avoid infinite loop
            maze[column][row] = 3

            // make sure we are inside boundauries
            if (column < maze.length - 1) {
                this.traverse(column + 1, row)
            }

            if (row < maze[column].length - 1) {
                this.traverse(column, row + 1)
            }

            if (column > 0) {
                this.traverse(column - 1, row)
            }

            if (row > 0) {
                this.traverse(column, row - 1)
            }
        }
    }

}

console.log("maze: ", maze[0])

let solver = new solve(maze);
solver.traverse(0, 0)