//// button

var submit = document.querySelector("#submit");

///// error
var error_name = document.querySelector("#error-name");
var error_phone = document.querySelector("#error-phone");
var error_email = document.querySelector("#error-email");

//// input

var input_name1 = document.querySelector("#name-1");
var input_name2 = document.querySelector("#name-2");
var input_phone = document.querySelector("#text-phone");
var input_email = document.querySelector("#text-email");


//// ssucisfly

var succecfly_off = document.querySelector("#succefly-off");
var downlod_on = document.querySelector("#download-complet-off");


/// bar-loading

var bar_loading_off = document.querySelector("#bar-loading_of");


///// bool
var name1_corrcet = false;
var name2_corrcet = false;
var phone_corrcet = false;
var email_corrcet = false;
var deuxéme_click = false;
var premierec_click = true;
//// VARIaBLES

var number_char;
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var i = 0;

//// function

function global(){
	name_1();
	name_2();
	phone();
	email();
	all_aright();
}

function name_1(){
	if(input_name1.value >= String.fromCharCode(65) && input_name1.value <= String.fromCharCode(90)
	|| input_name1.value >= String.fromCharCode(97) && input_name1.value <= String.fromCharCode(122))
	{
		name1_corrcet = true;
		error_name.id = "error-name";
	}
	else if(input_name1.value == "")
	{
		error_name.id = "fixed-name";

	}
	else{
		error_name.id = "fixed-name";

	}
}
function name_2(){
	if(input_name2.value >= String.fromCharCode(65) && input_name2.value <= String.fromCharCode(90)
	|| input_name2.value >= String.fromCharCode(97) && input_name2.value <= String.fromCharCode(122))
	{
		name2_corrcet = true;
		error_name.id = "error-name";

	}
	else if(input_name1.value == "")
	{
		error_name.id = "fixed-name";

	}
	else{
		error_name.id = "fixed-name";

	}
}
function phone(){
		if(input_phone.value >= String.fromCharCode(48) && input_phone.value <= String.fromCharCode(57) 
		&& input_phone.value.length == 10)
		{
			phone_corrcet = true;
			error_phone.id = "error-phone";
			input_name1.classList.add('name-fix');

		}
		else if(input_phone.value == "")
		{
			error_phone.id = "fixed-phone";

		}
		else{
			error_phone.id = "fixed-phone";
		}
}
function email(){
	if(input_email.value.match(pattern))
	{
		name1_corrcet = true;
		error_name.id = "error-email";
	}
	else if(input_emailvalue == "")
	{
		error_phone.id = "fixed-email";

	}
	else{
		error_email.id = "fixed-email";
	}
}

function all_aright(){
	if(premierec_click == true)
	{
		if(name1_corrcet == true && name2_corrcet == true && phone_corrcet == true && name1_corrcet == true){
			submit.innerHTML = "Download Free Sample"; 
			submit.id = "submit-download"
			succecfly_off.id="succecfly_on";
			error_name.remove();
			error_phone.remove();
			error_email.remove();
			deuxéme_click = true;
			premierec_click = false;
		}
	}
	else if(deuxéme_click == true)
	{
		bar_loading_off.id = "bar-loading_on";
		succecfly_off.remove();
		move();

	}

}

function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
	  } 
	  if(width == 100){
		  submit.remove();
		  bar_loading_off.remove();
		  downlod_on.id="#download-complet-on";
	  }
	  else {
        width++;
        elem.style.width = width + "%";
	  }

    }
  }
} 
/// click
submit.onclick = global;
