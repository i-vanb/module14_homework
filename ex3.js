const userInput = document.getElementById("input_ex3")
const button = document.getElementById("button_ex3")
const result = document.getElementById("result_exercise3")

button.addEventListener("click", showImages)

function showImages() {
    result.innerHTML = ""
    if(!+userInput.value || isNaN(+userInput.value)) {
        result.innerHTML = "Введите число"
        result.className = 'error'
    } else if (+userInput.value > 10) {
        result.innerHTML = "Число вне диапазона от 1 до 10"
    } else {
        const myRequest = new XMLHttpRequest()
        myRequest.open('GET', `https://picsum.photos/v2/list?limit=${+userInput.value}`, true)
        myRequest.onload = function () {
            if(myRequest.status !== 200) {
                console.log(myRequest.status)
            } else {
                const res = JSON.parse(myRequest.response)
                let cards = ''
                res.forEach(i => {
                    const {author, download_url} = i
                    const cardWrapper = `
                    <div class="card">
                    <img
                        src="${download_url}"
                        class="card-image"
                    />
                    <p>"${author}"</p>
                    </div>
                    `
                    cards += cardWrapper
                })
                result.innerHTML = cards
            }
        }
        myRequest.send()
    }
    userInput.value = ""
}
