// Click, tap, Enter, or Space reveals the alternate original research figure.
document.querySelectorAll('.figure-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const showingAlternate = button.getAttribute('aria-pressed') !== 'true';
    button.setAttribute('aria-pressed', String(showingAlternate));
    button.querySelector('.figure-hint').textContent = showingAlternate
      ? 'View overview figure ↔' : 'View alternate figure ↔';
  });
});
