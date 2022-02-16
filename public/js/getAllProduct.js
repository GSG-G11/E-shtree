(function fetch(url) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                data.forEach(element => {
                    const h3 = document.createElement('h3');
                    h3.innerText =element.title;
                    h3.classList.add('title');
                    document.querySelector('.card').appendChild(h3);
                    const img = document.createElement('img');
                    img.classList.add('productImg');
                    img.src =element.image;
                    document.querySelector('.card').appendChild(img);
                });
            } else if (xhr.status === 404) {
                console.log('404 NOT FOUND');
            }
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
})('/getAllProducts');
