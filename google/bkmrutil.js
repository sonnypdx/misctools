// Based on the bookmarklet being provided by Google to bookmark a webpage to one's google account

(function (){
var l=["title","h1","h2","h3","h4","h5","h6"],
stop_wds=["a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "could", "did", "do", "does", "doing", "down", "during", "each", "few", "for", "from", "further", "had", "has", "have", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "it", "it's", "its", "itself", "let's", "me", "more", "most", "my", "myself", "nor", "of", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "she", "she'd", "she'll", "she's", "should", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "we", "we'd", "we'll", "we're", "we've", "were", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "would", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"],
//get the text from an HTMLElement
tx=function(x){
return x.textContent.trim();
},
// get the text strings from all of the HTMLElements matching the given tag
gtStrs=function(d,tg){
var w=[];
Array.from(d.getElementsByTagName(tg)).forEach(
	function(e){if(tx(e).length>0)w.push(tx(e));}
);
return w;
},
// get the maximum text string from a collection of strings created from all of the HTMLElements matching the given tag
gtT4C=function(d,tg){
var ml=0,
t='',
ws=gtStrs(d,tg).forEach(
	function(s){if(s.indexOf(' ')>0&&s.length>ml){t=s;ml=s.length;}}
);
return t;
},
// get the title to be used for the given webpage while bookmarking
gtTtl=function(d){
for(var i=0;i<l.length;i++){
	var t=gtT4C(d, l[i]);
	if(t.length>0)return t;
}
return d.title.trim();
},
// get the synopsis or summary of the given webpage while bookmarking
gtSum=function(d){
var ss=gtStrs(d,'p');
for(var i=0;i<ss.length;i++){
	if(ss[i].length>0)return ss[i];
}
ss=gtStrs(d,'meta');
for(var i=0;i<ss.length;i++){
	if(ss[i].length>0)return ss[i];
}
return '';
},
// get the keywords list from the meta tags of the given webpage while bookmarking
gtKwM=function(d){
var kw;
Array.from(d.getElementsByTagName('meta')).forEach(function(e){if(e.name.toLowerCase()==='keywords')kw=e.content.split(',');});
if(kw){if(kw.length>5)kw=kw.slice(0, 5);return kw.join(',');}
return '';
},
// get the words contained in the strings of all headings
gtWds=function(d,ht){
var kw=[],
ss=gtStrs(d,ht);
ss.forEach(function(s){kw=kw.concat(s.toLowerCase().split(' '));});
return kw;
},
// get the keywords list from the heading tags of the given webpage while bookmarking
gtKwH=function(d){
var aw=[], d1=new Map();
l.forEach(function(tg){aw=aw.concat(gtWds(d,tg));});
aw.forEach(function(s){if(s.length>1&&stop_wds.indexOf(s)<0){var c=1;if(d1.has(s))c=d1.get(s)+1;d1.set(s,c);}});
var a1=Array.from(d1), 
a2=a1.sort(function(a,b){return b[1]-a[1];}), 
d2=new Map(a2.slice(0, 5));
return Array.from(d2.keys()).join(',');
},
// get the keywords list to be used while bookmarking
gtKw=function(d){
	var k=gtKwM(d);
	if(k.length>0) return k;
	return gtKwH(d);
};

var d = document, t = gtTtl(d), k = gtKw(d), s = gtSum(d), w = window, e = encodeURIComponent, 
l = "https://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk=" + e(d.location) + "&title=" + e(t) + (k.length>0? "&labels=" + e(k) : "") + (s.length>0? "&annotation=" + e(s) : ""),
nw = w.open(l, "bkmk_popup", "left=" + ((w.screenX || w.screenLeft) + 10) + ",top=" + ((w.screenY || w.screenTop) + 10) + ",height=510px,width=550px,resizable=1,alwaysRaised=1");
w.setTimeout(function () {
	nw.focus();
}, 300);
})();
