/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

//MY SCRIPTS

function startTime() {
   var today = new Date();
   var h = today.getHours();
   var m = today.getMinutes();
   //var s = today.getSeconds();
   m = checkTime(m);
   //s = checkTime(s);
   document.getElementById('time').innerHTML =
   h + ":" + m;
   var t = setTimeout(startTime, 500);
 }
 function checkTime(i) {
   if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
   return i;
 }
 
 function playSound() {
    var sound = document.getElementById("ringtone");
    sound.play();
 }

 function playStartSound() {
   var sound = document.getElementById("start-sound");
   sound.play();
}
 
 function stopSound() {
    var sound = document.getElementById("ringtone");
    sound.pause();
 }
 
 function showFull() {
   var a = document.getElementById("rooms-full");
     
     a.style.display="block";
 }
 
 function hideFull() {
   var a = document.getElementById("rooms-full");
   
     a.style.display="none";
 }
 
 function incomingCall() {
   hideIncoming();
   stopSound();
   //window.open("#");
 }
 
 function showIncoming() {
   var a = document.getElementById("callmessage3");
     a.style.display="block";
     playSound();
 }
 
 function hideIncoming() {
   var a = document.getElementById("callmessage3");
     a.style.display="none";
     stopSound();
 }

 function showWaitMessage() {
   var a = document.getElementById("waitmessage");
   var b = document.getElementById("callmessage3");
      a.style.display="block";
      b.style.display='none';
      stopSound();
      setTimeout(hideWaitMessage, 7000);
 }
 
 function hideWaitMessage() {
   var a = document.getElementById("waitmessage");
   var b = document.getElementById('failedmessage');
     a.style.display="none";
     b.style.display='block';
     //setTimeout(closeFailedMessage, 7000);
 }

 function closeFailedMessage() {
    var a = document.getElementById('failedmessage');

    a.style.display='none';
 }
 
 callTimerID = 0;
 
 function startCall() {
   hideConnect();
   stopSound();
   //window.open("#");
 }
 
 function showCall() {
   var a = document.getElementById("callmessage");
     a.style.display="block";
     callTimerID = setTimeout(showConnect, 10000);
 }
 
 function hideCall() {
   var a = document.getElementById("callmessage");
     a.style.display="none";
     clearTimeout(callTimerID);
 }
 
 function showCall2() {
   var a = document.getElementById("callmessage2");
     a.style.display="block";
     callTimerID = setTimeout(showNoReply, 30000);
 }
 
 function hideCall2() {
   var a = document.getElementById("callmessage2");
     a.style.display="none";
     clearTimeout(callTimerID);
 }
 
 function showConnect() {
   var a = document.getElementById("connectmessage");
     hideCall();
     a.style.display="block";
     callTimerID = setTimeout (startCall, 5000);
 }
 
 function hideConnect() {
   var a = document.getElementById("connectmessage");
     a.style.display="none";
     clearTimeout(callTimerID);
 }
 
 function showReject() {
   var a = document.getElementById("rejectmessage");
     a.style.display="block";
 }
 
 function hideReject() {
   var a = document.getElementById("rejectmessage");
     a.style.display="none";
     //window.location.href="waitingroomA";
 }
 
 function showNoReply() {
   var a = document.getElementById("noreplymessage");
     hideCall2();
     a.style.display="block";
 }
 
 function hideNoReply() {
   var a = document.getElementById("noreplymessage");
     a.style.display="none";
     //window.location.href="waitingroomA";
 }
 
 function busyStatus() {
   var c = document.getElementById("contact");
   var s = document.getElementById("status");
 
     c.style.display = "none";
     s.style.display = "block";
 }
 
 function freeStatus() {
   var c = document.getElementById("contact");
   var s = document.getElementById("status");
 
     c.style.display = "block";
     s.style.display = "none";
 }

 function switchMute() {
   var mute = document.getElementById('mute-button');
   var unmute = document.getElementById('unmute-button');

   if (unmute.style.display == "none") {
      unmute.style.display = "block";
      mute.style.display='none';
    } else {
      mute.style.display = "block";
      unmute.style.display='none';
    }
  }

  function raiseLower() {
   var raise = document.getElementById('raise-button');
   var lower = document.getElementById('lower-button');

   if (lower.style.display === "none") {
      lower.style.display = "block";
      raise.style.display='none';
    } else {
      raise.style.display = "block";
      lower.style.display='none';
    }
  }

  function hideShowCam() {
   var hc = document.getElementById('hide-cam');
   var sc = document.getElementById('show-cam');
   //var hm = document.getElementById('hide-me');
   //var sm = document.getElementById('show-me');

   if (sc.style.display=='none') {
      sc.style.display='block';
      hc.style.display='none';
     // hm.style.display='none';
     // sm.style.display='block';
    } else {
      hc.style.display='block';
      sc.style.display='none';
      //hm.style.display='block';
      //sm.style.display='none';
    }
  }

  function hideShowMe() {
   var hide = document.getElementById('hide-me');
   var show = document.getElementById('show-me');

   if (show.style.display=='none') {
      show.style.display='block';
      hide.style.display='none';
    } else {
      hide.style.display='block';
      show.style.display='none';
    }
  }

  function hideShow2() {
   var hide = document.getElementById('hide-view');
   var show = document.getElementById('show-view');

   if (show.style.display === "none") {
      show.style.display = "block";
      hide.style.display='none';
    } else {
      hide.style.display = "block";
      show.style.display='none';
    }
  }

  function judgeMute() {
     var judgemute = document.getElementById('judge-mute-button');
     var unmute = document.getElementById('unmute-button');

      if (judgemute.style.display === "none") {
         judgemute.style.display = 'block';
         unmute.style.display = 'none';
      } else {
         unmute.style.display = 'block';
         judgemute.style.display = 'none';
      }
  }

  function networkHelp() {
     var box=document.getElementById('message-box');

     if (box.style.display==='none') {
        box.style.display='block';
     } else {
        box.style.display='none';
     }
  }

  function showMuteMsg() {
   var msg = document.getElementById("mute-msg");
 
 window.onclick = function (e) {
     var x = e.clientX,
         y = e.clientY;
     msg.style.top = (y - 72) + 'px';
     msg.style.left = (x - 180) + 'px';
 };
   msg.style.display="block";
   //setTimeout(hideMuteMsg, 7000);
 }
 
 function hideMuteMsg() {
   var msg = document.getElementById("mute-msg");
 
   msg.style.display="none";
 }

 function hideCamWindow() {
   var cambox=document.getElementById('cam-box');
   //var bg = document.getElementById('page-background');

   if(cambox.style.display==='none') {
      cambox.style.display='block';
      //bg.style.filter='blur(2px)';
   } else {
      cambox.style.display='none';
      //bg.style.filter='blur(0px)';
   }
}


