class Worker{
    static count = 0;
    
    constructor(options){
        // this._age = options.age;
        this.age = options.age;
        Worker.count++;
    }

    set age(value){
        if (value >= 18 && value < 65){
            this._age = value;
        } else {
            console.log('NO!');
        }
    }

    get age(){
        return this._age;
    }
}

// console.log(typeof Worker);
//console.dir(Worker);

const ivan = new Worker({
    age: 65
});
console.dir(ivan);
console.log(ivan.age);

// Worker.count = 5;
console.dir(Worker);
