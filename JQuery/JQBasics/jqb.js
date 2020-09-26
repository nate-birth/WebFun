// Select all buttons(applies to any element)
$('button')

// buttons with the class item blue
$('button.blue')

// buttons AND all class items that are blue
$('button, .blue')

// Select an ID
$('#red')


// Event Handlers

// Click event listener on button click
$('button').click();

// Make it do something
$('button').click(function(){
    alert("You have clicked a button!")
});

// Keep in mind the basic flow of using jQuery:
// Select the element, class or id using the jQuery selector.
// Add an event listener: How do you want this event to be triggered?
// Write the code on what you want to happen when the event is triggered.

// getter vs setter
// a getter gets information from the page while a setter will set the information
// .text() //will get the text from a specified place 
// .text('new text here') //will set the text equal to the string in the parethesis 


$(this) // When used in jquery this will indicate whatever triggered the event.

// this shows how you can hide an image without having to id and call each img individually.
{/* <html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script>
        $(document).ready(function(){
        //attach a click event listener to all the img tags when the document is ready
            $('img').click(function(){
                $(this).hide();
            });
        });
    </script>
</head>
<body>
    <img src="image1.jpg" />
    <img src="image2.jpg" />
    <img src="image3.jpg" />
    <img src="image4.jpg" />
    <img src="image5.jpg" />
</body>
</html> */}




// class notes 
// console.dir(document); - shows the dom
// - the dir shows the directory for the item selected

// document.getElementById("header") - will show you the header or whatever you put in the parenthesis

$(document).on('click', 'alert', function(){
    alert('you clicked me!');
});
// $(document).on is always listening for whatever is specified in the variables. in this case clicks.
// This will apply to ANY click that has the specified element, id, or class
// you can change it to $(<anyElement,class,id>).on(...) to specify a specific type of object for the jQuery to listen too.
// - This will reduce runtime needs as it will only be listening to those specific elements instead of the whole document. 

// CALLBACKS

// A call back is when you create a function that can be used in multiple places in the jQuery script.

// ---------------------------------------

function attach_handlers()
{
    $('.alert').click(function(){
        alert('you clicked me!');
    });
}
// This will be used for both the existing elements and any new jquery elements.

$(document).ready (function(){

    attach_handlers();
    // This adds the jQuery to the existing elements on the document.

    $('.new_btn').click(function(){
        $('#buttons').append("<button class='alert'>I am a dynamically generated button!</button>");
        attach_handlers();
        // This adds the functionality to the newly created elements that jQuery created.
    })
})
// -------------------------------------------

.submit()

$('form').submit(function(){alert('you submitted me!');});
// this is say that on submit do the following

$('h4').click(function(){
    $('form').submit();
})
// This is saying that clicking on the h4(or whatever element you want) will submit the form.


// Return False

// <input type = 'submit'>
//   This alone will take you to a different page

$('form').submit(function(){
    return false;
});
// this doesn't allow the form to be submitted.
//  this can be used to require fields to be filled out


// .serialize()
// This takes form elements from a form and encodes them into a computer friendly array.
// - This is very useful when passing to the backend as it makes it easier to be processed.