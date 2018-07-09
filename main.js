function createGrid() {
    const cells = [
        [0, 1 ,2 ,3 ,4 ,5],
        [0, 1 ,2 ,3 ,4 ,5],
        [0, 1 ,2 ,3 ,4 ,5],
        [0, 1 ,2 ,3 ,4 ,5],
        [0, 1 ,2 ,3 ,4 ,5],
        [0, 1 ,2 ,3 ,4 ,5]
    ]; 

    const container = document.querySelector('#container');
    for ( let i = 0; i < cells.length; i += 1) {
        for (let j = 0; j < cells.length; j += 1) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            //cell.setAttribute('ondrop','drop(event)');
            //cell.setAttribute('ondragover', 'allowDrop(event)');
            container.appendChild(cell);
        }
    }
}
createGrid(); 



const block = [{x: 0, y: 2}, {x: 1, y: 2}];
const threeBlock = [{x: 2, y: 0}, {x: 2, y: 2}, {x: 3, y: 0}, {x: 3, y: 2}];
const twoBlock = [
    {x: 4, y: 1}, {x: 4, y: 2},
    {x: 5, y: 1}, {x: 5, y: 2},
    {x: 0, y: 3}, {x: 0, y: 4},
    {x: 1, y: 3}, {x: 1, y: 4},
    {x: 5, y: 3}, {x: 5, y: 4}];
const horiTwoBlock = [
    {x: 2, y: 4}, {x: 3, y: 4},
    {x: 1, y: 5}, {x: 2, y: 5}];
const blocks = [
    {x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2},
    {x: 3, y: 0}, {x: 3, y: 1}, {x: 3, y: 2},
    {x: 4, y: 1}, {x: 4, y: 2},
    {x: 5, y: 1}, {x: 5, y: 2},
    {x: 0, y: 3}, {x: 0, y: 4},
    {x: 1, y: 3}, {x: 1, y: 4},
    {x: 5, y: 3}, {x: 5, y: 4},
    {x: 2, y: 4}, {x: 3, y: 4},
    {x: 1, y: 5}, {x: 2, y: 5},
    {x: 0, y: 2}, {x: 1, y: 2}];

const render3 = () => {
    for (let i = 0; i < threeBlock.length; i++) {
      const threeB = threeBlock[i];
      const blockElement = document.createElement('div');
      blockElement.classList.add (`x${threeBlock[i].x}y${threeBlock[i].y}`, 'three', 'block');
      blockElement.style.left = (threeB.x * 100).toString() + 'px';
      blockElement.style.top = (threeB.y * 100).toString() + 'px';
      document.querySelector('#container').appendChild(blockElement);
    }
  };
  render3();

  const render2 = () => {
    for (let i = 0; i < twoBlock.length; i++) {
      const twoB = twoBlock[i];
      const blockElement = document.createElement('div');
      blockElement.classList.add(`x${twoBlock[i].x}y${twoBlock[i].y}`, 'two', 'block');
      blockElement.style.left = (twoB.x * 100).toString() + 'px';
      blockElement.style.top = (twoB.y * 100).toString() + 'px';
      document.querySelector('#container').appendChild(blockElement);
    }
  };
  render2();

  const renderHori2 = () => {
    for (let i = 0; i < horiTwoBlock.length; i++) {
      const hori2 = horiTwoBlock[i];
      const blockElement = document.createElement('div');
      blockElement.classList.add(`x${horiTwoBlock[i].x}y${horiTwoBlock[i].y}`, 'hori2', 'block');
      blockElement.style.left = (hori2.x * 100).toString() + 'px';
      blockElement.style.top = (hori2.y * 100).toString() + 'px';
      //blockElement.setAttribute('draggable', true);
      document.querySelector('#container').appendChild(blockElement);
    }
  };
  renderHori2();

  const renderMain = () => {
      for (let i =0; i< block.length; i += 1) {
          const main = block[i];
          const blockElement = document.createElement('div');
          blockElement.classList.add(`x${block[i].x}y${block[i].y}`, 'main', 'block');
          blockElement.style.left = (main.x * 100).toString() + 'px';
          blockElement.style.top = (main.y * 100).toString() + 'px';
          document.querySelector('#container').appendChild(blockElement);
    }
  };
  renderMain();

