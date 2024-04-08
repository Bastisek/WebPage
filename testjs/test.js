// script.js
$(document).ready(function() {
    var cart = [];
  
    // Agregar al carrito
    $('.add-to-cart').click(function() {
      var name = $(this).data('name');
      var price = Number($(this).data('price'));
      cart.push({ name: name, price: price });
      showCart();
    });
  
    // Mostrar carrito
    function showCart() {
      var total = 0;
      $('.cart .list-group').empty();
      cart.forEach(function(item) {
        total += item.price;
        $('.cart .list-group').append('<li class="list-group-item">' + item.name + ' - $' + item.price.toFixed(2) + '<button class="btn btn-danger btn-sm remove" data-name="' + item.name + '">X</button></li>');
      });
      $('.total').text(total.toFixed(2));
    }
  
    // Eliminar del carrito
    $('.cart').on('click', '.remove', function() {
      var name = $(this).data('name');
      cart = cart.filter(function(item) {
        return item.name !== name;
      });
      showCart();
    });
  });
  