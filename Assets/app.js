var mainInput = document.getElementById('mainInput')
var mainJavaDiv = document.getElementById('mainJavaDiv')
var listUl = document.getElementById('mainList')


function addbtn() {
    var isEmpty = true;
    var isNumber = true;
    
    if (mainInput.value.length !== 0) {
        for (var i = 0; i <= mainInput.value.length; i++) {
            if (mainInput.value[i] !== " ") {
                isEmpty = false;
            }
            if (mainInput.value != Number(mainInput.value)) {
                isNumber = false;
            }
        }
    }
    if (isEmpty) {
        mainInput.setAttribute("placeholder", "Can Not Add an Empty Task");
    }
    else if (isNumber) {
        mainInput.setAttribute("placeholder", "Can Not Add a Number");
        mainInput.value = "";
    }
    else {
        mainInput.setAttribute("placeholder", "Add Task");
        var listdiv = document.createElement('div')
        listdiv.setAttribute('class', 'listDIv')
        var list = document.createElement('li')
        var inp = document.createElement('input')
        inp.setAttribute('class', 'listInput')
        inp.setAttribute('id', 'listInput')
        inp.setAttribute('disabled', 'disabled')
        list.appendChild(inp)
        list.setAttribute('class', 'mianList')
        var btnD = document.createElement('button')
        btnD.setAttribute('class', 'javaBtn btn btn-danger')
        btnD.setAttribute('onClick', 'dete(this)')
        var buttonE = document.createElement('button')
        buttonE.setAttribute('class', 'javaBtn btn btn-success')
        buttonE.setAttribute('id', 'editBtn')
        buttonE.setAttribute('onClick', 'edit(this)')
        var buttonEText = document.createTextNode('Edit')
        var btnDtext = document.createTextNode('delete')

        mainJavaDiv.appendChild(listdiv)
        listdiv.appendChild(listUl)
        listUl.appendChild(list)
        list.appendChild(btnD)
        list.appendChild(buttonE)
        btnD.appendChild(btnDtext)
        buttonE.appendChild(buttonEText)



        var input = document.getElementById('mainInput')
        var inputValue = input.value
        inp.value = inputValue
        console.log(inputValue)
        input.value = ""
    }
}
function edit(myeditBtn){
if(myeditBtn.innerText === 'Edit'){
        myeditBtn.innerText = 'Update'
        myeditBtn.previousSibling.previousSibling.disabled = false;
        myeditBtn.previousSibling.previousSibling.classList = 'bb form-control';
    }
    else{
        myeditBtn.innerText = 'Edit'
        myeditBtn.previousSibling.previousSibling.disabled = true;
        myeditBtn.previousSibling.previousSibling.classList = 'bnb';
    }

}
function dete(myditBtn){

    myditBtn.parentNode.innerHTML = ""
}
function deteAll(){
    mainInput.value = ''
    mainJavaDiv.innerHTML = ""
}
