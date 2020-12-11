function exercise() {
    const button = document.querySelector('#button')
    button.addEventListener('click', function () {
        console.log(jsonToObj(json))
        showResult()
    })


    const json = `
            {"list": 
             [
              {
               "name": "Petr",
               "age": "20",
               "prof": "mechanic"
              },
              {
               "name": "Vova",
               "age": "60",
               "prof": "pilot"
              }
             ]
            }`
    console.log('typeof in -', typeof json)
    function jsonToObj(jsonStr) {
        const obj = JSON.parse(jsonStr)
        obj.list.forEach(i => {
            i.age = Number(i.age)
        })
        console.log('typeof out -', typeof obj)
        return obj
    }


}

document.addEventListener('DOMContentLoaded', exercise)

function showResult() {
    const result = document.querySelector('#result')
    result.innerHTML = `
        <pre class="code">
    {
      list: [
        { 
          name: 'Petr', 
          age: 20, 
          prof: 'mechanic'
        },
        { 
          name: 'Vova', 
          age: 60, 
          prof: 'pilot'
        },
      ]
    }
    the type is object
        </pre>
    `
}