function toggleSwitch() {
   var tton=document.getElementById('toggletextON');
   var cam=document.getElementById('camWindow');
   var tb=document.getElementById('toggle');

   if (tb.checked) {
      tton.innerHTML='ON';
      cam.style.display='block';
   } else {
      tton.innerHTML='OFF';
      cam.style.display='none';
   }
}

function startConsultation() {
   var sbox = document.getElementById('start-consultation');
   var sbut = document.getElementById('start-pc');
   var jbut = document.getElementById('join-pc');

   if (sbox.style.display=='none') {
      sbox.style.display='block';
      sbut.disabled = true;
      jbut.disabled = true;
   } else {
      sbox.style.display='none';
      sbut.disabled = false;
      jbut.disabled = false;
   }
}

function joinConsultation() {
   var jbox = document.getElementById('join-consultation');
   var sbut = document.getElementById('start-pc');
   var jbut = document.getElementById('join-pc');

   if (jbox.style.display=='none') {
      jbox.style.display='block';
      sbut.disabled = true;
      jbut.disabled = true;
   } else {
      jbox.style.display='none';
      sbut.disabled = false;
      jbut.disabled = false;
   }
}

function joinConsultation2() {
   var jbox = document.getElementById('join-consultation2');
   var sbut = document.getElementById('start-pc');
   var jbut = document.getElementById('join-pc');

   if (jbox.style.display=='none') {
      jbox.style.display='block';
      sbut.disabled = true;
      jbut.disabled = true;
   } else {
      jbox.style.display='none';
      sbut.disabled = false;
      jbut.disabled = false;
   }
}

function showJoinMeeting() {
   var r2 = document.getElementById('room-2');
   var jb = document.getElementById('join-button')

   if (r2.checked==true) {
      jb.style.display='block';
   } else {
      jb.style.display='none';
   }
}

function showStartMeeting() {
var sb = document.getElementById('start-meeting-button');
var cb1 = document.getElementById('archer-cb');
var cb2 = document.getElementById('mccreary-cb');
var cb3 = document.getElementById('madikane-cb');
var cb4 = document.getElementById('franks-cb');
var cb5 = document.getElementById('rogers-cb');

   if ((cb1.checked || cb2.checked || cb3.checked || cb4.checked || cb5.checked)==true) {
      sb.style.display='block';
   } else {
      sb.style.display='none';
   }
}

