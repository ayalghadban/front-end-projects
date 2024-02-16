//select the start game button
document.querySelector(".control-buttons span").onclick = function()
{
    //prompt window to ask for name
    let yourName = prompt("What's Your Name? ");

    // if name is empty
    if(yourName == null || yourName == "")
    {
        //set name to unknown
        document.querySelector(".name span").innerHTML = 'Unknown';
    }
    // name is not empty 
    else 
    {
        // set name to your name 
        document.querySelector(".name span").innerHTML =yourName;
    }

    //remove splash screen
    document.querySelector(".control-buttons").remove();

};

//Effect duration
let duration = 1000;

//select blocks container
let blocksContainer = document.querySelector(".memory_game_blocks");

//create array from game blocks
let blocks = Array.from(blocksContainer.children);

//create range of keys
let orderRange = [...Array(blocks.length).keys()];

shuffle(orderRange);

//add order css property to game blocks 
blocks.forEach((block, index) => 
{
    block.style.order = orderRange[index];

    block.addEventListener('click', function(){
        flipBlock(block);
    });
});

//flip block function 
function flipBlock(selectedBlock)
{
    selectedBlock.classList.add('is-flipped');

    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
    if(allFlippedBlocks.length === 2)
    {
        stopClicking();
        checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);

    }
}

//stop clicking function 
function stopClicking()
{
    blocksContainer.classList.add('no-clicking');

    setTimeout(() => {
        blocksContainer.classList.remove('no-clicking');
    },duration);
}

// Check Matched Block
function checkMatchedBlocks(firstBlock, secondBlock) {

    let triesElement = document.querySelector('.tries span');
  
    if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
  
      firstBlock.classList.remove('is-flipped');
      secondBlock.classList.remove('is-flipped');
  
      firstBlock.classList.add('has-match');
      secondBlock.classList.add('has-match');
    
    } else {
  
      triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
  
      setTimeout(() => {
  
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');
  
      }, duration);
    
    }
  
  }

//shuffle function 
function shuffle(array)
{
    let current = array.length, temp, random;
    while(current > 0)
    {
        random = Math.floor(Math.random() * current);
        current--;
        temp = array[current];
        array[current] = array[random];
        array[random] = temp;
    }
    return array;
}