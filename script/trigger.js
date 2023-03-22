export const addClassToId = (id, className) => {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add(className);
  }
}

export const removeClassToId = (id, className) => {
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove(className);
  }
}