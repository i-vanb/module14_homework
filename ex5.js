function exercise () {
    const button = document.querySelector('#button_ex5')
    const page = document.querySelector('#input_p')
    const limit = document.querySelector('#input_l')
    const result = document.querySelector("#result_exercise")

    button.addEventListener('click', getImage)

    const last = localStorage.getItem('data')
    if(last) {
        result.innerHTML = createCards(JSON.parse(last))
        const btn = document.createElement('button')
        btn.innerText = 'Очистить'
        btn.className = 'button-secondary'
        btn.addEventListener('click', clearLocalStorage)
        document.querySelector('.wrap_ex').appendChild(btn)
    }

    function clearLocalStorage() {
        localStorage.clear()
        result.innerHTML = ''
        document.querySelector('.button-secondary').remove()
    }

    async function getImage() {
        result.innerHTML = ''
        const p = +page.value
        const l = +limit.value

        if(!p || isNaN(p) || p < 1 || p > 10) {
            if(!l || isNaN(l) || l < 1 || l > 10) {
                result.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10'
                result.className = 'error'
            } else {
                result.innerHTML = 'Номер страницы вне диапазона от 1 до 10'
                result.className = 'error'
            }
        } else {
            if(!l || isNaN(l) || l < 1 || l > 10) {
                result.innerHTML = 'Лимит вне диапазона от 1 до 10'
                result.className = 'error'
            } else {
                let response = await fetch(`https://picsum.photos/v2/list?page=${p}&limit=${l}`)
                const data = await response.json()
                // console.log( JSON.stringify(data))
                localStorage.setItem('data', JSON.stringify(data))
                result.innerHTML = createCards(data)
            }
        }
        page.value = ''
        limit.value = ''
    }
}

document.addEventListener('DOMContentLoaded', exercise)


function createCards(data) {
    console.log(data)
    let cards = ''
    data.forEach(i => {
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
    return cards
}
