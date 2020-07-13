// import TestAppService from './modules/test.appService'
// import { testConfig } from './modules/test.config'
// import './modules/test.headerComponent'
// import './css/index.css'
// import './less/index.less'
// import './scss/index.scss'
// import './modules/test.module'
import { from, fromEvent } from 'rxjs';
import { map, filter, debounceTime, switchMap } from 'rxjs/operators';
import './css/index.css'
import './scss/index.scss'

window.onload = function(){

  console.log('Started...');

  const search = document.querySelector('#search');
  const list = document.querySelector('#list');

  const input$ = fromEvent(search, 'input');

  input$
    .pipe(
      map(event => event.target.value),
      filter(text => text.length > 2),
      debounceTime(200),
      switchMap(getUsers),
      map(x => x.items)
      //то же самое что
      //rxjs.operators.pluck('items'),
    )
    .subscribe(data => renderFn(data));

  function getUsers(text) {
    const response =  fetch(`https://api.github.com/search/users?q=${text}`)
      .then(resp => resp.json());
    return from(response)
  }

  function renderFn(arrData){
    arrData.map(elem => {
      const template = `
                <div class="content__user">
                    <h2 class="content__login">${elem.login}</h2>
                    <img class="content__avatar" src="${elem.avatar_url}" alt="${elem.login}">
                    <p class="content__link">${elem.avatar_url +' ** '+ elem.events_url}</p>
                </div>
             `;
      list.insertAdjacentHTML('afterbegin', template);
    });
  }
};

//TODO : сделать вывод карточек с интервалом :
// Поместить renderFn внутрь pipe() ???

//TODO : вынести template в другой модуль и подключить его

