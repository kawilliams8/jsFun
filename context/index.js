const context = {
  exerciseA() {
    const fly = () => {
      console.log(this);
    };

    class SpaceProbe {
      constructor(title, classification) {
        this.title = title;
        this.classification = classification;
        this.fly = fly;
      }
    }

    const ship = new SpaceProbe('voyager', 'classy');


    // What is the value of `this` when we call ship.fly()?
    const result = 'global window object';
    return result;

    // Annotation:
    // The context in lines 3 and 4 is set to the GWO when the arrow function is declared, and NOT updated when it is invoked
    // It doesn't matter that we are calling it as a method on an object, because invocation doesn't change it
    // It doesn't matter that we are using the new keyword, again because it is an arrow function
  },

  exerciseB() {
    function fn() {
      const value = 2;
      return this.value;
    }

    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation:
    // The context is set to the GWO when fn is invoked
    // What happens inside will not return correctly (2), depending on if it has a 'value' prop or not
  },

  exerciseC() {
    const car = {
      make: 'Tesla',
      getInfo: function () {
        console.log(this);
      }
    };

    const el = document.getElementById('btn');
    el.addEventListener('click', car.getInfo);

    // What is the value of `this` when a user clicks on our element and car.getInfo() is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    // Functions added with addEventListener will reference the bound ELEMENT as 'this', not the function or object
  },

  exerciseD() {
    const dog = {
      breed: 'Chihuahua',
      getBreed: function () {

        const innerFunction = function () {
          console.log(this.breed);
        };

        return innerFunction;
      }
    };

    var breed = dog.getBreed();

    // What is the value of `this` when we call breed()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // 
  },

  exerciseE() {

    const fn = () => {
      value = 21;
      return this.value;
    };


    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // An arrow function in the highest scope will never be reset from GWO
  },

  exerciseF() {
    class Hero {
      constructor(name, power, canFly = false) {
        this.name = name;
        this.power = power;
        this.canFly = canFly;
      }

      identifyHero() {
        return this;
      }
    }

    const storm = new Hero('Ororo', 'weather control', true);

    // What is the value of `this` when we call storm.identifyHero()?
    const result = 'instance of Hero';
    return result;

    // Annotation: 
    // 
  },

  exerciseG() {
    class Game {
      constructor(title) {
        this.title = title;
      }

      resetGame() {
        console.log('Clearing the board and starting over');
      }

      restart() {
        setTimeout(function () {
          console.log(`Restarting ${this.title}...`);
        }, 1000);
      }
    }

    const monopoly = new Game('Monopoly');


    // What is the value of `this` when we call monopoly.restart()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // Has something to do with the invocation on line 135 resetting the context
    // ES5 function
  },

  exerciseH() {
    const obj = {
      arrowFunction: null,
      method: function () {
        this.arrowFunction = () => {
          return this;
        };
      }
    };

    obj.method();

    // What is the value of `this` when we call obj.arrowFunction()?
    const result = 'obj';
    return result;

    // Annotation: 
    // The arrow function on 157 inherits from the regular function on 156
    // 156 'this' is set when it is invoked, and inherits from the object it is called on
  },

  exerciseI() {
    const poets = [{
      name: 'Sappho'
    }, {
      name: 'Maya'
    }, {
      name: 'Emily'
    }, {
      name: 'Audre'
    }];

    poets.map(function (poet) {
      return this;
    }, poets);

    // What is the value of `this` that gets returned on each iteration of poets.map()?
    const result = 'poets';
    return result;

    // Annotation: 
    // A .map() can take in an optional 'this', which is poets here
  },

  exerciseJ() {
    const el = $('#btn');
    el.on('click', function () {
      console.log($(this));
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    // Functions added with addEventListener will reference the bound ELEMENT as 'this', not the function or object
  },

  exerciseK() {
    var store = {
      fruit: 'grapes',
      sellMe: function () {
        return this.fruit;
      }
    };

    // What is the value of `this` when we call store.sellMe()?
    const result = 'store';
    return result;

    // Annotation: 
    // Calling an ES5 style function on an obj, so 'this' is set at invocation to be that object
  },

  exerciseL() {
    const dog = {
      breed: 'Chihuahua',
      getBreed: function () {
        var _this = this;

        setTimeout(function () {
          console.log('Your dog is a ' + _this.breed);
        });
      }
    };

    // What is the value of `this` when we call dog.getBreed()?
    const result = 'dog';
    return result;

    // Annotation: 
    // getBreed is an ES5 style function, so 'this' is set when it is invoked
    // it is set to the object the function is called on, or 'dog'
  },

  exerciseM() {
    const robert = {
      name: 'Bobo',
      occupation: 'instructor'
    };

    const william = {
      name: 'will',
      occupation: 'instructor'
    };

    function makeBirdNoise() {
      console.log('My name is ' + this.name + ' ... caw! caw!');
    }

    // What is the value of `this` when we call makeBirdNoise.call(robert);
    const result = 'robert';
    return result;

    // Annotation: 
    // makeBirdNoise is the function, which is being called on the argument for 'this'
  },

  exerciseN() {
    class Bird {
      constructor(name, species) {
        this.name = name;
        this.species = species;
      }

      delayNoise() {
        setTimeout(this.makeNoise.bind(this), 1000);
      }

      makeNoise() {
        console.log('caw, caw');
      }
    }

    var firstBird = new Bird('Calvin', 'budgie');

    // What is the value of `this` when we call firstBird.delayNoise();
    const result = 'instance of Bird';
    return result;

    // Annotation: 
    // firstBird is an instance of Bird
    // delayNoise is an ES5 style function, so this is set when the function is called
  },

  exerciseO() {
    // const button = document.querySelector('#submit');

    // button.addEventListener('click', () => {
    console.log(this);
    // this.classList.toggle('on');
    // });

    // What is the value of `this` when a user clicks on our button element and the callback is triggered?
    const result = 'global window object';
    return result;

    // Annotation: 
    // Event listeners need an ES5 function so their context is updated whenever they're invoked.
  },

  exerciseP() {
    const child = {
      totalScreams: 4,
      scream: () => {
        this.totalScreams++;
      }
    };

    const result = 'global window object';
    return result;

    // What is the value of `this` when we call child.scream();
    // Annotation: 
    // 
  }
};

module.exports = context;