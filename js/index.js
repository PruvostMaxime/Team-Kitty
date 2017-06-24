  $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Ta oublié ton nom !'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Ta oublié ton prénom !'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Met une adresse mail'
                    },
                    emailAddress: {
                        message: 'Adresse pas valide :('
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Mets un numero de téléphone'
                    },
                    phone: {
                        country: 'FR',
                        message: 'Numero non valide'
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Indique ton adresse'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Indique ta ville'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Mets ton pays'
                    }
                }
            },
            zip: {
                validators: {
                  stringLength: {
                      min: 5,
                      max: 5,
                      message:'Un code postal,5 chiffres baka!'
                    },
                    notEmpty: {
                        message: 'Mets ton code postal'
                    },
                    zipCode: {
                        country: 'FR',
                        message: 'Code postal non valide'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Minimum : 10 caracteres,maximum 200 !'
                    },
                    notEmpty: {
                        message: 'Laisse un petit message :)'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});
