
let x: number = 4
console.log(x);

function greeting  (FirstName : string){
    console.log("Namaste " + FirstName)
}
greeting("hahaha") 

function Sum (b: number,a: number): number{
return a + b 
}
let o = Sum(5,7);
console.log(o)


function isLeagal ( age: number ) {
    if (age > 18)
        {return true }
    else
        { return false}
}
console.log(isLeagal(42))



function delayed (fn: ()=>void){

    setTimeout(fn,1000)

}

delayed( function send (){
    console.log("hello")
})

root dir out dir 


    function greet  (user: {
        name: string,
        age: number
    }) {
    console.log("hi" + user.name)
    }

    greet({
        name:"prashant",
        age: 77
    })
    interface  Address {
     
            city: string,
            country: string,
            pincode: number
        
    }

    interface User {
        name: string,
        age : number,
        address: Address
    }

    interface Office {
        address: Address
    }

    // let user2: User ={
    //     name : "keerti",
    //     age:342
    // }

    let user: User ={
        name: "Prashant",
        age: 88,
        address:{
            city: "Tinsukia",
            country: "India",
            pincode: 786126
        }
    } 


    function isLegal (user: User ): boolean{
     if(user.age >= 18){
        return true
     }else {
        return false
     }
         
    }

     const ans = isLegal(user);
     if (ans) {
        console.log("i am legal")
        } else {
            console.log("i am illlegal")
            }
      
    interface People {
        name: string ,
        age: number ,
        // greet : ()=> string , // input that return string as output //
    }

    let person:  People = {
        name : "Prashant",
        age  : 77,
        greet ( )  {
             return "hi  how you "  
      }
    }
    
    class Manager implements People {
        name : string;
        age : number;

        constructor (name:string, age:number) {
            this.name = name;
            this.age = age;
        }

    }
  