import {Home} from './Home.js'

export function Main() {
  const main = document.createElement('main')
  main.appendChild(Home())
  return main;
}