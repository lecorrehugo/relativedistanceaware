
//     let counter = 0; 


// setInterval(() => {

//     counter++;
//     document.body.classList.add("style-" + counter);

//     if (counter === 1) {
//         console.log("ETAPE 1");
    

//     }


//     if (counter === 2) {
//         console.log("ETAPE 2");
    

//     }

//     if (counter === 3) {
//         console.log("ETAPE 3");

//         document.body.removeAttribute("class");
//         counter = 0;
        

//     }
//     if (counter === 4) {
//         console.log("ETAPE 4");

//     }
//     console.log(counter);

// }, 2000);


let counter = 0; 
let wait = 15000;

let IDTimeout;
let isRuning = true;
update();


function update() {
    counter++;
    // document.body.classList.add("style-" + counter);

    if (counter === 1) {
    document.querySelector(".wrapper0").style.display = "flex";
    document.querySelector(".wrapper1").style.display = "none";
    document.querySelector(".wrapper2").style.display = "none";
    document.querySelector(".wrapper3").style.display = "none";
    document.querySelector(".wrapper4").style.display = "none";
    document.querySelector(".wrapper5").style.display = "none";
    document.querySelector(".wrapper6").style.display = "none";
    document.querySelector(".wrapper7").style.display = "none";
    document.querySelector(".wrapper8").style.display = "none";
    document.querySelector(".wrapper9").style.display = "none";
    document.querySelector(".wrapper10").style.display = "none";
    document.querySelector(".wrapper11").style.display = "none";
    document.querySelector(".wrapper12").style.display = "none";
    document.querySelector(".wrapper13").style.display = "none";
    document.querySelector(".wrapper14").style.display = "none";
    document.querySelector(".wrapper15").style.display = "none";


    wait = 15000;

    console.log("ETAPE 1");


    }
    if (counter === 2) {
        document.querySelector(".wrapper0").style.display = "none";
        document.querySelector(".wrapper1").style.display = "flex";
        document.querySelector(".wrapper2").style.display = "none";
        document.querySelector(".wrapper3").style.display = "none";
        document.querySelector(".wrapper4").style.display = "none";
        document.querySelector(".wrapper5").style.display = "none";
        document.querySelector(".wrapper6").style.display = "none";
        document.querySelector(".wrapper7").style.display = "none";
        document.querySelector(".wrapper8").style.display = "none";
        document.querySelector(".wrapper9").style.display = "none";
        document.querySelector(".wrapper10").style.display = "none";
        document.querySelector(".wrapper11").style.display = "none";
        document.querySelector(".wrapper12").style.display = "none";
        document.querySelector(".wrapper13").style.display = "none";
        document.querySelector(".wrapper14").style.display = "none";
        document.querySelector(".wrapper15").style.display = "none";
    
       
       
        console.log("ETAPE 2");
        wait = 15000;


    }

    if (counter === 3) {
        document.querySelector(".wrapper0").style.display = "none";
        document.querySelector(".wrapper1").style.display = "none";
        document.querySelector(".wrapper2").style.display = "flex";
        document.querySelector(".wrapper3").style.display = "none";
        document.querySelector(".wrapper4").style.display = "none";
        document.querySelector(".wrapper5").style.display = "none";
        document.querySelector(".wrapper6").style.display = "none";
        document.querySelector(".wrapper7").style.display = "none";
        document.querySelector(".wrapper8").style.display = "none";
        document.querySelector(".wrapper9").style.display = "none";
        document.querySelector(".wrapper10").style.display = "none";
        document.querySelector(".wrapper11").style.display = "none";
        document.querySelector(".wrapper12").style.display = "none";
        document.querySelector(".wrapper13").style.display = "none";
        document.querySelector(".wrapper14").style.display = "none";
        document.querySelector(".wrapper15").style.display = "none";
    
        
        
        console.log("ETAPE 3");
     
        wait = 15000;

    }

    if (counter === 4) {
        document.querySelector(".wrapper0").style.display = "none";
        document.querySelector(".wrapper1").style.display = "none";
        document.querySelector(".wrapper2").style.display = "none";
        document.querySelector(".wrapper3").style.display = "flex";
        document.querySelector(".wrapper4").style.display = "none";
        document.querySelector(".wrapper5").style.display = "none";
        document.querySelector(".wrapper6").style.display = "none";
        document.querySelector(".wrapper7").style.display = "none";
        document.querySelector(".wrapper8").style.display = "none";
        document.querySelector(".wrapper9").style.display = "none";
        document.querySelector(".wrapper10").style.display = "none";
        document.querySelector(".wrapper11").style.display = "none";
        document.querySelector(".wrapper12").style.display = "none";
        document.querySelector(".wrapper13").style.display = "none";
        document.querySelector(".wrapper14").style.display = "none";
        document.querySelector(".wrapper15").style.display = "none";
    
       
        console.log("ETAPE 4");
        wait = 16000;


    }

    
    if (counter === 5) {
        document.querySelector(".wrapper0").style.display = "none";
        document.querySelector(".wrapper1").style.display = "none";
        document.querySelector(".wrapper2").style.display = "none";
        document.querySelector(".wrapper3").style.display = "none";
        document.querySelector(".wrapper4").style.display = "flex";
        document.querySelector(".wrapper5").style.display = "none";
        document.querySelector(".wrapper6").style.display = "none";
        document.querySelector(".wrapper7").style.display = "none";
        document.querySelector(".wrapper8").style.display = "none";
        document.querySelector(".wrapper9").style.display = "none";
        document.querySelector(".wrapper10").style.display = "none";
        document.querySelector(".wrapper11").style.display = "none";
        document.querySelector(".wrapper12").style.display = "none";
        document.querySelector(".wrapper13").style.display = "none";
        document.querySelector(".wrapper14").style.display = "none";
        document.querySelector(".wrapper15").style.display = "none";
    

        wait = 15000;
        console.log("ETAPE 5");

    }

    if (counter === 6) {
        document.querySelector(".wrapper0").style.display = "none";
        document.querySelector(".wrapper1").style.display = "none";
        document.querySelector(".wrapper2").style.display = "none";
        document.querySelector(".wrapper3").style.display = "none";
        document.querySelector(".wrapper4").style.display = "none";
        document.querySelector(".wrapper5").style.display = "flex";
        document.querySelector(".wrapper6").style.display = "none";
        document.querySelector(".wrapper7").style.display = "none";
        document.querySelector(".wrapper8").style.display = "none";
        document.querySelector(".wrapper9").style.display = "none";
        document.querySelector(".wrapper10").style.display = "none";
        document.querySelector(".wrapper11").style.display = "none";
        document.querySelector(".wrapper12").style.display = "none";
        document.querySelector(".wrapper13").style.display = "none";
        document.querySelector(".wrapper14").style.display = "none";
        document.querySelector(".wrapper15").style.display = "none";
    

        console.log("ETAPE 6");
        wait = 15000;



    }

    if (counter === 7) {
        document.querySelector(".wrapper0").style.display = "none";
        document.querySelector(".wrapper1").style.display = "none";
        document.querySelector(".wrapper2").style.display = "none";
        document.querySelector(".wrapper3").style.display = "none";
        document.querySelector(".wrapper4").style.display = "none";
        document.querySelector(".wrapper5").style.display = "none";
        document.querySelector(".wrapper6").style.display = "flex";
        document.querySelector(".wrapper7").style.display = "none";
        document.querySelector(".wrapper8").style.display = "none";
        document.querySelector(".wrapper9").style.display = "none";
        document.querySelector(".wrapper10").style.display = "none";
        document.querySelector(".wrapper11").style.display = "none";
        document.querySelector(".wrapper12").style.display = "none";
        document.querySelector(".wrapper13").style.display = "none";
        document.querySelector(".wrapper14").style.display = "none";
        document.querySelector(".wrapper15").style.display = "none";
    


       
        console.log("ETAPE 7");
        wait = 15000;
     

    }
    if (counter === 8) {
        document.querySelector(".wrapper0").style.display = "none";
        document.querySelector(".wrapper1").style.display = "none";
        document.querySelector(".wrapper2").style.display = "none";
        document.querySelector(".wrapper3").style.display = "none";
        document.querySelector(".wrapper4").style.display = "none";
        document.querySelector(".wrapper5").style.display = "none";
        document.querySelector(".wrapper6").style.display = "none";
        document.querySelector(".wrapper7").style.display = "flex";
        document.querySelector(".wrapper8").style.display = "none";
        document.querySelector(".wrapper9").style.display = "none";
        document.querySelector(".wrapper10").style.display = "none";
        document.querySelector(".wrapper11").style.display = "none";
        document.querySelector(".wrapper12").style.display = "none";
        document.querySelector(".wrapper13").style.display = "none";
        document.querySelector(".wrapper14").style.display = "none";
        document.querySelector(".wrapper15").style.display = "none";
    


       
        console.log("ETAPE 8");
        wait = 15000;


        
    }


    if (counter === 9) {
        document.querySelector(".wrapper0").style.display = "none";
        document.querySelector(".wrapper1").style.display = "none";
        document.querySelector(".wrapper2").style.display = "none";
        document.querySelector(".wrapper3").style.display = "none";
        document.querySelector(".wrapper4").style.display = "none";
        document.querySelector(".wrapper5").style.display = "none";
        document.querySelector(".wrapper6").style.display = "none";
        document.querySelector(".wrapper7").style.display = "none";
        document.querySelector(".wrapper8").style.display = "flex";
        document.querySelector(".wrapper9").style.display = "none";
        document.querySelector(".wrapper10").style.display = "none";
        document.querySelector(".wrapper11").style.display = "none";
        document.querySelector(".wrapper12").style.display = "none";
        document.querySelector(".wrapper13").style.display = "none";
        document.querySelector(".wrapper14").style.display = "none";
        document.querySelector(".wrapper15").style.display = "none";
    


       
        console.log("ETAPE 9");
        wait = 15000;

    }

    if (counter === 10) {
        document.querySelector(".wrapper0").style.display = "none";
        document.querySelector(".wrapper1").style.display = "none";
        document.querySelector(".wrapper2").style.display = "none";
        document.querySelector(".wrapper3").style.display = "none";
        document.querySelector(".wrapper4").style.display = "none";
        document.querySelector(".wrapper5").style.display = "none";
        document.querySelector(".wrapper6").style.display = "none";
        document.querySelector(".wrapper7").style.display = "none";
        document.querySelector(".wrapper8").style.display = "none";
        document.querySelector(".wrapper9").style.display = "flex";
        document.querySelector(".wrapper10").style.display = "none";
        document.querySelector(".wrapper11").style.display = "none";
        document.querySelector(".wrapper12").style.display = "none";
        document.querySelector(".wrapper13").style.display = "none";
        document.querySelector(".wrapper14").style.display = "none";
        document.querySelector(".wrapper15").style.display = "none";
    


       
        console.log("ETAPE 10");
        wait = 15000;

    }

    if (counter === 11) {
        document.querySelector(".wrapper0").style.display = "none";
        document.querySelector(".wrapper1").style.display = "none";
        document.querySelector(".wrapper2").style.display = "none";
        document.querySelector(".wrapper3").style.display = "none";
        document.querySelector(".wrapper4").style.display = "none";
        document.querySelector(".wrapper5").style.display = "none";
        document.querySelector(".wrapper6").style.display = "none";
        document.querySelector(".wrapper7").style.display = "none";
        document.querySelector(".wrapper8").style.display = "none";
        document.querySelector(".wrapper9").style.display = "none";
        document.querySelector(".wrapper10").style.display = "flex";
        document.querySelector(".wrapper11").style.display = "none";
        document.querySelector(".wrapper12").style.display = "none";
        document.querySelector(".wrapper13").style.display = "none";
        document.querySelector(".wrapper14").style.display = "none";
        document.querySelector(".wrapper15").style.display = "none";



       
        console.log("ETAPE 11");
        wait = 15000;

    }


    if (counter === 12) {
        document.querySelector(".wrapper0").style.display = "none";
        document.querySelector(".wrapper1").style.display = "none";
        document.querySelector(".wrapper2").style.display = "none";
        document.querySelector(".wrapper3").style.display = "none";
        document.querySelector(".wrapper4").style.display = "none";
        document.querySelector(".wrapper5").style.display = "none";
        document.querySelector(".wrapper6").style.display = "none";
        document.querySelector(".wrapper7").style.display = "none";
        document.querySelector(".wrapper8").style.display = "none";
        document.querySelector(".wrapper9").style.display = "none";
        document.querySelector(".wrapper10").style.display = "none";
        document.querySelector(".wrapper11").style.display = "flex";
        document.querySelector(".wrapper12").style.display = "none";
        document.querySelector(".wrapper13").style.display = "none";
        document.querySelector(".wrapper14").style.display = "none";
        document.querySelector(".wrapper15").style.display = "none";




       
        console.log("ETAPE 12");
        wait = 15000;

    }

    if (counter === 13) {
        document.querySelector(".wrapper0").style.display = "none";
        document.querySelector(".wrapper1").style.display = "none";
        document.querySelector(".wrapper2").style.display = "none";
        document.querySelector(".wrapper3").style.display = "none";
        document.querySelector(".wrapper4").style.display = "none";
        document.querySelector(".wrapper5").style.display = "none";
        document.querySelector(".wrapper6").style.display = "none";
        document.querySelector(".wrapper7").style.display = "none";
        document.querySelector(".wrapper8").style.display = "none";
        document.querySelector(".wrapper9").style.display = "none";
        document.querySelector(".wrapper10").style.display = "none";
        document.querySelector(".wrapper11").style.display = "none";
        document.querySelector(".wrapper12").style.display = "flex";
        document.querySelector(".wrapper13").style.display = "none";
        document.querySelector(".wrapper14").style.display = "none";
        document.querySelector(".wrapper15").style.display = "none";



       
        console.log("ETAPE 13");
        wait = 15000;

    }

    if (counter === 14) {
        document.querySelector(".wrapper0").style.display = "none";
        document.querySelector(".wrapper1").style.display = "none";
        document.querySelector(".wrapper2").style.display = "none";
        document.querySelector(".wrapper3").style.display = "none";
        document.querySelector(".wrapper4").style.display = "none";
        document.querySelector(".wrapper5").style.display = "none";
        document.querySelector(".wrapper6").style.display = "none";
        document.querySelector(".wrapper7").style.display = "none";
        document.querySelector(".wrapper8").style.display = "none";
        document.querySelector(".wrapper9").style.display = "none";
        document.querySelector(".wrapper10").style.display = "none";
        document.querySelector(".wrapper11").style.display = "none";
        document.querySelector(".wrapper12").style.display = "none";
        document.querySelector(".wrapper13").style.display = "flex";
        document.querySelector(".wrapper14").style.display = "none";
        document.querySelector(".wrapper15").style.display = "none";



       
        console.log("ETAPE 14");
        wait = 15000;

    }
    if (counter === 15) {
        document.querySelector(".wrapper0").style.display = "none";
        document.querySelector(".wrapper1").style.display = "none";
        document.querySelector(".wrapper2").style.display = "none";
        document.querySelector(".wrapper3").style.display = "none";
        document.querySelector(".wrapper4").style.display = "none";
        document.querySelector(".wrapper5").style.display = "none";
        document.querySelector(".wrapper6").style.display = "none";
        document.querySelector(".wrapper7").style.display = "none";
        document.querySelector(".wrapper8").style.display = "none";
        document.querySelector(".wrapper9").style.display = "none";
        document.querySelector(".wrapper10").style.display = "none";
        document.querySelector(".wrapper11").style.display = "none";
        document.querySelector(".wrapper12").style.display = "none";
        document.querySelector(".wrapper13").style.display = "none";
        document.querySelector(".wrapper14").style.display = "flex";
        document.querySelector(".wrapper15").style.display = "none";




       
        console.log("ETAPE 15");
        wait = 15000;

    }
    if (counter === 16) {
        document.querySelector(".wrapper0").style.display = "none";
        document.querySelector(".wrapper1").style.display = "none";
        document.querySelector(".wrapper2").style.display = "none";
        document.querySelector(".wrapper3").style.display = "none";
        document.querySelector(".wrapper4").style.display = "none";
        document.querySelector(".wrapper5").style.display = "none";
        document.querySelector(".wrapper6").style.display = "none";
        document.querySelector(".wrapper7").style.display = "none";
        document.querySelector(".wrapper8").style.display = "none";
        document.querySelector(".wrapper9").style.display = "none";
        document.querySelector(".wrapper10").style.display = "none";
        document.querySelector(".wrapper11").style.display = "none";
        document.querySelector(".wrapper12").style.display = "none";
        document.querySelector(".wrapper13").style.display = "none";
        document.querySelector(".wrapper14").style.display = "none";
        document.querySelector(".wrapper15").style.display = "flex";




       
        console.log("ETAPE 16");
        wait = 15000;
        counter = 0;

    }

    

    console.log(counter);
    IDTimeout = setTimeout(update, wait);
}

document.addEventListener("keydown", function(e){
    console.log(e.key);
    if (e.key == " ") {
        if (isRuning) {
            clearTimeout(IDTimeout);
            isRuning = false;
        } else {
            IDTimeout = setTimeout(update, 0);
            isRuning = true;
        }
    }
});

