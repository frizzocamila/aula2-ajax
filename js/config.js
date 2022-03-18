$('#sl-opt').change(function(event){
  $('#content').empty();
  var opcaoSelecionada = event.currentTarget.value;  
  switch(opcaoSelecionada){
    case "posts":
      abrirModal();
        $.ajax({
          url: "https://jsonplaceholder.typicode.com/posts",
          type: "GET",
          dataType: "json",
          success: function(data){
            data.forEach(element =>{
              $(`
              <div class="card m-2">
                <div class="card-body">
                  <h5 class="card-title">${element.title}</h5>
                  <p class="card-text">${element.body}</p>
                </div>
              </div>
              `).appendTo('#content');
            });
          },
          error: function(data){
            alert("Erro: " + data.status);
          },
          complete: function(){
            fecharModal();
          }
        });
      break;
    case "comments":
      abrirModal();
      $.ajax({
        url: "https://jsonplaceholder.typicode.com/comments",
        type: "GET",
        dataType: "json",
        success: function(data){
          data.forEach(element =>{
            $(`
            <div class="card m-2">
              <div class="card-body">
                <img src="./img/generic_avatar.jpg" class="img-thumbnail rounded-circle" alt="Foto Avatar">
                <h5 class="card-title d-inline-block m-1">${element.name}</h5>
                <p class="card-text">${element.body}</p>
              </div>
              <div class="card-body ">
                <img src="./img/email_icon.png" style="width:30px" alt="Icone email">
                <a href="mailto:${element.email}" class="card-link me-3">${element.email}</a>
                <img src="./img/like_icon.png" style="width:25px" alt="Icone like">
                <span class="me-3">0</span>
                <img src="./img/dislike_icon.png" style="width:25px" alt="Icone deslike">
                <span>0</span>
              </div>
            </div>
            `).appendTo('#content');
          });
        },
        error: function(data){
          alert("Erro: " + data.status);
        },
        complete: function(){
          fecharModal();
        }
      });
      break;
    case "photos":
      abrirModal();
      break;
    default:
      alert("Por favor, selecione uma opção!");
  }
});

function abrirModal(){
  $('#modal-aguardar').show();
}
function fecharModal(){
  $('#modal-aguardar').hide();
}