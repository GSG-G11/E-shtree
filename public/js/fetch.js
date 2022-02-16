var input = document.querySelector(".search-input");
var ul = document.getElementById("search-result");
const debounce = (func, delay) => {
    let debounceTimer
    return function () {
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer
            = setTimeout(() => func.apply(context, args), delay)
    }
}
input.addEventListener('keyup', debounce(function () {
    fetch('/products', input.value);
}, 1500));

function fetch(url, userData) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                let arr = data.filter((el) => {
                    if (userData) {
                        return el.title.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
                    }
                });
                ul.innerHTML = '';
                if (arr.length > 0) {
                    arr.forEach(element => {
                        const li = document.createElement('li');
                        const a = document.createElement('a');
                        a.innerText = element.title;
                        a.setAttribute('href',`https://fakestoreapi.com/products/${element.id}`)
                        li.appendChild(a);
                        ul.appendChild(li);    
                        // ul.appendChild(li);
                    });
                }else{
                    const li = document.createElement('li');
                    li.innerText = 'no results';
                    ul.appendChild(li);  
                }
                // let lis  = arr.map((li)=>{
                //     return li = `<li>${li}</li>`;
                // });

                console.log(arr)
            } else if (xhr.status === 404) {
                faild(timeZoon, cityWeather)
            }
        }
    }
    xhr.open("GET", url);
    xhr.send();
}
