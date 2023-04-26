$(document).ready(function(){

// FONCTION DE LA NAVBAR

$('.navbar-nav li a').click(function (){
    
        
    var testClass=$(this).hasClass('gray')

    if (testClass===true){
     return false
    } else {
        $(this).parent().siblings().children().removeClass('gray')
          $(this).addClass('gray') 
    }

   });

})
// FONCTION POUR DONNER LE PRIX TOTAL DE POULET DG

 
$(document).ready(function () {
  $('main').find('#input').click(function (e) { 
    e.preventDefault();
    $('main').find('.prix').text(`${$(this).val()*10000}`)
    $('main').find('.prixfinal').text(`${$(this).val()*10000}`);
    console.log($('main').find('select').val());
  });
  
    $('main').find('select').change(function (e) { 
      e.preventDefault();
      
      if ($('main').find('select').val()!=='') {
        $('.modal-footer').find('.disabled').removeClass('disabled')
      }else{
        $('.modal-footer').find('.disabled').addClass('disabled')
      }
    });
  
});

// $(document).ready(function () {
//   $('main').last().eq(13).click(function (e) { 
//     e.preventDefault();
//     $('.modal').children[0][0][1][0].text(`${$(this).val()*10000}`)
// //     $('main').find('.prixfinal').text(`${$(this).val()*10000}`);
//   });
// });