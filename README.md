# knight_travails

source link: https://www.theodinproject.com/lessons/javascript-knights-travails

<h1>Assignment</h1>
<p>
Your task is to build a function knightMoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

You can think of the board as having 2-dimensional coordinates. Your function would therefore look like:
</p>
<li>knightMoves([0,0],[1,2]) == [[0,0],[1,2]]</li>
<li>knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]</li>
<li>knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]</li>

<h2>Step-by-Step</h2>
<li>Put together a script that creates a game board and a knight.</li>
<li>Treat all possible moves the knight could make as children in a tree. Don’t allow any moves to go off the board.</li>
<li>Decide which search algorithm is best to use for this case. Hint: one of them could be a potentially infinite series.</li>
<li>Use the chosen search algorithm to find the shortest path between the starting square (or node) and the ending square. Output what that full path looks like, e.g.:</li>
