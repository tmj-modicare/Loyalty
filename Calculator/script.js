//Global variables
var tableIdList = ["t1", "t2", "t3", "t4", "t5", "t6"];
var targetArray = [1200, 1200, 900, 600, 300, 60, 60, 120, 120, 120, 120, 120, 120];

var incomeCalculate = 0;

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

var tableArray = [];


// classes
class Upline {
    static uplineTitle = document.getElementById("title");
    static uplineValidTitleIndex = 0;
    static isQualified = false;

    static updateTitle() {
        this.uplineTitle = document.getElementById("title");

        var titleIndexArray = [];

        var txtPgpv = document.getElementById("pgpv");

        for (let i = 0; i < tableArray.length; i++) {

            var DownlineDDTitle = tableArray[i].DDtitle;
            titleIndexArray.push(DownlineDDTitle.selectedIndex);
        }

        var DDTitle = tableArray[0].DDtitle;
        console.log(DDTitle);

        titleIndexArray.sort();
        titleIndexArray.reverse();
        console.log(titleIndexArray);

        //TRDD
        if (titleIndexArray[0] >= 11 && titleIndexArray[1] >= 11 && titleIndexArray[2] >= 11 && titleIndexArray[3] >= 11 && titleIndexArray[4] >= 11 && titleIndexArray[5] >= 11) {
            this.uplineTitle.innerHTML = DDTitle[12].text;
            this.uplineValidTitleIndex = 12;
            this.isQualified = true;
            if (parseFloat(txtPgpv.value) < 120 || txtPgpv.value == "") {
                this.uplineTitle.innerHTML = this.uplineTitle.innerHTML + " - PPV minimum 120 required";
                this.isQualified = false;
            }

        }
        //DRDD
        else if (titleIndexArray[0] >= 10 && titleIndexArray[1] >= 10 && titleIndexArray[2] >= 10 && titleIndexArray[3] >= 10 && titleIndexArray[4] >= 10 && titleIndexArray[5] >= 10) {
            this.uplineTitle.innerHTML = DDTitle[11].text;
            this.uplineValidTitleIndex = 11;
            this.isQualified = true;

            if (parseFloat(txtPgpv.value) < 120 || txtPgpv.value == "") {
                this.uplineTitle.innerHTML = this.uplineTitle.innerHTML + " - PPV minimum 120 required";
                this.isQualified = false;
            }
        }
        //RDD
        else if (titleIndexArray[0] >= 9 && titleIndexArray[1] >= 9 && titleIndexArray[2] >= 9 && titleIndexArray[3] >= 9 && titleIndexArray[4] >= 9 && titleIndexArray[5] >= 9) {
            this.uplineTitle.innerHTML = DDTitle[10].text;
            this.uplineValidTitleIndex = 10;
            this.isQualified = true;

            if (parseFloat(txtPgpv.value) < 120 || txtPgpv.value == "") {
                this.uplineTitle.innerHTML = this.uplineTitle.innerHTML + " - PPV minimum 120 required";
                this.isQualified = false;

            }
        }
        //TBDD
        else if (titleIndexArray[0] >= 6 && titleIndexArray[1] >= 6 && titleIndexArray[2] >= 6 && titleIndexArray[3] >= 5 && titleIndexArray[4] >= 5 && titleIndexArray[5] >= 5) {
            this.uplineTitle.innerHTML = DDTitle[9].text;
            this.uplineValidTitleIndex = 9;
            this.isQualified = true;

            if (parseFloat(txtPgpv.value) < 120 || txtPgpv.value == "") {
                this.uplineTitle.innerHTML = this.uplineTitle.innerHTML + " - PPV minimum 120 required";
                this.isQualified = false;

            }
        }
        //DBDD

        else if (titleIndexArray[0] >= 5 && titleIndexArray[1] >= 5 && titleIndexArray[2] >= 5 && titleIndexArray[3] >= 4 && titleIndexArray[4] >= 4 && titleIndexArray[5] >= 4) {
            this.uplineTitle.innerHTML = DDTitle[8].text;
            this.uplineValidTitleIndex = 8;
            this.isQualified = true;

            if (parseFloat(txtPgpv.value) < 120 || txtPgpv.value == "") {
                this.uplineTitle.innerHTML = this.uplineTitle.innerHTML + " - PPV minimum 120 required";
                this.isQualified = false;

            }
        }
        //BDD

        else if (titleIndexArray[0] >= 4 && titleIndexArray[1] >= 4 && titleIndexArray[2] >= 4 && titleIndexArray[3] >= 1 && titleIndexArray[4] >= 1 && titleIndexArray[5] >= 1) {
            this.uplineTitle.innerHTML = DDTitle[7].text;
            this.uplineValidTitleIndex = 7;
            this.isQualified = true;

            if (parseFloat(txtPgpv.value) < 120 || txtPgpv.value == "") {
                this.uplineTitle.innerHTML = this.uplineTitle.innerHTML + " - PPV minimum 120 required";
                this.isQualified = false;
            }
        }
        //Diamond Director

        else if (titleIndexArray[0] >= 1 && titleIndexArray[1] >= 1 && titleIndexArray[2] >= 1 && titleIndexArray[3] >= 1 && titleIndexArray[4] >= 1 && titleIndexArray[5] >= 1) {
            this.uplineTitle.innerHTML = DDTitle[6].text;
            this.uplineValidTitleIndex = 6;
            this.isQualified = true;


            if (parseFloat(txtPgpv.value) < 60 || txtPgpv.value == "") {
                this.uplineTitle.innerHTML = this.uplineTitle.innerHTML + " - PPV minimum 60 required";
                this.isQualified = false;
            }
        }
        //Platinum Director

        else if (titleIndexArray[0] >= 1 && titleIndexArray[1] >= 1 && titleIndexArray[2] >= 1 && titleIndexArray[3] >= 1 && titleIndexArray[4] >= 0 && titleIndexArray[5] >= 0) {
            this.uplineTitle.innerHTML = DDTitle[5].text;
            this.uplineValidTitleIndex = 5;
            this.isQualified = true;

            if (parseFloat(txtPgpv.value) < 60 || txtPgpv.value == "") {
                this.uplineTitle.innerHTML = this.uplineTitle.innerHTML + " - PPV minimum 60 required";
                this.isQualified = false;
            }
        }
        //Senior Executive Director

        else if (titleIndexArray[0] >= 1 && titleIndexArray[1] >= 1 && titleIndexArray[2] >= 1 && titleIndexArray[3] >= 0 && titleIndexArray[4] >= 0 && titleIndexArray[5] >= 0) {
            this.uplineTitle.innerHTML = DDTitle[4].text;

            this.uplineValidTitleIndex = 4;
            this.isQualified = true;

            if (parseFloat(txtPgpv.value) < 300 || txtPgpv.value == "") {
                this.uplineTitle.innerHTML = this.uplineTitle.innerHTML + " - PGPV minimum 300 required";
                this.isQualified = false;
            }
        }
        //Executive Director

        else if (titleIndexArray[0] >= 1 && titleIndexArray[1] >= 1 && titleIndexArray[2] >= 0 && titleIndexArray[3] >= 0 && titleIndexArray[4] >= 0 && titleIndexArray[5] >= 0) {
            this.uplineTitle.innerHTML = DDTitle[3].text;

            this.uplineValidTitleIndex = 3;
            this.isQualified = true;

            if (parseFloat(txtPgpv.value) < 600 || txtPgpv.value == "") {
                this.uplineTitle.innerHTML = this.uplineTitle.innerHTML + " - PGPV minimum 600 required";
                this.isQualified = false;
            }
        }
        //Senior Director

        else if (titleIndexArray[0] >= 1 && titleIndexArray[1] >= 0 && titleIndexArray[2] >= 0 && titleIndexArray[3] >= 0 && titleIndexArray[4] >= 0 && titleIndexArray[5] >= 0) {
            this.uplineTitle.innerHTML = DDTitle[2].text;

            this.uplineValidTitleIndex = 2;
            this.isQualified = true;

            if (parseFloat(txtPgpv.value) < 900 || txtPgpv.value == "") {
                this.uplineTitle.innerHTML = this.uplineTitle.innerHTML + " - PGPV minimum 900 required";
                this.isQualified = false;
            }
        }
        //Director

        else if (titleIndexArray[0] >= 0 && titleIndexArray[1] >= 0 && titleIndexArray[2] >= 0 && titleIndexArray[3] >= 0 && titleIndexArray[4] >= 0 && titleIndexArray[5] >= 0) {
            this.uplineTitle.innerHTML = DDTitle[1].text;

            this.uplineValidTitleIndex = 1;
            this.isQualified = true;

            if (parseFloat(txtPgpv.value) < 1200 || txtPgpv.value == "" ) {
                this.uplineTitle.innerHTML = DDTitle[0].text;

                this.uplineTitle.innerHTML = this.uplineTitle.innerHTML + " - PGPV minimum 1200 required";
                this.isQualified = false;
            }
        }
    }
}

