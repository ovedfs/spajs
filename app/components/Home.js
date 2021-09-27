import {ajax} from '../helpers/ajax.js'

export function Home() {
  ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    cbSuccess(data) {
      showPosts(data)
    }
  })
  const home = document.createElement('div')

  home.innerHTML = `
    <h1>Home</h1>
  `

  return home;
}

function showPosts(posts) {
  //console.log(posts)
  let html = `<section class="posts">`
  posts.forEach(post => {
    html += `
    <article class="post">
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    </article>
    `
  })

  document.querySelector('main').innerHTML = html
}