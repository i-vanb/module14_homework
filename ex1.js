function exercise() {
    const button = document.querySelector('#button')
    button.addEventListener('click', function () {
        console.log(xmlToJSObj(xmlString))
        showResult()
    })

    const xmlString =
       `<list>
            <student>
              <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
              </name>
              <age>35</age>
              <prof>teacher</prof>
            </student>
            <student>
              <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
              </name>
              <age>58</age>
              <prof>driver</prof>
            </student>
        </list>`


    function xmlToJSObj(xmlStr) {
        const parser = new DOMParser()
        const parsedXML = parser.parseFromString(xmlStr, 'text/xml')
        const listStudent = parsedXML.querySelector("list")
        const students = listStudent.querySelectorAll("student")

        let list = []
        students.forEach(student => {
            let nameTag = student.querySelector("name")
            let firstName = nameTag.querySelector("first").textContent
            let secondName = nameTag.querySelector("second").textContent

            let obj = {
                name: firstName + ' ' + secondName,
                age: Number(student.querySelector("age").textContent),
                prof: student.querySelector("prof").textContent,
                lang: nameTag.getAttribute("lang")
            }

            list.push(obj)
        })
        return {list}
    }

}

document.addEventListener("DOMContentLoaded", exercise)

function showResult() {
    const result = document.querySelector('#result')
    result.innerHTML = `
        <pre class="code">
        {
          list: [
            { 
              name: 'Ivan Ivanov', 
              age: 35, 
              prof: 'teacher', 
              lang: 'en' 
            },
            { 
              name: 'Петр Петров', 
              age: 58, 
              prof: 'driver', 
              lang: 'ru' 
            },
          ]
        }
        </pre>
    `
}

