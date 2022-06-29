/* Current Year 
*******************************************************/

document.getElementById("current-year").innerHTML = new Date().getFullYear();


/* Populer Items 
*******************************************************/

var product_list;

$.ajax({
  type: 'GET',
  url: './popular_items.json',
  dataType: 'json',
  async: false,
  success: function (list) {
    product_list = list;
  }
});

$(document).ready(function () {

  let itemsNumber = 0;

  $(".load-more").click(function () {

    if (itemsNumber < product_list.length) {
      $(".products-four:last")
        .after('<div class="row my-5 products-four">');

      for (let i = itemsNumber; i < itemsNumber + 4; i++) {

        if (i < product_list.length) {
          $(".products-four:last")
            .append('<div class="col-md-3 item-hover item-container">');
          $(".item-container:last")
            .append('<div class="card card-hover h-100 card-container">');
          $(".card-container:last")
            .append('<img src=" ' + product_list[i].url + ' " class="card-img-top bg-dark h-100 item-img" alt="populer-items">');
          $(".item-img:last")
            .after('<div class="card-body text-center item-card-bottom">');
          $(".item-card-bottom:last")
            .append('<p class="card-text item-name">' + product_list[i].product_name + '</p>');
          $(".item-name:last")
            .after('<p class="card-text item-price">' + product_list[i].price + '</p>');
          $(".item-card-bottom:last")
            .after('<div class="item-cover py-5">');
          $(".item-cover:last")
            .append('<div class="my-5 py-5 hover-icons">');
          $(".hover-icons:last")
            .append('<a class="mx-3 plus-icon"><i class="fas fa-plus-circle fa-5x"></i></a>');
          $(".plus-icon:last")
            .after('<a class="mx-3 heart-icon"><i class="fab fa-gratipay fa-5x text-danger"></i></a>');
        } else {
          break;
        }
      }
      itemsNumber += 4;
    }
  });
});

/* Read More Button 
*******************************************************/

$('.more-info').hide();
$('.read-more').click(function(){

  $('.more-info').slideToggle('slow');
  if($(this).text() == 'Read Less'){
      $(this).text('Read More');
  } else {
      $(this).text('Read Less');
  }
});


/* Product Image Small to Big
*******************************************************/
$('#img-1').on({'click': function(){
      let imgProduct = $('#img-1').attr('src');
      $('.img-main').attr('src', imgProduct);
  }
});

$('#img-2').on({'click': function(){
      let imgProduct = $('#img-2').attr('src');
      $('.img-main').attr('src', imgProduct);
  }
});

$('#img-3').on({'click': function(){
      let imgProduct = $('#img-3').attr('src');
      $('.img-main').attr('src', imgProduct);
  }
});

$('#img-4').on({'click': function(){
      let imgProduct = $('#img-4').attr('src');
      $('.img-main').attr('src', imgProduct);
  }
});


/* Product Image Get Bigger
*******************************************************/

$(function() {
  $("img.img-main").click(function(e) {
      var newImg = '<img src=' + $(this).attr("src") + '></img>';
      $('#imgDiv')
         .html($(newImg)
         .animate({ height: '789', width: '867' }, 1));
         
  });
  
});  

var img = document.getElementsByClassName('deneme')[0];
var bigImage = document.getElementById('imgDiv');

img.onclick = function() {
  bigImage.style.display = 'block';
  img.style.display = 'none';
  bigImage.style.zIndex = '1';
}
bigImage.onclick = function() {
  bigImage.style.display = 'none';
  img.style.display = 'block';
}

/* Cart Badge Count
*******************************************************/
let cartCount = parseInt($('.cart-badge').text());

if(localStorage.getItem('cartCount')){
  cartCount = parseInt(localStorage.getItem('cartCount')); // Get old count from cookie
  $('.cart-badge').text(cartCount);
}
/* Plus Icon Button */
$('.plus-icon').on({
  'click': function(){
    cartCount += 1;
    $('.cart-badge').text(cartCount);
    localStorage.setItem('cartCount', cartCount); // Saved card count from cookies
  }
});

/* Plus Icon Button */
$('.add-to-cart').on({
  'click': function(){
    let quantity = parseInt($('.quantity').val());
    cartCount += quantity;
    $('.cart-badge').text(cartCount);
    localStorage.setItem('cartCount', cartCount); // Saved card count from cookies
  }
});
$('.item-buy-m').on({
  'click': function () {
    cartCount += 1;
    $('.cart-badge').text(cartCount);
    localStorage.setItem('cartCount', cartCount);
  }
});

$('.item-buy').on({
  'click': function () {
    cartCount += 1;
    $('.cart-badge').text(cartCount);
    localStorage.setItem('cartCount', cartCount);
  }
});

/* After adding the product, the quantity value set to 1. */
$('.add-to-cart').on({
  'click': function(){
    $(".quantity").val(1);
  }
}
);

$('.plus-icon-m').on({
  'click': function(){
    cartCount += 1;
    $('.cart-badge').text(cartCount);
    localStorage.setItem('cartCount', cartCount);
  }
});

/* Wish Badge Count
*******************************************************/
let wishCount = parseInt($('.wish-badge').text());

if(localStorage.getItem('wishCount')){
  wishCount = parseInt(localStorage.getItem('wishCount')); // Get old count from cookie
  $('.wish-badge').text(wishCount);
}

$('.heart-icon').on({
  'click': function(){
    wishCount += 1;
    $('.wish-badge').text(wishCount);
    localStorage.setItem('wishCount', wishCount);
  }
});

$('.heart-icon-m').on({
  'click': function(){
    wishCount += 1;
    $('.wish-badge').text(wishCount);
    localStorage.setItem('wishCount', wishCount);
  }
});

/* Show - Hide Password
*******************************************************/
$(document).ready(function() {

  $("#show_hide_password a").on('click', function(event) {

      event.preventDefault();

      if ($('#show_hide_password input').attr("type") == "text") {

          $('#show_hide_password input').attr('type', 'password');
          $('#show_hide_password i').addClass( "fa-eye-slash" );
          $('#show_hide_password i').removeClass( "fa-eye" );

      } else if ($('#show_hide_password input').attr("type") == "password") {

          $('#show_hide_password input').attr('type', 'text');
          $('#show_hide_password i').removeClass( "fa-eye-slash" );
          $('#show_hide_password i').addClass( "fa-eye" );

      }
  });
});


/* SLIDER FOR PRODUCTS MOBILE
*******************************************************/
$('.mobile-item-slider-m').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  autoplaySpeed: 2000,
  prevArrow: false,
  nextArrow: false
});