window.addEventListener('DOMContentLoaded', () => {
    console.log('ficne');
    const modal = document.querySelector('.modal');
    const crest = document.querySelector('.cresy');
    const heart = document.querySelector('.heart');
    const boots = document.querySelector('.boots');
    const socker1 = document.querySelector('.cur1');
    const socker2 = document.querySelector('.cur2');
    const size = document.querySelector('.button');
    const size1 = document.querySelector('.button2');
    const roll = document.querySelector('.SIZE');
    const SizeScroll = document.querySelector('.under_button');
    const SizeScroll1 = document.querySelector('.under_button1');
    const card = document.querySelector('.card');
    const addToCard = document.querySelector('.button1');
    const addToCard1 = document.querySelector('.button3');
    const sizes = document.querySelectorAll('.size_t');
    const sizes1 = document.querySelectorAll('.size_z');
    const White_color = document.querySelectorAll('.white');
    const About = document.querySelector('.socker_background');
    const DiagonalSocker = document.querySelector('.front_img');
    const lastsockers = document.querySelector('.last_sockers');
    const data = '';
    heart.addEventListener('click', () => {
        if (heart.classList.contains('heart_red')) {
            console.log("yep");
            heart.innerHTML = '<i class="far fa-heart"></i> ';
            heart.classList.remove('heart_red');
            heart.classList.add('fade')
        } else {
            console.log("fuck");
            heart.innerHTML = ' <i class="fas fa-heart"></i> ';
            heart.classList.add('heart_red');
            heart.classList.add('fade');
        }
    });
    socker1.addEventListener('click', () => {
        boots.innerHTML = "  <img src='img/img.jpg' alt='boots'> ";
        About.innerHTML = " <img src='img/sockers3.jpg' alt ='boots'>";
        DiagonalSocker.innerHTML = "<img src='img/sockers4.png' alt='sockers4'>";
        lastsockers.innerHTML = "<img src='img/sockers5.jpg' alt='sockers5'>";
        
    });
    socker2.addEventListener('click', () => {
        boots.innerHTML = "  <img src='img/whiteandblack2.jpg' alt='boots'> ";
        About.innerHTML = " <img src='img/blackandwhite.jpg' alt='background'>";
        DiagonalSocker.innerHTML = "<img src='img/blackandwhite2.jpg' alt='sockers4'>";
        lastsockers.innerHTML = "<img src='img/last_socker.jpg' alt='sockers5'>";
    });

    function showSizeScroll(e) {
        e.classList.remove("hide");
        e.classList.add("show");
        e.classList.add("fade");
    }

    function hideSizeScroll(e) {
        console.log("work!");
        e.classList.remove("show");
        e.classList.remove("fade");
        e.classList.add("hide");
    }

    hideSizeScroll(SizeScroll);
    size.addEventListener('click', () => {
        if (SizeScroll.classList.contains("hide")) {
            showSizeScroll(SizeScroll);
        } else {
            hideSizeScroll(SizeScroll);
        }
    });
    hideSizeScroll(SizeScroll1);
    size1.addEventListener('click', () => {
        if (SizeScroll1.classList.contains("hide")) {
            showSizeScroll(SizeScroll1);
        } else {
            hideSizeScroll(SizeScroll1);
        }
    });
    let ar = 0;
    addToCard.addEventListener('click', () => {
        ar++;
        card.innerHTML = `<i class='fas fa-shopping-basket'></i><a href='CLG'>Card(${ar})</a>`;
    });
    addToCard1.addEventListener('click', () => {
        ar++;
        card.innerHTML = `<i class='fas fa-shopping-basket'></i><a href='CLG'>Card(${ar})</a>`;
    });

    function ShowModal(a){
        a.classList.remove('hide');
        a.classList.add('show');
        a.classList.add('fade');
    }

    function HideModal(a){
        a.classList.remove('show');
        a.classList.remove('fade');
        a.classList.add('hide');
    }

    card.addEventListener('click', ()=>{
        ShowModal(modal);
    });
    
    crest.addEventListener('click', ()=>{
        HideModal(modal);
    });
//     let str = "stringify";
// // 'strin', символы от 0 до 5 (не включая 5)
// alert( str.slice(0, 5) );
    // sizes.forEach((e) => {
    //     e.addEventListener('click', ()=>{
    //         size.innerHTML = `${e.textContent}<span class="arrow"><i class="fas fa-chevron-down"></i></span>`;
    //     });
    // });
    function size_choice(a,b){
        a.forEach((e) => {
            e.addEventListener('click', ()=>{
                b.innerHTML = `${e.textContent}<span class="arrow"><i class="fas fa-chevron-down"></i></span>`;
            });
        });
    }
    size_choice(sizes, size);
    size_choice(sizes1, size1);

    fetch('db.json')
            .then(data=> data.json());

    // WhiteColor.addEventListener("click", ()=>{
    //     console.log("FUCK");
    // })
    var shoppingCart = (function() {
        // =============================
        // Private methods and propeties
        // =============================
        cart = [];
        
        // Constructor
        function Item(name, price, count) {
          this.name = name;
          this.price = price;
          this.count = count;
        }
        
        // Save cart
        function saveCart() {
          sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
        }
        
          // Load cart
        function loadCart() {
          cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
        }
        if (sessionStorage.getItem("shoppingCart") != null) {
          loadCart();
        }
        
      

        var obj = {};
        
        obj.addItemToCart = function(name, price, count) {
          for(var item in cart) {
            if(cart[item].name === name) {
              cart[item].count ++;
              saveCart();
              return;
            }
          }
          var item = new Item(name, price, count);
          cart.push(item);
          saveCart();
        }
        obj.setCountForItem = function(name, count) {
          for(var i in cart) {
            if (cart[i].name === name) {
              cart[i].count = count;
              break;
            }
          }
        };
        obj.removeItemFromCart = function(name) {
            for(var item in cart) {
              if(cart[item].name === name) {
                cart[item].count --;
                if(cart[item].count === 0) {
                  cart.splice(item, 1);
                }
                break;
              }
          }
          saveCart();
        }
      
        obj.removeItemFromCartAll = function(name) {
          for(var item in cart) {
            if(cart[item].name === name) {
              cart.splice(item, 1);
              break;
            }
          }
          saveCart();
        }
      
        obj.clearCart = function() {
          cart = [];
          saveCart();
        }
      
        obj.totalCount = function() {
          var totalCount = 0;
          for(var item in cart) {
            totalCount += cart[item].count;
          }
          return totalCount;
        }
      
        obj.totalCart = function() {
          var totalCart = 0;
          for(var item in cart) {
            totalCart += cart[item].price * cart[item].count;
          }
          return Number(totalCart.toFixed(2));
        }
      
        obj.listCart = function() {
          var cartCopy = [];
          for(i in cart) {
            item = cart[i];
            itemCopy = {};
            for(p in item) {
              itemCopy[p] = item[p];
      
            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
          }
          return cartCopy;
        }
      
    
        return obj;
      })();
      
      

      $('.add-to-cart').click(function(event) {
        event.preventDefault();
        var name = $(this).data('name');
        var price = Number($(this).data('price'));
        shoppingCart.addItemToCart(name, price, 1);
        displayCart();
      });
      
      // Clear items
      $('.clear-cart').click(function() {
        shoppingCart.clearCart();
        displayCart();
      });
      
      
      function displayCart() {
        var cartArray = shoppingCart.listCart();
        var output = "";
        for(var i in cartArray) {
          output += "<tr>"
            + "<td>" + cartArray[i].name + "</td>" 
            + "<td>(" + cartArray[i].price + ")</td>"
            + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
            + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
            + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
            + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
            + " = " 
            + "<td>" + cartArray[i].total + "</td>" 
            +  "</tr>";
        }
        $('.show-cart').html(output);
        $('.total-cart').html(shoppingCart.totalCart());
        $('.total-count').html(shoppingCart.totalCount());
      }
      
      // Delete item button
      
      $('.show-cart').on("click", ".delete-item", function(event) {
        var name = $(this).data('name')
        shoppingCart.removeItemFromCartAll(name);
        displayCart();
      })
      
      
      // -1
      $('.show-cart').on("click", ".minus-item", function(event) {
        var name = $(this).data('name')
        shoppingCart.removeItemFromCart(name);
        displayCart();
      })
      // +1
      $('.show-cart').on("click", ".plus-item", function(event) {
        var name = $(this).data('name')
        shoppingCart.addItemToCart(name);
        displayCart();
      })
      
      // Item count input
      $('.show-cart').on("change", ".item-count", function(event) {
         var name = $(this).data('name');
         var count = Number($(this).val());
        shoppingCart.setCountForItem(name, count);
        displayCart();
      });
      
      displayCart();
      
});