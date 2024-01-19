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
  console.log(projectsLog);
  renderProject(newProject);
}

const projectsDiv = document.querySelector('.projects');

function renderProject(project) {
  const newDiv = document.createElement('div');
  newDiv.textContent = project.name;
  projectsDiv.appendChild(newDiv);
}

const btnAdd = document.querySelector('#add-project');

btnAdd.addEventListener('click', () => {
  const answer = prompt('What is the name of the project?');
  createProject(answer);
});
