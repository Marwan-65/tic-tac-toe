let boxes = document.getElementsByClassName("box");
let comEl= document.getElementById("comment");
let c=0;
let turns=9;
px=[];
po=[];
let done=false;
document.getElementById("btn").style.display="none";
for (let i = 0; i < boxes.length; i++) 
{
    function p()
    {
        test(boxes[i]);
    }
    boxes[i].addEventListener("click", p, { once: true });
    
}
function test(boxy)
{
    if(done===false)
    {
    if (turns%2===1)
    {
        boxn=tonum(boxy.className);
        px+=boxn;
        turns--;
        boxy.textContent="X";
        boxy.style.textShadow="0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6";
        comEl.textContent="Player 2 Turn"
        console.log(boxy.className)
       if( win(...px) ===true)
       {
            done=true;
            comEl.textContent="Player 1 Won!!!"
            end();
       }
    }else
    {
        boxn=tonum(boxy.className);
        po+=boxn;
        turns--;
        boxy.textContent="O";
        boxy.style.textShadow="0 0 5px #fff, 0 0 10px #fff, 0 0 15px #e03414, 0 0 20px #e03414, 0 0 25px #e03414, 0 0 30px #e03414, 0 0 35px #e03414";
        comEl.textContent="Player 1 Turn"
        if(win(...po)===true)
        {
            done=true;
            comEl.textContent="Player 2 Won!!!"
            end();
        }
    }
    
    if(turns===0 && win(...po)===false &&win(...px)===false)
    {
        done=true;
        comEl.textContent="It's a DRAW"
        end();
    }
}
}
function end()
{
    console.log("game ended")
    document.getElementById("btn").style.display="block";
    for (let i = 0; i < boxes.length; i++) 
{
    boxes[i].removeEventListener("click", p, { once: true });
}
}

function tonum(word)
{
    if (word==="box one")
    {
        return 1;
    }
    else if(word==="box two")
    {
        return 2;
    }
    else if(word==="box three")
    {
        return 3;
    }
    else if(word==="box four")
    {
        return 4;
    }
    else if(word==="box five")
    {
        return 5;
    }
    else if(word==="box six")
    {
        return 6;
    }
    else if(word==="box seven")
    {
        return 7;
    }
    else if(word==="box eight")
    {
        return 8;
    }
    else if(word==="box nine")
    {
        return 9;
    }
}

function win(...arr)
{
    
    if(arr.includes("1") && arr.includes("2")&& arr.includes("3")||arr.includes("4") && arr.includes("5")&& arr.includes("6")||arr.includes("7") && arr.includes("8")&& arr.includes("9")||arr.includes("1") && arr.includes("4")&& arr.includes("7")||arr.includes("2") && arr.includes("5")&& arr.includes("8")||arr.includes("3") && arr.includes("6")&& arr.includes("9")||arr.includes("1") && arr.includes("5")&& arr.includes("9")||(arr.includes("3") && arr.includes("5")&& arr.includes("7")))
    {
        console.log("won")
        return true;
    }
    else 
    {
        
    return false;
    }
    
}

function home()
{
    window.location.reload();
}