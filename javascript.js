let parent = document.getElementById("container");

for (let i = 0; i < 16; i++) {   
    let row = document.createElement('div');
    row.classList.add("content");
    parent.appendChild(row);

    for (let j = 0; j < 16; j++) {
        let cell = document.createElement('div');
        cell.classList.add("cell"); 
        
        cell.addEventListener('mouseover', function () {
            cell.style.backgroundColor = 'black';
        });
        row.appendChild(cell);
    }
}
