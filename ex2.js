const json = `{
 "list": [
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

function jsonToObj(jsonStr) {
    const obj = JSON.parse(jsonStr)
    obj.list.forEach(i => {
        i.age = Number(i.age)
    })
    return obj
}

console.dir(jsonToObj(json))