// checks if spaces youre moving to are inside the grid
const insideGrid = function(x, y) {
    if (x < 0 || y < 0 || x > 5 || y > 5) {
        return false;
    }
    return true;
}
// if the move is inside the grid and theres no block, you can move
const allowedMove = function(x, y) {
    if (!insideGrid(x, y)) {
        return false;
    }
    if (isThereABlock(x, y)) {
        return false;
    }
    return true;
}
// checks if theres a block in the way
const isThereABlock = function(x, y) {
    for ( let i = 0; i < blocks.length; i += 1) {
            const aBlock = blocks[i];
            if ( aBlock.x === x && aBlock.y === y) {
                return true;
            }
    }
    return false;
};

//MOVEMENT FUNCTION OF MAIN BLOCK x0y2 + x1y2
const moveBlock = function(x, y) {
    const block = document.querySelector(`.x0y2`);
    block.style.top = (y * 100).toString() + 'px';
    block.style.left = (x * 100).toString() + 'px';
    if (block.x === 4) {
        win();
    }
}
const moveBlock2 = function(x, y) {
    const block = document.querySelector('.x1y2');
    block.style.top = (y * 100).toString() + 'px';
    block.style.left = (x * 100).toString() + 'px';
}

const moveLeft = () => {
        if (allowedMove(block[0].x - 1, block[0].y)) {
            block[0].x -= 1;
            block[1].x -= 1;
            blocks[20].x -= 1;
            blocks[21].x -= 1;
            moveBlock(block[0].x, block[0].y);
            moveBlock2(block[1].x, block[1].y);
        }
}
const moveRight = () => {
        if (allowedMove(block[1].x + 1, block[1].y)) {
            block[1].x += 1;
            block[0].x += 1;
            blocks[21].x += 1;
            blocks[20].x += 1;
            moveBlock2(block[1].x, block[1].y);
            moveBlock(block[0].x, block[0].y);
        }
}







