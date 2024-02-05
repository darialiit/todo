import { switchVisability, hideElement, deleteElement } from './common';

export default function ProjectLogic() {
  class Project {
    constructor(name) {
      this.name = name;
    }
  }

  const projectsDiv = document.querySelector('.projects');
  const btnAdd = document.querySelector('#add-project');
  const formholder = document.querySelector('.formholder');
  const formholderEdit = document.querySelector('.formholderEdit');
  const submitAddProject = document.querySelector('#addProjectBtn');
  const formAddProject = document.querySelector('#addProjectForm');
  const formEditProject = document.querySelector('#editProjectForm');
  const cancelAddProject = document.querySelector('#cancelProjectBtn');

  function renderProject(project) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('project');
    newDiv.textContent = project.name;
    const imgMore = document.createElement('img');
    imgMore.classList.add('imgMore');
    imgMore.src = '/home/darialaia/repos/todo/src/more.png';
    newDiv.appendChild(imgMore);
    projectsDiv.appendChild(newDiv);
  }

  function createProject(name) {
    const newProject = new Project(name);
    renderProject(newProject);
  }

  // Open the form to add a new project
  btnAdd.addEventListener('click', () => {
    switchVisability(formholder);
    switchVisability(btnAdd);
  });

  // Add a new project to the list
  submitAddProject.addEventListener('click', (e) => {
    e.preventDefault();
    const answer = document.querySelector('#projectName');
    const newProjectName = answer.value;
    createProject(newProjectName);
    switchVisability(formholder);
    switchVisability(btnAdd);
    formAddProject.reset();
  });

  // cancel adding a new project
  cancelAddProject.addEventListener('click', (e) => {
    e.preventDefault();
    switchVisability(formholder);
    switchVisability(btnAdd);
  });

  const projectMoreDiv = document.querySelector('.projectMore');
  const nav = document.querySelector('.nav');

  function getPDivPosition(project) {
    const yAxis = project.getBoundingClientRect().y;
    const xAxis = project.getBoundingClientRect().right;
    projectMoreDiv.style.top = `${yAxis + window.scrollY}px`;
    projectMoreDiv.style.left = `${xAxis + window.scrollX}px`;
  }

  function removePreviousMarks() {
    const allMarked = document.querySelectorAll('.projectMarker');

    allMarked.forEach((mark) => {
      mark.classList.remove('projectMarker');
    });
  }

  function addProjectMarker(project) {
    if (project.classList.contains('projectMarker')) {
      project.classList.remove('projectMarker');
    } else {
      project.classList.add('projectMarker');
    }
  }

  function editElement(toEdit) {
    switchVisability(formholderEdit);
    switchVisability(toEdit);
    const toEditContent = toEdit.firstChild.textContent;
    const projectNameEdit = document.querySelector('#projectNameEdit');
    toEdit.parentNode.insertBefore(formholderEdit, toEdit.nextSibling);
    projectNameEdit.placeholder = toEditContent;
  }

  function displayProjectName(chosenProject) {
    const display = document.querySelector('.projectNameDisplayed');
    const chosenName = chosenProject.firstChild.textContent;
    display.textContent = chosenName;
  }

  window.addEventListener('click', (e) => {
    if (e.target.id === 'projectDeleteBtn') {
      const elementToDelete = document.querySelector('.projectMarker');
      deleteElement(elementToDelete);
      switchVisability(projectMoreDiv);
    } else if (e.target.id === 'projectEditBtn') {
      e.preventDefault();
      const elementToEdit = document.querySelector('.projectMarker');
      editElement(elementToEdit);
      switchVisability(projectMoreDiv);
      switchVisability(btnAdd);
    } else if (e.target.classList.value !== 'imgMore') {
      hideElement(projectMoreDiv);
      // removePreviousMarks();
    }
  });

  nav.addEventListener('click', (e) => {
    if (e.target.classList.contains('imgMore')) {
      getPDivPosition(e.target.parentNode);
      switchVisability(projectMoreDiv);
      removePreviousMarks();
      addProjectMarker(e.target.parentNode);
    }
    if (e.target.id === 'editProjectBtn') {
      e.preventDefault();
      const currentDiv = document.querySelector('.projectMarker');
      const newName = document.querySelector('#projectNameEdit').value;
      currentDiv.firstChild.textContent = newName;
      switchVisability(currentDiv);
      switchVisability(formholderEdit);
      formEditProject.reset();
      switchVisability(btnAdd);
    }
    if (e.target.id === 'cancelEditProjectBtn') {
      e.preventDefault();
      const currentDiv = document.querySelector('.projectMarker');
      switchVisability(currentDiv);
      switchVisability(formholderEdit);
      formEditProject.reset();
      switchVisability(btnAdd);
    }
    if (e.target.classList.contains('project')) {
      displayProjectName(e.target);
    }
  });
}
