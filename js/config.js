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
            alert("Erro na requisição: " + data.status);
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
          alert("Erro na requisição: " + data.status);
        },
        complete: function(){
          fecharModal();
        }
      });
      break;
    case "photos":
      abrirModal();
      $.ajax({
        url: "https://jsonplaceholder.typicode.com/photos",
        type: "GET",
        dataType: "json",
        success: function(data){
          $(`<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4" id="photo-content"></div>`).appendTo("#content");
          data.forEach(element =>{
            $(`
              <div class="col">
                <div class="card shadow-sm" style="width: 300px;height: 300px" onclick="abrirModalFoto('${element.title}','${element.url}')">
                  <img src="${element.thumbnailUrl}" alt="foto generica" class="img-thumbnail" style="width: 300px;height: 300px">
                </div>
              </div>
            `).appendTo('#photo-content');
          });
        },
        error: function(data){
          alert("Erro na requisição: " + data.status);
        },
        complete: function(){
          fecharModal();
        }
      });
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
function abrirModalFoto(title,url){
  $('#tituloModal').text(title);
  $('#fotoModal').prop('src',url);
  $('#modalFotos').show();
}
function fecharModalFoto(){
  $('#modalFotos').hide();
}