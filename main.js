


function check(){
  let imgWrapper = document.querySelector('.img-wapper img')
  let listImgs = document.querySelectorAll('.meme img')
  let memes = document.querySelectorAll('.meme')
  
  var curenIndex = 0;
 listImgs.forEach(function(img, index){
    curenIndex = index
    img.addEventListener('click', function(e){
    imgWrapper.src = listImgs[index].getAttribute('src')

    memes.forEach(function(item){
        item.classList.remove('active')
    })
    img.parentElement.classList.add('active') 
   })
   
})
  let amount = document.querySelector('.amount')
  let add = document.querySelector('.amount .add')
  let arapt = document.querySelector('.amount .arapt')
  let meo = document.querySelector('.amount .meo')
  let buttonAdd = document.querySelector('.buy--btn')
  let discont = document.querySelector('.distcon')
  var indexof = 0;
  meo.innerHTML = indexof
  add.addEventListener('click', function(){
    indexof += 1;
    meo.innerHTML = indexof
  })
  arapt.addEventListener('click', function(){
    indexof --;
    meo.innerHTML = indexof
  })

  buttonAdd.addEventListener('click', function(){
    discont.innerHTML = indexof
  })
}
check()


function confirm(){
  
    const img = document.querySelector('.img-wapper')
    const price = document.querySelector('.price ')
    const title = document.querySelector('.title')
    var amoutMeo = document.querySelector('.amount')
    // console.log(amoutMeo.children[1].innerHTML)
    // console.log(price.children[0].innerHTML)
    // console.log(title.children[0].innerHTML)
    // console.log(img.children[0].src)
    var imgChildrent = img.children[0].src
    var priceChildernt = title.children[0].innerHTML
    var meochildernt = amoutMeo.children[1].innerHTML
    var titelChildrnt = price.children[0].innerHTML
    const chekcCost = meochildernt * titelChildrnt

    var giohang = ['']
    var contentt = document.querySelector('.content')
    contentt.innerHTML = ''
    for(var i = 0; i < giohang.length; i++){
     var meot =  contentt.innerHTML +=`
       <div class="contile">
                 <h5>San Pham Da Them</h5>
               </div>  
              <div class="cat">
                
               <img src="${imgChildrent}" alt="" style="width:100px; height:100px;">
            
            </div>
            <div class="dogg">
               <ul>${`Tote của MiuDen`}
                   <h5>Phan loai hang: TÚI Totes Cactus Bag</h5>
                   <h6>Gia: 320 .000</h6>
                 </ul> 
            </div> 

            <div class="tital">
               <ul>So Luong</ul>
               <h5>${meochildernt}</h5>
            </div>

            <div class="tonghang">
               <ul>Tong Tien</ul>
               <h5>${chekcCost} ${`đ`}</h5>
            </div>

      `
    }

}


  function checkgiohang(){
    var clickcf = document.querySelector('.vippro')
    clickcf.addEventListener('click', function(){
     var meos =  clickcf.parentElement.querySelector('.content')

      if(meos.style.display == 'block'){
        meos.style.display = 'none'
        
      }else{
        meos.style.display = 'block'
       
          confirm() 
        
      }
     
    })
  }
  checkgiohang()
   



