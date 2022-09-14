

// Create Two Functions -> addChild and redWedding

// Attach functions to buttons

// The addChild function creates new div & appends it to the starks div

// The redWedding function removes ALL stark children (loop)


const addChildBtn = document.querySelector('#add-child')
console.log(addChildBtn)
    

const addChild = (child) => {
    addChildBtn.addEventListener('click', function(e){
        const li = document.createElement('li')
        li.textContent = child
        document.querySelector('div').appendChild(li)
    })}


addChild('Bill')

function (addChild){

    const  div = document.querySelector('.stark.');
       div.innerHTML += <button id="new div">New div</button>
       div.appendChild('new div')
}
