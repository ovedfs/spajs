import { Title } from './Title.js';
import {Nav} from './Nav.js';

export function Header() {
  const header = document.createElement('header');
  header.classList.add('header');
  header.appendChild(Title());
  header.appendChild(Nav());

  return header;
}