class TableLeg {
    constructor(tableId) {
        this.tableID = tableId;
        this.table = document.getElementById(tableId);
        this.DDtitle = this.table.querySelector(".title");
        this.Gpv = 0;
        this.isLbLeg = false;


        this.dbpMaxGen = 0;
        this.lbpMaxGen = 0;

        this.dbpPercentage = [5, 4, 3, 2, 1, 0.5, 0.5, 0.5, 0.5]
        this.lbpPercentage = [5, 4, 3, 2, 1, 0.5, 0.5]
        this.genPgpvArray = new Array("gen1", "gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "gen8", "gen9");
        this.dbpArray = new Array("DBP1", "DBP2", "DBP3", "DBP4", "DBP5", "DBP6", "DBP7", "DBP8", "DBP9");
        this.lbpArray = new Array("LBP1", "LBP2", "LBP3", "LBP4", "LBP5", "LBP6", "LBP7", "LBP8", "LBP9");
    }



    log() {
        console.log(this.tableID);
        console.log(this.DDtitle);
        console.log(this.genPgpvArray);
        console.log(this.dbpArray);
        console.log(this.lbpArray);
    }

    calculatePoint() {

        var totalDbPointElement = this.table.querySelector(".DBPTotal");
        var totalLbPointElement = this.table.querySelector(".LBPTotal");

        var totalDb = 0;
        var totalLb = 0;

        for (let i = 0; i < this.dbpMaxGen; i++) {
            this.table.querySelector("." + this.dbpArray[i]).innerHTML = (parseFloat(this.table.querySelector("." + this.genPgpvArray[i]).value).toFixed(2) * this.dbpPercentage[i] * 27) / 100;

            this.table.querySelector("." + this.dbpArray[i]).innerHTML = (this.table.querySelector("." + this.dbpArray[i]).innerHTML == "NaN") ? 0 : this.table.querySelector("." + this.dbpArray[i]).innerHTML

            totalDb += parseFloat(this.table.querySelector("." + this.dbpArray[i]).innerHTML);
        }

        for (let i = 0; i < this.dbpMaxGen; i++) {
            
            this.table.querySelector("." + this.lbpArray[i]).innerHTML = "0";
            
        }

        for (let i = 0; i < this.lbpMaxGen; i++) {

            if (this.lbLegCheking()) {

                this.table.querySelector("." + this.lbpArray[i]).innerHTML = (parseFloat(this.table.querySelector("." + this.genPgpvArray[i]).value).toFixed(2) * this.dbpPercentage[i] * 27) / 100;
                this.table.querySelector("." + this.lbpArray[i]).innerHTML = (this.table.querySelector("." + this.lbpArray[i]).innerHTML == "NaN") ? 0 : this.table.querySelector("." + this.lbpArray[i]).innerHTML;
                totalLb += parseFloat(this.table.querySelector("." + this.lbpArray[i]).innerHTML);

            }
            else {
                this.table.querySelector("." + this.lbpArray[i]).innerHTML = "0";
            }

        }

        totalDbPointElement.innerHTML = totalDb.toFixed(2);
        totalLbPointElement.innerHTML = totalLb.toFixed(2);
        this.table.querySelector(".GPV").innerHTML = this.Gpv;

    }

    lbLegCheking() {
        this.GPVCalculate();
        if (this.Gpv >= 3600) {
            this.isLbLeg = true;
            console.log(this.isLbLeg);
            return this.isLbLeg;
        }
        else {
            this.isLbLeg = false;
            console.log(this.isLbLeg);
            return this.isLbLeg;
        }
    }

    maxGenCalculate() {
        this.dbpMaxGen = titleMapping[Upline.uplineValidTitleIndex];
        if (Upline.uplineValidTitleIndex <= this.DDtitle.selectedIndex) {
            this.lbpMaxGen = 2;

        }
        else {
            this.lbpMaxGen = titleMapping[Upline.uplineValidTitleIndex];
        }
        this.lbpMaxGen = (this.lbpMaxGen > 7) ? 7 : this.lbpMaxGen;
        console.log("Lb max gen : " + this.lbpMaxGen);

    }

    updateTblRows() {
        this.maxGenCalculate();
        var childs = this.table.children[1].children;

        for (let i = 0; i < childs.length; i++) {
            childs[i].hidden = true;
        }

        for (let i = 0; i < this.dbpMaxGen && this.DDtitle.selectedIndex != 0; i++) {
            childs[i].hidden = false;
        }
    }

    GPVCalculate() {
        this.Gpv = 0;

        // calculate GPV visible
        for (let i = 0; i < this.dbpMaxGen; i++) {

            if (this.table.querySelector("." + this.genPgpvArray[i]).value != "") {
                this.Gpv += parseFloat(this.table.querySelector("." + this.genPgpvArray[i]).value);
            }

        }

    }

}

class IncomeCalculate {
    constructor() {
        this.sumOfDbPoint = 0;
        this.sumOfLbPoint = 0;
        this.sumOfDbPointElement = document.getElementById("TotalDBP");
        this.sumOfLbPointElement = document.getElementById("TotalLBP");
        this.incomeTable = document.getElementById("incomeTable");
        this.totalIncomeText = this.incomeTable.querySelector(".total-income");
        this.totalIncome = 0;

    }

