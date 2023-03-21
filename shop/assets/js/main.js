var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true,
  pause: 'hover', //false
  keyboard:true,
  touch: true,
  ride:false, 
})
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
var id;
    $("#modalForm").on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget); //Button that triggered the modal
      const produs = button.data('name') //need to find the button and get product
      const pret = button.data('price') //need to find the button and get price
      const description= button.data('description');
      $(".modal-header #titleModalLabel").html(produs);
      $(".modal-body #price").html(pret);
      $(".modal-body #description").html(description);
      id = button.attr('id');
      // var datainfo = document.getElementById(id);
      alert(JSON.stringify(button));
      // alert(JSON.stringify(datainfo));


    })
    $("#modalForm").on('hidden.bs.modal', function (event) {

      // alert('Modalul s-a inchis');
      document.getElementById(id).classList.remove('btn-primary');
      document.getElementById(id).classList.add('btn-info');
    })

    function onSubmit(token) {
      document.getElementById("demo-form").submit();
    }
    function setCookie(c_name,value,expiredays) {
      var exdate=new Date();
      exdate.setDate(exdate.getDate()+expiredays);
      document.cookie=c_name+ "=" +escape(value)+ ((expiredays==null) ? "" :
      ";expires="+exdate.toGMTString());
      }
      function getCookie(c_name) {
        if (document.cookie.length>0) {
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1) {
        c_start=c_start + c_name.length+1;
        c_end=document.cookie.indexOf(";",c_start);
        if (c_end==-1) c_end=document.cookie.length;
        return
        unescape(document.cookie.substring(c_start,c_end));
        }
        }
        return "";
        }
        function checkCookie() {
          username=getCookie('username');
          if (username!=null && username!=""){alert('Welcome again '+username+'!');
          }
          else {
          username=prompt('Please enter your name:',"");
          if (username!=null && username!="") {
          setCookie('username',username,365);
          }
          }
          }
          
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  };
  
  includeHTML();


var id;
$("#modalForm").on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget); //Button that triggered the modal
    const email = button.data('email') //need to find the button and get email
    const nume = button.data('nume') //need to find the button and get name
    $(".modal-body #email").val( email );
    $(".modal-body #name").val( nume );
    id = button.attr('id');
    // var datainfo = document.getElementById(id);
     alert(JSON.stringify(button[0]));
    // alert(JSON.stringify(datainfo));
    
   
  })
  $("#modalForm").on('hidden.bs.modal', function(event) {
   
    alert('Modalul s-a inchis');
    document.getElementById(id).classList.remove('btn-primary');
    document.getElementById(id).classList.add('btn-success');
  })
  
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 
  

// document.addEventListener("DOMContentLoaded", function(){
//     var myScrollSpy = new bootstrap.ScrollSpy(document.body, {
//         target: "#myNavbar"
//     })
// });

$(document).ready(function () {
    $("body").scrollspy({
        target: "#navbar_top"
    })

});


(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()
