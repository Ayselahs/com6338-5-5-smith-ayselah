var listUl = document.getElementById('todo-list');
var form = document.querySelector('form');



form.onsubmit = function(e) {
    // prevent form submission
    e.preventDefault()
    // access form by targeting the input
    var input = document.querySelector('input')
    // also stop user from being able to submit spaces
    var data = input.value.trim()
    // modifying input element
    

    // stop the user from being able to submit an empty field
    if (data == "" && data.length === 0) {
        //listUl.innerHTML = data;
        //listArr.push(data);
        console.log(data);
        // reset form field
        return

    }

    input.value = ''

    var li = document.createElement('li')
    var btn = document.createElement('button')
                //li.textContent = item
    btn.textContent = data
    listUl.appendChild(li)
    li.appendChild(btn)
        //console.log(listArr)
        console.log(li)
    
    btn.onclick = function() {
        btn.style.textDecoration = 'line-through'

        btn.onclick = function() {
            this.parentNode.remove()
        }
    }

    // reset UL element
 


        
        

    

}



