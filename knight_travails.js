function knightTravails(start, end) {
   
    // the size of the board is 8x8 and these are all possible knight moves
    const boardSize = 8;
    const knightMoves = [
        [-2, -1],
        [-2, 1],
        [-1 ,-2],
        [-1, 2],
        [1, 2],
        [1, -2],
        [2, 1],
        [2, -1]
    ];

    // queue - an array that is initialized with the starting square
    const queue = [start];

    // object that maps each visited square to its shortest distance from the starting square. Starting square is initalized with a distance of 0
    const shortestDistances = { [start]: 0} ;

    // parents is an object that maps each visited square to its shortest distance from the starting square. 
    const parents = { [start]: null}


    while (queue.length > 0) {
        
        // shift() removes the first element from the array.
        const currentSquare = queue.shift();

        // doesn't execute unless shortest path is found
        if (currentSquare[0] === end[0] && currentSquare[1] === end[1]) {


            // If we have found the shortest path, this code constructs the path by starting with the end square and following the 
            // parent pointers backwards until we reach the start square. The resulting path is stored in an array called path, 
            // which is then returned in reverse order (since we constructed the path backwards).
            const path = [];
            let square = end;
            while (square !== null) {
                path.push(square)
                square = parents[square];
            }
            return path.reverse();
        }

        // move iterates over possible moves that a night can make
        for (const move of knightMoves) {

            // [[3] + [-2], [3] + [-1]] --> [1, 2]
            const neighbor = [currentSquare[0] + move[0], currentSquare[1] + move[1]];
            

            // 1 >= 0 && 1 < 8 && 2 >= 0 && 2 < 8
            if (neighbor[0] >= 0 && neighbor[0] < boardSize && neighbor[1] >= 0 && neighbor[1] < boardSize) {
                const newDistance = shortestDistances[currentSquare] + 1;

                // if 'neighbor' has not been visited yet then 'shortestDistance[neighbor]' will be 'undefined' and return right-hand operato
                if (newDistance < (shortestDistances[neighbor] ?? Infinity)) {
                    shortestDistances[neighbor] = newDistance;
                    parents[neighbor] = currentSquare;
                    queue.push(neighbor)
                }
            }
        }
    }
}

let result1 = knightTravails([4, 3], [3, 3]);
console.log(result1)

let result2 = knightTravails([0, 0], [3, 3]);
console.log(result2)

let result3 = knightTravails([3, 3], [4, 3]);
console.log(result3)

let result4 = knightTravails([3, 3], [0, 0]);
console.log(result4)