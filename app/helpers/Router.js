import {Home} from '../components/Home.js'
import {Services} from '../components/Services.js'
import {Contact} from '../components/Contact.js'

export function Router() {
  window.addEventListener('hashchange', () => {
    const main = document.querySelector('main');
    main.innerHTML = ''

    switch(location.hash) {
      case '#/':
        main.appendChild(Home())
        break;
      case '#/services':
        main.appendChild(Services())
        break;
      case '#/contact':
        main.appendChild(Contact())
        break;
    }
  });
}