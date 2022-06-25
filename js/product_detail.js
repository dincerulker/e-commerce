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