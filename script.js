
let jpr_marks;
let dcn_marks;
let mic_marks;
let gained_marks;
let prcnt;

const max_marks = 300;

function calculate() {

    
    let jprValue = document.getElementById("jpr").value;
    let dcnValue = document.getElementById("dcn").value;
    let micValue = document.getElementById("mic").value;

    
    if (jprValue === "" && dcnValue === "" && micValue === "") {
        alert(" Please enter your marks..");
       
        return;
        
    }
    else if(jprValue === "" || dcnValue === "" || micValue === ""){
          alert(" All feilds must be filled..");
          return;
    }
    

    jpr_marks = Number(jprValue);
    dcn_marks = Number(dcnValue);
    mic_marks = Number(micValue);

    
    
    document.getElementById("mrks").textContent = "";
    document.getElementById("prcent").textContent = "";
    document.getElementById("grde").textContent = "";
    document.getElementById("nte").textContent = "";
    document.getElementById("nte2").textContent = "";
    document.getElementById("warn").textContent = "";


  if (
    jpr_marks > 100 || jpr_marks < 0 ||
    dcn_marks > 100 || dcn_marks < 0 ||
    mic_marks > 100 || mic_marks < 0
) {
    document.getElementById("out").style.display = "none";
    document.getElementById("rst").style.display = "none";
 
    alert(" Marks must be among 1 to 100..");

    return; 
}
          gained_marks = jpr_marks + dcn_marks + mic_marks;
          prcnt = (gained_marks / max_marks) * 100;

    

         console.log(gained_marks);
         console.log(prcnt);

         document.getElementById("mrks").textContent =
        "Marks: " + gained_marks + "/" + max_marks;

         document.getElementById("prcent").textContent =
        "Percentage:" + prcnt.toFixed(2) + "%";

    if (prcnt >= 90 && prcnt <= 100) {
        document.getElementById("grde").textContent = "Grade: A+";
        document.getElementById("nte").textContent = "Congrats..🎉";
      document.getElementById("out").style.display = "block";
document.getElementById("rst").style.display = "block";
    }

    else if (prcnt >= 80) {
        document.getElementById("grde").textContent = "Grade: B+";
        document.getElementById("nte").textContent = "Congrats..🎉";
         document.getElementById("out").style.display = "block";
         document.getElementById("rst").style.display = "block";
    }

    else if (prcnt >= 70) {
        document.getElementById("grde").textContent = "Grade: C+";
        document.getElementById("nte").textContent = "Congrats..🎉";
        document.getElementById("out").style.display = "block";
        document.getElementById("rst").style.display = "block";

    }

    else if (prcnt >= 60) {
        document.getElementById("grde").textContent = "Grade: D+";
        document.getElementById("nte").textContent = "Congrats..🎉";
       document.getElementById("rst").style.display = "block";
        document.getElementById("out").style.display = "block";
    }

    else {
        document.getElementById("grde").textContent = "Grade: -";
        document.getElementById("prcent").textContent =
        "Percentage: -";
        document.getElementById("nte2").textContent = "Needs Improvement.🤷‍♂️";
        document.getElementById("out").style.display = "block";
        document.getElementById("rst").style.display = "block";
    }
   
}

function reset() {

    
    jpr_marks = 0;
    dcn_marks = 0;
    mic_marks = 0;
    gained_marks = 0;
    prcnt = 0;

    
    document.getElementById("jpr").value = "";
    document.getElementById("dcn").value = "";
    document.getElementById("mic").value = "";

    document.getElementById("mrks").textContent = "";
    document.getElementById("prcent").textContent = "";
    document.getElementById("grde").textContent = "";
    document.getElementById("nte").textContent = "";
    document.getElementById("nte2").textContent = "";
    document.getElementById("warn").textContent = "";

    document.getElementById("rst").style.display = "none";
    document.getElementById("out").style.display = "none";

    console.clear();
}

