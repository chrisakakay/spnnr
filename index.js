const steps     = '|/-\\';
const readline  = require('readline');
const delay     = 100;

class Spnnr {
    constructor(msg) {
        this.msg = msg;
        this.start();
    }

    start() {
        this._step       = 0;
        this._interval  = setInterval(() => {
            this.tick();
        }, delay);
    }

    stop(msg) {
        clearInterval(this._interval);
        this.clearLine();
        process.stdout.write(`${msg}\n`);
    }

    increaseStep() {
        this._step++;
        if (this._step > steps.length - 1) {
            this._step = 0;
        }
    }

    tick() {
        this.increaseStep();
        this.clearLine();
        process.stdout.write(`${steps[this._step]} ${this.msg}`);
    }

    clearLine() {
        readline.clearLine(process.stdout, 0);
        readline.cursorTo(process.stdout, 0);
    }
}

module.exports = Spnnr;
