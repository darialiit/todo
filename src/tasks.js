import { switchVisability, hideElement, deleteElement } from './common';

export default function TaskLogic() {
  class Task {
    constructor(name, date, description) {
      this.name = name;
      this.date = date;
      this.description = description;
      this.priority = false;
      this.status = false;
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
  const formAddTast = document.querySelector('.formholderAddTask');

  function markImportant(star) {
    if (star.classList.contains('starred')) {
      star.classList.remove('starred');
      star.src = '/home/darialaia/repos/todo/src/star.png';
    } else {
      star.classList.add('starred');
      star.src = '/home/darialaia/repos/todo/src/starred.png';
    }
  }

  container.addEventListener('click', (e) => {
    if (e.target.id === 'addTask') {
      switchVisability(formAddTast);
    }
    if (e.target.classList.contains('star')) {
      markImportant(e.target);
    }
    if (e.target.id === 'addTaskBtn') {
      e.preventDefault();
      const namePassed = document.querySelector('#taskName').value;
      const datePassed = document.querySelector('#taskDate').value;
      const descPassed = document.querySelector('#taskDescription').value;
      createTask(namePassed, datePassed, descPassed);
      switchVisability(formAddTast);
    }
  });
}
