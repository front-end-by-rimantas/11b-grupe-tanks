import Player from "./tank.js";

class TanksGame {
    constructor ( target, p1Name, p2Name, groundType ) {
        this.DOM = document.querySelector(target);
        this.DOMground;
        // this.map = [];
        this.screenSize = {
            width: 900,
            height: 600
        }
        this.player1 = new Player(0, p1Name, 'red', 'topCenter', this.screenSize);
        this.player2 = new Player(1, p2Name, 'blue', 'bottomCenter', this.screenSize);
        this.groundType = groundType || 'grass';

        this.init();
    }

    init() {
        this.DOM.classList.add('game');
        this.DOM.innerHTML = `<div class="ground"></div>`;
        this.DOMground = this.DOM.querySelector('.ground');
        this.DOMground.style.width = this.screenSize.width + 'px';
        this.DOMground.style.height = this.screenSize.height + 'px';
        this.DOMground.classList.add(this.groundType);
        this.player1.renderTank( this.DOMground );
        this.player2.renderTank( this.DOMground );
    }
}

export default TanksGame;