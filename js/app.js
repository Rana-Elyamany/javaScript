let button = document.querySelector('button');
let mainDiv = document.getElementsByClassName('child');
let body = document.querySelector('body');
let i = document.querySelector('i')

button.onclick = function()
{
    body.classList.toggle('dark');
    if(body.style.backgroundColor =='white')
    {
        button.classList.toggle('dark-button');
        i.classList.toggle('dark-i');
        for(let i=0 ; i<4;i++)
        {
            mainDiv[i].classList.toggle('darkdiv');

        }

    }
    else{
        button.classList.toggle('dark-button');

        i.classList.toggle('dark-i');

        for(let i=0 ; i<4;i++)
        {
            mainDiv[i].classList.toggle('darkdiv');

        }
    }

}