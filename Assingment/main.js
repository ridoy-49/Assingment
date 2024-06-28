
//Question 1
/* Dom element----*/
input1=document.getElementById("input1")
input2=document.getElementById("input2")
sumbtn=document.getElementById("sumbtn")
/*Eventlistener--------*/
sumbtn.addEventListener("click", calculateSum)
/*Function-------*/
function calculateSum(){
    let x=Number(input1.value)
    let y=Number(input2.value)
    let sum=x+y
    sumbtn.innerHTML=sum
    sumbtn.classList.remove("btn-primary")
    sumbtn.classList.add("btn-outline-danger")
}


//Question 2
/* Dom element----*/
inputeven=document.getElementById("evenCheck")
checkbtn=document.getElementById("evenCheckbtn")
/*Eventlistener--------*/
checkbtn.addEventListener("click", isEven)
/*Function-------*/
function isEven(){
    let x=parseFloat(inputeven.value)
    let m=x%2
    if(m==0){
        checkbtn.innerHTML="True"
        checkbtn.classList.remove("btn-primary")
        checkbtn.classList.add("btn-outline-danger")
    }
    else if(isNaN(m)){
        checkbtn.innerHTML="Not a Number, Please input a number"
        checkbtn.classList.remove("btn-primary")
        checkbtn.classList.add("btn-outline-danger")
    }
    else{
        checkbtn.innerHTML="False"
        checkbtn.classList.remove("btn-primary")
        checkbtn.classList.add("btn-outline-danger")
    }
}


//Question 3
/* Dom element----*/
inputmax=document.getElementById("FindMax")
maxbtn=document.getElementById("maxbtn")
/*Eventlistener--------*/
maxbtn.addEventListener("click", findMax)
/*Function-------*/
function findMax(){
    const x=inputmax.value
    const a=x.split(" ")
    const m=Math.max(...a)
    if(isNaN(m)){
        maxbtn.innerHTML="Not a Array of Number, Please input only number"
        maxbtn.classList.remove("btn-primary")
        maxbtn.classList.add("btn-outline-danger")
    }
    else{
        maxbtn.innerHTML=m
        maxbtn.classList.remove("btn-primary")
        maxbtn.classList.add("btn-outline-danger")
    }
}


//Question 4
/* Dom element----*/
stringintput=document.getElementById("stringintput")
reversebtn=document.getElementById("reverse")
/*Eventlistener--------*/
reversebtn.addEventListener("click", reverseString)
/*Function-------*/
function reverseString(){
   let x=stringintput.value
   let s=String(x)
   let rev=s.split("").reverse().join("")
    if(s.length==0){
        reversebtn.innerHTML="Your text is Empty"
        reversebtn.classList.remove("btn-primary")
        reversebtn.classList.add("btn-outline-danger")
    }
    else{
        reversebtn.innerHTML=rev
        reversebtn.classList.remove("btn-primary")
        reversebtn.classList.add("btn-outline-danger")
    }
}
//Question 5
/* Dom element----*/
oddintput=document.getElementById("Filterodd")
oddbtn=document.getElementById("oddbtn")
/*Eventlistener--------*/
oddbtn.addEventListener("click", filterOddNumbers)
/*Function-------*/
function filterOddNumbers(){
    let oddoutputall=[]
    let x=oddintput.value.split(" ")
    v=x.map(Number)
    console.log(v)
    if (v.includes(NaN)) {
        oddbtn.innerHTML="Not a Array of Number, Please input only number"
        }
        else{
            v.forEach(numbers => {
                if (Number(numbers)%2!==0){
                    oddoutputall.push(numbers)
                   }
            });
            if(oddoutputall.length==0){
                oddbtn.innerHTML="There is no odd number in your array"
            }
            else{
                oddbtn.innerHTML=oddoutputall
            }
        }
        oddbtn.classList.remove("btn-primary")
        oddbtn.classList.add("btn-outline-danger")
    }

//Question 6
/* Dom element----*/
sumintput=document.getElementById("sumint")
sumbtn1=document.getElementById("sumbtn1")
/*Eventlistener--------*/
sumbtn1.addEventListener("click", sumArray)
/*Function-------*/
function sumArray(){
    let x=sumintput.value.split(" ")
    let v=x.map(Number)
    Sum=""
    if (v.includes(NaN)){
        sumbtn1.innerHTML="Not a Array of Number, Please input only number"
        sumbtn1.classList.remove("btn-primary")
        sumbtn1.classList.add("btn-outline-danger")
    }
    else{
        v.forEach(value=>{
            Sum=Number(Sum)+Number(value)
        })
        sumbtn1.innerHTML=Sum
        sumbtn1.classList.remove("btn-primary")
        sumbtn1.classList.add("btn-outline-danger")
    }
}

//Question 7
/* Dom element----*/
sortinput=document.getElementById("sortinput")
sortbtn=document.getElementById("sortbtn")
/*Eventlistener--------*/
sortbtn.addEventListener("click", sortArray)
/*Function-------*/
function sortArray(){
    let x=sortinput.value.split(" ")
    let v=x.map(Number)
    console.log(v)
    if (v.includes(NaN)){
        sortbtn.innerHTML="Not a Array of Number, Please input only number"
        sortbtn.classList.remove("btn-primary")
        sortbtn.classList.add("btn-outline-danger")
    }
    else{
        v.sort(function(a,b){return(a-b)})
        sortbtn.innerHTML=v
        sortbtn.classList.remove("btn-primary")
        sortbtn.classList.add("btn-outline-danger")
    }
}
//Question 8
/* Dom element----*/
capital=document.getElementById("capital")
capitalbtn=document.getElementById("capitalbtn")
/*Eventlistener--------*/
capitalbtn.addEventListener("click", capitalizeFirstLetter)
/*Function-------*/
function capitalizeFirstLetter(){
    x=capital.value
    v=x.toString()
    console.log(v)
    if(v.trim().length==0){
        capitalbtn.innerHTML="Your input is Empty"
    }
    else{capitalized=v.charAt(0).toUpperCase()+v.slice(1)
        capitalbtn.innerHTML=capitalized
        }
        capitalbtn.classList.remove("btn-primary")
        capitalbtn.classList.add("btn-outline-danger")
}