function hideShow() {
   var hide = document.getElementById('hide-button');
   var show = document.getElementById('show-button');

   if (show.style.display === "none") {
      show.style.display = "block";
      hide.style.display='none';
    } else {
      hide.style.display = "block";
      show.style.display='none';
    }
  }

  function hideCam() {
   var video = document.querySelector("#camWindow");

   if (navigator.mediaDevices.getUserMedia) 
   {
     navigator.mediaDevices.getUserMedia({video:true})
     .then(function(stream) {
       video.srcObject = stream.stop;
       });
   } else {
       console.log("getUserMedia not supported");
   }
 }

 function showCam() {
   var video = document.querySelector("#camWindow");

   if (navigator.mediaDevices.getUserMedia) 
   {
     navigator.mediaDevices.getUserMedia({video:true})
     .then(function(stream) {
       video.srcObject = stream;
       });
   } else {
       console.log("getUserMedia not supported");
   }
 }

 function muteUnmute() {
   var mo = document.getElementById("mic-open");
   var mc = document.getElementById("mic-closed");
   var ml = document.getElementById("mic-locked");

   if(mo.style.display=='block') 
   {
      mo.style.display='none';
      ml.style.display='block';
   } 
   else if (ml.style.display=='block') 
   {
      ml.style.display='none';
      mc.style.display='block';
   } 
   else
   {
      mc.style.display='none';
      mo.style.display='block';
   }
 }

  function openMessage() {
   var box=document.getElementById('message-box');
   var alert = document.getElementById('hearing-starting');

   box.style.display='block';
   alert.style.display='none';
}

function closeMessage() {
  var box=document.getElementById('message-box');

  box.style.display='none';
}

function lockRoom() {
   var lr = document.getElementById('lock-room');
   var ur = document.getElementById('unlock-room');
   //var rl = document.getElementById('room-locked');
   //var ro = document.getElementById('room-open');

   if (lr.style.display=='block') {
      lr.style.display='none';
      ur.style.display='block';
      //rl.style.display='block';
      //ro.style.display='none';

   } else {
      lr.style.display='block';
      ur.style.display='none';
      //rl.style.display='none';
      //ro.style.display='block';
   }
}

function callCarter() {
   var calling = document.getElementById('calling');
   var declined = document.getElementById('declined');
   
   declined.style.display='none';
   calling.style.display='block';
   setTimeout(carterDeclined, 5000);
}

function carterDeclined() {
   var calling = document.getElementById('calling');
   var declined = document.getElementById('declined');

   calling.style.display='none';
   declined.style.display='block';
}

function callMcCreary() {
   var calling = document.getElementById('callingM');
   var declined = document.getElementById('declinedM');
   
   declined.style.display='none';
   calling.style.display='block';
   setTimeout(mcCrearyDeclined, 5000);
}

function mcCrearyDeclined() {
   var calling = document.getElementById('callingM');
   var declined = document.getElementById('declinedM');

   calling.style.display='none';
   declined.style.display='block';
}

function callArcher() {
   var calling = document.getElementById('calling2');
   
   calling.style.display='block';
   setTimeout(archerJoined, 5000);
}

function archerJoined() {
   var vid = document.getElementById('archer-vid');
   var label = document.getElementById('archer-label');
   var calling = document.getElementById('calling2');
   var tick = document.getElementById('archer-tick');
   var name = document.getElementById('archer-name');
   var phone = document.getElementById('archer-phone');

   calling.style.display='none';
   vid.style.display='block';
   label.style.display='block';
   tick.style.display='block';
   phone.style.display='none';
   name.style.opacity='100%';
   name.style.color='#ffdd00';
}

function callFranks() {
   var calling = document.getElementById('callingF');
   var room = document.getElementById('room3F');
   
   calling.style.display='block';
   room.style.display='none';
   setTimeout(franksJoined, 5000);
}

function franksJoined() {
   var vid = document.getElementById('franks-vid');
   var label = document.getElementById('franks-label');
   var calling = document.getElementById('callingF');
   var tick = document.getElementById('franks-tick');
   var name = document.getElementById('franks-name');
   var phone = document.getElementById('franks-phone');
   var room = document.getElementById('room3F');

   calling.style.display='none';
   vid.style.display='block';
   label.style.display='block';
   tick.style.display='block';
   phone.style.display='none';
   name.style.opacity='100%';
   name.style.color='#ffdd00';
   room.style.display='none';
}

function callPargetter() {
   var calling = document.getElementById('callingP');
   var declined = document.getElementById('declinedP');
   var room = document.getElementById('room3');
   
   room.style.display='none';
   declined.style.display='none';
   calling.style.display='block';
   setTimeout(pargetterDeclined, 5000);
}

function pargetterDeclined() {
   var calling = document.getElementById('callingP');
   var declined = document.getElementById('declinedP');

   calling.style.display='none';
   declined.style.display='block';
   setTimeout(showRoom, 5000);
}

function showRoom() {
   var room = document.getElementById('room3');
   var declined = document.getElementById('declinedP');

   declined.style.display='none';
   room.style.display='block';
}

function shareScreen() {
   var share = document.getElementById('share-screen');
   var stop = document.getElementById('stop-share');

   if (share.style.display=='none') {
      share.style.display='block';
      stop.style.display='none';
   } else {
      share.style.display='none';
      stop.style.display='block';
   }
}

