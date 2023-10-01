const list = document.querySelector('#list')
const toform = document.querySelector('#form')
const toInput = document.querySelector('#toinput')

toform.addEventListener('submit', formHand);

function formHand(event){
    event.preventDefault();
    

    //checbox
    const checbox = document.createElement('input');
    checbox.type = 'checkbox';
    checbox.style['margin-right'] = '3px'


    const task = document.createElement('li');

    task.append(checbox)
    
    const text = toInput.value;
    task.appendChild(document.createTextNode(text));
    task.style['display'] = 'flex';
    task.style['align-items'] = 'center';
    toInput.value = '';



    //delet 
    const delBut = document.createElement('button');
    delBut.setAttribute('role', 'button');
    delBut.innerText = 'x';
    delBut.style['marginLeft'] = '20px';
    

      

      
 
    

    console.log(task)
     
    
   

    delBut.addEventListener('click', function () {
        this.closest('li').remove()
    });

    
    
    
    list.append(task)
    task.append(delBut)



}