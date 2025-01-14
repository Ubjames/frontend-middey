const btn = document.getElementById('btn');
const content = document.getElementById('content');

btn.addEventListener('click',()=>{
    const userinput = prompt('Enter your favourite Fruit');
    if(userinput){
        // content.innerHTML += `<li class="item">${userinput}</li>`;

        const li = document.createElement('li');
        li.className = 'item';
        li.id = 'sd';
        li.textContent = userinput;
        content.appendChild(li);
    }
})