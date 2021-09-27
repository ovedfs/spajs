export function ajax(props) {
  const { url, cbSuccess } = props;

  fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => cbSuccess(json))
    .catch(err => console.log(err));
}