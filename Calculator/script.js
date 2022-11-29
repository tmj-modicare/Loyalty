//Global variables
var tableIdList = ["t1", "t2", "t3", "t4", "t5", "t6"];
var targetArray = [1200,1200,900,600,300,60,60,120,120,120,120,120,120];

var totalIncomeNumber = 0;    
var validTitleIndex = 0;

var globalDbp = 0;
var globalLbp = 0;


var titleMapping = {
    0: 0,
    1: 0,
    2: 1,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 9,
    11: 9,
    12: 9
}

/* ---------------------------------- */


//Global functions
function updateTblRows() {
    for (var i = 0; i < tableIdList.length; ++i) {
        var table = document.getElementById(tableIdList[i]);
        checkTitle(table);
        updateTbl(tableIdList[i]);
    }
}

function updateTbl(tableId) {
    var table = document.getElementById(tableId);
    var totalGPV = 0;

    var gpv = table.querySelector(".GPV");


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

    var DBPTotal = table.querySelector(".DBPTotal");
    var LBPTotal = table.querySelector(".LBPTotal");


    if (!gen1.parentElement.parentElement.hidden) {
        gen1DBP.innerHTML = (parseFloat(gen1.value) * 5 * 27 / 100).toFixed(2);
        gen1LBP.innerHTML = (parseFloat(gen1.value) * 5 * 27 / 100).toFixed(2);

        gen1DBP.innerHTML = (gen1DBP.innerHTML == "NaN") ? "0" : gen1DBP.innerHTML;
        gen1LBP.innerHTML = (gen1LBP.innerHTML == "NaN") ? "0" : gen1LBP.innerHTML;
        totalGPV += (gen1.value == null) ? 0 : parseFloat(gen1.value);

    }
    else {
        gen1DBP.innerHTML = 0;
        gen1LBP.innerHTML = 0;
    }

    if (!gen2.parentElement.parentElement.hidden) {

        gen2DBP.innerHTML = (parseFloat(gen2.value) * 4 * 27 / 100).toFixed(2);
        gen2LBP.innerHTML = (parseFloat(gen2.value) * 4 * 27 / 100).toFixed(2);

        gen2DBP.innerHTML = (gen2DBP.innerHTML == "NaN") ? "0" : gen2DBP.innerHTML;
        gen2LBP.innerHTML = (gen2LBP.innerHTML == "NaN") ? "0" : gen2LBP.innerHTML;

        totalGPV += (gen1.value == null) ? 0 : parseFloat(gen2.value);

    }
    else {
        gen2DBP.innerHTML = 0;
        gen2LBP.innerHTML = 0;
    }

    if (!gen3.parentElement.parentElement.hidden) {

        gen3DBP.innerHTML = (parseFloat(gen3.value) * 3 * 27 / 100).toFixed(2);
        gen3LBP.innerHTML = (parseFloat(gen3.value) * 3 * 27 / 100).toFixed(2);

        gen3DBP.innerHTML = (gen3DBP.innerHTML == "NaN") ? "0" : gen3DBP.innerHTML;
        gen3LBP.innerHTML = (gen3LBP.innerHTML == "NaN") ? "0" : gen3LBP.innerHTML;
        totalGPV += (gen1.value == null) ? 0 : parseFloat(gen3.value);

    }
    else {
        gen3DBP.innerHTML = 0;
        gen3LBP.innerHTML = 0;
    }


    if (!gen4.parentElement.parentElement.hidden) {

        gen4DBP.innerHTML = (parseFloat(gen4.value) * 2 * 27 / 100).toFixed(2);
        gen4LBP.innerHTML = (parseFloat(gen4.value) * 2 * 27 / 100).toFixed(2);

        gen4DBP.innerHTML = (gen4DBP.innerHTML == "NaN") ? "0" : gen4DBP.innerHTML;
        gen4LBP.innerHTML = (gen4LBP.innerHTML == "NaN") ? "0" : gen4LBP.innerHTML;
        totalGPV += (gen1.value == null) ? 0 : parseFloat(gen4.value);

    }
    else {
        gen4DBP.innerHTML = 0;
        gen4LBP.innerHTML = 0;
    }


    if (!gen5.parentElement.parentElement.hidden) {

        gen5DBP.innerHTML = (parseFloat(gen5.value) * 1 * 27 / 100).toFixed(2);
        gen5LBP.innerHTML = (parseFloat(gen5.value) * 1 * 27 / 100).toFixed(2);

        gen5DBP.innerHTML = (gen5DBP.innerHTML == "NaN") ? "0" : gen5DBP.innerHTML;
        gen5LBP.innerHTML = (gen5LBP.innerHTML == "NaN") ? "0" : gen5LBP.innerHTML;
        totalGPV += (gen1.value == null) ? 0 : parseFloat(gen5.value);

    }
    else {
        gen5DBP.innerHTML = 0;
        gen5LBP.innerHTML = 0;
    }


    if (!gen6.parentElement.parentElement.hidden) {

        gen6DBP.innerHTML = (parseFloat(gen6.value) * 0.5 * 27 / 100).toFixed(2);
        gen6LBP.innerHTML = (parseFloat(gen6.value) * 0.5 * 27 / 100).toFixed(2);

        gen6DBP.innerHTML = (gen6DBP.innerHTML == "NaN") ? "0" : gen6DBP.innerHTML;
        gen6LBP.innerHTML = (gen6LBP.innerHTML == "NaN") ? "0" : gen6LBP.innerHTML;
        totalGPV += (gen1.value == null) ? 0 : parseFloat(gen6.value);

    }
    else {
        gen6DBP.innerHTML = 0;
        gen6LBP.innerHTML = 0;
    }


    if (!gen7.parentElement.parentElement.hidden) {

        gen7DBP.innerHTML = (parseFloat(gen7.value) * 0.5 * 27 / 100).toFixed(2);
        gen7LBP.innerHTML = (parseFloat(gen7.value) * 0.5 * 27 / 100).toFixed(2);

        gen7DBP.innerHTML = (gen7DBP.innerHTML == "NaN") ? "0" : gen7DBP.innerHTML;
        gen7LBP.innerHTML = (gen7LBP.innerHTML == "NaN") ? "0" : gen7LBP.innerHTML;
        totalGPV += (gen1.value == null) ? 0 : parseFloat(gen7.value);

    }
    else {
        gen7DBP.innerHTML = 0;
        gen7LBP.innerHTML = 0;
    }


    if (!gen8.parentElement.parentElement.hidden) {

        gen8DBP.innerHTML = (parseFloat(gen8.value) * 0.5 * 27 / 100).toFixed(2);
        gen8DBP.innerHTML = (gen8DBP.innerHTML == "NaN") ? "0" : gen8DBP.innerHTML;
        totalGPV += (gen1.value == null) ? 0 : parseFloat(gen8.value);


    }
    else {
        gen8DBP.innerHTML = 0;
    }

    if (!gen9.parentElement.parentElement.hidden) {

        gen9DBP.innerHTML = (parseFloat(gen9.value) * 0.5 * 27 / 100).toFixed(2);
        gen9DBP.innerHTML = (gen9DBP.innerHTML == "NaN") ? "0" : gen9DBP.innerHTML;
        totalGPV += (gen1.value == null) ? 0 : parseFloat(gen9.value);


    }
    else {
        gen9DBP.innerHTML = 0;
    }

    gpv.innerHTML = totalGPV + "";

    DBPTotal.innerHTML = parseFloat(gen1DBP.innerHTML) + parseFloat(gen2DBP.innerHTML) + parseFloat(gen3DBP.innerHTML) + parseFloat(gen4DBP.innerHTML) + parseFloat(gen5DBP.innerHTML) + parseFloat(gen6DBP.innerHTML) + parseFloat(gen7DBP.innerHTML) + parseFloat(gen8DBP.innerHTML) + parseFloat(gen9DBP.innerHTML);

    if (totalGPV >= 3600) {
        LBPTotal.innerHTML = parseFloat(gen1LBP.innerHTML) + parseFloat(gen2LBP.innerHTML) + parseFloat(gen3LBP.innerHTML) + parseFloat(gen4LBP.innerHTML) + parseFloat(gen5LBP.innerHTML) + parseFloat(gen6LBP.innerHTML) + parseFloat(gen7LBP.innerHTML);
    }
    else {
        gen1LBP.innerHTML = 0;
        gen2LBP.innerHTML = 0;
        gen3LBP.innerHTML = 0;
        gen4LBP.innerHTML = 0;
        gen5LBP.innerHTML = 0;
        gen6LBP.innerHTML = 0;
        gen7LBP.innerHTML = 0;

        LBPTotal.innerHTML = 0;
    }

    calculateTotalPoints();

}

