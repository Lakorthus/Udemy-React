fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then( response => response.json() )
    .then( json => console.log(json.userId))
    .catch(e => console.log(e))//error si alguna de arriba falla