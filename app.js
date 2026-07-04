// ==========================================
// SMART MINI FARMER
// script.js
// ==========================================

let pump = false;
let fertilizer = false;
let autoMode = false;

// Dashboard Values

let soil = 65;
let temp = 30;
let humidity = 72;
let ph = 6.8;
let ec = 1.4;
let tank = 80;
let battery = 92;
let solar = 24;


// ==========================================
// UPDATE DASHBOARD
// ==========================================

function updateDashboard(){

document.getElementById("soil").innerHTML =
soil.toFixed(0)+"%";

document.getElementById("temp").innerHTML =
temp.toFixed(1)+" °C";

document.getElementById("humidity").innerHTML =
humidity.toFixed(0)+"%";

document.getElementById("ph").innerHTML =
ph.toFixed(1);

document.getElementById("ec").innerHTML =
ec.toFixed(2);

document.getElementById("tank").innerHTML =
tank.toFixed(0)+"%";

document.getElementById("battery").innerHTML =
battery.toFixed(0)+"%";

document.getElementById("solar").innerHTML =
solar.toFixed(1)+" V";

}



// ==========================================
// RANDOM SENSOR VALUES
// ==========================================

setInterval(function(){

soil = Math.random()*100;

temp = 28 + Math.random()*8;

humidity = 55 + Math.random()*40;

ph = 6 + Math.random()*1.5;

ec = 1 + Math.random()*1.5;

solar = 20 + Math.random()*6;

battery = 80 + Math.random()*20;

tank = 50 + Math.random()*50;

updateDashboard();

},3000);




// ==========================================
// PUMP CONTROL
// ==========================================

function pumpOn(){

pump=true;

alert("💧 Water Pump Turned ON");

}

function pumpOff(){

pump=false;

alert("🛑 Water Pump Turned OFF");

}




// ==========================================
// AUTO IRRIGATION
// ==========================================

function autoIrrigation(){

autoMode=!autoMode;

if(autoMode){

alert("✅ Auto Irrigation Enabled");

}

else{

alert("❌ Auto Irrigation Disabled");

}

}




// ==========================================
// FERTILIZER
// ==========================================

function fertilizerOn(){

fertilizer=true;

alert("🌿 Fertilizer Dispensing Started");

}



function fertilizerOff(){

fertilizer=false;

alert("🛑 Fertilizer Pump Stopped");

}



// ==========================================
// ANIMAL DETECTION
// ==========================================

function activateSiren(){

alert("🚨 Siren Activated");

}
// ===========================================
// SMART MINI FARMER
// ADVANCED FEATURES
// ===========================================


// Rain Detection

setInterval(function(){

let rain = Math.random();

if(rain > 0.8){

document.getElementById("rain").innerHTML="🌧 Rain";

document.getElementById("rain").style.color="blue";

}

else{

document.getElementById("rain").innerHTML="☀ No Rain";

document.getElementById("rain").style.color="green";

}

},5000);




// ===========================================
// ANIMAL DETECTION
// ===========================================

setInterval(function(){

let animal=Math.random();

if(animal>0.90){

document.getElementById("animal").innerHTML="🐒 Animal Detected";

document.getElementById("animal").style.color="red";

alert("🚨 Animal Entered the Field");

}

else{

document.getElementById("animal").innerHTML="✅ Safe";

document.getElementById("animal").style.color="green";

}

},7000);




// ===========================================
// ULTRASONIC FREQUENCY DISPLAY
// ===========================================

const slider=document.querySelector("input[type=range]");

const frequency=document.createElement("h3");

frequency.innerHTML="Frequency : 30000 Hz";

slider.parentNode.appendChild(frequency);

slider.addEventListener("input",function(){

frequency.innerHTML="Frequency : "+slider.value+" Hz";

});




// ===========================================
// ENERGY SAVING
// ===========================================

let energy=62;

setInterval(function(){

energy+=Math.random();

if(energy>100){

energy=62;

}

let cards=document.querySelectorAll("#energy .card h1");

cards[2].innerHTML=energy.toFixed(1)+" %";

},4000);




// ===========================================
// WATER LEVEL WARNING
// ===========================================

setInterval(function(){

if(tank<30){

alert("⚠ Water Tank Low");

}

},6000);




// ===========================================
// BATTERY WARNING
// ===========================================

setInterval(function(){

if(battery<25){

alert("🔋 Battery Low");

}

},6000);




// ===========================================
// AUTO IRRIGATION LOGIC
// ===========================================

setInterval(function(){

if(autoMode){

if(soil<35){

pump=true;

console.log("Pump Started");

}

else{

pump=false;

console.log("Pump Stopped");

}

}

},3000);




// ===========================================
// FERTILIZER AUTOMATION
// ===========================================

setInterval(function(){

if(ph<6.2){

console.log("Dispensing Fertilizer");

}

},10000);




// ===========================================
// SYSTEM STATUS
// ===========================================

console.log("Smart Mini Farmer Started");

