



function formatString(input: string, toUpper: boolean = true): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
  }
  

  console.log(formatString("Hello"));          
  console.log(formatString("Hello", true));    
  console.log(formatString("Hello", false));   

  
  



  

function filterByRating(items:{title:string; rating:number}[]):{
  title: string;
  rating: number;
}[] {
  return items.filter(item => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];

filterByRating(books); 
console.log(filterByRating(books));
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]








function concatenateArrays<T>(...arrays:T[][]): T[] {
  return arrays.flat();
}

// concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
// concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]
console.log(concatenateArrays([1, 2], [3, 4], [5]));
console.log(concatenateArrays(["a", "b"], ["c"]));








class Vehicle{
  private make: string ;
 private year: number;

 constructor(make: string, year:number){
    this.make = make;
    this.year = year;

 }

 public getInfo():string {
  return `Make: ${this.make}, Year:${this.year}`;

 }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
  }

  /**
   * getModel
   */
  public getModel(): string {
      return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());






function processValue(value:string |number):number{
  if(typeof value ==='string'){
      return value.length;

  }else{
      return value * 2;

  }
}

console.log(processValue("Hello")); // Output: 5
console.log(processValue(10));    // Output: 20





interface Product{
  name:string;
  price:number;
}

function getMostExpensiveProduct(products:Product[]):Product | null{
  if(products.length === 0){
      return null;
  }
  let mostExpensive = products[0];
  for(let i = 1; i < products.length; i++){
      if(products[i].price > mostExpensive.price){
          mostExpensive = products[i];
      }
  }
  return mostExpensive;
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];

getMostExpensiveProduct(products);  
// Output: { name: "Bag", price: 50 }

console.log(getMostExpensiveProduct(products));










enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day:Day):string{
  if(day ===Day.Saturday || day === Day.Sunday){
      return "Weekend";
  }else{
      return "Weekday";
  }
}

  console.log(getDayType(Day.Monday)); // Output: Weekday
  console.log(getDayType(Day.Saturday)); // Output: Weekend







  

async function squareAsync(n:number):Promise<number>{
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          if(n<0){
              reject(new Error("Negative number not allowed"));
          }else{
              resolve(n*n);
          }
      },1000);
  })
  
}



squareAsync(4).then(console.log);        // Output after 1s: 16


squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed
