import './style.css';

class Project {
  constructor(name) {
    this.name = name;
  }
}

const projectsLog = [];

function createProject(name) {
  const newProject = new Project(name);
  projectsLog.push(newProject);
  //console.log(projectsLog);
  renderProject(newProject);
}

const projectsDiv = document.querySelector('.projects');

function renderProject(project) {
  const newDiv = document.createElement('div');
  newDiv.textContent = project.name;
  projectsDiv.appendChild(newDiv);
}

const btnAdd = document.querySelector('#add-project');
const formholder = document.querySelector('.formholder');

function switchVisability(element) {
  if (element.classList.contains('hidden')) {
    element.classList.remove('hidden');
  } else {
    element.classList.add('hidden');
  }
}

btnAdd.addEventListener('click', () => {
  switchVisability(formholder);
  switchVisability(btnAdd);
});

const submitAddProject = document.querySelector('#addProjectBtn');
const formAddProject = document.querySelector('#addProjectForm');

submitAddProject.addEventListener('click', (e) => {
  e.preventDefault();
  const answer = document.querySelector('#projectName');
  const newProjectName = answer.value;
  createProject(newProjectName);
  switchVisability(formholder);
  switchVisability(btnAdd);
  formAddProject.reset();
});
