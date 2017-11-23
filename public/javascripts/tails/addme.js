
// $(document).ready(() => {
console.log("entra en addme.js");
// console.log("esto es myUser" + myUser);
// console.log("esto es myTail" + myTail);

// Create an object with data to submit
//let idTail = tails.id;
let idUser = myUser._id;
let username = myUser.username;
let idTail = myTail._id;
const id = {
  user:idUser,
  tail:idTail
};

$('#addme').on('click', (event) => {

  $.ajax({
    method:  'POST',
    url:     `/tails/${idTail}/addMe`,
    data:    id,
    success: function (response) {
        //console.log(response);
        updateTailUser();
      },
    error:   handleError
  });
});

//actualiza la vista de la cola de usuarios
let updateTailUser= () => {
          $.ajax({
            method:  'GET',
            url:     `/tails/${idTail}/addMe`,
            data: id,
            success: function (response) {
                //console.log(response);
                console.log("entra");
                // $.each(response, function(username) {
                  console.log("each");
                  $("#tail_user").append(
                      "<li class='item'>"+ username + "<form action='/tails/"+ idUser +"/deleteAddMe' method='post'> " +
                     "<input style='display:none' type='text' name='tailID' value='"+idTail+"'>" +
                     "<button type='submit' name='button'>delete</button>" +
                       "</form>"+"</li>"
                     );
                // }); //cierra each
              },
            error:   handleError
          });


};


function handleError (err) {
  console.log('Oh no! Error:');
  console.log(err);
}


$('#delete_addme').on('click', (event) => {
  console.log("entra en delete");
  $.ajax({
    method:  'POST',
    url:     `/tails/${idTail}/deleteAddMe`,
    data:    id,
    success: function (response) {

        alert("entra en delete");
        updateTailUser();
      },
    error:   handleError
  });
});


// });
