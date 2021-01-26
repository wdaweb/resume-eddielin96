// 拜託timeZone 一定要注意這該死的大小寫 好幾次錯都是因為Z沒有大寫
//clock1
const now = new Date();
const valM = now.getMinutes(), valS = now.getSeconds(), valH = now.getHours();
// console.log(valH,valM,valS); //13 52 39

const degS = valS * 6; //360度/60S => 6度/S (可算入MS帶來的偏移量)
const degM = valM * 6 + valS * 0.1; //360度/60M => 6度/M && 6度/60S => 0.1度/S(S影響的偏移量)
const degH = valH * 30 + valM * 0.5; //360度/12H=> 30度/H && 30度/60M => 0.5度/1M (M影響的偏移量) && 0.008333333333333333/s(S偏移量)



onload=()=>{
    const domH = document.querySelector(".hr");
  const domM = document.querySelector(".min");
  const domS = document.querySelector(".sec");
  // console.log(domH,domM,domS);
  domH.style.transform = `rotate(${degH}deg`;
  domM.style.transform = `rotate(${degM}deg`;
  domS.style.transform = `rotate(${degS}deg`;

  setInterval(function () {
    const now = new Date();
    const valM = now.getMinutes(), valS = now.getSeconds(), valH = now.getHours();
    const degS = valS * 6; //360度/60S => 6度/S (可算入MS帶來的偏移量)
    const degM = valM * 6 + valS * 0.1; //360度/60M => 6度/M && 6度/60S => 0.1度/S(S影響的偏移量)
    const degH = valH * 30 + valM * 0.5; //360度/12H=> 30度/H && 30度/60M => 0.5度/1M (M影響的偏移量) && 0.008333333333333333/s(S偏移量)
    domH.style.transform = `rotate(${degH}deg`;
    domM.style.transform = `rotate(${degM}deg`;
    domS.style.transform = `rotate(${degS}deg`;
  }, 1000);




    let taipei=()=>{
        setTimeout(taipei,3000);
        let time = new Date().toLocaleString('en-us',{timeZone:'Asia/Taipei', hour12: false })
        let tp = time.split(",").pop().split(":")
        
        //取十位數
        let h1 = Math.floor(tp[0]/10)
        let m1 = Math.floor(tp[1]/10)
        // let s1 = Math.floor(tp[2]/10)

        //取個位數
        let h2 = tp[0]%10
        let m2 = tp[1]%10
        // const s2 = tp[2]%10

        document.getElementById("th1").className = "c"+h1;
        document.getElementById("th2").className = "c"+h2;
        document.getElementById("tm1").className = "c"+m1;
        document.getElementById("tm2").className = "c"+m2;
    }

    const baku=()=>{
        setTimeout(baku,3000);
        const time = new Date().toLocaleString('en-us',{timeZone:'Asia/Baku', hour12: false })
        const tp = time.split(",").pop().split(":")
        
        //取十位數
        const h1 = Math.floor(tp[0]/10)
        const m1 = Math.floor(tp[1]/10)
        // const s1 = Math.floor(tp[2]/10)

        //取個位數
        const h2 = tp[0]%10
        const m2 = tp[1]%10
        // const s2 = tp[2]%10

        document.getElementById("bh1").className = "c"+h1;
        document.getElementById("bh2").className = "c"+h2;
        document.getElementById("bm1").className = "c"+m1;
        document.getElementById("bm2").className = "c"+m2;
    }

    const tokyo=()=>{
        setTimeout(tokyo,3000);
        const time = new Date().toLocaleString('en-us',{timeZone:'Asia/Tokyo', hour12: false })
        const tp = time.split(",").pop().split(":")
        
        //取十位數
        const h1 = Math.floor(tp[0]/10)
        const m1 = Math.floor(tp[1]/10)
        // const s1 = Math.floor(tp[2]/10)

        //取個位數
        const h2 = tp[0]%10
        const m2 = tp[1]%10
        // const s2 = tp[2]%10

        document.getElementById("jh1").className = "c"+h1;
        document.getElementById("jh2").className = "c"+h2;
        document.getElementById("jm1").className = "c"+m1;
        document.getElementById("jm2").className = "c"+m2;
    }
    
    const sydney=()=>{
        setTimeout(sydney,3000);
        const time = new Date().toLocaleString('en-us',{timeZone:'Australia/Sydney', hour12: false })
        const tp = time.split(",").pop().split(":")
        
        //取十位數
        const h1 = Math.floor(tp[0]/10)
        const m1 = Math.floor(tp[1]/10)
        // const s1 = Math.floor(tp[2]/10)

        //取個位數
        const h2 = tp[0]%10
        const m2 = tp[1]%10
        // const s2 = tp[2]%10

        document.getElementById("ah1").className = "c"+h1;
        document.getElementById("ah2").className = "c"+h2;
        document.getElementById("am1").className = "c"+m1;
        document.getElementById("am2").className = "c"+m2;
    }

    const berlin=()=>{
        setTimeout(berlin,3000);
        const time = new Date().toLocaleString('en-us',{timeZone:'Europe/Berlin', hour12: false })
        const tp = time.split(",").pop().split(":")
        
        //取十位數
        const h1 = Math.floor(tp[0]/10)
        const m1 = Math.floor(tp[1]/10)
        // const s1 = Math.floor(tp[2]/10)

        //取個位數
        const h2 = tp[0]%10
        const m2 = tp[1]%10
        // const s2 = tp[2]%10

        document.getElementById("gh1").className = "c"+h1;
        document.getElementById("gh2").className = "c"+h2;
        document.getElementById("gm1").className = "c"+m1;
        document.getElementById("gm2").className = "c"+m2;
    }

    const new_york=()=>{
        setTimeout(new_york,3000);
        const time = new Date().toLocaleString('en-us',{timeZone:'America/New_York', hour12: false })
        const tp = time.split(",").pop().split(":")
        
        //取十位數
        const h1 = Math.floor(tp[0]/10)
        const m1 = Math.floor(tp[1]/10)
        // const s1 = Math.floor(tp[2]/10)

        //取個位數
        const h2 = tp[0]%10
        const m2 = tp[1]%10
        // const s2 = tp[2]%10

        document.getElementById("uh1").className = "c"+h1;
        document.getElementById("uh2").className = "c"+h2;
        document.getElementById("um1").className = "c"+m1;
        document.getElementById("um2").className = "c"+m2;
    }
    
    const seconds=()=>{
        setTimeout(seconds,1000);
        const time = new Date().toLocaleString('en-us',{timeZone:'Asia/Taipei', hour12: false })
        const tp = time.split(",").pop().split(":")
        
        //取十位數
        const s1 = Math.floor(tp[2]/10)

        //取個位數
        const s2 = tp[2]%10

        document.getElementById("s1").className = ("c"+s1);
        document.getElementById("s2").className = ("c"+s2);
      
    }

    flash=()=>{
        setTimeout(flash,1000)
        var a, i;
        a = document.querySelectorAll(".dotbox")
        for(i=0; i<a.length; i++){
            a[i].style.opacity=1;
            console.log(a[i])
        }
        setTimeout(function(){
            var a, i; 
            a = document.querySelectorAll(".dotbox")
            for(i=0; i<a.length; i++){
                a[i].style.opacity=0;
            }
        },500)


        timerun = () => {
            const domM = document.querySelector(".min");
            const domS = document.querySelector(".sec");
            // console.log(domH,domM,domS);
            domH.style.transform = `rotate(${degH}deg`;
            domM.style.transform = `rotate(${degM}deg`;
            domS.style.transform = `rotate(${degS}deg`;
          
            setInterval(function () {
              const now = new Date();
              const valM = now.getMinutes(), valS = now.getSeconds(), valH = now.getHours();
              const degS = valS * 6; //360度/60S => 6度/S (可算入MS帶來的偏移量)
              const degM = valM * 6 + valS * 0.1; //360度/60M => 6度/M && 6度/60S => 0.1度/S(S影響的偏移量)
              const degH = valH * 30 + valM * 0.5; //360度/12H=> 30度/H && 30度/60M => 0.5度/1M (M影響的偏移量) && 0.008333333333333333/s(S偏移量)
              domH.style.transform = `rotate(${degH}deg`;
              domM.style.transform = `rotate(${degM}deg`;
              domS.style.transform = `rotate(${degS}deg`;
            }, 1000);
            
          }
          

       
        
    }
    flash();
    taipei();
    baku();
    tokyo();
    sydney();
    berlin();
    new_york();
    seconds();
    timerun();
    
}


const domH = document.querySelector(".hr");

// .classList.add("") 不可以用這種寫法 因為會有問題