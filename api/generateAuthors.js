var someObject = require('./db.json')
const fs = require('fs');
let authors = []
let authorsObject = {

}
let id = 0
someObject.books.forEach(book => {
    book.authors.forEach(author => {
        let names = author.split(' ')
        if(authorsObject[author]) {
            authorsObject[author] = [...authorsObject[author], book.id]
        } else {
             authorsObject[author] = [book.id]
        }
        authors.push({
            id: id++,
            name: author,
            firstName: names.slice(0, names.length -1).join(' '),
            lastName: names.slice(names.length - 1).join(''),
        })
    })
})
 authors = authors.map(author => ({
    ...author,
    books: authorsObject[author.name]
}))

fs.writeFileSync('authors.json', JSON.stringify(authors));