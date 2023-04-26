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






 //POUR IMPLEMENTER LA COULEUR ET LE POIDS(SES INPUT DANS LE HTML) -

});

$(document).ready(function(){
  
  //  Pour changer la couleur du texte
  $('.container').find('.form-control-color').change(function (e) {
    // e.preventDefault()
    
    reponse= $(this).val()
    // $(this).next().text(reponse+'px')
    // $(this).text(reponse+'px')
    // $(this).css('fontSize',`${reponse}`+'px')
    // $('.container').find('.accordion-body').css('fontSize',`${reponse}`+'px')
    $('.container').find('.accordion-body').css('color',`${reponse}`)
    // $('.container').find('.accordion-item').css('height','auto')
    // $('.container').find('.accordion-item').css('width','auto')   
    // console.log(response);
  });
  
  
  // Pour changer la taille du texte
  $('.container').find('.form-range').change(function (e) {
    // e.preventDefault()
    
    reponse= $(this).val()
    
    // $(this).text(reponse+'px')
    $(this).css('fontSize',`${reponse}`+'px')
    $('.container').find('.accordion-body').css('fontSize',`${reponse}`+'px')
    
    $('.container').find('.accordion-item').css('height','auto')
    $('.container').find('.accordion-item').css('width','auto')   
    // console.log(response);
  });
  
  
  // Pour le panier
  var sum=0
  
  $('.container').find('.ms-2').click(function (){

    // (e).preventDefault()
    
    
    
    if ($(this).text()==='Add To Card') {
      sum=sum+1
      $(this).text('Remove To Card')
     
    }else if($(this).text()==='Remove To Card'){
      sum=sum-1
      $(this).text('Add To Card')
    }
    $('nav').find('.translate-middle').text(`${sum}`)
    // console.log($(this).text());

  })

  $('nav').find('#btnm').click(function (e) { 
    e.preventDefault();
    $('nav').find('.modal-body').text(`${sum}`)
  });

});


