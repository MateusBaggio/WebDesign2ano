function addTask() {
    var taskinput = document.getElementById("taskinput").value;

    if (taskinp ut === '') return;

    var li = document.createElement('li');
    li.textContent = taskinput;

    document.getElementById("tasklist").appendChild(li);

}