function raiseHand() {
   var share = document.getElementById('raise-hand');
   var stop = document.getElementById('lower-hand');

   if (share.style.display=='none') {
      share.style.display='block';
      stop.style.display='none';
   } else {
      share.style.display='none';
      stop.style.display='block';
   }
}

function showMeOff(){
   var cam = document.getElementById("showme");
 
 window.onmousemove = function (e) {
     var x = e.clientX,
         y = e.clientY;
     cam.style.top = (y + 15) + 'px';
     cam.style.left = (x - 100) + 'px';
 };
   cam.style.display="block";
 }
 
 function hideMeOff() {
   var cam = document.getElementById("showme");
 
   cam.style.display="none";
 }

 function showMeOn(){
   var cam = document.getElementById("hideme");
 
 window.onmousemove = function (e) {
     var x = e.clientX,
         y = e.clientY;
     cam.style.top = (y + 15) + 'px';
     cam.style.left = (x - 100) + 'px';
 };
   cam.style.display="block";
 }
 
 function hideMeOn() {
   var cam = document.getElementById("hideme");
 
   cam.style.display="none";
 }

 function showCamOff(){
   var cam = document.getElementById("showcam");
 
 window.onmousemove = function (e) {
     var x = e.clientX,
         y = e.clientY;
     cam.style.top = (y + 15) + 'px';
     cam.style.left = (x - 100) + 'px';
 };
   cam.style.display="block";
 }
 
 function hideCamOff() {
   var cam = document.getElementById("showcam");
 
   cam.style.display="none";
 }

 function showCamOn(){
   var cam = document.getElementById("hidecam");
 
 window.onmousemove = function (e) {
     var x = e.clientX,
         y = e.clientY;
     cam.style.top = (y + 15) + 'px';
     cam.style.left = (x - 100) + 'px';
 };
   cam.style.display="block";
 }
 
 function hideCamOn() {
   var cam = document.getElementById("hidecam");
 
   cam.style.display="none";
 }

 function showShareOn(){
   var cam = document.getElementById("shareon");
 
 window.onmousemove = function (e) {
     var x = e.clientX,
         y = e.clientY;
     cam.style.top = (y + 15) + 'px';
     cam.style.left = (x - 100) + 'px';
 };
   cam.style.display="block";
 }
 
 function hideShareOn() {
   var cam = document.getElementById("shareon");
 
   cam.style.display="none";
 }

 function showShareOff(){
   var cam = document.getElementById("shareoff");
 
 window.onmousemove = function (e) {
     var x = e.clientX,
         y = e.clientY;
     cam.style.top = (y + 15) + 'px';
     cam.style.left = (x - 100) + 'px';
 };
   cam.style.display="block";
 }
 
 function hideShareOff() {
   var cam = document.getElementById("shareoff");
 
   cam.style.display="none";
 }

 function showMuteMe(){
   var mute = document.getElementById("muteme");
 
 window.onmousemove = function (e) {
     var x = e.clientX,
         y = e.clientY;
     mute.style.top = (y + 15) + 'px';
     mute.style.left = (x - 100) + 'px';
 };
   mute.style.display="block";
 }
 
 function hideMuteMe() {
   var mute = document.getElementById("muteme");
 
   mute.style.display="none";
 }

 function showUnmuteMe(){
   var mute = document.getElementById("unmuteme");
 
 window.onmousemove = function (e) {
     var x = e.clientX,
         y = e.clientY;
     mute.style.top = (y + 15) + 'px';
     mute.style.left = (x - 100) + 'px';
 };
   mute.style.display="block";
 }
 
 function hideUnmuteMe() {
   var mute = document.getElementById("unmuteme");
 
   mute.style.display="none";
 }

 function showLockMe(){
   var mute = document.getElementById("miclock");
 
 window.onmousemove = function (e) {
     var x = e.clientX,
         y = e.clientY;
     mute.style.top = (y + 15) + 'px';
     mute.style.left = (x - 150) + 'px';
 };
   mute.style.display="block";
 }
 
 function hideLockMe() {
   var mute = document.getElementById("miclock");
 
   mute.style.display="none";
 }

 function showHandUp(){
   var cam = document.getElementById("raisehand");
 
 window.onmousemove = function (e) {
     var x = e.clientX,
         y = e.clientY;
     cam.style.top = (y + 15) + 'px';
     cam.style.left = (x - 100) + 'px';
 };
   cam.style.display="block";
 }
 
 function hideHandUp() {
   var cam = document.getElementById("raisehand");
 
   cam.style.display="none";
 }

 function showHandDown(){
   var cam = document.getElementById("lowerhand");
 
 window.onmousemove = function (e) {
     var x = e.clientX,
         y = e.clientY;
     cam.style.top = (y + 15) + 'px';
     cam.style.left = (x - 100) + 'px';
 };
   cam.style.display="block";
 }
 
 function hideHandDown() {
   var cam = document.getElementById("lowerhand");
 
   cam.style.display="none";
 }

 function showInvite(){
   var cam = document.getElementById("invite");
 
 window.onmousemove = function (e) {
     var x = e.clientX,
         y = e.clientY;
     cam.style.top = (y + 10) + 'px';
     cam.style.left = (x + 15) + 'px';
 };
   cam.style.display="block";
 }
 
 function hideInvite() {
   var cam = document.getElementById("invite");
 
   cam.style.display="none";
 }

 function connectionMessage() {
   var h = document.getElementById('hearing-title');
   var a = document.getElementById('poor-connection');

   if (a.style.display == 'none') {
      a.style.display='block';
      h.style.display='none';
   } else {
      a.style.display='none';
      h.style.display='block';
   }
}

