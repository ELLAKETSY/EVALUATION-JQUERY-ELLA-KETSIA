$(document).ready(function(){
  

  // FONCTION LI A NAVABR

    $('.navbar-nav li a').click(function (){
  
      
     var testClass=$(this).hasClass('gray')

     if (testClass===true){
      return false
     } else {
         $(this).parent().siblings().children().removeClass('gray')
           $(this).addClass('gray') 
     }

    });

// FONCTION POUR LE PANIER DE LA NAVBAR

   
  //   var allCard=document.querySelectorAll('.card')


  //   allCard.forEach(cart => {
     
  //  var boutonCard=cart.children[1].children[2]   //nous avons ici tous les parents avant d'arriver au bouton
  //  var like=boutonCard.children[0]
   
  //  console.log(like);
   
   
  //  boutonCard.addEventListener('click',function(){
   
   
  //    var b=parseInt(like.textContent)+1
   
  //    like.textContent=b
  //  })
   
  //   });
   
//     const toastTrigger = document.getElementById('liveToastBtn')
//     const toastLiveExample = document.getElementById('liveToast')
//     if (toastTrigger) {
//       toastTrigger.addEventListener('click', () => {
//         const toast = new bootstrap.Toast(toastLiveExample)

//         toast.show()
//   })
// }

//     document.querySelector("#liveToastBtn").addEventListener('click',function(){

//     var somme=0
//       allCard.forEach(card => {

//         var boutonCard=zero.children[0].children[1]
//         var like=boutonCard.children[1].textContent
      
//         var boutonCard=card.children[1].children[2]
//         var like=boutonCard.children[0].textContent
        
//         somme=somme+parseInt(button.children[1].children[2].children[0].textContent)

//         document.querySelector('.like').textContent=somme
//     });
// })



    // JE VOULAIS ESSAYER CIBLER TOUTES LES CARTES POUR CHANGER LE TEXTE DES BOUTONS

            // $('.card0').click(function (e){
            //   (e).preventDefault();
            //   $('.card0').text('remove to cart')
          
            //   $('.card0').click(function (e){
            //     (e).preventDefault();
            //     $('.card0').siblings().next().text('Add card')
            
            //     });

            //   });
    
    // FONCTION POUR CHANGER LE TEXTE DU BOUTON DE LA CARTE DE PLATS POPULAIRES

    $('.card0').click(function (e) { 
      e.preventDefault();
      $('.card0').text('remove to cart')

      $('.card0').click(function (e) { 
        e.preventDefault();
        $('.card0').text('Add card')
        
      });
    });

    $('.card2').click(function (e) { 
      e.preventDefault();
      $('.card2').text('remove to cart')

      $('.card2').click(function (e) { 
        e.preventDefault();
        $('.card2').text('Add card')
        
      });
  
    });

    $('.card3').click(function (e) { 
      e.preventDefault();
      $('.card3').text('remove to cart')

      $('.card3').click(function (e) { 
        e.preventDefault();
        $('.card3').text('Add card')
  
        
      });
  
    });

    $('.card4').click(function (e) { 
      e.preventDefault();
      $('.card4').text('remove to cart')

      $('.card4').click(function (e) { 
        e.preventDefault();
        $('.card4').text('Add card')
  
        
      });
  
    });

    $('.card5').click(function (e) { 
      e.preventDefault();
      $('.card5').text('remove to cart')

      $('.card5').click(function (e) { 
        e.preventDefault();
        $('.card5').text('Add card')
  
        
      });
  
    });

    $('.card6').click(function (e) { 
      e.preventDefault();
      $('.card6').text('remove to cart')

      $('.card6').click(function (e) { 
        e.preventDefault();
        $('.card6').text('Add card')
  
        
      });
  
    });
   
// FONCTION POUR CHANGER LE TEXTE DU BOUTON DE LA CARTE DE MENU DU JOUR SPECIAL


$('.card7').click(function (e) { 
  e.preventDefault();
  $('.card7').text('remove to cart')

  $('.card7').click(function (e) { 
    e.preventDefault();
    $('.card7').text('Add card') 
  });
   
});

$('.card8').click(function (e) { 
  e.preventDefault();
  $('.card8').text('remove to cart')

  $('.card8').click(function (e) { 
    e.preventDefault();
    $('.card8').text('Add card')
  });

});

$('.card9').click(function (e) { 
  e.preventDefault();
  $('.card9').text('remove to cart')

  $('.card9').click(function (e) { 
    e.preventDefault();
    $('.card9').text('Add card')  
  });

});

$('.card10').click(function (e) { 
  e.preventDefault();
  $('.card10').text('remove to cart')

  $('.card10').click(function (e) { 
    e.preventDefault();
    $('.card10').text('Add card')    
  });
});

$('.card11').click(function (e) { 
  e.preventDefault();
  $('.card11').text('remove to cart')

  $('.card11').click(function (e) { 
    e.preventDefault();
    $('.card11').text('Add card')  
   });
});


$('.card12').click(function (e) { 
  e.preventDefault();
  $('.card12').text('remove to cart')

  $('.card12').click(function (e) { 
    e.preventDefault();
    $('.card12').text('Add card')

       });
    });



    //JE VOUMAIS QU'EN CLIQUANT SUR LES BOUTONS DE LA CARTE CA AJOUTE +1 DANS LE PANIER

  //   var allCard=document.querySelectorAll('.card')


  //   allCard.forEach(cart => {
     
  //  var boutonCard=cart.children[1].children[2] .children[3] 
  //  var like=boutonCard.children[0]
   
  //  console.log(like);
   
   
  //  boutonCard.addEventListener('click',function(){
   
  //    var b=parseInt(like.textContent)+1
   
  //    like.textContent=b
  //  })
   
  //   });



// FONCTION POUR LE FORMULAIRE DE COMMANDER MAINTENANT

var nom=document.getElementById('nom')
var errorNom=document.getElementById('errorNom')

var email=document.getElementById('email')
var errorMail=document.getElementById('errorEmail')

var tel=document.getElementById('tel')
var errorTel=document.getElementById('errorTel')


var date=document.getElementById('date')
var errorDate=document.getElementById('errorDate')


var range=document.getElementById('range')
var errorRange=document.getElementById('errorRange')

var color=document.getElementById('color')
var errorColor=document.getElementById('errorColor')

var state=document.getElementById('state')
var errorState=document.getElementById('errorState')

var file=document.getElementById('file')
var errorFile=document.getElementById('errorFile')


var mode=document.querySelector('.mode')
var html=document.querySelector('html')


var form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

       // VALIDATION NOM

    if (nom.value=='') {
        nom.classList.add('is-invalid')
        errorNom.textContent='Ce champ est obligatoire'
    } else{
        nom.classList.remove('is-invalid')
        nom.classList.add('is-valid')
        errorNom.textContent=''
    }

       // VALIDATION EMAIL

       if (email.value=='') {
        email.classList.add('is-invalid')
        errorMail.textContent='Ce champ est obligatoire'
    } else{
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
        errorMail.textContent=''
    }

        // VALIDATION TELEPHONE

    if (tel.value=='') {
        tel.classList.add('is-invalid')
        errorTel.textContent='Ce champ est obligatoire'
    } else{
        tel.classList.remove('is-invalid')
        tel.classList.add('is-valid')
        errorTel.textContent=''
    }


    if (range.value=='') {
      range.classList.add('is-invalid')
      errorRange.textContent='Ce champ est obligatoire'
  } else{
      range.classList.remove('is-invalid')
      range.classList.add('is-valid')
      errorRange.textContent=''
  }

  if (color.value=='') {
    color.classList.add('is-invalid')
    errorColor.textContent='Ce champ est obligatoire'
} else{
    color.classList.remove('is-invalid')
    color.classList.add('is-valid')
    errorColor.textContent=''
}

if (state.value=='') {
  state.classList.add('is-invalid')
  errorState.textContent='Ce champ est obligatoire'
} else{
  state.classList.remove('is-invalid')
  state.classList.add('is-valid')
  errorState.textContent=''
  }

  if (file.value=='') {
    file.classList.add('is-invalid')
    errorState.textContent='Ce champ est obligatoire'
  } else{
    file.classList.remove('is-invalid')
    file.classList.add('is-valid')
    errorFile.textContent=''
  }
  
  if (date.value=='') {
    date.classList.add('is-invalid')
    errorDate.textContent='Ce champ est obligatoire'
  } else{
    date.classList.remove('is-invalid')
    date.classList.add('is-valid')
    errorDate.textContent=''
  }
  

});


