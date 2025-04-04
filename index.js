const goodbye = (name) => {
  const emailClosing = document.querySelector('.email__closing');
  emailClosing.textContent = 'S pozdravem, ' + name;
};
goodbye('Lucie Vadkerti');

const fillSubject = (subject) => {
  const subjectElement = document.querySelector('.email__subject');
  subjectElement.textContent = subject;
};
fillSubject('Odpověď na inzerát');

const fillBody = (body) => {
  const bodyElement = document.querySelector('.email__body');
  bodyElement.innerHTML = body;
};
fillBody(`<p>Ahoj světe!</p> <p>Konečně jsem pochpila princip funkcí!</p> <p>JUPÍÍÍ!!!</p>`);
