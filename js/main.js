// let x =document.getElementById('inputname')
// console.log(document.getElementById('inputname'));

$(document).ready(()=>{
    
getdata('').then(()=>{
    $('.lodaing').fadeOut(300,function(){
        $('inner-screnn').fadeOut(300)
        $('body').css('overflow','visible')
    })
    
   
})
  

})


$('.item1 a').animate({ top: '200px' }, 200)

$(' .settingclick ').on('click', function () {
   $('.dei').animate({ width: "toggle" }, 200)
   $('.item1 a').eq(0).animate({ top: '0px' }, 200)
   $('.item1 a').eq(1).animate({ top: '0px' }, 300)
   $('.item1 a').eq(2).animate({ top: '0px' }, 400)
   $('.item1 a').eq(3).animate({ top: '0px' }, 500)
   $('.item1 a').eq(4).animate({ top: '0px' }, 200)

})




function displaydata(arr) {
   let cartona = ''
   for (let i = 0; i < arr.length; i++) {
      cartona += `  <div class="col-md-3 z" onclick="alldetails('${arr[i].idMeal}')">
      <div class="item position-relative overflow-hidden">
          <img class="w-100 rounded-2" src="${arr[i].strMealThumb}" alt="">
          <div class="inner position-absolute d-flex align-items-center justify-content-center">
              <h2 class="fw-bolder">${arr[i].strIngredient3}</h2>
          </div>
      </div>
  </div>`
      document.getElementById('rowdata').innerHTML = cartona
   }
}


async function categroy() {
    $('.inner-screnn').fadeIn(500)
   let res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
   res = await res.json()
   displaycategory(res.categories)
   $('.inner-screnn').fadeOut(500)
   console.log(res.categories);

}
function displaycategory(arr) {
    document.getElementById('search2').innerHTML=''
   let cartona = ''
   for (let i = 0; i < arr.length; i++) {
      cartona += `  <div   class="col-md-3 z" >
      <div onclick="detailscat('${arr[i].strCategory}')" class="item position-relative overflow-hidden  ">
          <img class="w-100 rounded-2" src="${arr[i].strCategoryThumb}" alt="">
          <div class="inner position-absolute text-center">
             
              
              
     
              <h6 >${arr[i].strCategoryDescription.slice(0, 100)}</h6>
             
          </div>
      </div>
  </div>`
      document.getElementById('rowdata').innerHTML = cartona
   }
}




async function getarea() {
    document.getElementById('search2').innerHTML=''
    $('.inner-screnn').fadeIn(500)
   let res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
   res = await res.json()

   displayarea(res.meals)
   $('.inner-screnn').fadeOut(500)
}

function displayarea(arr) {
    document.getElementById('search2').innerHTML=''
   let cartona = ''
   for (let i = 0; i < arr.length; i++) {
      cartona += `  <div class="col-md-3 z" onclick="areadetails('${arr[i].strArea}')">
   <div class="text-center text-white">
   <i class="fa-solid fa-house-laptop fa-4x"></i>
        <h4>${arr[i].strArea}</h4>
    </div>
  </div>`
      document.getElementById('rowdata').innerHTML = cartona
   }
}


async function getIngredients() {
    document.getElementById('search2').innerHTML=''
    $('.inner-screnn').fadeIn(500)
   let res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=listt`)
   res = await res.json()
console.log();

displayIngredients(res.meals.slice(0,20))
$('.inner-screnn').fadeOut(500)
}


function displayIngredients(arr) {
   
   let cartona = ''
   for (let i = 0; i < arr.length; i++) {
      cartona += `  <div class="col-md-3 z" onclick="ingredientdetails('${arr[i].strIngredient}')">
   <div class="text-center text-white">
   <i class="fa-solid fa-drumstick-bite fa-4x"></i>
        <h4>${arr[i].strIngredient}</h4>
      
    </div>
  </div>`
      document.getElementById('rowdata').innerHTML = cartona
   }
}

async function detailscat(x) {
    $('.inner-screnn').fadeIn(500)
   let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${x}`)
   res = await res.json()
   // displaycategory()

   console.log(res.meals);
   displaydetails(res.meals)
   $('.inner-screnn').fadeOut(500)
}

