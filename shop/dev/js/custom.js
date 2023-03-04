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
          