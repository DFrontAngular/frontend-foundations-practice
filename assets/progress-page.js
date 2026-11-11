const key = 'frontend-foundations-progress-v1';
const inputs = [...document.querySelectorAll('[data-progress-id]')];

function read() {
  try {
    const value = JSON.parse(localStorage.getItem(key) ?? '{}');
    return value && typeof value === 'object' ? value : {};
  } catch {
    return {};
  }
}

function update() {
  const progress = read();
  inputs.forEach((input) => {
    input.checked = Boolean(progress[input.dataset.progressId]);
  });
}

inputs.forEach((input) =>
  input.addEventListener('change', () => {
    const progress = read();
    progress[input.dataset.progressId] = input.checked;
    localStorage.setItem(key, JSON.stringify(progress));
  }),
);

update();
