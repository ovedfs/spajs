import { Header } from './components/Header.js';
import { Main } from './components/Main.js';

export function App() {
  const app = document.getElementById('app');
  app.appendChild(Header());
  app.appendChild(Main());
}
