// 3. Napište funkci `fillBody` s jedním parametrem `body`, která ze stránky vybere DOM element představující tělo e-mailu a nastaví jeho obsah dle hodnoty parametru.
// 4. Zavolejte funkci na konci souboru `index.js` a ověřte, že v zobrazené stránce správně změní tělo e-mailu.
// 5. Z předchozího cvičení nám zůstala funkce `goodbye`. Do funkce `fillBody` přidejte další parametr s názvem `name`. Tento parametr bude představovat jméno odesílatele. Funkce vyplní tělo e-mailu a do elementu `email__closing` vloží pozdrav, který vyrobí pomocí volání funkce `goodbye`.

const emailClosing = document.querySelector('.email__closing');

const goodbye = (name = 'Lucie') => {
  emailClosing.textContent = 'S pozdravem, ' + name;
};

const konecEmailu = goodbye();

const fillSubject = (subject) => {
  const subjectElement = document.querySelector('.email__subject');
  subjectElement.textContent = subject;
};

fillSubject('Odpověď na inzerát');