function checkTitle(table) {

    var DDTitle = table.querySelector(".title");
    setTitle();
    toggleRows(table, DDTitle);
}


function toggleRows(table, DDTitle) {

    titleIndex = DDTitle.selectedIndex;

    if (validTitleIndex <= titleIndex) {
        number = 2;
    }
    else {
        number = titleMapping[validTitleIndex]
    }

    if (validTitleIndex == 2 && validTitleIndex <= titleIndex) {
        number = 1;
    }

    var childs = table.children[1].children;
    for (let i = 0; i < childs.length; i++) {
        childs[i].hidden = true;
    }

    if (DDTitle.selectedIndex == 0) { return };

    for (let i = 0; i < number; i++) {
        childs[i].hidden = false;
    }

}

function setTitle() {
    var array = [];

    var lblTitle = document.getElementById("title");
    var txtPgpv = document.getElementById("pgpv");
    var validTitle = "NQD";

    var table = document.getElementById("t1");
    var DDTitle = table.querySelector(".title");
    array.push(DDTitle.selectedIndex);

    table = document.getElementById("t2");
    DDTitle = table.querySelector(".title");
    array.push(DDTitle.selectedIndex);

    table = document.getElementById("t3");
    DDTitle = table.querySelector(".title");
    array.push(DDTitle.selectedIndex);

    table = document.getElementById("t4");
    DDTitle = table.querySelector(".title");
    array.push(DDTitle.selectedIndex);

    table = document.getElementById("t5");
    DDTitle = table.querySelector(".title");
    array.push(DDTitle.selectedIndex);

    table = document.getElementById("t6");
    DDTitle = table.querySelector(".title");
    array.push(DDTitle.selectedIndex);

    array.sort();
    array.reverse();

    //TRDD
    if (array[0] >= 11 && array[1] >= 11 && array[2] >= 11 && array[3] >= 11 && array[4] >= 11 && array[5] >= 11) {
        validTitle = DDTitle[12].text;
        lblTitle.innerHTML = validTitle;
        validTitleIndex = 12;
        if (parseFloat(txtPgpv.value) < 120) {
            lblTitle.innerHTML = lblTitle.innerHTML + " - PPV minimum 120 required";
        }

    }
    //DRDD
    else if (array[0] >= 10 && array[1] >= 10 && array[2] >= 10 && array[3] >= 10 && array[4] >= 10 && array[5] >= 10) {
        validTitle = DDTitle[11].text;
        lblTitle.innerHTML = validTitle;
        validTitleIndex = 11;

        if (parseFloat(txtPgpv.value) < 120) {
            lblTitle.innerHTML = lblTitle.innerHTML + " - PPV minimum 120 required";
        }
    }
    //RDD
    else if (array[0] >= 9 && array[1] >= 9 && array[2] >= 9 && array[3] >= 9 && array[4] >= 9 && array[5] >= 9) {
        validTitle = DDTitle[10].text;
        lblTitle.innerHTML = validTitle;
        validTitleIndex = 10;
        if (parseFloat(txtPgpv.value) < 120) {
            lblTitle.innerHTML = lblTitle.innerHTML + " - PPV minimum 120 required";
        }
    }
    //TBDD
    else if (array[0] >= 6 && array[1] >= 6 && array[2] >= 6 && array[3] >= 5 && array[4] >= 5 && array[5] >= 5) {
        validTitle = DDTitle[9].text;
        lblTitle.innerHTML = validTitle;
        validTitleIndex = 9;

        if (parseFloat(txtPgpv.value) < 120) {
            lblTitle.innerHTML = lblTitle.innerHTML + " - PPV minimum 120 required";
        }
    }
    //DBDD

    else if (array[0] >= 5 && array[1] >= 5 && array[2] >= 5 && array[3] >= 4 && array[4] >= 4 && array[5] >= 4) {
        validTitle = DDTitle[8].text;
        lblTitle.innerHTML = validTitle;
        validTitleIndex = 8;

        if (parseFloat(txtPgpv.value) < 120) {
            lblTitle.innerHTML = lblTitle.innerHTML + " - PPV minimum 120 required";
        }
    }
    //BDD

    else if (array[0] >= 4 && array[1] >= 4 && array[2] >= 4 && array[3] >= 1 && array[4] >= 1 && array[5] >= 1) {
        validTitle = DDTitle[7].text;
        lblTitle.innerHTML = validTitle;
        validTitleIndex = 7;

        if (parseFloat(txtPgpv.value) < 120) {
            lblTitle.innerHTML = lblTitle.innerHTML + " - PPV minimum 120 required";
        }
    }
    //Diamond Director

    else if (array[0] >= 1 && array[1] >= 1 && array[2] >= 1 && array[3] >= 1 && array[4] >= 1 && array[5] >= 1) {
        validTitle = DDTitle[6].text;
        lblTitle.innerHTML = validTitle;
        validTitleIndex = 6;

        if (parseFloat(txtPgpv.value) < 60) {
            lblTitle.innerHTML = lblTitle.innerHTML + " - PPV minimum 60 required";
        }
    }
    //Platinum Director

    else if (array[0] >= 1 && array[1] >= 1 && array[2] >= 1 && array[3] >= 1 && array[4] >= 0 && array[5] >= 0) {
        validTitle = DDTitle[5].text;
        lblTitle.innerHTML = validTitle;
        validTitleIndex = 5;

        if (parseFloat(txtPgpv.value) < 60) {
            lblTitle.innerHTML = lblTitle.innerHTML + " - PPV minimum 60 required";
        }
    }
    //Senior Executive Director

    else if (array[0] >= 1 && array[1] >= 1 && array[2] >= 1 && array[3] >= 0 && array[4] >= 0 && array[5] >= 0) {
        validTitle = DDTitle[4].text;
        lblTitle.innerHTML = validTitle;
        validTitleIndex = 4;

        if (parseFloat(txtPgpv.value) < 300) {
            lblTitle.innerHTML = lblTitle.innerHTML + " - PGPV minimum 300 required";
        }
    }
    //Executive Director

    else if (array[0] >= 1 && array[1] >= 1 && array[2] >= 0 && array[3] >= 0 && array[4] >= 0 && array[5] >= 0) {
        validTitle = DDTitle[3].text;
        lblTitle.innerHTML = validTitle;
        validTitleIndex = 3;

        if (parseFloat(txtPgpv.value) < 600) {
            lblTitle.innerHTML = lblTitle.innerHTML + " - PGPV minimum 600 required";
        }
    }
    //Senior Director

    else if (array[0] >= 1 && array[1] >= 0 && array[2] >= 0 && array[3] >= 0 && array[4] >= 0 && array[5] >= 0) {
        validTitle = DDTitle[2].text;
        lblTitle.innerHTML = validTitle;
        validTitleIndex = 2;

        if (parseFloat(txtPgpv.value) < 900) {
            lblTitle.innerHTML = lblTitle.innerHTML + " - PGPV minimum 900 required";
        }
    }
    //Director

    else if (array[0] >= 0 && array[1] >= 0 && array[2] >= 0 && array[3] >= 0 && array[4] >= 0 && array[5] >= 0) {
        validTitle = DDTitle[1].text;
        lblTitle.innerHTML = validTitle;
        validTitleIndex = 1;

        if (parseFloat(txtPgpv.value) < 1200) {
            validTitle = DDTitle[0].text;
            lblTitle.innerHTML = validTitle;
            lblTitle.innerHTML = lblTitle.innerHTML + " - PGPV minimum 1200 required";
        }
    }

    calculateTotalPoints();


}