function poorConnection() {
   var a = document.getElementById('poor-connection');

   if (a.style.display == 'none') {
      a.style.display='block';

   } else {
      a.style.display='none';

   }
}

function roomClosing() {
   var rc = document.getElementById('room-closing');

   if(rc.style.display=='none') {
      rc.style.display='block';
   } else {
      rc.style.display='none';
   }
}

function micMuted() {
   var a = document.getElementById('mic-muted');

   a.style.display='block';
   setTimeout(hideMicMuted, 4000);
}

function hideMicMuted() {
   var a = document.getElementById('mic-muted');

   a.style.display='none';
}

function muteLocked() {
   var a = document.getElementById('mute-locked');

   a.style.display='block';
   setTimeout(hideMuteLocked, 4000);
}

function hideMuteLocked() {
   var a = document.getElementById('mute-locked');

   a.style.display='none';
}

function roomClosing30() {
   var rc = document.getElementById('room-closing30');

   if(rc.style.display=='none') {
      rc.style.display='block';
   } else {
      rc.style.display='none';
   }
}

function hearingStarting() {
   var hs = document.getElementById('hearing-starting');

   if(hs.style.display=='none') {
      hs.style.display='block';
   } else {
      hs.style.display='none';
   }
}

function nameEdit() {
   var n = document.getElementById('edit-name');
   var t = document.getElementById('p-role');

   if (n.style.display=='none') {
      n.style.display='block';
      t.style.marginTop='-60px';
   } else {
      n.style.display='none';
      t.style.marginTop='0px';
   }
}

function showEdit () {
   var n = document.getElementById('p-name-edit');

   window.onmousemove = function (e) {
      var x = e.clientX,
          y = e.clientY;
      n.style.top = (y - 15) + 'px';
      n.style.left = (x + 20) + 'px';
  };
    n.style.display="block";
}

function hideEdit() {
   var n = document.getElementById('p-name-edit');

   n.style.display='none';
}

function showParticipantAdded() {
   var a = document.getElementById('participant-added');
   var b = document.getElementById('new-participant');

      a.style.display='block';
      b.style.display='block';
}

function hideParticipantAdded() {
   var a = document.getElementById('participant-added');

   a.style.display='none';
}

 //show disconnected

 function showDisconnected() {
   var m = document.getElementById("disconnected");
    
   window.onmousemove = function (e) {
       var x = e.clientX,
           y = e.clientY;
       m.style.top = (y + 15) + 'px';
       m.style.left = (x -50) + 'px';
   };
     m.style.display="block";
   }

   
    function hideDisconnected() {
      var m = document.getElementById("disconnected");
   
      m.style.display='none';
    }

// show poor network message

function showPoorNetwork() {
   var m = document.getElementById("poor-network");
    
   window.onmousemove = function (e) {
       var x = e.clientX,
           y = e.clientY;
       m.style.top = (y +15) + 'px';
       m.style.left = (x -50) + 'px';
   };
     m.style.display="block";
   }
   
    function hidePoorNetwork() {
      var m = document.getElementById("poor-network");
   
      m.style.display='none';
    }


// show video access point label

