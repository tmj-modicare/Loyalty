function updateTbl1()
{
    var table = document.getElementById("t1");
    
    var gen1 = table.querySelector(".gen1");
    var gen1DBP = table.querySelector(".DBP1");
    var gen1LBP = table.querySelector(".LBP1");

    var gen2 = table.querySelector(".gen2");
    var gen2DBP = table.querySelector(".DBP2");
    var gen2LBP = table.querySelector(".LBP2");

    var gen3 = table.querySelector(".gen3");
    var gen3DBP = table.querySelector(".DBP3");
    var gen3LBP = table.querySelector(".LBP3");

    var gen4 = table.querySelector(".gen4");
    var gen4DBP = table.querySelector(".DBP4");
    var gen4LBP = table.querySelector(".LBP4");

    var gen5 = table.querySelector(".gen5");
    var gen5DBP = table.querySelector(".DBP5");
    var gen5LBP = table.querySelector(".LBP5");

    var gen6 = table.querySelector(".gen6");
    var gen6DBP = table.querySelector(".DBP6");
    var gen6LBP = table.querySelector(".LBP6");

    var gen7 = table.querySelector(".gen7");
    var gen7DBP = table.querySelector(".DBP7");
    var gen7LBP = table.querySelector(".LBP7");

    var gen8 = table.querySelector(".gen8");
    var gen8DBP = table.querySelector(".DBP8");
    var gen8LBP = table.querySelector(".LBP8");

    var gen9 = table.querySelector(".gen9");
    var gen9DBP = table.querySelector(".DBP9");
    var gen9LBP = table.querySelector(".LBP9");

    gen1DBP.innerHTML =  parseFloat(gen1.value)*5/100;
    gen1LBP.innerHTML =  parseFloat(gen1.value)*5/100;

    gen2DBP.innerHTML =  parseFloat(gen2.value)*4/100;
    gen2LBP.innerHTML =  parseFloat(gen2.value)*4/100;

    gen3DBP.innerHTML =  parseFloat(gen3.value)*3/100;
    gen3LBP.innerHTML =  parseFloat(gen3.value)*3/100;

    gen4DBP.innerHTML =  parseFloat(gen4.value)*2/100;
    gen4LBP.innerHTML =  parseFloat(gen4.value)*2/100;

    gen5DBP.innerHTML =  parseFloat(gen5.value)*1/100;
    gen5LBP.innerHTML =  parseFloat(gen5.value)*1/100;

    gen6DBP.innerHTML =  parseFloat(gen6.value)*0.5/100;
    gen6LBP.innerHTML =  parseFloat(gen6.value)*0.5/100;

    gen7DBP.innerHTML =  parseFloat(gen7.value)*0.5/100;
    gen7LBP.innerHTML =  parseFloat(gen7.value)*0.5/100;

    gen8DBP.innerHTML =  parseFloat(gen8.value)*0.5/100;

    gen9DBP.innerHTML =  parseFloat(gen9.value)*0.5/100;

}