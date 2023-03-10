window.onload=function(){common()};
let BR=document.createElement("br")

let innerHTMLList=[]
let checkBoxList=[]
let multipleChoiceList=[]
let pitMultipleChoiceList=[]

// The following lists are the options for each drop-down menu.
let climbText=["None","Low","Mid","High","Traversal"]
let driverRatingText = ["Doesn't Drive","Inefficient Driving", "Acceptable Driving", "Drives Well",];
let defenseRatingText = ["Didn't Defend","Hinders Allies; Inefficient Defense","Does not Hinder Allies; Inefficient Defense","Does not Hinder Allies; Great Defense"]
let drivetrainTypeText = ["Swerve", "West Coast", "Mecanum", "Other",];
let bumperQualityText = ["Low", "Medium", "High",];
let generalSizeText = ["Standard", "Small",];
let overallQualityText = ["Low", "Medium", "High",]; 
let balanceOptionsText = ["Neither","Docked","Docked & Engaged"];
let balanceCoopOptionsText = ["Not Balanced","Solo","Duo","Trio",];
let PickUpText = ["Nothing","Cone","Cube","Both",];
let startPosText = ["Loading Zone","Charging Station","Corner/Cable",];

function common(){
    AutoFormInit()
    TeleFormInit()
    PostMatchFormInit()
    // PitScoutingFormInit()
    initializeQRTable()
}

function AutoFormInit(){
    

     // Cone Goals (n is cone b is cube )
     addElList("autoScoring_coneUpper",PC2Bar("Autonomous","Top Cone"))
     addElList("autoScoring_coneMiddle",PC2Bar("Autonomous","Mid Cone"))
     addElList("autoScoring_coneLower",PC2Bar("Autonomous","Low Cone"))
     addElList("autonomousScoring_subOneNT",button("pcScore('autonomous', 'top cone', -1);","-1")) 
     addElList("autonomousScoring_subOneNM",button("pcScore('autonomous', 'mid cone', -1);","-1")) 
     addElList("autonomousScoring_subOneNL",button("pcScore('autonomous', 'low cone', -1);","-1"))

     // Cube Goals
     addElList("autoScoring_cubeUpper",PC2Bar("Autonomous","Top Cube"))
     addElList("autoScoring_cubeMiddle",PC2Bar("Autonomous","Mid Cube"))
     addElList("autoScoring_cubeLower",PC2Bar("Autonomous","Low Cube"))
     addElList("autonomousScoring_subOneBT",button("pcScore('autonomous', 'top cube', -1);","-1")) 
     addElList("autonomousScoring_subOneBM",button("pcScore('autonomous', 'mid cube', -1);","-1")) 
     addElList("autonomousScoring_subOneBL",button("pcScore('autonomous', 'low cube', -1);","-1"))

     // Start position drop-down menu
     addElList("auto_startPos",multipleChoice("Start pos:","startPos",startPosText, false))

     // Game Pieces Dropped
     addElList("autoGamePiecesDropped",oopsies("Autonomous","Game Pieces Dropped"))

     // Failed Scoring Attempts
     addElList("autoFailScore",oopsies("Autonomous","Failed Score Attempt"))

     // Tarmac Check Box
     addElList("autoScoring_leftCommunity",title("Community"))
     addElList("autoScoring_leftCommunity",tarmacCheckBox("Left Community: ","leftCommunity"))

     // Docked and or engaged drop-down
     addElList("autoScoring_dockedAndOrEngagedA",multipleChoice("Docked And/Or Engaged:","dockedAndOrEngagedA",balanceOptionsText, false))

     // Docked and or engaged drop-down
     addElList("autoScoring_dockedCoopA",multipleChoice("Docked Coop:","dockedCoopA",balanceCoopOptionsText, false))

     // Undo Score Button
     addElList("autonomousScoring_undo",button("undoScore('autonomous');","Undo Score")) 
     
}

