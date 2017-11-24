
$(document).ready(() => {
  console.log("MYUSER", myUser);
  console.log("MYTAIL", myTail);
  let idUser = "";
  let username = myUser.username;
  let idTail = $("#tailID").val();
  const id = {
    user:idUser,
    tail:idTail
  };

  function userGenerator(){
    $.ajax({
      method:  'GET',
      url:     `/tails/${idTail}/addMe`,
      data: id,
      success: function (response){
        console.log(response);
        $(".container-users").append(
          "<ul id='tail_user'></ul>"
        );
        for (var i = 0; i < response.tail_user.length; i++) {
          $("#tail_user").append(
              "<li class='item'>"+ response.tail_user[i]._id + " " +
              "<button class='delete_addme' id="+ response.tail_user[i]._id +" >delete</button>"+"</li>"
              );
            }
        activateDeleteButton();
      }
    });

  }
userGenerator();


$('#addme').on('click', (event) => {
  $.ajax({
    method:  'POST',
    url:     `/tails/${idTail}/addMe`,
    data:    id,
    success: function (response) {
      console.log("entra en addme");
      $("#tail_user").remove();
        userGenerator();
      },
    error:   handleError
  });
});

function activateDeleteButton(){
  //console.log(response.tail_user[i]);
  $('.delete_addme').on('click', (event) => {
    console.log(event.target.id);
    $("#tail_user").remove();
    $.ajax({
      method:  'POST',
      url:     `/tails/${event.target.id}/deleteAddMe`,
      data:    id,
      success: function (response) {
        console.log("8===DD");
        console.log(response);
        userGenerator();
      },
      error: handleError
    });
  });
}

//actualiza la vista de la cola de usuarios



function handleError (err) {
  console.log('Oh no! Error:');
  console.log(err);
}



});
