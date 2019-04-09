/**
 * @author:WangLK5
 * @Date:2019-04-09
 */
import './index.css'

function message(info, time, type) {
  const app = document.body;
  const mesBox = document.createElement('div');
  const mesCont = document.createElement('div');
  const mesIco = document.createElement('i');
  const mesText = document.createElement('span');

  const text = document.createTextNode(info);
  mesText.appendChild(text);
  mesCont.appendChild(mesIco);
  mesCont.appendChild(mesText)
  mesBox.classList.add("wlk-message");
  mesCont.classList.add('wlk-main');
  mesCont.classList.add(`type-${type}`);
  mesIco.classList.add(`ico-${type}`)
  mesBox.appendChild(mesCont)
  app.appendChild(mesBox)

  setTimeout(() => {
    app.removeChild(mesBox)
  }, time * 1000)
}

const success = (info, time) => {
  message(info, time, "success");
}
const info = (info, time) => {
  message(info, time, "info");
}
const warning = (info, time) => {
  message(info, time, "warning");
}
const danger = (info, time) => {
  message(info, time, "danger");
}
export default {success, info, warning, danger}



