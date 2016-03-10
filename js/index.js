// jQuery.validator.setDefaults({
//   debug: true,
//   success: "valid"
// });
$.validator.addMethod('uaphone', function(value, element, params) {
  var regex = /\+38 \(0[0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/g;
  var match = value.match(regex);
  if (match !== null) {
    if (match.length === 1) return true;
  }
  return false;
});

$(document).ready(function() {
  'use strict';
  $('[name="phone"]').mask('+38 (099) 999-99-99');
  var forms = document.getElementsByTagName('form');
  for (var i = 0; i < forms.length; i++) {
    var form = forms[i];
    $(form).validate({
      rules: {
        phone: {
          required: true,
          uaphone: true
        }
      },
      messages: {
        phone: {
          required: 'Введите номер телефона',
          uaphone: 'Введите корректный номер'
        }
      },
      submitHandler: formSubmit
    });
  };
  function formSubmit(form, e) {
    e.preventDefault();    
  }
});
