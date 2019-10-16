class Header {
    constructor (h1, h2) {
        this.h1 = h1;
        this.h2 = h2;
    }

    render (elem) {
        console.log(elem);
    }

    static hello (a) {
        console.log('Hello' + a);
    }
}

const header = new Header('one', 'two');

class Header2 extends Header {
    constructor (h1, h2, hero) {
        super (h1, h2);
        this._hero = hero;
        // this.hero = hero;
    }

    get hero () {
        return this._hero;
    }

    set hero (value) {
        if (value < 65) {
            this._hero = value;
        } else {
            console.log('Ограничение по возрасту!');
        }
    }
}

const header2 = new Header2('one', 'two', 67);

console.log(header2.hero);