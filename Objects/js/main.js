const person1={
   name:'Tomas',
   age:37,
   language:'english',
   profession:'System Adminisitrator'
}
const person2={
   name:'Lena',
   age:26,
   language:'german',
   profession:{
    name:'Back-end Developer',
    experience_Year:5,
    projects:35
   }
}
const person3={
   name:'Sophia',
   age:32,
   language:'french',
   profession:{
   name: 'Front-end Developer',
   experience_Year:6,
   projects:35
   }
}
const person4=person2;

// console.log(person1===person2);
// console.log(person4===person2);
// // console.log(person2.language===person3.language);//false

// function printpersonObj(person) {
//     person.language='french';
//     console.log(`Name: ${person.name},  Age: ${person.age},  Language: ${person.language}, Profession: ${person.profession.name}, `)
// }
// printpersonObj(person2);



function deepEqual(obj1,obj2) {
    if (obj1===obj2) {
        return true;
    }
    else if ((typeof obj1=='object' && obj1!=null) && (typeof obj2=='object' && obj2!=null)) {
        if (Object.keys(obj1).length!==Object.keys(obj2).length) {
            return false;
        } 
    }
   
    for (const key in obj1) {
       if (obj2.hasOwnProperty(key)) {
         if (!deepEqual(obj1[[key],obj2[key]])) {
            return false
           }
       }
       else{
        return false;
       }
       
    }
      return true;
    
}

console.log(deepEqual(person1,9));