function showEndpoint() {
   var m = document.getElementById("video-access-point");

   window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    m.style.top = (y + 15) + 'px';
    m.style.left = (x -50) + 'px';
   };
      m.style.display="block";
   }

   function hideEndpoint() {
      var m = document.getElementById("video-access-point");

      m.style.display="none";
   }

    //show/hide participant name

 function showParticipant1(){
   var p = document.getElementById("P1");
 
 window.onmousemove = function (e) {
     var x = e.clientX,
         y = e.clientY;
     p.style.top = (y +15) + 'px';
     p.style.left = (x -50) + 'px';
 };
   p.style.display="block";
 }
 
 function hideParticipant1() {
   var p = document.getElementById("P1");
 
   p.style.display="none";
 }

 function showParticipant2(){
   var p = document.getElementById("P2");
 
 window.onmousemove = function (e) {
     var x = e.clientX,
         y = e.clientY;
         p.style.top = (y +15) + 'px';
         p.style.left = (x -50) + 'px';
 };
   p.style.display="block";
 }
 
 function hideParticipant2() {
   var p = document.getElementById("P2");
 
   p.style.display="none";
 }

 function showParticipant3(){
   var p = document.getElementById("P3");
 
 window.onmousemove = function (e) {
     var x = e.clientX,
         y = e.clientY;
         p.style.top = (y +15) + 'px';
         p.style.left = (x -50) + 'px';
 };
   p.style.display="block";
 }
 
 function hideParticipant3() {
   var p = document.getElementById("P3");
 
   p.style.display="none";
 }

 function showParticipant4(){
   var p = document.getElementById("P4");
 
 window.onmousemove = function (e) {
     var x = e.clientX,
         y = e.clientY;
         p.style.top = (y +15) + 'px';
         p.style.left = (x -50) + 'px';
 };
   p.style.display="block";
 }
 
 function hideParticipant4() {
   var p = document.getElementById("P4");
 
   p.style.display="none";
 }

 function showParticipant5(){
   var p = document.getElementById("P5");
 
 window.onmousemove = function (e) {
     var x = e.clientX,
         y = e.clientY;
         p.style.top = (y +15) + 'px';
         p.style.left = (x -50) + 'px';
 };
   p.style.display="block";
 }
 
 function hideParticipant5() {
   var p = document.getElementById("P5");
 
   p.style.display="none";
 }

 function showParticipant6(){
   var p = document.getElementById("P6");
 
 window.onmousemove = function (e) {
     var x = e.clientX,
         y = e.clientY;
         p.style.top = (y +15) + 'px';
         p.style.left = (x -50) + 'px';
 };
   p.style.display="block";
 }
 
 function hideParticipant6() {
   var p = document.getElementById("P6");
 
   p.style.display="none";
 }

 function showParticipant7(){
   var p = document.getElementById("P7");
 
 window.onmousemove = function (e) {
     var x = e.clientX,
         y = e.clientY;
         p.style.top = (y +15) + 'px';
         p.style.left = (x -50) + 'px';
 };
   p.style.display="block";
 }
 
 function hideParticipant7() {
   var p = document.getElementById("P7");
 
   p.style.display="none";
 }

 function showParticipant8(){
   var p = document.getElementById("P8");
 
 window.onmousemove = function (e) {
     var x = e.clientX,
         y = e.clientY;
         p.style.top = (y +15) + 'px';
         p.style.left = (x -50) + 'px';
 };
   p.style.display="block";
 }
 
 function hideParticipant8() {
   var p = document.getElementById("P8");
 
   p.style.display="none";
 }

 function showParticipant9(){
   var p = document.getElementById("P9");
 
 window.onmousemove = function (e) {
     var x = e.clientX,
         y = e.clientY;
         p.style.top = (y +15) + 'px';
         p.style.left = (x -50) + 'px';
 };
   p.style.display="block";
 }
 
 function hideParticipant9() {
   var p = document.getElementById("P9");
 
   p.style.display="none";
 }

 function showParticipantI1(){
   var p = document.getElementById("I1");
 
 window.onmousemove = function (e) {
     var x = e.clientX,
         y = e.clientY;
         p.style.top = (y +15) + 'px';
         p.style.left = (x -50) + 'px';
 };
   p.style.display="block";
 }
 
 function hideParticipantI1() {
   var p = document.getElementById("I1");
 
   p.style.display="none";
 }

