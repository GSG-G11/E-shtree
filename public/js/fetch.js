var input = document.querySelector(".search-input");
var button = document.querySelector("#search-btn");
var ul = document.getElementById("search-result");
var datalist = document.getElementById("products");
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
}, 500));

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
                datalist.innerHTML = '';
                ul.innerHTML = ' ';
                
                if (arr.length > 0) {
                    arr.forEach(element => {
                        const option = document.createElement('option');
                        const a = document.createElement('a');
                        a.innerText = element.title;
                        option.appendChild(a);
                        datalist.appendChild(option); 
                        button.addEventListener('click' , ()=>{
                            const xhr = new XMLHttpRequest();
                            xhr.onreadystatechange = function () {
                                if (xhr.readyState === 4) {
                                    if (xhr.status === 200) {
                                        document.querySelector('.card').innerHTML=''
                                        let element = JSON.parse(xhr.responseText);
                                        const h3 = document.createElement('h3');
                                        h3.innerText =element.title;
                                        h3.classList.add('title');
                                        document.querySelector('.card').appendChild(h3);
                                        const img = document.createElement('img');
                                        img.classList.add('productImg');
                                        img.src =element.image;
                                        document.querySelector('.card').appendChild(img);
                                    } else if (xhr.status === 404) {
                                        console.log('404 NOT FOUND');
                                    }
                                }
                            }
                            xhr.open("GET",  `https://fakestoreapi.com/products/${element.id}`);
                            xhr.send();
    
                        })
                        

                       




                    });
                }else{
                    const li = document.createElement('li');
                    li.innerText = 'no results';
                    ul.appendChild(li);  

                }

                console.log(arr)
            } else if (xhr.status === 404) {
                faild(timeZoon, cityWeather)
            }
        }
    }
    xhr.open("GET", url);
    xhr.send();

}
