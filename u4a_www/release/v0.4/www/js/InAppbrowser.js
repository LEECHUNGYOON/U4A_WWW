oAPP.onInAppbrowser=function(o){var e=o.URL,t=o.PARAM,n=t.length;if(0<n){var a="<html><head></head><body>";a+='<form id="loginForm" action="'+e+'" method="post">';for(var r=0;r<n;r++){var i=t[r];a+='<input type="hidden" name="'+i.NAME+'" value="'+i.VALUE+'">'}a+='</form> <script type="text/javascript">document.getElementById("loginForm").submit();<\/script></body></html>',e="data:text/html;base64,"+btoa(a)}cordova.InAppBrowser.open(e,"_blank","hidden=no,location=no,clearsessioncache=no,clearcache=no")};