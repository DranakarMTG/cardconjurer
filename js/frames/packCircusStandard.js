//Create objects for common properties across available frames
var masks = [];	
var bounds = {x:-0.044, y:-1/35, width:1.088, height:37/35};
var ptBounds = {x:1563/2010, y:2514/2814, width:264/2010, height:180/2814};
//defines available frames
availableFrames = [
	{name:'Title', src:'/img/frames/custom/circus/standard/rules.png', bounds:bounds},
	{name:'Black Border', src:'/img/frames/custom/circus/standard/b.png', bounds:bounds},
	{name:'Green Border', src:'/img/frames/custom/circus/standard/g.png', bounds:bounds},
	{name:'Red Border', src:'/img/frames/custom/circus/standard/r.png', bounds:bounds},
	{name:'Blue Border', src:'/img/frames/custom/circus/standard/u.png', bounds:bounds},
	{name:'White Border', src:'/img/frames/custom/circus/standard/w.png', bounds:bounds},
	{name:'Black Power/Toughness', src:'/img/frames/custom/circus/standard/bpt.png', bounds:ptBounds},
	{name:'Green Power/Toughness', src:'/img/frames/custom/circus/standard/gpt.png', bounds:ptBounds},
	{name:'Red Power/Toughness', src:'/img/frames/custom/circus/standard/rpt.png', bounds:ptBounds},
	{name:'Blue Power/Toughness', src:'/img/frames/custom/circus/standard/upt.png', bounds:ptBounds},
	{name:'White Power/Toughness', src:'/img/frames/custom/circus/standard/wpt.png', bounds:ptBounds},

];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = false;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = async function() {
	//resets things so that every frame doesn't have to
	await resetCardIrregularities();
	//sets card version
	card.version = 'circusStandard';
	card.hideBottomInfoBorder = false;
	//art bounds
	card.artBounds = {x:0, y:0, width:1, height:0.6415};
	autoFitArt();
	//set symbol bounds
	card.setSymbolBounds = {x:0.9213, y:0.6343, width:0.12, height:0.0410, vertical:'center', horizontal: 'right'};
	uploadSetSymbol('/img/blank.png', resetSetSymbol);

	//watermark bounds
	card.watermarkBounds = {x:0.5, y:0.7978, width:0.75, height:0.1872};
	resetWatermark();
	loadScript('/js/frames/manaSymbolsBreakingNews.js');
	//text
	loadTextOptions({	
		mana: {name:'Mana Cost', text:'',x:-0.011, y:0.625, width:0.9292, height:71/2100, oneLine:true, size:0.038, align:'right', shadowX:-0.001, shadowY:0.0029, manaCost:true, manaPrefix:'breakingNews', manaSpacing:0},
		title: {name:'Title', text:'', x:0.33, y:0.620, width:0.35, height:0.12, oneLine:false, font:'Beardsons', size:4.5, align:'center', color:'#4f3821', shadowX:-0.001, shadowY:0.0005, lineSpacing: 0.4},
		type: {name:'Type Left', text:'', x:0.1, y:0.675, width:0.22, height:0.113, oneLine:false, font:'CarnevaleeFreakshow', size:0.032, color:'#4f3821', align:'center', shadowX:-0.001, shadowY:0.0002},
		subtype: {name:'Type Right', text:'', x:0.69, y:0.675, width:0.22, height:0.113, oneLine:false, font:'CarnevaleeFreakshow', size:0.032, color:'#4f3821', align:'center', shadowX:-0.001, shadowY:0.0002},
		rules: {name:'Rules Text', text:'', x:0.081, y:0.769, width:0.85, height:0.185, size:0.034, font:'decour'},
		pt: {name:'Power/Toughness', text:'', x:0.775, y:0.900, width:0.15, height:0.06, size:0.032, font:'Beardsons', oneLine:true, align:'center', kerning: 0.014}
	});
		//bottom info
	await loadBottomInfo({
		topLeft: {text:'{fontbelerenbsc}{fontsize' + scaleHeight(0.001) + '}{upinline' + scaleHeight(0.0005) + '}\uFFEE{savex2} {elemidinfo-artist}', x:0.07, y:0.638, width:0.98, height:0.0177, oneLine:true, font:'decour', size:0.0177, color:'#4f3821'},
		bottomLeft: {text:'', x:0.03, y:0.9767, width:0.94, height:0.0177, oneLine:true, font:'decour', size:0.0177, color:'white', outlineWidth:0.003},
		topRight: {text:'*PROXY - NOT FOR SALE*', x:0.01, y:0.9572, width:0.98, height:0.0177, oneLine:true, font:'decour', size:0.0177, color:'white', outlineWidth:0.003, align:'right'},
		wizards: {name:'wizards', text:'', x:0.03, y:0.9767, width:0.94, height:0.0177, oneLine:true, font:'decour', size:0.0177, color:'white', align:'right', outlineWidth:0.003},
	});
}
//loads available frames
loadFramePack();