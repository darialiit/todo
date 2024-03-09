/* eslint-disable no-param-reassign */
import { format, parseISO } from 'date-fns';
import { switchVisability, hideElement, deleteElement } from './common';

export default function TaskLogic() {
  class Task {
    static latestId = 0;

    constructor(name, date, description, project) {
      // eslint-disable-next-line no-plusplus
      Task.latestId++;
      this.id = Task.latestId;
      this.name = name;
      this.date = format(parseISO(date), 'MM/dd/yyyy');
      this.description = description;
      this.project = project;
      this.star = false;
      this.status = false;
    }
  }

  const tasksLog = [];

  const tasksContainer = document.querySelector('.tasksContainer');

  function renderTask(task) {
    const divMain = document.createElement('div');
    divMain.classList.add('task');
    divMain.classList.add(task.id);

    const input = document.createElement('input');

    if (task.status === true) {
      input.classList.add('check');
      input.type = 'checkbox';
      input.checked = true;
    } else {
      input.classList.add('check');
      input.type = 'checkbox';
    }

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

    if (task.star === true) {
      imgStar.classList.add('star');
      imgStar.src = '/home/darialaia/repos/todo/src/starred.png';
      imgStar.alt = ' filled star';
    } else {
      imgStar.classList.add('star');
      imgStar.src = '/home/darialaia/repos/todo/src/star.png';
      imgStar.alt = 'not filled star';
    }

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
    const fromProject = document
      .querySelector('.projectNameDisplayed')
      .textContent.trim();

    const newTask = new Task(name, date, description, fromProject);
    tasksLog.push(newTask);
    renderTask(newTask);
  }

  const container = document.querySelector('.container');
  const addTastOverlay = document.querySelector('.overlay');
  const formTaskEdit = document.querySelector('.formTaskEdit');

  function updateImportanceStatus(taskid) {
    tasksLog.forEach((task) => {
      if (task.id === Number(taskid)) {
        if (task.star) {
          task.star = false;
        } else {
          task.star = true;
        }
      }
    });
  }

  function updateCheckStatus(taskid) {
    tasksLog.forEach((task) => {
      if (task.id === Number(taskid)) {
        if (task.status) {
          task.status = false;
        } else {
          task.status = true;
        }
      }
    });
  }

  function switchImportant(star) {
    const [, currentTaskId] = star.parentNode.classList;
    updateImportanceStatus(currentTaskId);
    if (star.classList.contains('starred')) {
      star.classList.remove('starred');
      star.src = '/home/darialaia/repos/todo/src/star.png';
    } else {
      star.classList.add('starred');
      star.src = '/home/darialaia/repos/todo/src/starred.png';
    }
  }

  function switchComplete(task) {
    const [, currentTaskId] = task.classList;
    updateCheckStatus(currentTaskId);
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
    toEdit.parentNode.insertBefore(formTaskEdit, toEdit.nextSibling);
    const toEditContent = toEdit.querySelector('.taskNameDisplay').textContent;
    const taskNameEdit = document.querySelector('#taskNameEdit');
    taskNameEdit.value = toEditContent;

    const toEditDesc = toEdit
      .querySelector('.taskDescriptionDisplay')
      .textContent.trim();
    const taskDescEdit = document.querySelector('#taskDescriptionEdit');
    taskDescEdit.value = toEditDesc;
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

  //  folders
  const folderStarred = document.querySelector('#starred');
  const folderFinished = document.querySelector('#finished');
  const folderAll = document.querySelector('#all');
  const folderToday = document.querySelector('#today');

  folderToday.addEventListener('click', () => {
    tasksContainer.innerHTML = '';
    const today = format(new Date(), 'MM/dd/yyyy');
    const allTodayTasks = tasksLog.filter((task) => task.date === today);

    allTodayTasks.forEach((todayTask) => {
      renderTask(todayTask);
    });
  });

  folderStarred.addEventListener('click', () => {
    tasksContainer.innerHTML = '';
    const allStarredTasks = tasksLog.filter((task) => task.star);

    allStarredTasks.forEach((starredTask) => {
      renderTask(starredTask);
    });
  });

  folderFinished.addEventListener('click', () => {
    tasksContainer.innerHTML = '';
    const allFinishedTasks = tasksLog.filter((task) => task.status);

    allFinishedTasks.forEach((finishedTask) => {
      renderTask(finishedTask);
    });
  });

  folderAll.addEventListener('click', () => {
    tasksContainer.innerHTML = '';
    const allUnFinishedTasks = tasksLog.filter((task) => !task.status);

    allUnFinishedTasks.forEach((task) => {
      renderTask(task);
    });
  });

  const projectsDiv = document.querySelector('.projects');

  projectsDiv.addEventListener('click', (project) => {
    tasksContainer.innerHTML = '';
    const projectName = project.target.textContent.trim();
    const tasksOfProject = tasksLog.filter(
      (task) => task.project === projectName
    );
    tasksOfProject.forEach((task) => {
      renderTask(task);
    });
  });

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