const aBlock=document.querySelectorAll('.block');
for (i = 0; i <aBlock.length; i += 1) {
    aBlock[i].addEventListener('click', function(e) {
        const focusBlock = e.target.classList[0];
        //MAIN MOVEMENT
        if (focusBlock === 'x1y2') {
            if (allowedMove(block[1].x + 1, block[1].y)) {
                moveRight();}
        } else if (focusBlock === 'x0y2') {
            if (allowedMove(block[0].x - 1, block[0].y)) {
                moveLeft();}
        //THREE BLOCK A MOVEMENT
        } else if (focusBlock === 'x2y0') {
            if (allowedMove(threeBlock[0].x, threeBlock[0].y - 1)) {
                moveUp3();}
        } else if ( focusBlock === 'x2y2') {
            if (allowedMove(threeBlock[1].x, threeBlock[1].y + 1)) {
                moveDown3();}
        //THREE BLOCK B MOVEMENT
        } else if (focusBlock === 'x3y0') {
            if (allowedMove(threeBlock[2].x, threeBlock[2].y - 1)) {
            moveUp3a();} 
        } else if (focusBlock === 'x3y2') {
            if (allowedMove(threeBlock[3].x, threeBlock[3].y + 1)) {
            moveDown3a();}
        //TWO BLOCK A MOVEMENT
        } else if (focusBlock === 'x4y1') {
            if (allowedMove(twoBlock[0].x, twoBlock[0].y - 1)) {
                moveUp2a();} 
        } else if (focusBlock === 'x4y2') {
            if (allowedMove(twoBlock[1].x, twoBlock[1].y + 1)) {
                moveDown2a();}
        //TWO BLOCK B MOVEMENT
        } else if (focusBlock === 'x5y1') {
            if (allowedMove(twoBlock[2].x, twoBlock[2].y - 1)) {
                moveUp2b();}
        } else if (focusBlock === 'x5y2') {
            if (allowedMove(twoBlock[3].x, twoBlock[3].y + 1)) {
                moveDown2b();}
        //TWO BLOCK C MOVEMENT
        } else if (focusBlock === 'x0y3') {
            if (allowedMove(twoBlock[4].x, twoBlock[4].y - 1)) {
                moveUp2c();}
        } else if (focusBlock === 'x0y4') {
            if (allowedMove(twoBlock[5].x, twoBlock[5].y + 1)) {
                moveDown2c();}
        //TWO BLOCK D MOVEMENT
        } else if (focusBlock === 'x1y3') {
            if (allowedMove(twoBlock[6].x, twoBlock[6].y - 1)) {
                moveUp2d();}
        } else if (focusBlock === 'x1y4') {
            if (allowedMove(twoBlock[7].x, twoBlock[7].y + 1)) {
                moveDown2d();}
        //TWO BLOCK E MOVEMENT
        } else if (focusBlock === 'x5y3') {
            if (allowedMove(twoBlock[8].x, twoBlock[8].y - 1)) {
                moveUp2e();}
        } else if (focusBlock === 'x5y4') {
            if (allowedMove(twoBlock[9].x, twoBlock[9].y + 1)) {
                moveDown2e();}
        //HORI TWO BLOCK MOVEMENT
        } else if (focusBlock === 'x2y4') {
            if (allowedMove(horiTwoBlock[0].x - 1, horiTwoBlock[0].y)) {
                moveLeftHori();}
        } else if (focusBlock === 'x3y4') {
            if (allowedMove(horiTwoBlock[1].x + 1, horiTwoBlock[1].y)) {
                moveRightHori();}
        //HORI TWO BLOCK B MOVEMENT
        } else if (focusBlock === 'x1y5') {
            if (allowedMove(horiTwoBlock[2].x - 1, horiTwoBlock[2].y)) {
                moveLeftHoriB();}
        } else if (focusBlock === 'x2y5') {
            if (allowedMove(horiTwoBlock[3].x + 1, horiTwoBlock[3].y)) {
                moveRightHoriB();}
            }
        //allInfo = [focusBlock, blockStyle];
        console.log(focusBlock);
        //console.log(blockStyle);

    })
}






const win = function() {
        if (block.x === 4) {
            alert('YOU GOT OUT!')
        }       
}




// MOVEMENT OF THREE BLOCK x2y0 + x2y2
const moveThreeBlock = function(x, y) {
    const block = document.querySelector(`.x2y0`);
    block.style.top = (y * 100).toString() + 'px';
    block.style.left = (x * 100).toString() + 'px';
}
const moveThreeBlock3 = function(x, y) {
    const block = document.querySelector('.x2y2');
    block.style.top = (y * 100).toString() + 'px';
    block.style.left = (x * 100).toString() + 'px';
}

const moveUp3 = () => {
        if (allowedMove(threeBlock[0].x, threeBlock[0].y - 1)) {
            threeBlock[0].y -= 1;
            threeBlock[1].y -= 1;
            blocks[0].y -= 1;
            blocks[1].y -= 1;
            blocks[2].y -= 1;
            moveThreeBlock(threeBlock[0].x, threeBlock[0].y);
            moveThreeBlock3(threeBlock[1].x, threeBlock[1].y);
        }
}

const moveDown3 = () => {
        if (allowedMove(threeBlock[1].x, threeBlock[1].y + 1)) {
            threeBlock[1].y += 1;
            threeBlock[0].y += 1;
            blocks[2].y += 1;
            blocks[1].y += 1;
            blocks[0].y += 1;
            moveThreeBlock3(threeBlock[1].x, threeBlock[1].y);
            moveThreeBlock(threeBlock[0].x, threeBlock[0].y);
        }
}

