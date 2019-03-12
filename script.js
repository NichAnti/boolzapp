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

function getMyBox() {
  var textInput = $(".write-input").val();
  var box = document.createElement("div");
  box.className = box.classList + (" message-box");
  var mes = document.createElement("div");
  mes.className = mes.classList + (" message myMes");
  var text = document.createElement("span");
  text.innerHTML = textInput;
  box.appendChild(mes).appendChild(text);
  return box;
}

function getRispBox() {
  var textInput = "OK";
  var box = document.createElement("div");
  box.className = box.classList + (" message-box");
  var mes = document.createElement("div");
  mes.className = mes.classList + (" message rispMes");
  var text = document.createElement("span");
  text.innerHTML = textInput;
  box.appendChild(mes).appendChild(text);
  return box;
}

function getAns() {

  var box = getRispBox();
  $(".chat").append(box);
}

function sendMessage() {

  if($(".write-input").val() != "") {

    var box = getMyBox();
    $(".chat").append(box);

    $(".write-input").val("");
    sendButton();

    setTimeout(getAns, 1000);
  }

}

function showSearched() {

  $(".prev").show();

  var searched = $(".search-input").val();

  for (var i = 0; i < $(".prev").length; i++) {

    var prev = $(".prev").eq(i);

    var toCheck = prev.find(".name-chat span").text();

    if(!toCheck.includes(searched)) {
      prev.hide();
    }

  }
}

function init() {
  $(".fa-chevron-circle-right").hide();

  $(".search-input").on("input", showSearched);

  $(".write-input").on("input", sendButton);

  $(".fa-chevron-circle-right").click(sendMessage);
  $(document).keydown(function(e) {
    if(e.which == 13) {
      sendMessage();
    }
  });

}

$(init);
