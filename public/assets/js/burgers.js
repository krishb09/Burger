// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eaten").on("click", function(event) {
      var id = $(this).data("id");
      var devouredConsumed = {
        devoured: 1 //set to true == was eaten 
      }; 

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT", //updates the burgers that were devoured back in db 
        data: devouredConsumed
      }).then(
        function() {
          console.log("Ate the burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log("test"); 
      //sending this burger back to db to be saved 
      var newBurger = {
        burger_name: $("#burger").val().trim(), //match the database variable burger_name
        devoured: 0 //set as 0 for false 
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });
  