//Started...
window.onload = function() {
    console.log('Started...');

    function isNumber(value) {
        return (value instanceof Number||typeof value === 'number') && !isNaN(value);
      }

    function controlPassportSeries() {
        let passportSeries = 1000;
        return function() {
            return Object.freeze({
                getSeries() {
                    return passportSeries;
                },
                setSeries(value) {
                    if (!isNumber(value)) {
                      throw Error(`Ожидалось число.`);
                    }

                    if (value < 1000 ||value > 9999) {
                        throw Error(`Значение должно быть в диапазоне 1000 - 9999.`);
                    }

                    passportSeries = value;

                }
            })
        }

    }

    let cps = controlPassportSeries()();

//ТЕСТЫ -- 1 часть
//проверяются отдельно друг от друга
//под каждым тестом приведено ожидаемое значение

//для первых трех тестов в коде использовалась конструкция
//такая как : throw Error(`..............`);

    //this.console.dir(cps.setSeries('1001')); 
        //Uncaught Error: Ожидалось число.
    // this.console.dir(cps.setSeries(999)); 
        //Uncaught Error: Значение должно быть в диапазоне 1000 - 9999.
    //this.console.dir(cps.setSeries(10000)); 
        //Uncaught Error: Значение должно быть в диапазоне 1000 - 9999.

//ТЕСТЫ -- 2 часть
//можно проверять все вместе 
//под каждым тестом приведено ожидаемое значение

    console.dir(cps.getSeries()); 
        //1000
    cps.setSeries(1234); 
    console.dir(cps.getSeries()); 
        //1234

    cps.getSeries = function() {
      return `Метод getSeries() перезаписан!`
    }    
    console.dir(cps.getSeries());
        //1234 

    cps.setSeries = function(value) {
      return `Метод setSeries() перезаписан!`
    }    
    cps.setSeries(5678);
    console.dir(cps.getSeries()); 
        //5678 
};
