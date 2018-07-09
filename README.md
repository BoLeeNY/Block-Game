### Get Me Out

Get Me Out is a block puzzle game. The objective is to get the gold block to the right side of the screen.
Vertical blocks can only move vertically and horizontal blocks can only move horizontally.

## Work Process

When I started this project, I had the goal of copying the game Unblock Me.
This project was quite a bit more complicated than I had first thought.
I began by trying to copy a single level of Unblock Me.

## Wireframe
![alt text](https://github.com/NegativeCosine/Block-Game/blob/master/images/wireframe.JPG "wireframe")

## Work Progress

I began with creating a 6 x 6 grid. Then I created all 10 of the blocks to have a visual reference of their positions. 
I created an array of coordinates for each of the blocks so I find their exact positions.
I had 4 different types of blocks to create. The Main block which is horizontal, 3 piece blocks that are vertical, 2 piece blocks that are vertical, and 2 piece blocks that are horizontal.
I created a unique class for each piece by referencing their coordinates.
```blockElement.classList.add (`x${threeBlock[i].x}y${threeBlock[i].y}`, 'three', 'block');```
<br>

Now that I have the block positions, I can make them move.
The idea is to have the blocks slide in the direction that they are oriented. 
But also, the blocks should not be able to pass through other blocks or leave the grid.
So I created a new array that I can reference for the collision detection.
The movement function would only allow the block to move if there was not a block in the way and it was still inside the grid.
```if (allowedMove(block[0].x - 1, block[0].y)) { 
block[0].x -= 1; 
moveBlock(block[0].x, block[0].y);}```
<br>

At this point, the game has all it needs to work. The pieces are pre-positioned into the puzzle layout.
The pieces must be moved around to make a path for the "Main" piece to reach the right side of the grid. 
A win message is displayed once it reaches the end.

### Challenges
I had multiple difficult points during this project. They all revolved around movement of the blocks.
The code I based my work on only accounted for a single piece moving at a time. 
For my game, I had to move multiple pieces at once while keeping them together.
For the longest time, I tried to have each block be a single cell stretched over multiple cells.
This created collision problems since there was actually nothing under the stretched part of the block.
<br>

I solved this by filling out the blocks with more cells. 
Then I linked the movement of my blocks to their corresponding collision pieces.
Now when a block moves, it's collision coordinates moves as well.
<br>

I couldn't figure out how to condense all of my functions.
I had to make a move function for each piece of each block. This ballooned my code enormously.
I would like to eventually go back to fix this and to add a few more levels.
