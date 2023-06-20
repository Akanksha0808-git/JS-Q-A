//Q5

function Display(){

    let time =new Date();
    let hr = time.toLocaleTimeString();
    console.log(hr);

    setInterval(()=>{
        Display();
    },1000);


}
Display();