//MOVEMENT OF THREE BLOCK x3y0 + x3y2
const moveThreeBlock2a = function(x, y) {
    const block = document.querySelector(`.x3y0`);
    block.style.top = (y * 100).toString() + 'px';
    block.style.left = (x * 100).toString() + 'px';
}
const moveThreeBlock2b = function(x, y) {
    const block = document.querySelector('.x3y2');
    block.style.top = (y * 100).toString() + 'px';
    block.style.left = (x * 100).toString() + 'px';
}

const moveUp3a = () => {
        if (allowedMove(threeBlock[2].x, threeBlock[2].y - 1)) {
            threeBlock[2].y -= 1;
            threeBlock[3].y -= 1;
            blocks[3].y -= 1;
            blocks[4].y -= 1;
            blocks[5].y -= 1;
            moveThreeBlock2a(threeBlock[2].x, threeBlock[2].y);
            moveThreeBlock2b(threeBlock[3].x, threeBlock[3].y);
        }
}

const moveDown3a = () => {
        if (allowedMove(threeBlock[3].x, threeBlock[3].y + 1)) {
            threeBlock[3].y += 1;
            threeBlock[2].y += 1;
            blocks[5].y += 1;
            blocks[4].y += 1;
            blocks[3].y += 1;
            moveThreeBlock2b(threeBlock[3].x, threeBlock[3].y);
            moveThreeBlock2a(threeBlock[2].x, threeBlock[2].y);
        }
}

//MOVEMENT OF TWO BLOCK x4y1 + x4y2
const moveTwoBlockA = function(x, y) {
    const block = document.querySelector(`.x4y1`);
    block.style.top = (y * 100).toString() + 'px';
    block.style.left = (x * 100).toString() + 'px';
}
const moveTwoBlockA2 = function(x, y) {
    const block = document.querySelector('.x4y2');
    block.style.top = (y * 100).toString() + 'px';
    block.style.left = (x * 100).toString() + 'px';
}

const moveUp2a = () => {
        if (allowedMove(twoBlock[0].x, twoBlock[0].y - 1)) {
            twoBlock[1].y -= 1;
            twoBlock[0].y -= 1;
            blocks[6].y -= 1;
            blocks[7].y -= 1;
            moveTwoBlockA(twoBlock[0].x, twoBlock[0].y);
            moveTwoBlockA2(twoBlock[1].x, twoBlock[1].y)
        }
}

const moveDown2a = () => {
        if (allowedMove(twoBlock[1].x, twoBlock[1].y + 1)) {
            twoBlock[1].y += 1;
            twoBlock[0].y += 1;
            blocks[6].y += 1;
            blocks[7].y += 1;
            moveTwoBlockA2(twoBlock[1].x, twoBlock[1].y);
            moveTwoBlockA(twoBlock[0].x, twoBlock[0].y)
        }
}

//MOVEMENT OF TWO BLOCK x5y1 + x5y2
const moveTwoBlockB = function(x, y) {
    const block = document.querySelector(`.x5y1`);
    block.style.top = (y * 100).toString() + 'px';
    block.style.left = (x * 100).toString() + 'px';
}
const moveTwoBlockB2 = function(x, y) {
    const block = document.querySelector('.x5y2');
    block.style.top = (y * 100).toString() + 'px';
    block.style.left = (x * 100).toString() + 'px';
}

const moveUp2b = () => {
        if (allowedMove(twoBlock[2].x, twoBlock[2].y - 1)) {
            twoBlock[2].y -= 1;
            twoBlock[3].y -= 1;
            blocks[8].y -= 1;
            blocks[9].y -= 1;
            moveTwoBlockB(twoBlock[2].x, twoBlock[2].y);
            moveTwoBlockB2(twoBlock[3].x, twoBlock[3].y)
        }
}

