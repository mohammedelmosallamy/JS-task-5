var title = document.getElementById('title')
var price = document.getElementById('price')
var taxes = document.getElementById('taxes')
var ads = document.getElementById('ads')
var discount = document.getElementById('discount')
var total = document.getElementById('total')
// var count = document.getElementById('count')
var category = document.getElementById('category')
var submit = document.getElementById('submit')

// console.log(title,price,taxes,ads,discount,total,count,category,submit)

// totla

function getTotal(){
//     console.log("done")
    if(price.value !=''){
        var result = (+price.value + +taxes.value + +ads.value) - +discount.value
        total.innerHTML = result
        total.style.background= '#47E236'
    }else{
        total.innerHTML = ''
        total.style.background= '#C22020'
    }
}

// creat product

if(localStorage.newproduct != null){
    productdata = JSON.parse(localStorage.newproduct)
}else{
    productdata = []
}

var productdata = []
submit.onclick = function (){
    var newproduct = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        // count:count.value,
        category:category.value,
    }
    // console.log(newproduct)
    productdata.push(newproduct)
    localStorage.setItem('product' , JSON.stringify(productdata))
    console.log(productdata)
    clearInput()
    showdata()
}

// clear input

function clearInput(){
    title.value = ''
    price.value = ''
    taxes.value = ''
    ads.value = ''
    discount.value = ''
    total.innerHTML = ''
    // count.value = ''
    category.value = ''
}

// show data

function showdata(){
    var table = '';
    for(let i=0 ; i<productdata.length; i++)
    table += `
                <tr>
                        <td>${i}</td>
                        <td>${productdata[i].title}</td>
                        <td>${productdata[i].price}</td>
                        <td>${productdata[i].taxes}</td>
                        <td>${productdata[i].ads}</td>
                        <td>${productdata[i].discount}</td>
                        <td>${productdata[i].total}</td>
                        <td>${productdata[i].category}</td>
                        <td><button onclick="updateData(${i}" id="update">update</button></td>
                        <td><button onclick="deleteitem(${i})" id="delete">delete</button></td>
                </tr>
             `
    document.getElementById('tbody').innerHTML = table;

    if(productdata.length>0){
       deleteBtn.innerHTML = `
       <button onclick="deleteAll">delete all</button>
       `
    }else{
        deleteBtn.innerHTML = '';
    }
}
showdata()

// delete item

function deleteitem(i){
    // console.log(i)
    productdata.splice(i,1)
    localStorage.clear(i,1)
    localStorage.newproduct = JSON.stringify(productdata);
    showdata()
}

// update dataa

function updateData(i){
    title.value = productdata[i].title;
    price.value = productdata[i].price;
    taxes.value = productdata[i].taxes;
    ads.value = productdata[i].ads;
    discount.value = productdata[i].discount;
    getTotal()
    category.value = productdata[i].category;
    submit.innerHTML=("update")
}