export function switchVisability(element) {
  if (element.classList.contains('hidden')) {
    element.classList.remove('hidden');
  } else {
    element.classList.add('hidden');
  }
}

export function hideElement(element) {
  if (!element.classList.contains('hidden')) {
    element.classList.add('hidden');
  }
}

export function deleteElement(toDelete) {
  toDelete.parentNode.removeChild(toDelete);
}
