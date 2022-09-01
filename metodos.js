let times = () => {
    return "Oi Pessoas, eu sou JS";
}

let div = document.getElementById("demo");

setTimeout( ()=> {
    //console.log(times());
    div.innerHTML = times()
},2000 );