!function(P){"use strict";P.onFileDown=function(o){oAPP.setBusy("X"),""===P._langu&&(P._langu=oAPP.onConvLangu(o.langu));var n=o.dataURL,e=o.fname,s=o.mime;function t(o){oAPP.setBusy(""),alert(oAPP.onGetMsgTxt("0008"))}window.requestFileSystem(window.TEMPORARY,5242880,function(o){console.log("file system open: "+o.name),o.root.getFile(e,{create:!0,exclusive:!1},function(o){var e,t;o=o,e=n,t=new FileTransfer,o=o.toURL(),t.download(e,o,function(o){console.log("download complete: "+o.toURL()),cordova.plugins.fileOpener2.open(o.toURL(),s,{error:function(o,e,t){oAPP.setBusy(""),alert(oAPP.onGetMsgTxt("0005")+" : "+o.message)},success:function(o,e,t){oAPP.setBusy("")}})},function(o){oAPP.setBusy(""),alert(oAPP.onGetMsgTxt("0005")+" : "+o.source),alert(oAPP.onGetMsgTxt("0005")+" : "+o.target),alert(oAPP.onGetMsgTxt("0005")+" : "+o.code)})},t)},function(o){oAPP.setBusy(""),alert(oAPP.onGetMsgTxt("0009"))})}}(oAPP);