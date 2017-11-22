
$(document).ready(() => {
console.log("entra en addme.js");
console.log("esto es myUser" + myUser);
console.log("esto es myTail" + myTail);

// Create an object with data to submit
//let idTail = tails.id;
let idUser = myUser._id;
let username = myUser.username;
let idTail = myTail._id;
const id = {
  user:idUser,
  tail:idTail
};

// $('#deleteAddMe').on('click', (event) => {
//
//   $.ajax({
//     method:  'POST',
//     url:     `/tails/${idTail}/addMe`,
//       // The data key is for sending data in a POST, PUT or PATCH!
//     data:    id,
//     success: function (response) {
//         console.log(response);
//         updateTailUser();
//       },
//     error:   handleError
//   });
// });


$('#addme').on('click', (event) => {

  $.ajax({
    method:  'POST',
    url:     `/tails/${idTail}/addMe`,
      // The data key is for sending data in a POST, PUT or PATCH!
    data:    id,
    success: function (response) {
        console.log(response);
        updateTailUser();
      },
    error:   handleError
  });
});


let updateTailUser= () => {
console.log("entra update");

          $.ajax({
            method:  'GET',
            url:     `/tails/${idTail}/addMe`,
              // The data key is for sending data in a POST, PUT or PATCH!
            data: id,
            success: function (response) {
                console.log(response);
                console.log("entra");

                // $.each(response, function(username) {
                  console.log("each");
                  $("#tail_user").append(
                     "<li class='item'>"+ username +"</li>" +
                     "<form id='deleteAddMe' action='index.html' method='post'>"+
                     "<button type='button' name='button'>delete</button>"+
                     "</form>"
                    );
                //  });
              },
            error:   handleError
          });


};


function handleError (err) {
  console.log('Oh no! Error:');
  console.log(err);
}

});