function TeleFormInit(){
    /*addElList("teleopScoring_left",PC2Bar("Teleop","Upper Goal"))
    addElList("teleopScoring_left",[BR])
    addElList("teleopScoring_left",button("undoScore('teleop');","Undo Score"))
    addElList("teleopScoring_center",PC2Bar("Teleop","Lower Goal"))
    addElList("teleopScoring_right",multipleChoice("Climbing:","climbPos",climbText, false))
    addElList("teleopScoring_right",checkBox("Group Climber: ","groupClimbing"))*/
    // Cone Goals
    addElList("teleopScoring_coneUpper",PC2Bar("Teleop","Top Cone"))
    addElList("teleopScoring_coneMiddle",PC2Bar("Teleop","Mid Cone"))
    addElList("teleopScoring_coneLower",PC2Bar("Teleop","Low Cone"))
    addElList("teleopScoring_subOneNT",button("pcScore('teleop', 'top cone', -1);","-1")) 
    addElList("teleopScoring_subOneNM",button("pcScore('teleop', 'mid cone', -1);","-1")) 
    addElList("teleopScoring_subOneNL",button("pcScore('teleop', 'low cone', -1);","-1"))

    //cube goals
    addElList("teleopScoring_cubeUpper",PC2Bar("Teleop","Top Cube"))
    addElList("teleopScoring_cubeMiddle",PC2Bar("Teleop","Mid Cube"))
    addElList("teleopScoring_cubeLower",PC2Bar("Teleop","Low Cube"))
    addElList("teleopScoring_subOneBT",button("pcScore('teleop', 'top cube', -1);","-1")) 
    addElList("teleopScoring_subOneBM",button("pcScore('teleop', 'mid cube', -1);","-1")) 
    addElList("teleopScoring_subOneBL",button("pcScore('teleop', 'low cube', -1);","-1"))

     // Game Pieces Dropped
     addElList("teleopGamePiecesDropped",oopsies("Teleop","Game Pieces Dropped"))

     // Failed Scoring Attempts
     addElList("teleopFailScore",oopsies("Teleop","Failed Score Attempt"))

     // Docked and or engaged drop-down
     addElList("teleopScoring_dockedAndOrEngagedT",multipleChoice("Docked And/Or Engaged:","dockedAndOrEngaged",balanceOptionsText, false))

     // Docked and or engaged drop-down
     addElList("teleopScoring_dockedCoopT",multipleChoice("Docked Coop:","dockedCoop",balanceCoopOptionsText, false))

     // Undo Score Button
     addElList("teleopScoring_undo",button("undoScore('teleop');","Undo Score")) 



}

function PostMatchFormInit(){
    addElList("yearly_Code",multipleChoice("Driver Rating:","driverRatingDisplay",driverRatingText, false))
    addElList("yearly_Code",multipleChoice("Defense Rating:","defenseReview",defenseRatingText, false))
    addElList("yearly_Code",multipleChoice("Can Intake From Ground:","canPickUpGround",PickUpText, false))
    addElList("yearly_Code",multipleChoice("Can Intake From Shelf:","canPickUpShelf",PickUpText, false))


    addElList("yearly_Code",checkBox("Penalty Prone: ","penaltyProne",false))
    addElList("yearly_Code",checkBox("Inhibits Alliance Partners In Loading Zone: ","IAPILZ"))
}

function PitScoutingFormInit(){
    addElList("PitScoutingInput",multipleChoice("Drivetrain Type:", "drivetrainType",drivetrainTypeText, true))
    addElList("PitScoutingInput",multipleChoice("Bumper Quality:", "bumperQuality",bumperQualityText, true))
    addElList("PitScoutingInput",multipleChoice("General Size:", "generalSize",generalSizeText, true))
    addElList("PitScoutingInput",multipleChoice("Overall Quality:", "overallQuality",overallQualityText, true))
}

function addElList(id,elList){
    let Container=document.getElementById(id)
    for(let i=0; i<elList.length;i++){
        Container.appendChild(elList[i])
    }
}

function PC2Bar(period,type){
    Title= document.createElement("H3")
    Title.innerHTML= "---"//type 
    TR=document.createElement("TR")
    for(let i=1; i<2; i++){
        TD=document.createElement("TD")
        TD.innerHTML="<button onclick=\"pcScore('"+period.toLowerCase()+"', '"+type.toLowerCase()+"', "+i+");\">+1</button>"
        TR.appendChild(TD)
    }
    txt=document.createTextNode(type+": ")
    id=type.split(' ').join('')+"Count"+period+"Display"
    A=createInnerHtmlReader(id,period.toLowerCase(),type.toLowerCase())
    return [Title,TR,txt,A,BR]
}

