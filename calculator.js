

$( document ).ready(function() {
    


let input= $('input[type="text"]');

$(".btns").click(function(e) {

try {
$(e.target).fadeOut().fadeIn();
let $current_val = $(input).val();
let value = $(e.target).val();
let backspace = $("input:last-child").val();

 if (value === "reset") {
$(input).val("");
	
}

else if (value === "=") {
let answer = eval($current_val);
$(input).val("");
$(input).val(answer);	
}

else if (value === backspace) {
$(input).val($(input).val().substring(0, $(input).val().length - 1));
	
 }

else {

$(input).val($current_val + value);
 }

}

  catch(err) {

alert("error");
$(input).val("");

  }

});





});