//interpreter VMR
function showInterpreter(){
   var p = document.getElementById("interpreter");
   
   window.onmousemove = function (e) {
      var x = e.clientX,
         y = e.clientY;
      p.style.top = (y + 15) + 'px';
      p.style.left = (x -50) + 'px';
   };
   p.style.display="block";
   }
   
   function hideInterpreter() {
   var p = document.getElementById("interpreter");
   
   p.style.display="none";
   }

    //show/hide call witness labels

 function showWitness() {
   var m = document.getElementById("witness");
    
   window.onmousemove = function (e) {
       var x = e.clientX,
           y = e.clientY;
       m.style.top = (y +15) + 'px';
       m.style.left = (x -50) + 'px';
   };
     m.style.display="block";
     //setTimeout(hideWitness, 3000);
   }
   
    function hideWitness() {
      var m = document.getElementById("witness");
   
      m.style.display='none';
    }

    function expandCollapsePlist() {
      var page=document.getElementById('page-grid');
      var chat=document.getElementById('messages');
      var list=document.getElementById('participant-list');
      var pon = document.getElementById('hide-list');
      var poff = document.getElementById('show-list');
      var con = document.getElementById('hide-chat');
      var coff = document.getElementById('show-chat');
   
      if (list.style.display=='none') {
         page.className='pageGrid3';
        list.style.display='block';
        chat.style.display='none';
        pon.style.display='block';
         poff.style.display='none';
         coff.style.display='block';
         con.style.display='none';
         
      } else {
        
         page.className='pageGrid4';
         list.style.display='none';
         pon.style.display='none';
         poff.style.display='block';
      }
   }

   function expandCollapseClist() {
      var page=document.getElementById('page-grid');
      var chat=document.getElementById('messages');
      var list=document.getElementById('participant-list');
      var con = document.getElementById('hide-chat');
      var coff = document.getElementById('show-chat');
      var pon = document.getElementById('hide-list');
      var poff = document.getElementById('show-list');
      //var ptxt = document.getElementById('am-p-list');
      //var ctxt = document.getElementById('am-c-list');
   
      if (chat.style.display=='none') {
         page.className='pageGrid3';
         chat.style.display='block';
         list.style.display='none';
         con.style.display='block';
         coff.style.display='none';
         pon.style.display='none';
         poff.style.display='block';
         //ctxt.innerHTML='Hide messages list';
         //ptxt.innerHTML='Show participant list';
      } else {
        page.className='pageGrid4';
        chat.style.display='none';
        con.style.display='none';
         coff.style.display='block';
         //ctxt.innerHTML='Show messages list';
         //ptxt.innerHTML='Hide participant list';
      }
   }

   function showChangeDevice(){
      var cam = document.getElementById("change-device");
    
    window.onmousemove = function (e) {
        var x = e.clientX,
            y = e.clientY;
        cam.style.top = (y +15) + 'px';
        cam.style.left = (x -150) + 'px';
    };
      cam.style.display="block";
    }
    
    function hideChangeDevice() {
      var cam = document.getElementById("change-device");
    
      cam.style.display="none";
    }

    function showParties(){
      var cam = document.getElementById("party-list");
    
    window.onmousemove = function (e) {
        var x = e.clientX,
            y = e.clientY;
        cam.style.top = (y +15) + 'px';
        cam.style.left = (x -100) + 'px';
    };
      cam.style.display="block";
    }
    
    function hideParties() {
      var cam = document.getElementById("party-list");
    
      cam.style.display="none";
    }

// show in meeting room message

function showInMeeting() {
   var m = document.getElementById("in-meeting");
    
   window.onmousemove = function (e) {
       var x = e.clientX,
           y = e.clientY;
           m.style.top = (y + 15) + 'px';
           m.style.left = (x - 50) + 'px';
   };
     m.style.display="block";
     //setTimeout(hideInMeeting, 3000);
   }
   
    function hideInMeeting() {
      var m = document.getElementById("in-meeting");
   
      m.style.display='none';
    }

    function showInviteParticipant() {
      var m = document.getElementById("invite-participant");
       
      window.onmousemove = function (e) {
          var x = e.clientX,
              y = e.clientY;
              m.style.top = (y + 15) + 'px';
              m.style.left = (x - 50) + 'px';
      };
        m.style.display="block";
        //setTimeout(hideInviteParticipant, 3000);
      }
      
       function hideInviteParticipant() {
         var m = document.getElementById("invite-participant");
      
         m.style.display='none';
       }

function showInviteDeclined() {
var m = document.getElementById("participant-declined");
   
window.onmousemove = function (e) {
      var x = e.clientX,
         y = e.clientY;
         m.style.top = (y + 15) + 'px';
         m.style.left = (x - 50) + 'px';
};
   m.style.display="block";
   //setTimeout(hideInviteDeclined, 3000);
}

   function hideInviteDeclined() {
   var m = document.getElementById("participant-declined");

   m.style.display='none';
   }

   function showFullScreenON(){
      var p = document.getElementById("fullscreen-on");
    
    window.onmousemove = function (e) {
        var x = e.clientX,
            y = e.clientY;
        p.style.top = (y + 15) + 'px';
        p.style.left = (x - 100) + 'px';
    };
      p.style.display="block";
      //setTimeout(hideFullScreenON, 3000);
    }
    
    function hideFullScreenON() {
      var p = document.getElementById("fullscreen-on");
    
      p.style.display="none";
    }
   
    function showFullScreenOFF(){
      var p = document.getElementById("fullscreen-off");
    
    window.onmousemove = function (e) {
        var x = e.clientX,
            y = e.clientY;
        p.style.top = (y + 15) + 'px';
        p.style.left = (x - 100) + 'px';
    };
      p.style.display="block";
      //setTimeout(hideFullScreenOFF, 3000);
    }
    
    function hideFullScreenOFF() {
      var p = document.getElementById("fullscreen-off");
    
      p.style.display="none";
    }

function inviteHorrobin() {
   var wr=document.getElementById('horrobin-status');
   var inv=document.getElementById('horrobin-invite');
   var wait=document.getElementById('horrobin-waiting');

   wr.style.display='none';
   inv.style.display='none';
   wait.style.display='block';

   setTimeout(horrobinDeclined, 5000);
}