function calculateTotalPoints() {

    var TotalDBpoint = document.getElementById("TotalDBP");
    var TotalLBpoint = document.getElementById("TotalLBP");

    var isbQualified = false;

    var dbp = 0;
    var lbp = 0;

    for (let i = 0; i < tableIdList.length; i++) {

        var table = document.getElementById(tableIdList[i]);

        var DBPTotal = table.querySelector(".DBPTotal");
        var LBPTotal = table.querySelector(".LBPTotal");

        dbp += parseFloat(DBPTotal.innerHTML);
        lbp += parseFloat(LBPTotal.innerHTML);
        
        if (lbp > 1) {
            isbQualified = true;
        }

    }
    
    var ppv = document.getElementById("pgpv");

    if (ppv.value >= targetArray[validTitleIndex]) {
        dbp += ppv.value * 27 * 6 /100;
    }
    else
    {
        dbp = 0;
    }

    if (ppv.value >= targetArray[validTitleIndex] && validTitleIndex <= 4 && validTitleIndex > 1) 
    {
        if(isbQualified)
        {
            lbp += ppv.value * 27 * 5 /100;
        }
    }


    if(ppv.value < targetArray[validTitleIndex])
    {
        lbp = 0;
    }

    TotalDBpoint.innerHTML = "DB Point : " + dbp;
    TotalLBpoint.innerHTML = "LB Point : " + lbp;

    globalDbp = dbp;
    globalLbp = lbp;

    updateIncome();

    //var TotalDBP = parseFloat()
    //var TotalLBP =     
}

