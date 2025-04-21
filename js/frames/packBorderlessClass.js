//Create objects for common properties across available frames
var masks = [{src:'/img/frames/class/borderless/pinlines.png', name:'Pinline'}, {src:'/img/frames/class/borderless/Title.png', name:'Title'}, {src:'/img/frames/class/borderless/Type.png', name:'Type'}, {src:'/img/frames/class/borderless/rules.png', name:'Text'}];
//defines available frames
availableFrames = [
	{name:'White Frame', src:'/img/frames/class/borderless/w.png', masks:masks},
	{name:'Blue Frame', src:'/img/frames/class/borderless/u.png', masks:masks},
	{name:'Black Frame', src:'/img/frames/class/borderless/b.png', masks:masks},
	{name:'Red Frame', src:'/img/frames/class/borderless/r.png', masks:masks},
	{name:'Green Frame', src:'/img/frames/class/borderless/g.png', masks:masks},
	{name:'Multicolored Frame', src:'/img/frames/class/borderless/m.png', masks:masks},
	{name:'Granite Text Overlay', src:'/img/frames/class/borderless/graniteRulesOverlay.png', masks:masks},
	
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = false;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = async function() {
	//resets things so that every frame doesn't have to
	await resetCardIrregularities();
	//sets card version
	card.version = 'class';
	card.onload = '/js/frames/versionClass.js';
	loadScript('/js/frames/versionClass.js');
	//art bounds
	card.artBounds = {x:0, y:0, width:1, height:1};
	autoFitArt();
	//set symbol bounds
	card.setSymbolBounds = {x:0.9227, y:0.877, width:0.12, height:0.0381, vertical:'center', horizontal: 'right'};
	resetSetSymbol();
	//watermark bounds
	card.watermarkBounds = {x:0.5214, y:0.4748, width:0.38, height:0.6767};
	resetWatermark();
	//text
	loadTextOptions({
		mana: {name:'Mana Cost', text:'', y:0.0775, width:0.9292, height:71/2100, oneLine:true, size:71/1638, align:'right', shadowX:-0.001, shadowY:0.0029, manaCost:true, manaSpacing:0},
		title: {name:'Title', text:'', x:0.1, y:0.0675, width:0.8292, height:0.0543, oneLine:true, font:'belerenb', size:0.0381, color:'white', shadowX:0.0018, shadowY:0.002},
		type: {name:'Type', text:'', x:0.1, y:0.853, width:0.8292, height:0.0543, oneLine:true, font:'belerenb', size:0.0324, color:'white', shadowX:0.0018, shadowY:0.002},
		rules: {name:'Rule Import - Invisible', text:'', x:1, y:1, width:0.1, height:0.1, size:0.0362},
		level0c: {name:'1 - Text', text:'{fontsize-6}{i}(Gain the next level as a sorcery to add its ability.){/i}{lns}{bar}{lns}{fontsize6}', x:0.52, y:0.114, width:0.404, height:0.2096, size:0.0305, color:'white', shadowX:0.0014, shadowY:0.001},
		level1a: {name:'2 - Cost', text:'{2}:', x:0.52, y:0, width:0.3967, height:0.0277, size:0.0277, color:'white', shadowX:0.0014, shadowY:0.001},
		level1b: {name:'2 - Name', text:'Level 2', x:0.5093, y:0, width:0.3967, height:0.0281, size:0.0281, align:'right', color:'white', shadowX:0.0018, shadowY:0.002},
		level1c: {name:'2 - Text', text:'', x:0.52, y:0, width:0.404, height:0.2091, size:0.0305, color:'white', shadowX:0.0014, shadowY:0.001},
		level2a: {name:'3 - Cost', text:'{3}:', x:0.52, y:0, width:0.3967, height:0.0277, size:0.0277, color:'white', shadowX:0.0014, shadowY:0.001},
		level2b: {name:'3 - Name', text:'Level 3', x:0.5093, y:0, width:0.3967, height:0.0281, size:0.0281, align:'right', color:'white', shadowX:0.0018, shadowY:0.002},
		level2c: {name:'3 - Text', text:'', x:0.52, y:0, width:0.404, height:0.2091, size:0.0305, color:'white', shadowX:0.0014, shadowY:0.001},
		level3a: {name:'4 - Cost', text:'{4}:', x:0.52, y:0, width:0.3967, height:0.0277, size:0.0277, color:'white', shadowX:0.0014, shadowY:0.001},
		level3b: {name:'4 - Name', text:'Level 4', x:0.5093, y:0, width:0.3967, height:0.0281, size:0.0281, align:'right', color:'white', shadowX:0.0018, shadowY:0.002},
		level3c: {name:'4 - Text', text:'', x:0.52, y:0, width:0.404, height:0, size:0.0305, color:'white', shadowX:0.0014, shadowY:0.001}
	});
}
//loads available frames
loadFramePack();