const moveDown2b = () => {
        if (allowedMove(twoBlock[3].x, twoBlock[3].y + 1)) {
            twoBlock[3].y += 1;
            twoBlock[2].y += 1;
            blocks[9].y += 1;
            blocks[8].y += 1;
            moveTwoBlockB2(twoBlock[3].x, twoBlock[3].y);
            moveTwoBlockB(twoBlock[2].x, twoBlock[2].y);
        }
}

//MOVEMENT FUNCTION FOR TWO BLOCK x5y1 + x5y2
const moveTwoBlockC = function(x, y) {
    const block = document.querySelector(`.x0y3`);
    block.style.top = (y * 100).toString() + 'px';
    block.style.left = (x * 100).toString() + 'px';
}
const moveTwoBlockC2 = function(x, y) {
    const block = document.querySelector('.x0y4');
    block.style.top = (y * 100).toString() + 'px';
    block.style.left = (x * 100).toString() + 'px';
}

const moveUp2c = () => {
        if (allowedMove(twoBlock[4].x, twoBlock[4].y - 1)) {
            twoBlock[4].y -= 1;
            twoBlock[5].y -= 1;
            blocks[10].y -= 1;
            blocks[11].y -= 1;
            moveTwoBlockC(twoBlock[4].x, twoBlock[4].y);
            moveTwoBlockC2(twoBlock[5].x, twoBlock[5].y)
        }
}

const moveDown2c = () => {
        if (allowedMove(twoBlock[5].x, twoBlock[5].y + 1)) {
            twoBlock[5].y += 1;
            twoBlock[4].y += 1;
            blocks[11].y += 1;
            blocks[10].y += 1;
            moveTwoBlockC2(twoBlock[5].x, twoBlock[5].y);
            moveTwoBlockC(twoBlock[4].x, twoBlock[4].y);
        }
}

//MOVEMENT FUNCTION FOR TWO BLOCK x1y3 + x1y4
const moveTwoBlockD = function(x, y) {
    const block = document.querySelector(`.x1y3`);
    block.style.top = (y * 100).toString() + 'px';
    block.style.left = (x * 100).toString() + 'px';
}
const moveTwoBlockD2 = function(x, y) {
    const block = document.querySelector('.x1y4');
    block.style.top = (y * 100).toString() + 'px';
    block.style.left = (x * 100).toString() + 'px';
}

const moveUp2d = () => {
        if (allowedMove(twoBlock[6].x, twoBlock[6].y - 1)) {
            twoBlock[6].y -= 1;
            twoBlock[7].y -= 1;
            blocks[12].y -= 1;
            blocks[13].y -= 1;
            moveTwoBlockD(twoBlock[6].x, twoBlock[6].y);
            moveTwoBlockD2(twoBlock[7].x, twoBlock[7].y)
        }
}

const moveDown2d = () => {
        if (allowedMove(twoBlock[7].x, twoBlock[7].y + 1)) {
            twoBlock[7].y += 1;
            twoBlock[6].y += 1;
            blocks[13].y += 1;
            blocks[12].y += 1;
            moveTwoBlockD2(twoBlock[7].x, twoBlock[7].y);
            moveTwoBlockD(twoBlock[6].x, twoBlock[6].y);
        }
}

//MOVEMENT FUNCTION FOR BLOCK x5y3 + x5y4
const moveTwoBlockE = function(x, y) {
    const block = document.querySelector(`.x5y3`);
    block.style.top = (y * 100).toString() + 'px';
    block.style.left = (x * 100).toString() + 'px';
}
const moveTwoBlockE2 = function(x, y) {
    const block = document.querySelector('.x5y4');
    block.style.top = (y * 100).toString() + 'px';
    block.style.left = (x * 100).toString() + 'px';
}

