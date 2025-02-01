const colours = [ "green","red","rgba(133,122,200)","pink","#f15025"]
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
    // get a random number btwn 0-3 (array index)
    const randonNum = getRandomNum();
    console.log(randonNum);
    document.body.style.backgroundColor = colours[randonNum];
    color.textContent = colours[randonNum];
});

function getRandomNum(){
    return Math.floor( Math.random()*colours.length);
}

