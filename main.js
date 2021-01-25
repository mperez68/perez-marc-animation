var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/snapper.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	var snapper = new Snapper(gameEngine);

	gameEngine.init(ctx);
	
	gameEngine.addEntity(snapper);

	gameEngine.start();
});
