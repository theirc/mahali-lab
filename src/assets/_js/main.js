import App from "./App";

// Example of dynamically loading cognito contact form in footer
var controller = new ScrollMagic.Controller();

if ($("#example-contact-form").length) {
  var scene = new ScrollMagic.Scene({
    triggerElement: "#example-contact-form",
    duration: 200,
    reverse: false
  })
    .addTo(controller)
    .on("enter", function(e) {
      $.ajax({
        url: "https://services.cognitoforms.com/s/bbN8iw1MJUqjPe6aHn-_rw",
        dataType: "script",
        cache: true,
        success: function() {
          // Callback
          console.log("script ready");
          Cognito.load("forms", { id: "25" });
        }
      });
    });
}
