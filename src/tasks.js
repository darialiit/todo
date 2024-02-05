import { switchVisability, hideElement, deleteElement } from './common';

export default function TaskLogic() {
  class Task {
    constructor(name, date, description) {
      this.name = name;
      this.date = date;
      this.description = description;
      this.project = 'default';
    }
  }

  const firstTask = new Task('First', '01/02/2024', 'Need to do things');
  const tasksContainer = document.querySelector('.tasksContainer');

  function renderTask(task) {
    const divMain = document.createElement('div');
    divMain.classList.add('task');

    const input = document.createElement('input');
    input.classList.add('check');
    input.type = 'checkbox';

    const divWrapper = document.createElement('div');
    divWrapper.classList.add('wrapperName');
    const taskName = document.createElement('p');
    taskName.classList.add('taskNameDisplay');
    taskName.textContent = task.name;
    const taskDesc = document.createElement('p');
    taskDesc.classList.add('taskDescriptionDisplay');
    taskDesc.textContent = task.description;
    divWrapper.appendChild(taskName);
    divWrapper.appendChild(taskDesc);

    const imgStar = document.createElement('img');
    imgStar.classList.add('star');
    imgStar.src = '/home/darialaia/repos/todo/src/star.png';
    imgStar.alt = 'not filled star';

    const date = document.createElement('div');
    date.classList.add('dateDisplay');
    date.textContent = task.date;

    const imgMore = document.createElement('img');
    imgMore.classList.add('imgMore');
    imgMore.src = '/home/darialaia/repos/todo/src/more.png';
    imgMore.alt = 'three dots meaning addicional information';

    divMain.appendChild(input);
    divMain.appendChild(divWrapper);
    divMain.appendChild(imgStar);
    divMain.appendChild(date);
    divMain.appendChild(imgMore);

    tasksContainer.appendChild(divMain);
  }

  function createTask(name, date, description) {
    const newTask = new Task(name, date, description);
    renderTask(newTask);
  }

  const container = document.querySelector('.container');
  const addTastOverlay = document.querySelector('.overlay');
  const formTaskEdit = document.querySelector('.formTaskEdit');

  function switchImportant(star) {
    if (star.classList.contains('starred')) {
      star.classList.remove('starred');
      star.src = '/home/darialaia/repos/todo/src/star.png';
    } else {
      star.classList.add('starred');
      star.src = '/home/darialaia/repos/todo/src/starred.png';
    }
  }

  function switchComplete(task) {
    if (task.classList.contains('checked')) {
      task.classList.remove('checked');
    } else {
      task.classList.add('checked');
    }
  }

  function addTaskMarker(task) {
    if (task.classList.contains('taskMarker')) {
      task.classList.remove('taskMarker');
    } else {
      task.classList.add('taskMarker');
    }
  }

  function removePreviousTMarks() {
    const allMarked = document.querySelectorAll('.taskMarker');

    allMarked.forEach((mark) => {
      mark.classList.remove('taskMarker');
    });
  }

  const taskMoreDiv = document.querySelector('.taskMore');
  const editTaskForm = document.querySelector('#editTaskForm');
  const addTaskForm = document.querySelector('#addTaskForm');

  function getTDivPosition(task) {
    const yAxis = task.getBoundingClientRect().y;
    const xAxis = task.getBoundingClientRect().right;
    taskMoreDiv.style.top = `${yAxis + window.scrollY}px`;
    taskMoreDiv.style.left = `${xAxis + window.scrollX}px`;
  }

  function editElement(toEdit) {
    switchVisability(formTaskEdit);
    switchVisability(toEdit);
    const toEditContent = toEdit.firstChild.textContent;
    const projectNameEdit = document.querySelector('#taskNameEdit');
    toEdit.parentNode.insertBefore(formTaskEdit, toEdit.nextSibling);
    projectNameEdit.placeholder = toEditContent;
  }

  function renderEditedTask(currentDiv) {
    const currentName = currentDiv.querySelector('.taskNameDisplay');
    const currentDate = currentDiv.querySelector('.dateDisplay');
    const currentDesc = currentDiv.querySelector('.taskDescriptionDisplay');

    const newName = document.querySelector('#taskNameEdit').value;
    const newDate = document.querySelector('#taskDateEdit').value;
    const newDesc = document.querySelector('#taskDescriptionEdit').value;

    currentName.textContent = newName;
    currentDate.textContent = newDate;
    currentDesc.textContent = newDesc;
  }

  container.addEventListener('click', (e) => {
    if (e.target.id === 'addTask') {
      switchVisability(addTastOverlay);
    }
    if (e.target.classList.contains('star')) {
      switchImportant(e.target);
    }
    if (e.target.classList.contains('imgMore')) {
      getTDivPosition(e.target.parentNode);
      switchVisability(taskMoreDiv);
      removePreviousTMarks();
      addTaskMarker(e.target.parentNode);
    } else if (e.target.classList.value !== 'imgMore') {
      hideElement(taskMoreDiv);
      // removePreviousMarks();
    }
    if (e.target.id === 'addTaskBtn') {
      e.preventDefault();
      const namePassed = document.querySelector('#taskName').value;
      const datePassed = document.querySelector('#taskDate').value;
      const descPassed = document.querySelector('#taskDescription').value;
      createTask(namePassed, datePassed, descPassed);
      switchVisability(addTastOverlay);
      addTaskForm.reset();
    }
    if (e.target.id === 'cancelTaskBtn') {
      e.preventDefault();
      switchVisability(addTastOverlay);
      addTaskForm.reset();
    }
    if (e.target.id === 'taskDeleteBtn') {
      const elementToDelete = document.querySelector('.taskMarker');
      deleteElement(elementToDelete);
      hideElement(taskMoreDiv);
    }
    if (e.target.id === 'taskEditBtn') {
      e.preventDefault();
      const elementToEdit = document.querySelector('.taskMarker');
      editElement(elementToEdit);
      hideElement(taskMoreDiv);
    }
    if (e.target.id === 'editTaskBtn') {
      e.preventDefault();
      const currentDiv = document.querySelector('.taskMarker');
      renderEditedTask(currentDiv);
      switchVisability(currentDiv);
      hideElement(formTaskEdit);
      editTaskForm.reset();
    }
    if (e.target.id === 'cancelEditTaskBtn') {
      e.preventDefault();
      const currentDiv = document.querySelector('.taskMarker');
      switchVisability(currentDiv);
      switchVisability(formTaskEdit);
      editTaskForm.reset();
    }
    if (e.target.classList.contains('check')) {
      switchComplete(e.target.parentNode);
    }
  });
}
