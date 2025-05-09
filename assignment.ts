{
//
// problem 1

// function formatString(input: string, toUpper: boolean = true): string{
//     const ToUpper = toUpper ? input.toUpperCase() : input.toLowerCase();
//     return ToUpper;
// };

// console.log(formatString('Hello'));

// Problem 2

// function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
//     const outPut = items.filter(item => item.rating >= 4);
//     return outPut;
// };

// const books = [
//     { title: "Book A", rating: 4.5 },
//     { title: "Book B", rating: 3.2 },
//     { title: "Book B", rating: 6.2 },
//     { title: "Book B", rating: 3.9 },
//     { title: "Book C", rating: 5.0 }
//   ];
  
// console.log(filterByRating(books));

// problem 3 

// function concatenateArrays<T>(...arrays: T[][]): T[]{
//     const singleArray = arrays.flat();
//     return singleArray;
// }

// const x = concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
// const y = concatenateArrays([1, 2], [3, 4], [5],[7,8]);     // Output: [1, 2, 3, 4, 5]

// console.log(y);

// problem 4

// class Vehicle {
//     private _make: string;
//     private _year: number;
  
//     constructor(make: string, year: number) {
//       this._make = make;
//       this._year = year;
//     }
  
//     public getInfo(): string {
//       return `"Make: ${this._make}, Year: ${this._year}"`;
//     }
// };
  
// class Car extends Vehicle {
//     private _model: string;
  
//     constructor(make: string, year: number, model: string) {
//       super(make, year); 
//       this._model = model;
//     }
  
//     public getModel(): string {
//       return `"${this._model}"`;
//     }
// };

// const myCar = new Car("Toyota", 2020, "Corolla");
// const x = myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
// const y = myCar.getModel();  // Output: "Model: Corolla"

// console.log(x);

// problem 5

// function processValue(value: string | number): number{
//     if (typeof value === 'string') {
//         return value.length;
//     }else{
//         return value*2
//     }
// };

// console.log(processValue(10));

// problem 6

// interface Product {
//     name: string;
//     price: number;
//   }
  
// function getMostExpensiveProduct(products: Product[]): Product | null{
//     if (products.length === 0) {
//         return null;
//     }

//     const MostExpensiveProduct = products.reduce((highProduct, lowerProduct)=> 
//         lowerProduct.price > highProduct.price ? lowerProduct : highProduct
//     );
//     return MostExpensiveProduct;
// };

// const products = [
//     { name: "Pen", price: 10 },
//     { name: "Notebook", price: 25 },
//     { name: "Bag", price: 50 }
//   ];
  
// const x = getMostExpensiveProduct(products); 
// console.log(x);
 

// problem 7

// enum Day {
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday
//   }
  
// function getDayType(day: Day): string{
//     if (day === Day.Saturday || day === Day.Sunday) {
//         return "Weekend";
//       } else {
//         return "Weekday";
//       }
// };
// console.log(getDayType(Day.Sunday));

// problem 8

async function squareAsync(n: number): Promise<number>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (n < 0) {
            reject(new Error("Negative number not allowed"));
          } else {
            resolve(n * n);
          }
        }, 1000); // 1 second 
    });
};

squareAsync(4).then(console.log);
// squareAsync(-3).catch(console.error);
//
}