// Function: oopsies
// Parameters: period, type
// Description: Button to count mistakes made by team
function oopsies(period,type){
    Title=document.createElement("H3")
    Title.innerHTML=type
    TR=document.createElement("TR")
    for(let i=1; i<2; i++){
        TD=document.createElement("TD")
        TD.innerHTML="<button onclick=\"pcScore('"+period.toLowerCase()+"', '"+type.toLowerCase()+"', "+i+");\">Count</button>"
        TR.appendChild(TD)
    }
    id=type.split(' ').join('')+"Count"+period+"Display"
    A=createInnerHtmlReader(id,period.toLowerCase(),type.toLowerCase())
    return [Title,TR,A,BR]
}

function checkBox(TitleIn, id){
    Div=document.createElement("div")
    Div.innerHTML=TitleIn+"<input type='checkbox' id='"+id+"' onchange ='updateData();'>"
    checkBoxList.push(id)
    return [Div]
}

function tarmacCheckBox(TitleIn, id){
    Div=document.createElement("div")
    Div.innerHTML=TitleIn+"<input type='checkbox' id='"+id+"' onchange ='updateDataTarmac();'>"
    checkBoxList.push(id)
    return [Div]
}

function title(text){
    Text=document.createElement("H3")
    Text.innerHTML=text
    return [Text]
}

function button(onClick, text){
    Div=document.createElement("div")
    Div.innerHTML=innerHTML="<button onclick=\""+onClick+"\">"+text+"</button>"
    return [Div]
}


function multipleChoice(TitleIn, id, Choices, isPit){
    Title=document.createElement("H3")
    Title.innerHTML=TitleIn
    Form=document.createElement("select")
    Form.id=id
    for(let i=0;i<Choices.length;i++){
        choice=document.createElement("option")
        choice.value=i
        choice.innerHTML=Choices[i]
        Form.appendChild(choice)
    }
    if (isPit){
        pitMultipleChoiceList.push(id)
    }
    else{
        multipleChoiceList.push(id)
    }
    return[Title,Form,BR]

}

function createInnerHtmlReader(id,period,type){
    a=document.createElement("a")
    a.innerHTML=0
    a.id=id
    innerHTMLList.push([id,period,type])
    return a
}

function updateData(){
    var scoreList={}
    for(let i=0; i<innerHTMLList.length;i++){
        scoreList[innerHTMLList[i][0]]=0
        for(let j = 0; j< Score_Stack[innerHTMLList[i][1]].length; j++){
            if(Score_Stack[innerHTMLList[i][1]][j][0] == innerHTMLList[i][2]){
                scoreList[innerHTMLList[i][0]] += parseInt(Score_Stack[innerHTMLList[i][1]][j][1],10);
            }
        }
        document.getElementById(innerHTMLList[i][0]).innerHTML = scoreList[innerHTMLList[i][0]];
    }
}

function updateDataTarmac(){
    setTimeout(startReminder, 5000)
    var scoreList={}
    for(let i=0; i<innerHTMLList.length;i++){
        scoreList[innerHTMLList[i][0]]=0
        for(let j = 0; j< Score_Stack[innerHTMLList[i][1]].length; j++){
            if(Score_Stack[innerHTMLList[i][1]][j][0] == innerHTMLList[i][2]){
                scoreList[innerHTMLList[i][0]] += parseInt(Score_Stack[innerHTMLList[i][1]][j][1],10);
            }
        }
        document.getElementById(innerHTMLList[i][0]).innerHTML = scoreList[innerHTMLList[i][0]];
    }
}

function startReminder(){
    document.getElementById("reminderToSwitchToTeleop").style.visibility = "visible";
}

function resetForm(){
    for(let i=0; i<innerHTMLList.length;i++){
        Score_Stack[innerHTMLList[i][1]]=new Array();
    }
    for(let i=0; i<checkBoxList.length;i++){
        document.getElementById(checkBoxList[i]).checked=false
    }
    for(let i=0; i<multipleChoiceList.length;i++){
        document.getElementById(multipleChoiceList[i]).value=0
    }
    for(let i=0; i<pitMultipleChoiceList.length;i++){
        document.getElementById(pitMultipleChoiceList[i]).value=0
    }
    document.getElementById("reminderToSwitchToTeleop").style.visibility = "hidden";
    defaultReset()
    updateData()
}