    updatePoints() {

        this.sumOfDbPoint = 0;
        this.sumOfLbPoint = 0;

        var isLbQualified = false;

        for (let i = 0; i < tableArray.length; i++) {

            this.sumOfDbPoint += parseFloat(tableArray[i].table.querySelector(".DBPTotal").innerHTML);
            this.sumOfLbPoint += parseFloat(tableArray[i].table.querySelector(".LBPTotal").innerHTML);
        }

        var txtPgpv = document.getElementById("pgpv");

        this.sumOfDbPoint += parseFloat(txtPgpv.value) * 6 * 0.27;

        for (let i = 0; i < tableArray.length; i++) {
            if(tableArray[i].isLbLeg)
            {
                isLbQualified = tableArray[i].isLbLeg;
                break;
            }
        }

        if (Upline.uplineValidTitleIndex < 4 && Upline.uplineValidTitleIndex > 1 && isLbQualified) {
            this.sumOfLbPoint += parseFloat(txtPgpv.value) * 5 * 0.27;

        }

        this.sumOfDbPointElement.innerHTML = (this.sumOfDbPoint).toFixed(2);
        this.sumOfLbPointElement.innerHTML = (this.sumOfLbPoint).toFixed(2);

        this.sumOfDbPointElement.innerHTML = (this.sumOfDbPointElement.innerHTML == "NaN") ? "0.00" : this.sumOfDbPointElement.innerHTML;
        this.sumOfLbPointElement.innerHTML = (this.sumOfLbPointElement.innerHTML == "NaN") ? "0.00" : this.sumOfLbPointElement.innerHTML;

    }


