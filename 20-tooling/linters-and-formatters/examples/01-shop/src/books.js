const books = [{title:"Dune",read:true},{title:"Emma",read:false}]

function unread(list){
return list.filter(book=>!book.read).map(book=>book.title)
}

export {books,unread}
