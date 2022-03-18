const ul = document.querySelector('ul');
const API = 'https://jsonplaceholder.typicode.com/posts';


// Axios : https://github.com/axios/axios
// react-2. Axios Refactoring
// 템플릿
const printPosts = res => {
    const {data} = res;
    data.forEach(item => {
        const li = `<li>
                        <h2>${item.title}</h2>
                        <p>${item.body}</p>
                    </li>`;
        ul.insertAdjacentHTML("beforeend", li);
    })
}

// HTTP 통신
const fetchPosts = (url) => {
  return axios.get(url);
}

fetchPosts(API).then(printPosts).catch((e) => console.error(e.message));