function horrobinDeclined() {
   var wr=document.getElementById('horrobin-status');
   var dec=document.getElementById('horrobin-declined');
   var wait=document.getElementById('horrobin-waiting');

   wr.style.display='block';
   dec.style.display='block';
   wait.style.display='none';

   setTimeout(horrobinReset, 7000);
}

function horrobinReset() {
   var inv=document.getElementById('horrobin-invite');
   var dec=document.getElementById('horrobin-declined');

   inv.style.display='block';
   dec.style.display='none';
}

function inviteCarter() {
   var wr=document.getElementById('carter-status2');
   var inv=document.getElementById('carter-invite');
   var wait=document.getElementById('carter-waiting');

   wr.style.display='none';
   inv.style.display='none';
   wait.style.display='block';

   setTimeout(carterAccepted, 5000);
}

function carterAccepted() {
   var c1=document.getElementById('C1');
   var c2=document.getElementById('C2');

   c1.style.display='block';
   c2.style.display='none';

   setTimeout(carterJoined, 5000);
}

function carterJoined() {
   var cs=document.getElementById('carter-status1');
   var cm=document.getElementById('carter-mic');
   var cv=document.getElementById('carter-vid');
   var cl=document.getElementById('carter-label');

   cs.style.display='none';
   cm.style.display='block';
   cv.style.display='block';
   cl.style.display='block';
}

function goFullScreen() {
   var elem = document.querySelector("#main-content");

   if (elem.requestFullscreen) {
      elem.requestFullscreen();
   } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
   } 
}

function exitFullScreen() {
   
   if (document.exitFullscreen) {
      document.exitFullscreen();
  } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
  }
}

function switchFullScreen() {
   var en = document.getElementById('enter-fullscreen');
   var ex = document.getElementById('exit-fullscreen');

   if(en.style.display=='block') {
      en.style.display='none';
      ex.style.display='block';
   } else {
      en.style.display='block';
      ex.style.display='none';
   }
}

function toggleIM() {
   var im = document.getElementById('IM-open');

   if(im.style.display=='block') {
      im.style.display='none';
   } else {
      im.style.display='block';
   }
}

function closedHearingAlert() {
   var m = document.getElementById('closed-hearing-alert');

      m.style.display='block';
      setTimeout(gotoClosed, 11000);

}

function gotoClosed() {
   window.location.href='livehearing2';
}

//small screen menu
function popMainMenu() {
   document.getElementById("mainDropdown").classList.toggle("show");
 }
 
 window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
     var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }
     }
   }
 }

function popMenu() {
   document.getElementById("myDropdown").classList.toggle("show");
 }
 
 window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
     var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }
     }
   }
 }

 function popShareMenu() {
   document.getElementById("shareDropdown").classList.toggle("show");
 }
 
 window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
     var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }
     }
   }
 }

 function showMainMenu () {
   var n = document.getElementById('main-menu');

   window.onmousemove = function (e) {
      var x = e.clientX,
          y = e.clientY;
          n.style.top = (y + 15) + 'px';
          n.style.left = (x - 50) + 'px';
  };
    n.style.display="block";
}

function hideMainMenu() {
   var n = document.getElementById('main-menu');

   n.style.display='none';
}

function testCamMic() {
   var c = document.getElementById('cam-box');
   var t = document.getElementById('test-kit');

   if(t.style.display=='none') {
      c.style.display='none';
      t.style.display='block';
   } else {
      t.style.display='none'
   }
}

function recordPlayback() {
   var b = document.getElementById('record-button')
   var r = document.getElementById('recording')

   b.disabled=true;
   r.style.display='block';
   setTimeout(recordPlayback1, 5000);

}

function recordPlayback1() {
   var b = document.getElementById('record-button')
   var r = document.getElementById('recording')
   var p = document.getElementById('playing')

   r.style.display='none';
   p.style.display='block';
   setTimeout(testAgain, 5000);

}

function testAgain() {
   var r = document.getElementById('record-button')
   var p = document.getElementById('playing')
   var b = document.getElementById('continue-mediacheck');

   r.disabled=false;
   p.style.display='none';
   b.style.display='block';
}

function showChats(){
   var cam = document.getElementById("chat-list");
 
 window.onmousemove = function (e) {
     var x = e.clientX,
         y = e.clientY;
     cam.style.top = (y + 15) + 'px';
     cam.style.left = (x - 100) + 'px';
 };
   cam.style.display="block";
   //setTimeout(hideChats, 5000);
 }
 
 function hideChats() {
   var cam = document.getElementById("chat-list");
 
   cam.style.display="none";
 }

 function sendIM() {
    var m=document.getElementById('new-im');
    var i=document.getElementById('send-im');

    if(m.style.display=='none') {
       m.style.display='block';
       i.value=' ';
    }
 }

 function closeCookies() {
    var c = document.getElementById('cookie-banner');

    c.style.display='none';
 }