$(document).ready(function () {
  $('.content').hide();
  $('.alert-danger').hide();

  $('.commander').submit(function (e) { 
      e.preventDefault();
     
    
      if ('') {
        $('.alert-danger').show(); 
      }
  });
});






// FONCTION POUR LES LOREMS DE A PROPOS DE NOUS

$(document).ready(function(){

$('.para1').hide()
$('.para2').hide()
$('.para3').hide()
$('.para4').hide()


$('.cardlorem1').click(function (e) { 
  e.preventDefault();

  $('.para1').slideDown(1000,function(){
    $('.para1').show(1000)
    })
    
    $('.cardlorem1').click(function (e) { 
      e.preventDefault();
    
      $('.para1').slideUp(1000,function(){
        $('.para1').hide(1000)
        })
        
      });
  });

  $('.cardlorem2').click(function (e) { 
    e.preventDefault();
  
    $('.para2').slideDown(1000,function(){
      $('.para2').show(1000)
      })
      
      $('.cardlorem2').click(function (e) { 
        e.preventDefault();
      
        $('.para2').slideUp(1000,function(){
          $('.para2').hide(1000)
          })
          
        });
    });

    $('.cardlorem3').click(function (e) { 
      e.preventDefault();
    
      $('.para3').slideDown(1000,function(){
        $('.para3').show(1000)
        })
        
        $('.cardlorem3').click(function (e) { 
          e.preventDefault();
        
          $('.para3').slideUp(1000,function(){
            $('.para3').hide(1000)
            })
            
          });
      });

      $('.cardlorem4').click(function (e) { 
        e.preventDefault();
      
        $('.para4').slideDown(1000,function(){
          $('.para4').show(1000)
          })
          
          $('.cardlorem4').click(function (e) { 
            e.preventDefault();
          
            $('.para4').slideUp(1000,function(){
              $('.para4').hide(1000)
              })
              
          });
      });
      
});


 //POUR IMPLEMENTER LA COULEUR ET LE POIDS(SES INPUT DANS LE HTML) -

 $(document).ready(function(){
  

  $('input').change(function (e) {
      e.preventDefault()
      
      reponse= $(this).val()
      $(this).next().text(reponse+'px')
      $('p').css('fontSize',`${reponse}`+'px')
      $('p').css('color',`${reponse}`+'px')
      $('card').css('heigth','auto')
      $('card').css('width','auto')   
  });
  
});



