function createNewProject(){
    const button = document.querySelector('.add-button');
    button.addEventListener('click' ,createProjectBox
    );
}

createNewProject();

function createProjectBox(){
    // a box is created 
    const newDiv = document.createElement('div');
    newDiv.classList.add('project-box');

    // project-box1
    const firstBox = document.createElement('div');
    firstBox.classList.add('project-box1');
    newDiv.appendChild(firstBox);


    // projec name box 
    const projectName = document.createElement('input');
    projectName.classList.add('project-name');
    projectName.placeholder = "enter your project titile ";
    firstBox.appendChild(projectName);

    // utility-box
    const utilityBox = document.createElement('div');
    utilityBox.classList.add('utility-box');
    firstBox.appendChild(utilityBox);

    //threedots div
    const threeDots = document.createElement('div');
    threeDots.classList.add('three-dots');
    utilityBox.appendChild(threeDots);

    // three dots 
    const threeDots1 = document.createElement('button')
    threeDots1.classList.add('dot-circle');
    threeDots.appendChild(threeDots1);
    threeDots1.textContent = "Z";
    const threeDots2 = document.createElement('button')
    threeDots2.classList.add('dot-circle');
    threeDots.appendChild(threeDots2);
    threeDots2.textContent = "Y";
    const threeDots3 = document.createElement('button')
    threeDots3.classList.add('dot-circle');
    threeDots.appendChild(threeDots3);
    threeDots3.textContent = "X";

    // status bar
    const statusBar = document.createElement('div');
    statusBar.classList.add('status-bar');
    newDiv.appendChild(statusBar);

    // adding the status of project // input is just for now will change later 
    const status = document.createElement('div');
    status.classList.add('status');
    statusBar.appendChild(status);

    // select option to make the list 
    const select =document.createElement('select');
    select.classList.add('status');
    status.appendChild(select);

    // option
    const options = ['not started','active','completed'];
    options.forEach((status) => {
        const option =document.createElement('option');
        option.value = status.toLowerCase().replace(' ' , "-");
        option.textContent =status;
        select.appendChild(option);
        
    });

    //DELETE BUTTON
 

    threeDots3.addEventListener('click', (event) => {
        const projectBoxToDelete = event.target.closest('.project-box'); // Ensure proper selector
        if (projectBoxToDelete) {
            projectBoxToDelete.remove(); // Remove the specific box
        }
    });


    // the list div is called and the new div is appendend 
    const list = document.querySelector('.list');
    list.appendChild(newDiv);
}





