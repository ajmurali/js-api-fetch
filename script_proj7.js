const button=document.getElementById('btn');
console.log(button);

let a=document.getElementById('btn').addEventListener("click", myfunc)

// const myfunc= () =>{
//     alert("hello...")
// }
function myfunc(){
    let b=Math.ceil(Math.random()*83);
    // alert(b)
    if(b<=83){
        const linkk='https://swapi.dev/api/people/'
        const fet = fetch(linkk + b)
           fet.then(response => response.json())
           .then(data => {
            console.log(data)
            const {name,height, gender}=data;
            console.log(name,height,gender)

          let name1= document.getElementById('name')
          name1.innerText=name;

          let height1= document.getElementById('height')
          height1.innerText=height;

          let gender1= document.getElementById('gender')
          gender1.innerText=gender;
          

           })

        // async function fetchjs() {
        //     let response = await fetch('https://swapi.dev/api/people/'+b);
        //     let data = await response.json();
        //     console.log(data);
        //     const {name, gender}=data;
        //     console.log(name,gender)
        // }
        // fetchjs();
    }
    else {
        alert("Character Exceeded....Try again...!!!")
 } 


}
