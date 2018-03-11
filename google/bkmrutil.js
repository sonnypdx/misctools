// Based on the bookmarklet being provided by Google to bookmark a webpage to one's google account

(function () {
var l=["title","h1","h2","h3","h4","h5","h6"];
//var stop_wds=["a","able","about","above","abst","accordance","according","accordingly","across","act","actually","added","adj","affected","affecting","affects","after","afterwards","again","against","ah","all","almost","alone","along","already","also","although","always","am","among","amongst","an","and","announce","another","any","anybody","anyhow","anymore","anyone","anything","anyway","anyways","anywhere","apparently","approximately","are","aren","arent","arise","around","as","aside","ask","asking","at","auth","available","away","awfully","b","back","be","became","because","become","becomes","becoming","been","before","beforehand","begin","beginning","beginnings","begins","behind","being","believe","below","beside","besides","between","beyond","biol","both","brief","briefly","but","by","c","ca","came","can","cannot","can't","cause","causes","certain","certainly","co","com","come","comes","contain","containing","contains","could","couldnt","d","date","did","didn't","different","do","does","doesn't","doing","done","don't","down","downwards","due","during","e","each","ed","edu","effect","eg","eight","eighty","either","else","elsewhere","end","ending","enough","especially","et","et-al","etc","even","ever","every","everybody","everyone","everything","everywhere","ex","except","f","far","few","ff","fifth","first","five","fix","followed","following","follows","for","former","formerly","forth","found","four","from","further","furthermore","g","gave","get","gets","getting","give","given","gives","giving","go","goes","gone","got","gotten","h","had","happens","hardly","has","hasn't","have","haven't","having","he","hed","hence","her","here","hereafter","hereby","herein","heres","hereupon","hers","herself","hes","hi","hid","him","himself","his","hither","home","how","howbeit","however","hundred","i","id","ie","if","i'll","im","immediate","immediately","importance","important","in","inc","indeed","index","information","instead","into","invention","inward","is","isn't","it","itd","it'll","its","itself","i've","j","just","k","keep	keeps","kept","kg","km","know","known","knows","l","largely","last","lately","later","latter","latterly","least","less","lest","let","lets","like","liked","likely","line","little","'ll","look","looking","looks","ltd","m","made","mainly","make","makes","many","may","maybe","me","mean","means","meantime","meanwhile","merely","mg","might","million","miss","ml","more","moreover","most","mostly","mr","mrs","much","mug","must","my","myself","n","na","name","namely","nay","nd","near","nearly","necessarily","necessary","need","needs","neither","never","nevertheless","new","next","nine","ninety","no","nobody","non","none","nonetheless","noone","nor","normally","nos","not","noted","nothing","now","nowhere","o","obtain","obtained","obviously","of","off","often","oh","ok","okay","old","omitted","on","once","one","ones","only","onto","or","ord","other","others","otherwise","ought","our","ours","ourselves","out","outside","over","overall","owing","own","p","page","pages","part","particular","particularly","past","per","perhaps","placed","please","plus","poorly","possible","possibly","potentially","pp","predominantly","present","previously","primarily","probably","promptly","proud","provides","put","q","que","quickly","quite","qv","r","ran","rather","rd","re","readily","really","recent","recently","ref","refs","regarding","regardless","regards","related","relatively","research","respectively","resulted","resulting","results","right","run","s","said","same","saw","say","saying","says","sec","section","see","seeing","seem","seemed","seeming","seems","seen","self","selves","sent","seven","several","shall","she","shed","she'll","shes","should","shouldn't","show","showed","shown","showns","shows","significant","significantly","similar","similarly","since","six","slightly","so","some","somebody","somehow","someone","somethan","something","sometime","sometimes","somewhat","somewhere","soon","sorry","specifically","specified","specify","specifying","still","stop","strongly","sub","substantially","successfully","such","sufficiently","suggest","sup","sure	t","take","taken","taking","tell","tends","th","than","thank","thanks","thanx","that","that'll","thats","that've","the","their","theirs","them","themselves","then","thence","there","thereafter","thereby","thered","therefore","therein","there'll","thereof","therere","theres","thereto","thereupon","there've","these","they","theyd","they'll","theyre","they've","think","this","those","thou","though","thoughh","thousand","throug","through","throughout","thru","thus","til","tip","to","together","too","took","toward","towards","tried","tries","truly","try","trying","ts","twice","two","u","un","under","unfortunately","unless","unlike","unlikely","until","unto","up","upon","ups","us","use","used","useful","usefully","usefulness","uses","using","usually","v","value","various","'ve","very","via","viz","vol","vols","vs","w","want","wants","was","wasnt","way","we","wed","welcome","we'll","went","were","werent","we've","what","whatever","what'll","whats","when","whence","whenever","where","whereafter","whereas","whereby","wherein","wheres","whereupon","wherever","whether","which","while","whim","whither","who","whod","whoever","whole","who'll","whom","whomever","whos","whose","why","widely","willing","wish","with","within","without","wont","words","world","would","wouldnt","www","x","y","yes","yet","you","youd","you'll","your","youre","yours","yourself","yourselves","you've","z","zero"];
var stop_wds=["a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "could", "did", "do", "does", "doing", "down", "during", "each", "few", "for", "from", "further", "had", "has", "have", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "it", "it's", "its", "itself", "let's", "me", "more", "most", "my", "myself", "nor", "of", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "she", "she'd", "she'll", "she's", "should", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "we", "we'd", "we'll", "we're", "we've", "were", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "would", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"];

function _getTitleFrCol(d, tg){
	var ml=0,t='',e=d.getElementsByTagName(tg);
	if (e && e.length>0){
		for(var i=0;i<e.length;i++){
			st=e[i].textContent.trim();
			if(st.indexOf(' ')>0&&st.length>ml){t=st;ml=st.length;}
		}
	}
	return t;
}
function _getTitle(d){
	for(var i=0;i<l.length;i++) {
		var t=_getTitleFrCol(d, l[i]);
		if (t.length>0)return t;
	}
	return d.title.trim();
}
function _getSummary(d){
	var e=d.getElementsByTagName('p');
	if (e && e.length>0){
		for(var i=0;i<e.length;i++){
			var t=e[i].textContent.trim();
			if(t.length>0) return t;
		}
	}	
	e=d.getElementsByTagName('meta');
	if (e && e.length>0){
		for(var i=0;i<e.length;i++){
			if(e[i].name.trim().toLowerCase()==='description'){
				return e[i].content;
			}
		}
	}	
	return '';
}
function _getKeywords(d){
	var k=_getKeywordsFromMeta(d);
	if (k.length>0) return k;
	return _getKeyWordsFromHeads(d);
}
function _getKeywordsFromMeta(d){
	var e=d.head.getElementsByTagName('meta');
	if (e && e.length>0){
		for(var i=0;i<e.length;i++){
			if(e[i].name.trim().toLowerCase()==='keywords'){
				var kw=e[i].content.split(',');
				if(kw.length>5)kw=kw.slice(0, 5);
				return kw.join(',');
			}
		}
	}
	return '';
}
function _getWords(e){
	var kw=[];
	if (e && e.length>0){
		for(var i=0;i<e.length;i++){
			kw=kw.concat(e[i].textContent.trim().toLowerCase().split(' '));
		}
	}
	return kw;
}
function _getKeyWordsFromHeads(d){
	var aw=[];
	for(var i=0;i<l.length;i++){
		aw=aw.concat(_getWords(d.getElementsByTagName(l[i])));
	}
	var d=new Map();
	for(var i=0;i<aw.length;i++){
		if (stop_wds.indexOf(aw[i])>=0) continue;
		if (aw[i].length<=1) continue;
		var w=aw[i], c=1;
		if (d.has(w)) {c=d.get(w)+1;}
		d.set(w, c);
	}
	var a1=Array.from(d);
	var a2=a1.sort(function (a,b){return b[1]-a[1];});
	var d2=new Map(a2.slice(0, 5));
	return Array.from(d2.keys()).join(',')
}
	var d = document, t = _getTitle(d), k = _getKeywords(d), s = _getSummary(d), w = window, e = encodeURIComponent, 
	l = "https://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk=" + e(d.location) + "&title=" + e(t) + (k.length>0? "&labels=" + e(k) : "") + (s.length>0? "&annotation=" + e(s) : ""),
	nw = w.open(l, "bkmk_popup", "left=" + ((w.screenX || w.screenLeft) + 10) + ",top=" + ((w.screenY || w.screenTop) + 10) + ",height=510px,width=550px,resizable=1,alwaysRaised=1");
    w.setTimeout(function () {
        nw.focus();
    }, 300);
	console.log("Title: "+t);
	console.log("Keywords: "+k);
	console.log("Summary: "+s);
}
)();