function displaydetails(arr) {
    document.getElementById('search2').innerHTML=''
   let cartona = ''
   for (let i = 0; i < arr.length; i++) {
      cartona += `  <div class="col-md-3 z" onclick="alldetails('${arr[i].idMeal}')">
      <div class="item position-relative overflow-hidden">
          <img class="w-100 rounded-2" src="${arr[i].strMealThumb}" alt="">
          <div class="inner position-absolute d-flex align-items-center justify-content-center">
              <h2 class="fw-bolder text-center">${arr[i].strMeal}</h2>
          </div>
      </div>
  </div>`
      document.getElementById('rowdata').innerHTML = cartona
   }
}


async function areadetails(area) {
    document.getElementById('search2').innerHTML=''
    $('.inner-screnn').fadeIn(500)
   let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
   res = await res.json()
   displaydetails(res.meals)
   $('.inner-screnn').fadeOut(500)
   // console.log(res.meals);
}
async function ingredientdetails(area) {
    document.getElementById('search2').innerHTML=''
    $('.inner-screnn').fadeIn(500)
  
   let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${area}`)
   res = await res.json()

   displaydetails(res.meals)
   $('.inner-screnn').fadeOut(500)
   console.log(res.meals);
}
async function alldetails(id) {
    $('.inner-screnn').fadeIn(500)
   let res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
   res = await res.json()
   console.log(res.meals);
   displayalldetails(res.meals)
   $('.inner-screnn').fadeOut(500)
}

function displayalldetails(arr) {
    document.getElementById('search2').innerHTML=''
   let cartona = ''
   for (let i = 0; i < arr.length; i++) {
      cartona += `  <div class="container text-white py-5">
      <div class="row">
          <div class="col-md-4">
              <img class="w-100" src="${arr[i].strMealThumb}" alt="">
              <h2>${arr[i].strCategory}</h2>
          </div>
          <div class="col-md-8">
           <div>
              <h3>Instructions</h3>
              <p>${arr[i].strInstructions}</p>
              <h3>Area : <span> ${arr[i].strArea}</span></h3>
              <h3>Category : <span>${arr[i].strCategory}</span></h3>
              <h2>Recipes :</h2>
           </div>
         <div>
          <div class="row g-3 ">
              <div class="col-md-3">
                  <div class="alert alert-light text-center p-0 m-0">
                      <span>${arr[i].strMeasure1
         }</span>
                  </div>
              </div>
              <div class="col-md-3">
                  <div class="alert alert-light text-center p-0 m-0">
                      <span>${arr[i].strMeasure5
         }</span>
                  </div>
              </div>
              <div class="col-md-3">
                  <div class="alert alert-light text-center p-0 m-0">
                      <span>${arr[i].strCategory}</span>
                  </div>
              </div>
              <div class="col-md-3">
                  <div class="alert alert-light text-center p-0 m-0">
                      <span>${arr[i].strCategory}</span>
                  </div>
              </div>
              <div class="col-md-3">
                  <div class="alert alert-light text-center p-0 m-0">
                      <span>${arr[i].strCategory}</span>
                  </div>
              </div>
              <div class="col-md-3">
                  <div class="alert alert-light text-center p-0 m-0">
                      <span>${arr[i].strIngredient1}</span>
                  </div>
              </div>
              <div class="col-md-3">
                  <div class="alert alert-light text-center p-0 m-0">
                      <span>${arr[i].strIngredient8}</span>
                  </div>
              </div>
              <div class="col-md-3">
                  <div class="alert alert-light text-center p-0 m-0">
                      <span>${arr[i].strCategory}</span>
                  </div>
              </div>
              <div class="col-md-3">
                  <div class="alert alert-light text-center p-0 m-0">
                      <span>${arr[i].strCategory}</span>
                  </div>
              </div>
              <div class="col-md-3">
                  <div class="alert alert-light text-center p-0 m-0">
                      <span>${arr[i].strCategory}</span>
                  </div>
              </div>
              <div class="col-md-3">
                  <div class="alert alert-light text-center p-0 m-0">
                      <span>${arr[i].strCategory}</span>
                  </div>
              </div>
              <div class="col-md-3">
                  <div class="alert alert-light text-center p-0 m-0">
                      <span>${arr[i].strCategory}</span>
                  </div>
              </div>
          </div>
         </div>
           <h2>Tags :</h2>
           <button class="btn btn-outline-light my-3">Soup</button>
           <div>
           <!-- <button class="btn btn-success">source</button>
           <button  class="btn btn-danger">youtube</button> -->
           <a class="btn btn-success" target="_blank" href="${arr[i].strSource
         }">source</a>
           <a class="btn btn-danger" target="_blank" href="${arr[i].strYoutube
         }">youtube</a>
        </div>
          </div>
      </div>
  </div>`

   }
   document.getElementById('rowdata').innerHTML = cartona
}

function search12(){
   document.getElementById('search2').innerHTML=`       <div class="col-md-6">
   <input onkeyup="getdata(this.value)" type="search" placeholder="search By Name" class="form-control bg-transparent  text-white">