function updateIncome() {
    
    var incomeArray = [".ic1",".ic2",".ic3",".ic4",".ic5",".ic6",".ic7",".ic8",".ic9"];
    var table = document.getElementById("incomeTable");

    var totalIncomeText = table.querySelector(".total-income");

    // National Travel Fund
    if(validTitleIndex >= 1 && validTitleIndex <= 3 )
    {
        var inputBox = table.querySelector(incomeArray[0]);
        var incomeText = inputBox.parentElement.parentElement.children[2];

        incomeText.innerHTML = (globalDbp * inputBox.value).toFixed(2);
        totalIncomeNumber += (globalDbp * inputBox.value);
    }
    else
    {
        var inputBox = table.querySelector(incomeArray[0]);
        var incomeText = inputBox.parentElement.parentElement.children[2];
        incomeText.innerHTML = "0.00";
    }


    // World Travel Fund
    if(validTitleIndex >= 4 )
    {
        var inputBox = table.querySelector(incomeArray[1]);
        var incomeText = inputBox.parentElement.parentElement.children[2];

        totalIncomeNumber += (globalDbp * inputBox.value);
        incomeText.innerHTML = (globalDbp * inputBox.value).toFixed(2);
    }
    else
    {
        var inputBox = table.querySelector(incomeArray[1]);
        var incomeText = inputBox.parentElement.parentElement.children[2];
        incomeText.innerHTML = "0.00";
    }


    // Car Fund
    if(validTitleIndex >= 4)
    {
        var inputBox = table.querySelector(incomeArray[2]);
        var incomeText = inputBox.parentElement.parentElement.children[2];

        totalIncomeNumber += (globalDbp * inputBox.value);
        incomeText.innerHTML = (globalDbp * inputBox.value).toFixed(2);
    }
    else
    {
        var inputBox = table.querySelector(incomeArray[2]);
        var incomeText = inputBox.parentElement.parentElement.children[2];
        incomeText.innerHTML = "0.00";
    }


    // Director Bonus
    if(validTitleIndex >= 1)
    {
        var inputBox = table.querySelector(incomeArray[3]);
        var incomeText = inputBox.parentElement.parentElement.children[2];

        totalIncomeNumber += (globalDbp * inputBox.value);
        incomeText.innerHTML = (globalDbp * inputBox.value).toFixed(2);
    }
    else
    {
        var inputBox = table.querySelector(incomeArray[3]);
        var incomeText = inputBox.parentElement.parentElement.children[2];
        incomeText.innerHTML = "0.00";
    }    
    
    
    
    // Bike bonus
    if(validTitleIndex >= 1 && validTitleIndex <= 3 )
    {
        var inputBox = table.querySelector(incomeArray[4]);
        var incomeText = inputBox.parentElement.parentElement.children[2];

        totalIncomeNumber += (globalDbp * inputBox.value);
        incomeText.innerHTML = (globalDbp * inputBox.value).toFixed(2);
    }
    else
    {
        var inputBox = table.querySelector(incomeArray[4]);
        var incomeText = inputBox.parentElement.parentElement.children[2];
        incomeText.innerHTML = "0.00";
    }
    
    
    // House bonus
    if(validTitleIndex >= 6)
    {
        var inputBox = table.querySelector(incomeArray[5]);
        var incomeText = inputBox.parentElement.parentElement.children[2];

        totalIncomeNumber += (globalDbp * inputBox.value);
        incomeText.innerHTML = (globalDbp * inputBox.value).toFixed(2);
    }
    else
    {
        var inputBox = table.querySelector(incomeArray[5]);
        var incomeText = inputBox.parentElement.parentElement.children[2];
        incomeText.innerHTML = "0.00";
    }

    
    // Leadership bonus
    if(validTitleIndex >= 2)
    {
        var inputBox = table.querySelector(incomeArray[6]);
        var incomeText = inputBox.parentElement.parentElement.children[2];

        totalIncomeNumber += (globalLbp * inputBox.value);
        incomeText.innerHTML = (globalLbp * inputBox.value).toFixed(2);
    }
    else
    {
        var inputBox = table.querySelector(incomeArray[6]);
        var incomeText = inputBox.parentElement.parentElement.children[2];
        incomeText.innerHTML = "0.00";
    }

    
    // black diamond bonus
    if(validTitleIndex >= 7 && validTitleIndex <= 9)
    {
        var inputBox = table.querySelector(incomeArray[7]);
        var incomeText = inputBox.parentElement.parentElement.children[2];
        totalIncomeNumber += (globalLbp * inputBox.value);
        incomeText.innerHTML = (globalLbp * inputBox.value).toFixed(2);
    }
    else
    {
        var inputBox = table.querySelector(incomeArray[7]);
        var incomeText = inputBox.parentElement.parentElement.children[2];
        incomeText.innerHTML = "0.00";
    }

    
    // red diamond bonus
    if(validTitleIndex >= 10 && validTitleIndex <= 12)
    {
        var inputBox = table.querySelector(incomeArray[8]);
        var incomeText = inputBox.parentElement.parentElement.children[2];
        totalIncomeNumber += (globalLbp * inputBox.value);
        incomeText.innerHTML = (globalLbp * inputBox.value).toFixed(2);
    }
    else
    {
        var inputBox = table.querySelector(incomeArray[8]);
        var incomeText = inputBox.parentElement.parentElement.children[2];
        incomeText.innerHTML = "0.00";
    }

    totalIncomeText.innerHTML = (totalIncomeNumber).toFixed(2) + "";

    document.getElementById("income").innerHTML = "\u{20B9} "+(totalIncomeNumber).toFixed(2);

}