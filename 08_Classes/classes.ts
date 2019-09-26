class Vehicle {
  //   public drive(): void {
  //     console.log("chugaa chugga");
  //   }
  private hi(): void {
      console.log('hi')
  }

  public honk(): void {
    console.log("beep");
  }

  protected hello(): void: {
      console.log("dasdsa")
  }
}

class Car extends Vehicle {
  // we can override it
  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.hi(); // private이라 호출안됨 하지만 private --> protected의 경우 가능함
    this.hello(); // protected 는 가능
  }
}

const car = new Car();
car.drive(); //private
car.honk();
car.startDrivingProcess();
// 동작한다 왜냐하면 private은 오직 해당 class에 속하는 method로만 호출가능하기때문에

// Fields in classes
class VehicleThing {
    // color: string;    
    // constructor(color: string) {
    //     this.color = color;
    // }

    constructor(public color: string) {
        this.color = color;
    }

}

const vehicleThing = new VehicleThing('orange');
console.log(vehicleThing.color)

// Fields with inheritance

class Beverage {
    constructor(public color: string) {}

    protected honk(): void {
        console.log('beep');
    }
}

class Juice extends Beverage {
    constructor(public taste: string,  color: string) {
        super(color);
    } 

    starting(): void {
        this.honk();
    }
}

const orange = new Juice('4', 'blue');
orange.starting();