const moveUp2e = () => {
        if (allowedMove(twoBlock[8].x, twoBlock[8].y - 1)) {
            twoBlock[8].y -= 1;
            twoBlock[9].y -= 1;
            blocks[14].y -= 1;
            blocks[15].y -= 1;
            moveTwoBlockE(twoBlock[8].x, twoBlock[8].y);
            moveTwoBlockE2(twoBlock[9].x, twoBlock[9].y)
        }
}

const moveDown2e = () => {
        if (allowedMove(twoBlock[9].x, twoBlock[9].y + 1)) {
            twoBlock[9].y += 1;
            twoBlock[8].y += 1;
            blocks[15].y += 1;
            blocks[14].y += 1;
            moveTwoBlockE2(twoBlock[9].x, twoBlock[9].y);
            moveTwoBlockE(twoBlock[8].x, twoBlock[8].y);
        }
}

//MOVEMENT FUNCTION FOR HORI BLOCK x2y4 + x3y4
const moveHoriTwoA = function(x, y) {
    const block = document.querySelector(`.x2y4`);
    block.style.top = (y * 100).toString() + 'px';
    block.style.left = (x * 100).toString() + 'px';
}
const moveHoriTwoA2 = function(x, y) {
    const block = document.querySelector('.x3y4');
    block.style.top = (y * 100).toString() + 'px';
    block.style.left = (x * 100).toString() + 'px';
}

const moveLeftHori = () => {
        if (allowedMove(horiTwoBlock[0].x - 1, horiTwoBlock[0].y)) {
            horiTwoBlock[0].x -= 1;
            horiTwoBlock[1].x -= 1;
            blocks[16].x -= 1;
            blocks[17].x -= 1;
            moveHoriTwoA(horiTwoBlock[0].x, horiTwoBlock[0].y);
            moveHoriTwoA2(horiTwoBlock[1].x, horiTwoBlock[1].y);
        }
}
const moveRightHori = () => {
        if (allowedMove(horiTwoBlock[1].x + 1, horiTwoBlock[1].y)) {
            horiTwoBlock[1].x += 1;
            horiTwoBlock[0].x += 1;
            blocks[17].x += 1;
            blocks[16].x += 1;
            moveHoriTwoA2(horiTwoBlock[1].x, horiTwoBlock[1].y);
            moveHoriTwoA(horiTwoBlock[0].x, horiTwoBlock[0].y);
        }
}


//MOVEMENT FUNCTION FOR HORI BLOCK x1y5 + x2y5
const moveHoriTwoB = function(x, y) {
    const block = document.querySelector(`.x1y5`);
    block.style.top = (y * 100).toString() + 'px';
    block.style.left = (x * 100).toString() + 'px';
}
const moveHoriTwoB2 = function(x, y) {
    const block = document.querySelector('.x2y5');
    block.style.top = (y * 100).toString() + 'px';
    block.style.left = (x * 100).toString() + 'px';
}

const moveLeftHoriB = () => {
        if (allowedMove(horiTwoBlock[2].x - 1, horiTwoBlock[2].y)) {
            horiTwoBlock[2].x -= 1;
            horiTwoBlock[3].x -= 1;
            blocks[18].x -= 1;
            blocks[19].x -= 1;
            moveHoriTwoB(horiTwoBlock[2].x, horiTwoBlock[2].y);
            moveHoriTwoB2(horiTwoBlock[3].x, horiTwoBlock[3].y);
        }
}
const moveRightHoriB = () => {
        if (allowedMove(horiTwoBlock[3].x + 1, horiTwoBlock[3].y)) {
            horiTwoBlock[3].x += 1;
            horiTwoBlock[2].x += 1;
            blocks[19].x += 1;
            blocks[18].x += 1;
            moveHoriTwoB2(horiTwoBlock[3].x, horiTwoBlock[2].y);
            moveHoriTwoB(horiTwoBlock[2].x, horiTwoBlock[2].y);
        }
}