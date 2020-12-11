function exercise () {
    const button = document.querySelector('#button_ex4')
    const width = document.querySelector('#input_w')
    const height = document.querySelector('#input_h')
    const result = document.querySelector("#result_exercise4")

    button.addEventListener('click', getImage)

    async function getImage() {
        result.innerHTML = ''
        const w = +width.value
        const h = +height.value

        if(!w || !h || isNaN(w) || isNaN(h)
            || +w < 100 || w > 300 || +h < 100 || h > 300) {
            result.innerHTML = 'Одно из чисел вне диапазона от 100 до 300'
            result.className = 'error'
        } else {
            let response = await fetch(`https://picsum.photos/${w}/${h}`)
            result.innerHTML = `
                <img style="margin: 0 auto" src="${response.url}">
            `
        }
        width.value = ''
        height.value = ''
    }
}

document.addEventListener('DOMContentLoaded', exercise)
