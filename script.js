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

  var time = document.createElement("small");
  time.innerHTML = "12:00";

  var menu = document.createElement("div");
  menu.className = menu.classList + " menu";
  var menuIcon = document.createElement("i");
  menuIcon.className = menuIcon.classList + " fas fa-angle-down";
  var menuOptions = document.createElement("div");
  menuOptions.className = menuOptions.classList + " menu-options";
  var menuOption1 = document.createElement("span");
  var menuOption2 = document.createElement("span");
  menuOption2.className = menuOption2.classList + " delete";
  menuOption1.innerHTML = "info";
  menuOption2.innerHTML = "delete";

  menuOptions.appendChild(menuOption1);
  menuOptions.appendChild(menuOption2);
  menu.appendChild(menuIcon);
  menu.appendChild(menuOptions)

  mes.appendChild(text);
  mes.appendChild(time);
  mes.appendChild(menu);
  box.appendChild(mes);
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

  var time = document.createElement("small");
  time.innerHTML = "12:00";

  var menu = document.createElement("div");
  menu.className = menu.classList + " menu";
  var menuIcon = document.createElement("i");
  menuIcon.className = menuIcon.classList + " fas fa-angle-down";
  var menuOptions = document.createElement("div");
  menuOptions.className = menuOptions.classList + " menu-options";
  var menuOption1 = document.createElement("span");
  var menuOption2 = document.createElement("span");
  menuOption2.className = menuOption2.classList + " delete";
  menuOption1.innerHTML = "info";
  menuOption2.innerHTML = "delete";

  menuOptions.appendChild(menuOption1);
  menuOptions.appendChild(menuOption2);
  menu.appendChild(menuIcon);
  menu.appendChild(menuOptions)

  mes.appendChild(text);
  mes.appendChild(time);
  mes.appendChild(menu);
  box.appendChild(mes);
  return box;
}

function getAns() {

  var box = getRispBox();
  $(".chat.active").append(box);
}

function sendMessage() {

  if($(".write-input").val() != "") {

    var box = getMyBox();
    $(".chat.active").append(box);

    $(".write-input").val("");
    sendButton();

    setTimeout(getAns, 1000);
  }

}

function showSearched() {

  $(".prev").show();

  var searched = $(".search-input").val().toLowerCase();

  for (var i = 0; i < $(".prev").length; i++) {

    var prev = $(".prev").eq(i);

    var toCheck = prev.find(".name-chat span").text().toLowerCase();

    if(!toCheck.includes(searched)) {
      prev.hide();
    }

  }
}

function selectChat(me) {

  index = me.index();

  $(".active").removeClass("active");

  $(".chat").eq(index).addClass("active");

  var newName = me.find(".name-chat span").text();
  $(".chat-part .head .name-chat span").text(newName)
}

function showMenu(me) {

  me.siblings(".menu-options").toggle();
}

function hideMenu(me) {

  me.find(".menu-options").hide();
}

function deleteMessage(me) {

  me.closest(".message-box").remove();
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

  $(document).on("click", ".prev", function() {

    selectChat($(this));
  })

  $(document).on("click", ".fa-angle-down", function() {

    showMenu($(this));
  })

  $(document).on("mouseleave", ".message", function() {

    hideMenu($(this));
  })

  $(document).on("click", ".delete", function() {

    deleteMessage($(this));
  })

}

$(init);
