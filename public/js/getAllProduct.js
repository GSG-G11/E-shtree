(function fetch(url) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                console.log(data)
            } else if (xhr.status === 404) {
                faild(timeZoon, cityWeather)
            }
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
})('/getAllProducts');