var taille=document.getElementById('range')
var flou=document.getElementById('range1')
var couleur=document.getElementById('couleur')
var paras=document.querySelectorAll('para1')


paras.forEach(para =>{
    croix.forEach(close =>{
        titres.forEach(titre =>{
            rectangle.addEventListener('click', ()=>{
                
                if (para.parentNode===rectangle && titre.parentNode===rectangle) {
                    para.classList.toggle('d-none')
                    titre.classList.toggle('dropdown-toggle')
                    rectangle.style.height='auto'
                    // rectangle.classList.add('clicked')
                    close.style.position='absolute'
                    close.style.left='90%'
                    close.style.top='10%'
                    para.style.color="blue"
                    rectangle.style.backgroundColor="rgb(161, 161, 248)"
                }
                couleur.addEventListener('change', () =>{

                })
            })
        
        })  
    })  
})   

taille.addEventListener('change', (e)=>{
  // console.log(e.target.value); 
  para1.forEach(ele => {
      ele.style.fontSize = taille.value + 'px'
  })
})

couleur.addEventListener('change', (e)=>{
  // console.log(e.target.value); 
  para1.forEach(col => {
      col.style.color = `${e.target.value}`
  })
})

flou.addEventListener('change', (e)=>{
  // console.log(e.target.value); 
  para1.forEach(opa => {
      opa.style.opacity = flou.value/100
      // console.log(e.target.value);
  })
})
})