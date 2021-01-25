class Snapper {
	constructor(game, x, y) {
		Object.assign(this, { game, x, y });
		
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/snapper.png");
		
		this.animation = new Animator(this.spritesheet, 0, 0, 353, 661, 12, 0.05, 0, false, true);
		
		//this.loadAnimations(this.spritesheet);
	};
	
	update() {
		// BLANK
	};
	
	draw(ctx) {
		this.animation.drawFrame(this.game.clockTick, ctx, 300, 50, 1);
	};
};