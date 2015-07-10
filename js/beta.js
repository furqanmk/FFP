$(function() {
    $(".volunteer").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = "FURQAN MUHAMMAD KHAN";
            // var fathersName = $("input#InputFathersName").val();
            // var nic = $("input#InputNic").val();
            // var email = $("input#InputEmail").val();
            // var contactNumber = $("input#InputContactNo").val();
            // var occupation = $("input#InputOccupation").val();
            // var age = $("input#InputAge").val();
            
            var file_data = $image;  
            var form_data = new FormData();                  
            form_data.append('file', file_data);
            form_data.append('name', name);
            // var firstName = name; // For Success/Failure Message
            // // Check for white space in name for Success/Fail message
            // if (firstName.indexOf(' ') >= 0) {
            //     firstName = name.split(' ').slice(0, -1).join(' ');
            // }
                        
            console.log($.ajax({
                url: "././mail/beta.php",
                type: "POST",
                data: form_data, 
                dataType: false, 
                contentType: false,
                processData: false,
                cache: false,
                success: function() {
                    // Success message
                    $('#v_success').html("<div class='alert alert-success'>");
                    $('#v_success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#v_success > .alert-success')
                        .append("<strong>Your form has been received! We'll contact you shortly.</strong>");
                    $('#v_success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#volunteerForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#v_success').html("<div class='alert alert-danger'>");
                    $('#v_success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#v_success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that our servers are not responding. Please try again later!");
                    $('#v_success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#volunteerForm').trigger("reset");
                },
            }));
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

});


/*When clicking on Full hide fail/success boxes */
$('#InputName').focus(function() {
    $('#v_success').html('');
});
