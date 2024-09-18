import './style.css'

document.querySelector('#app').innerHTML = `
<div id="fields"></div>
<div id="controls">
    <button id="addButton">Add Field</button>
</div>
`



let count = 0;

for(let i = 1; i < 4; i++){
    addField(i);
}

for(let i = 1; i < 4; i++){
    document.querySelector("#myButton" + i.toString()).addEventListener('click',() => copyField(i));
    document.querySelector("#myClearButton" + i.toString()).addEventListener('click',() => clearField(i));
}

document.querySelector("#addButton").addEventListener('click',() => {
        const n = count + 1;
        addField(n);
        document.querySelector("#myButton" + n.toString()).addEventListener('click', () => copyField(n));
        document.querySelector("#myClearButton" + n.toString()).addEventListener('click', () => clearField(n));
        count++;
    }
);



function addField(n) {

    const newDiv = document.createElement('div');
    newDiv.classList.add("inputContainer");
    newDiv.innerHTML =
        `    <input type="text" placeholder="Hello World" id="myInput${n.toString()}">
    <div class="buttonGroup">
        <button id="myButton${n.toString()}" class="inputButton">Copy</button>
        <button id="myClearButton${n.toString()}" class="clearButton">Clear</button>
    </div>`;

    document.getElementById("fields").append(newDiv);

    count++;

}

function copyField(n) {
    // Get the text field
    const copyText = document.getElementById("myInput" + n.toString());

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}

function clearField(n) {
    // Get the text field
    document.getElementById("myInput" + n.toString()).value = "";
}


