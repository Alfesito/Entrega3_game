class  Boss extends Opponent {
    /**
     * @param game {Game} La instancia del juego al que pertenece el oponente
     */
    constructor (game) {
        super(game);
        this.speed = OPPONENT_SPEED*2;
        this.myImageSrc = "assets/jefe.png";
        this.myImageDeadSrc = "assets/jefe_muerto.png";
    }

    /**
     * Mata al oponente
     */
    collide() {
        
        if (!this.dead) {
            //this.game.score++;
            setTimeout(() => {
                this.game.endGame();
            }, 2000);
            super.collide();
        }

    }
}