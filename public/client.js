const socket = io()



const form = document.getElementById('create-product')
const titleInput = document.getElementById('title')
const priceInput = document.getElementById('price')
const productsTime = document.getElementById('productsTime')



form?.addEventListener('submit', (e)=>{
    e.preventDefault()

    

    const title = titleInput.value
    const price = priceInput.value
    
    socket.emit('create-product', {
        title,
        price
    })

    titleInput.value = ''
    priceInput.value = ''
    
})


//Listeners

socket.on('products-render', (data)=>{
    
   const html = data.map( product =>  `<li>${product.title}</li><br><p>${product.price}</p><br><button data-id="${product.id}" onClick='deleteProduct(${product.id})'>Eliminar Producto</button>`) 

   const deleteProduct = (id)=>{
    const found = products.find( product => product.id === id)
    console.log(found);
}
   productsTime.innerHTML = html
})


