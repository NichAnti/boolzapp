





function sendButton() {
  if($(".write-input").val() != "") {

    $(".fa-chevron-circle-right").show();
    $(".fa-microphone").hide();
  }
  else {
    $(".fa-chevron-circle-right").hide();
    $(".fa-microphone").show();
  }
}


function sendMessage() {

  var textInput = $(".write-input").val();
  var box = document.createElement("div");
  box.className = box.classList + (" message-box");
  var mes = document.createElement("div");
  mes.className = mes.classList + (" message myMes");
  var text = document.createElement("span");
  text.innerHTML = textInput;
  box.appendChild(mes).appendChild(text);
  $(".chat").append(box);

  $(".write-input").val("");
  sendButton();
}

function init() {
  $(".fa-chevron-circle-right").hide();
  $(".write-input").on("input", sendButton);

  $(".fa-chevron-circle-right").on("click", sendMessage);
}

$(init)
