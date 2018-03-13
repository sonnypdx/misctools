// Based on the bookmarklet being provided by Google to bookmark a webpage to one's google account
(function (){
var l=["title","h1","h2","h3","h4","h5","h6"],
STWD="about,above,after,again,against,because,been,before,being,below,between,both,could,does,doing,down,during,each,from,further,have,having,he'd,he'll,he's,here,here's,hers,herself,himself,how's,i,i'd,i'll,i'm,i've,into,it's,itself,let's,more,most,myself,once,only,other,ought,ours,ourselves,over,same,she'd,she'll,she's,should,some,such,than,that,that's,their,theirs,them,themselves,then,there,there's,these,they,they'd,they'll,they're,they've,this,those,through,under,until,very,we'd,we'll,we're,we've,were,what,what's,when,when's,where,where's,which,while,who's,whom,why's,with,would,you'd,you'll,you're,you've,your,yours,yourself,yourselves".split(','),
d = document, af=Array.from,
// get the text strings from all of the HTMLElements matching the given tag
gSS=function(tg){
return af(d.getElementsByTagName(tg)).map(e=>e.textContent.trim()).filter(s=>s.length>0);
},
// get the title to be used for the given webpage while bookmarking
gtTtl=function(){
for(var i=0;i<l.length;i++){
	var st=gSS(l[i]);
	if(st.length>0)return st.sort((a,b)=>{return b.length-a.length;})[0];
}
return d.title;
},
// get the synopsis or summary of the given webpage while bookmarking
gtSum=function(){
var ss=gSS('p');
for(var i=0;i<ss.length;i++){
	if(ss[i].length>0)return ss[i];
}
return '';
},
// get the words contained in the strings of all headings that pass the filter criteria
gWs=function(ht){
var kw=[],
ss=gSS(ht);
ss.forEach(s=>kw=kw.concat(s.toLowerCase().split(' ').filter(s=>s.length>3&&STWD.indexOf(s)<0)));
return kw;
},
// get the keywords list from the heading tags of the given webpage while bookmarking
gtKwH=function(){
var d1=l.reduce((g,t)=>g.concat(gWs(t)), []).reduce((g,x)=>{g.set(x,(g.get(x)||0)+1);return g;}, new Map());
return af(d1).sort((a,b)=>b[1]-a[1]).reduce((g,x)=>g+=x[0]+',','');
};
// open the bookmarking url in a new window, code that was obtained from the original google bookmarklet
var  t = gtTtl(), k = gtKwH(), s = gtSum(), w = window, e = encodeURIComponent, 
l = "https://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk=" + e(d.location) + "&title=" + e(t) + "&labels=" + e(k) + "&annotation=" + e(s),
nw = w.open(l, "bkmk_popup", "left=" + ((w.screenX || w.screenLeft) + 10) + ",top=" + ((w.screenY || w.screenTop) + 10) + ",height=510px,width=550px,resizable=1,alwaysRaised=1");
w.setTimeout(function () {
	nw.focus();
}, 300);
})();
