//Create objects for common properties across available frames
var masks = [];
var bounds = {x:-0.044, y:-1/35, width:1.088, height:37/35};
//defines available frames
availableFrames = [
	{name:'Title', src:'/img/frames/custom/circus/legend/Title.png', bounds:bounds},
	{name:'Rules', src:'/img/frames/Custom/Circus/legend/Rules.png', bounds:bounds},
	{name:'Black Border', src:'/img/frames/Custom/Circus/legend/bBorder.png', bounds:bounds},
	{name:'Black PT', src:'/img/frames/Custom/Circus/legend/bPT.png', bounds:bounds},
	{name:'Blue Border', src:'/img/frames/Custom/Circus/legend/uBorder.png', bounds:bounds},
	{name:'Blue PT', src:'/img/frames/Custom/Circus/legend/uPT.png', bounds:bounds},
	{name:'Green Border', src:'/img/frames/Custom/Circus/legend/gBorder.png', bounds:bounds},
	{name:'Green PT', src:'/img/frames/Custom/Circus/legend/gPT.png', bounds:bounds},
	{name:'Red Border', src:'/img/frames/Custom/Circus/legend/rBorder.png', bounds:bounds},
	{name:'Red PT', src:'/img/frames/Custom/Circus/legend/rPT.png', bounds:bounds},
	{name:'White Border', src:'/img/frames/Custom/Circus/legend/wBorder.png', bounds:bounds},
	{name:'White PT', src:'/img/frames/Custom/Circus/legend/wPT.png', bounds:bounds},

];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = false;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = async function() {
	//resets things so that every frame doesn't have to
	await resetCardIrregularities();
	//sets card version
	card.version = 'm15ExtendedArtShort';
	card.hideBottomInfoBorder = true;
	//art bounds
	card.artBounds = {x:0, y:0, width:1, height:0.7};
	autoFitArt();
	//set symbol bounds
	card.setSymbolBounds = {x:0.9213, y:0.6343, width:0.12, height:0.0410, vertical:'center', horizontal: 'right'};
	resetSetSymbol();
	uploadSetSymbol('/img/blank.png', resetSetSymbol);
	//watermark bounds
	card.watermarkBounds = {x:0.5, y:0.7978, width:0.75, height:0.1872};
	resetWatermark();
	loadScript('/js/frames/manaSymbolsBreakingNews.js');
	//text
	loadTextOptions({	
		mana: {name:'Mana Cost', text:'',x:-0.011, y:0.712, width:0.9292, height:71/2100, oneLine:true, size:0.033, align:'right', shadowX:-0.001, shadowY:0.0029, manaCost:true, manaPrefix:'breakingNews', manaSpacing:0, rotation: -6},
		title: {name:'Title', text:'', x:0.24, y:0.135, width:0.8292, height:0.0543, oneLine:true, font:'Beardsons', size:0.07, rotation: -15},
		smalltitle: {name:'Sub Title', text:'Subtitle', x:0.455, y:0.09, width:0.4, height:0.0543, oneLine:true, font:'Beardsons', size:0.035, rotation: -15},
		type: {name:'Type', text:'', x:0.042, y:0.69, width:0.8292, height:0.0543, oneLine:true, font:'CarnevaleeFreakshow', size:0.037, rotation: -5.0},
		rules: {name:'Rules Text', text:'', x:0.0355, y:0.762, width:0.85, height:0.220, size:0.05, font:'decour', rotation: -5.0},
		pt: {name:'Power/Toughness', text:'', x:0.815, y:0.917, width:0.15, height:0.06, size:0.033, font:'Beardsons', oneLine:true, align:'center', rotation: -5.3, kerning: 0.022}
	});
	//bottom info
	await loadBottomInfo({
		topLeft: {text:'{elemidinfo-artist}', x:1.07, y:0.765, width:0.15, height:0.195, oneLine:true, font:'decour', size:0.1377, color:'#4f3821', rotation: 84},
		bottomLeft: {text:'', x:0.03, y:0.9767, width:0.94, height:0.0177, oneLine:true, font:'decour', size:0.0177, color:'white', outlineWidth:0.003},
		topRight: {text:'*PROXY - NOT FOR SALE*', x:0.01, y:0.9572, width:0.98, height:0.0177, oneLine:true, font:'decour', size:0.0177, color:'white', outlineWidth:0.003, align:'right'},
		wizards: {name:'wizards', text:'', x:0.03, y:0.9767, width:0.94, height:0.0177, oneLine:true, font:'decour', size:0.0177, color:'white', align:'right', outlineWidth:0.003},
	});
}
//loads available frames
loadFramePack();