export function Nav() {
  const nav = document.createElement('nav');
  nav.classList.add('nav');
  nav.innerHTML = `
    <ul>
      <li>
        <a href="#/">Home</a>
      </li>
      <li>
        <a href="#/services">Services</a>
      </li>
      <li>
        <a href="#/contact">Contact</a>
      </li>
    </ul>
  `;

  return nav;
}