    calculateBonusFund(number, points) {

        if (!Upline.isQualified) {
            this.incomeTable.querySelector(".ic" + number).parentElement.parentElement.children[2].innerHTML = "0.00";
            return;
        }

        var lblIncome = this.incomeTable.querySelector(".ic" + number).parentElement.parentElement.children[2];
        var txtIndex = this.incomeTable.querySelector(".ic" + number);

        lblIncome.innerHTML = (parseFloat(txtIndex.value) * points).toFixed(2);

    }

    updateIncome() {


        for (let i = 1; i < 10; i++) {

            this.calculateBonusFund(i,0);
        }

        switch (Upline.uplineValidTitleIndex) {

            //Director
            case 1:
                {
                    this.calculateBonusFund(1, this.sumOfDbPoint);
                    this.calculateBonusFund(4, this.sumOfDbPoint);
                    this.calculateBonusFund(5, this.sumOfDbPoint);

                    break;
                }
            //Senior Director
            case 2:
                {
                    this.calculateBonusFund(1, this.sumOfDbPoint);
                    this.calculateBonusFund(4, this.sumOfDbPoint);
                    this.calculateBonusFund(5, this.sumOfDbPoint);
                    this.calculateBonusFund(7, this.sumOfLbPoint);
                    break;
                }
            //Excecutive Director
            case 3:
                {
                    this.calculateBonusFund(1, this.sumOfDbPoint);
                    this.calculateBonusFund(4, this.sumOfDbPoint);
                    this.calculateBonusFund(5, this.sumOfDbPoint);
                    this.calculateBonusFund(7, this.sumOfLbPoint);
                    break;
                }
            //Senior Excecutive Director
            case 4:
                {
                    this.calculateBonusFund(4, this.sumOfDbPoint);
                    this.calculateBonusFund(2, this.sumOfDbPoint);
                    this.calculateBonusFund(3, this.sumOfDbPoint);
                    this.calculateBonusFund(7, this.sumOfLbPoint);
                    break;
                }
            //Platinum Director
            case 5:
                {
                    this.calculateBonusFund(4, this.sumOfDbPoint);
                    this.calculateBonusFund(2, this.sumOfDbPoint);
                    this.calculateBonusFund(3, this.sumOfDbPoint);
                    this.calculateBonusFund(7, this.sumOfLbPoint);
                    break;
                }
            //Diamond Director
            case 6:
                {
                    this.calculateBonusFund(4, this.sumOfDbPoint);
                    this.calculateBonusFund(2, this.sumOfDbPoint);
                    this.calculateBonusFund(3, this.sumOfDbPoint);
                    this.calculateBonusFund(7, this.sumOfLbPoint);
                    this.calculateBonusFund(6, this.sumOfDbPoint);
                    break;
                }
            //Black Diamond Director
            case 7:
                {
                    this.calculateBonusFund(4, this.sumOfDbPoint);
                    this.calculateBonusFund(2, this.sumOfDbPoint);
                    this.calculateBonusFund(3, this.sumOfDbPoint);
                    this.calculateBonusFund(6, this.sumOfDbPoint);
                    this.calculateBonusFund(7, this.sumOfLbPoint);
                    this.calculateBonusFund(8, this.sumOfLbPoint);
                    break;
                }
            //Double Black Diamond Director
            case 8:
                {
                    this.calculateBonusFund(4, this.sumOfDbPoint);
                    this.calculateBonusFund(2, this.sumOfDbPoint);
                    this.calculateBonusFund(3, this.sumOfDbPoint);
                    this.calculateBonusFund(6, this.sumOfDbPoint);
                    this.calculateBonusFund(7, this.sumOfLbPoint);
                    this.calculateBonusFund(8, this.sumOfLbPoint);
                    break;
                }
            //Triple Black Diamond Director
            case 9:
                {
                    this.calculateBonusFund(4, this.sumOfDbPoint);
                    this.calculateBonusFund(2, this.sumOfDbPoint);
                    this.calculateBonusFund(3, this.sumOfDbPoint);
                    this.calculateBonusFund(6, this.sumOfDbPoint);
                    this.calculateBonusFund(7, this.sumOfLbPoint);
                    this.calculateBonusFund(8, this.sumOfLbPoint);
                    break;
                }
            //Red Diamond Director
            case 10:
                {
                    this.calculateBonusFund(4, this.sumOfDbPoint);
                    this.calculateBonusFund(2, this.sumOfDbPoint);
                    this.calculateBonusFund(3, this.sumOfDbPoint);
                    this.calculateBonusFund(6, this.sumOfDbPoint);
                    this.calculateBonusFund(7, this.sumOfLbPoint);
                    this.calculateBonusFund(9, this.sumOfLbPoint);
                    break;
                }
            //Double Red Diamond Director
            case 11:
                {
                    this.calculateBonusFund(4, this.sumOfDbPoint);
                    this.calculateBonusFund(2, this.sumOfDbPoint);
                    this.calculateBonusFund(3, this.sumOfDbPoint);
                    this.calculateBonusFund(6, this.sumOfDbPoint);
                    this.calculateBonusFund(7, this.sumOfLbPoint);
                    this.calculateBonusFund(9, this.sumOfLbPoint);
                    break;
                }
            //Triple Red Diamond Director
            case 12:
                {
                    this.calculateBonusFund(4, this.sumOfDbPoint);
                    this.calculateBonusFund(2, this.sumOfDbPoint);
                    this.calculateBonusFund(3, this.sumOfDbPoint);
                    this.calculateBonusFund(6, this.sumOfDbPoint);
                    this.calculateBonusFund(7, this.sumOfLbPoint);
                    this.calculateBonusFund(9, this.sumOfLbPoint);
                    break;
                }
        }
    }

    sumOfIncome()
    {
        this.totalIncome = 0;
        for (let i = 1; i < 10; i++) {
            
            var lblIncome = this.incomeTable.querySelector(".ic" + i).parentElement.parentElement.children[2];
            this.totalIncome += parseFloat(lblIncome.innerHTML);
        }
        this.totalIncomeText.innerHTML = parseFloat(this.totalIncome).toFixed(2);
        return this.totalIncomeText.innerHTML;
    }
}

function initial() {
    tableArray = [new TableLeg("t1"), new TableLeg("t2"), new TableLeg("t3"), new TableLeg("t4"), new TableLeg("t5"), new TableLeg("t6")];
    incomeCalculate = new IncomeCalculate();
    Upline.updateTitle();
    updateTbl();
}

function updateTbl() {
    Upline.updateTitle();
    for (let i = 0; i < tableArray.length; i++) {
        tableArray[i].updateTblRows();
        tableArray[i].calculatePoint();
    }
    incomeCalculate.updatePoints();
    incomeCalculate.updateIncome();
    document.getElementById("income").innerHTML = incomeCalculate.sumOfIncome();
}