function saveData(){
	var matchData = defaultSaveP1();

    // Buttons
    for(let i=0; i<innerHTMLList.length;i++){
        matchData+= document.getElementById(innerHTMLList[i][0]).innerHTML+","
    }
    // Check Boxes
    for(let i=0; i<checkBoxList.length;i++){
        matchData+=document.getElementById(checkBoxList[i]).checked+","
    }
    // Multiple Choice Boxes
    for(let i=0; i<multipleChoiceList.length;i++){
        matchData+=document.getElementById(multipleChoiceList[i]).value+",";
    }
    matchData += "\"" + dataSanitize(document.getElementById("comments").value)+ "\"" +",";
    addQRRow(matchData+"\n");
    matchData +="\n";  // add a single newline at the end of the data

	var existingData = localStorage.getItem("MatchData");
	if(existingData == null)
		localStorage.setItem("MatchData", matchData);
	else
		localStorage.setItem("MatchData", existingData + matchData);
	document.getElementById("HistoryCSV").value = localStorage.getItem("MatchData");
	//serverSubmit(matchData); Skip server
}

function savePitData(){
	var matchData = (new Date()).toISOString()+",";
	matchData += dataSanitize(document.getElementById("scoutName").value) + ",";
	matchData += dataSanitize(document.getElementById("teamNumber").value) + ",";
    // Multiple Choice Boxes
    for(let i=0; i<pitMultipleChoiceList.length;i++){
        matchData+=document.getElementById(pitMultipleChoiceList[i]).value+",";
    }
    matchData += dataSanitize(document.getElementById("pitComments").value)+",";
    matchData +="\n";  // add a single newline at the end of the data
	//alert(matchData);
    serverPitSubmit(matchData);
    uploadRobotPhoto();
}

function uploadRobotPhoto(){

    var files = document.getElementById("robotPhoto").files;
 
    if(files.length > 0 && files[0].size < 15000000){
 
       var formData = new FormData();
       formData.append("file", files[0]);
 
       var xhttp = new XMLHttpRequest();
 
       // Set POST method and ajax file path
       xhttp.open("POST", "uploadPhoto.php", true);
 
       // call on request changes state
       xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var response = this.responseText;
            if(response == 1){
               alert("Upload successfully.");
            }else{
               alert("File not uploaded.");
            }
          }
       };
       // Send request with data
       xhttp.send(formData);
    } 
}

//makeCode();
function addQRRow(text){
    QRTable=document.getElementById("QRListTable")
    id=QRTable.children.length
    TR=document.createElement("TR");
    TR.setAttribute("class","Map");
    TR.id=id+"QRrow"
    TH1=document.createElement("TD");
    TH1.innerHTML="<button class='Map' onclick='makeCode(\""+id+"QRrowTxt"+"\")'> "+text.split(",")[2]+" </button>"
    TH1.setAttribute("class","Map");
    TH2=document.createElement("TD");
    TH2.setAttribute("class","Map");
    TH2.style.maxWidth="600px";
    TH2.innerHTML=text
    TH2.id=id+"QRrowTxt"
    TH3=document.createElement("TD");
    TH3.innerHTML="<button class='Map' onclick='deleteQRRow(\""+id+"\")'> X </button>"
    TR.appendChild(TH1)
    TR.appendChild(TH2)
    TR.appendChild(TH3)
    QRTable.append(TR)
}

function deleteQRRow(id){
    document.getElementById(id+"QRrow").remove()
}

function initializeQRTable(){
    table=document.createElement("table")
    table.style.tableLayout="fixed";
    table.id="QRListTable";
    table.setAttribute("class","Map");
    TR=document.createElement("TR");
    TR.setAttribute("class","Map");
    table.width=800
    TH1=document.createElement("TH");
    TH1.innerHTML="QRBtn"
    TH1.setAttribute("class","Map");
    TH2=document.createElement("TH");
    TH2.innerHTML="Text"
    TH2.setAttribute("class","Map");
    TH3=document.createElement("TH");
    TH3.innerHTML=" X "
    TH3.setAttribute("class","Map");
    TR.appendChild(TH1)
    TR.appendChild(TH2)
    TR.appendChild(TH3)
    table.appendChild(TR)
    table.border = "solid";
    table.borderCollapse = "collapse";
    document.getElementById("HistoryArea").append(table)

    pastData=localStorage.getItem("MatchData").split(/\r?\n/);
    for(let i=0; i<pastData.length-1;i++){
        addQRRow(pastData[i])
    }
}
