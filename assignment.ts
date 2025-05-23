{

//1

function formatString(input: string, toUpper: boolean = true): string{
    const ToUpper = toUpper ? input.toUpperCase() : input.toLowerCase();
    return ToUpper;
};


//2

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    const outPut = items.filter(item => item.rating >= 4);
    return outPut;
};


//3 

function concatenateArrays<T>(...arrays: T[][]): T[]{
    let result: T[] = [];

    for (const array of arrays) {
    result = result.concat(array);
    }
    return result;
};



//4

class Vehicle {
    private _make: string;
    private _year: number;
  
    constructor(make: string, year: number) {
      this._make = make;
      this._year = year;
    }
  
    public getInfo(): string {
      return `"Make: ${this._make}, Year: ${this._year}"`;
    }
};
  
class Car extends Vehicle {
    private _model: string;
  
    constructor(make: string, year: number, model: string) {
      super(make, year); 
      this._model = model;
    }
  
    public getModel(): string {
      return `"${this._model}"`;
    }
};

const myCar = new Car("Toyota", 2020, "Corolla");
const x = myCar.getInfo();   
const y = myCar.getModel();



//5

function processValue(value: string | number): number{
    if (typeof value === 'string') {
        return value.length;
    }else{
        return value*2;
    }
};



//6

interface Product {
    name: string;
    price: number;
  };
  
function getMostExpensiveProduct(products: Product[]): Product | null{
    if (products.length === 0) {
        return null;
    }

    const MostExpensiveProduct = products.reduce((highProduct, lowerProduct)=> 
        lowerProduct.price > highProduct.price ? lowerProduct : highProduct
    );
    return MostExpensiveProduct;
};

 

//7

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
function getDayType(day: Day): string{
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
      } else {
        return "Weekday";
      }
};



//8

async function squareAsync(n: number): Promise<number>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (n < 0) {
            reject(new Error("Negative number not allowed"));
          } else {
            resolve(n * n);
          }
        }, 1000);
    });
};

// squareAsync(4).then(console.log);
// squareAsync(-3).catch(console.error);

}