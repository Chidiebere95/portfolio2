(function () {
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click',function(){
        cart.classList.toggle('show-cart');
    });
})();

//add cart
(function(){
    const cartBtn = document.querySelectorAll('.store-item-icon');

    cartBtn.forEach(function(btn) {
        btn.addEventListener('click',function(event){
            //console.log(event.target);

            if (event.target.parentElement.classList.contains('store-item-icon')){
                let fullPath = event.target.parentElement.previousElementSibling.src;
                let pos = fullPath.indexOf('Download') + 8;
                let partPath = fullPath.slice(pos);

                const item = {};
                item.img = `img-cart${partPath}`;

                let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                item.name = name;

                let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;

                let finalPrice = price.slice(1).trim();
                item.price = finalPrice;

                //console.log(name);

                //console.log(finalPrice); 

                console.log(item);

                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item','d-flex','justify-contant-between','text-capitalize','my-3');
                cartItem.innerHTML =
                    `<img src=" ${item.img} " class="img-fluid rounded-circle" id="item-img">
<div class="item-text">
<p class="font-weight-bold mb-0" id="cart-item-title"> ${item.name}
</p>
<span>$</span>
<span class="cart-item-price mb-0" id="cart-item-price"> ${item.price}</span>
</div>
<a href="#" id="cart-item-remove" class="cart-item-remove">
<i class="fas fa-trash"></i>
</a>
</div>
`;


                //select cart
                const cart = document.getElementById('cart');
                const total = document.querySelector('.cart-total-container');
                cart.insertBefore(cartItem,total);
                alert ('item added to the cart');
                showTotals();

            }
        });
    });
    //show total
    function showTotals(){
        const total = [];
        const items = document.querySelectorAll('.cart-item-price');
        
        items.forEach(function(item){
            total.push(parseFloat(item.textContent));
        });

    const totalMoney = total.reduce(function(total,item){
        total += item;
        return total;
    },0);
        
        const finalMoney = totalMoney.toFixed(2);
        
        document.getElementById('cart-total').textContent = finalMoney;
         
        document.querySelector('.item-total').textContent = finalMoney;
         
        document.getElementById('item-count').textContent = total.length;
        
    
    
    
    
    
    }
})();


const togglerr = document.querySelector('.toggle')
const navbar = document.querySelector('.collapse-nav')
const navItem = document.querySelectorAll('.nav-item')

togglerr.addEventListener('click',function(){
    // console.log('heyy');
    navbar.classList.toggle('open-nav')
})


navItem.forEach(function (link) {
    link.addEventListener("click", function () {
      navbar.classList.remove("open-nav");
    //   console.log('link')
    });
  });
  




