</div>
<div class="col-md-6">
   <input onkeyup="getdataletter(this.value)" length="1" type="search" placeholder="search By first letter" class="form-control text-white  bg-transparent">

</div>`
document.getElementById('rowdata').innerHTML = ""
}
async function getdata(term) {
   
    $('.inner-screnn').fadeIn(500)
   let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
   res = await res.json()
if(res.meals != null){
   displaydata(res.meals)
   $('.inner-screnn').fadeOut(500)
}else{
   displaydata([])
   $('.inner-screnn').fadeOut(500)
}
   
}
async function getdataletter(term) {
    $('.inner-screnn').fadeIn(500)
   let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`)
   res = await res.json()
   displaydata(res.meals)
   $('.inner-screnn').fadeOut(500)

   
}


 function showcontact(){
    document.getElementById('search2').innerHTML=''
    let cartoa =`<section id="ContactUs">
                
    <div class="container vh-100    w-50 mx-auto d-flex align-items-center justify-content-center">
      
        <div class="row  g-3">
            <div class="col-md-6 ">
                <input onkeyup="validation()"  id="nameinput"  type="text" class="form-control bg-transparent  text-white" placeholder="Enter your name">

            </div>
            <div class="col-md-6">
                <input    onkeyup="validation()"  id="emailinput"  type="text" class="form-control bg-transparent  text-white" placeholder="Enter your email">
            </div>
            <div class="col-md-6">
                <input   onkeyup="validation()" id="phoneinput"   type="text" class="form-control bg-transparent  text-white" placeholder="Enter your phone">
            </div>
            <div class="col-md-6">
                <input   onkeyup="validation()"  id="age"  type="text" class="form-control bg-transparent  text-white" placeholder="Enter your Age">
            </div>
            <div class="col-md-6">
                <input   onkeyup="validation()" id="password1"  type="password" class="form-control bg-transparent  text-white" placeholder="Enter your password">
            </div>
            <div class="col-md-6">
                <input    onkeyup="validation()" id="password2" type="password" class="form-control bg-transparent  text-white" placeholder="Enter your repassword">
            </div>
            <button id="btn"   class=" x btn btn-outline-danger text-white"> submit</button>
        </div>
     
    </div>
   
    </section>`

 document.getElementById('rowdata').innerHTML = cartoa
}



function validation(){

if(valdname() &&validationemail() &&validationphone()&& validationyourage()&&password()&&repassword()){

 getdata('')
}


}
function valdname(){
  return  /^[a-zA-Z ]+$/.test( document.getElementById('nameinput').value);
 
}
function validationemail(){
  return  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( document.getElementById('emailinput').value);
 
}

function validationphone(){
  return /^01[1,2,5,0]{1}[0-9]{8}$/.test( document.getElementById('phoneinput').value);
 
}
function validationyourage(){
  return /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test( document.getElementById('age').value);
 
}
function password(){
  return /^[0-9]{8}$/.test( document.getElementById('password1').value);
 
}
function repassword(){
  return document.getElementById('password1').value == document.getElementById('password2').value
 
}
