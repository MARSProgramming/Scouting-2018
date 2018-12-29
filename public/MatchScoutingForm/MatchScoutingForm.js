//REMEMBER TO CHANGE DEFAULT COMPETITION BETWEEN EVENT

function increment(increaseValue, tagID) {
    var currentValue = Number(document.getElementById(tagID).value);
    console.log(currentValue);
    if (currentValue + increaseValue < 0) {
        document.getElementById(tagID).value = 0;
    } else {
        document.getElementById(tagID).value = currentValue + increaseValue;
    }

    console.log(document.getElementById(tagID).value);
}

function inputOtherCompetition(name) {
    if (name == 'Other')
        document.getElementById('otherCompetitionInput').innerHTML = 'Other Competition: <input type="text" id="otherCompetition" />';
    else
        document.getElementById('otherCompetitionInput').innerHTML = '';
}

function writeNewPost(){

    //  Pre-Match Inputs
    var scoutName = document.getElementById("scoutName").value;
    if (scoutName == null || scoutName == "")
        scoutName = "defaultScoutName";
    var scoutTeam = document.getElementById("scoutTeam").value;
    if (scoutTeam == null || scoutTeam == "")
        scoutTeam = "9999";
    var competition = document.getElementById("competition").value;
    if (competition == "Other")
        competition = document.getElementById("otherCompetition").value;
    if (competition == null || competition == "" || competition == "Select Competition")
        competition = "defaultCompetition"
    var alliance = document.getElementsByName('alliance');
    var allianceValue;
    for (var i = 0; i < alliance.length; i++) {
        if (alliance[i].checked) {
            allianceValue = alliance[i].value;
            break;
        }
    }
    if (allianceValue == null || allianceValue == "")
        allianceValue = "defaultAlliance";
    var matchNumber = document.getElementById("matchNumber").value;
    if (matchNumber == null || matchNumber == "")
        matchNumber = "9999";
    var teamNumber = document.getElementById("teamNumber").value;
    if (teamNumber == null || teamNumber == "")
        teamNumber = "9999";

    //  Autonomous Inputs
    var startLocation = document.getElementsByName("startLocation");
    var startLocationValue;
    for (var i = 0; i < startLocation.length; i++){
        if (startLocation[i].checked){
            console.log(startLocation[i].checked)
            startLocationValue = startLocation[i].value;
            break;
        }
    }
    if (startLocationValue == null || startLocationValue == "")
        startLocationValue = "defaultStartLocation";
    var autoRunArray = document.getElementsByName("autoRun");
    console.log(autoRunArray)
    var autoRun;
    for (var i = 0; i < autoRunArray.length; i++){
        if (autoRunArray[i].checked){
            autoRun = autoRunArray[i].value;
            break;
        }
    }
        if(autoRun == null || autoRun == "") autoRun = false; 
    var autoCubesScoreSwitch = document.getElementById("autoCubesScoreSwitch").value;
    if (autoCubesScoreSwitch == null || autoCubesScoreSwitch == "")
        autoCubesScoreSwitch = 0;
    var autoCubesMissSwitch = document.getElementById("autoCubesMissSwitch").value;
    if (autoCubesMissSwitch == null || autoCubesMissSwitch == "")
        autoCubesMissSwitch = 0;
    var autoCubesUnscoreSwitch = document.getElementById("autoCubesUnscoreSwitch").value;
    if (autoCubesUnscoreSwitch == null || autoCubesUnscoreSwitch == "")
        autoCubesUnscoreSwitch = 0;
    var autoCubesScoreScale = document.getElementById("autoCubesScoreScale").value;
    if (autoCubesScoreScale == null || autoCubesScoreScale == "")
        autoCubesScoreScale = 0;
    var autoCubesMissScale = document.getElementById("autoCubesMissScale").value;
    if (autoCubesMissScale == null || autoCubesMissScale == "")
        autoCubesMissScale = 0;
    var autoCubesUnscoreScale = document.getElementById("autoCubesUnscoreScale").value;
    if (autoCubesUnscoreScale == null || autoCubesUnscoreScale == "")
        autoCubesUnscoreScale = 0;
    var autoCubesExchanged = document.getElementById("autoCubesExchanged").value;
    if (autoCubesExchanged == null || autoCubesExchanged == "")
        autoCubesExchanged = 0;

    //  Teleop Inputs
    var teleopCubesScoreSwitch = document.getElementById("teleopCubesScoreSwitch").value;
    if (teleopCubesScoreSwitch == null || teleopCubesScoreSwitch == "")
        teleopCubesScoreSwitch = 0;
    var teleopCubesScoreScale = document.getElementById("teleopCubesScoreScale").value;
    if (teleopCubesScoreScale == null || teleopCubesScoreScale == "")
        teleopCubesScoreScale = 0;
    var teleopCubesScoreOpponentSwitch = document.getElementById("teleopCubesScoreOpponentSwitch").value;
    if (teleopCubesScoreOpponentSwitch == null || teleopCubesScoreOpponentSwitch == "")
        teleopCubesScoreOpponentSwitch = 0
    var teleopCubesMissed = document.getElementById("teleopCubesMissed").value;
    if (teleopCubesMissed == null || teleopCubesMissed == "")
        teleopCubesMissed = 0;
    var teleopCubesExchanged = document.getElementById("teleopCubesExchanged").value;
    if (teleopCubesExchanged == null || teleopCubesExchanged == "")
        teleopCubesExchanged = 0;
    
    var playedDefense = document.getElementById("playedDefense").checked ? true : false;
    var robotEndPosition = document.getElementsByName("robotEndPosition");
    console.log(robotEndPosition)
    var robotEndPositionValue;
    for (var i = 0; i < robotEndPosition.length; i++){
        if (robotEndPosition[i].checked){
            robotEndPositionValue = robotEndPosition[i].value;
            break;
        }
    }
    if (robotEndPositionValue == null || robotEndPositionValue == "")
        robotEndPositionValue = "defaultEndPosition";
    var helpedOthersClimb = document.getElementById("helpedOthersClimb").checked ? true : false;
    var assistedClimbs = document.getElementById("assistedClimbs").value;
    if (assistedClimbs == null || assistedClimbs == "")
        assistedClimbs = 0;
    var everInactive = document.getElementById("everInactive").checked ? true : false;
    var comments = document.getElementById("comments").value;
    
    var postData = {
        "Data" : {
            "DateTime"                      :   Date(),
            "ScoutName"                     :   scoutName,
            "ScoutTeam"                     :   scoutTeam,
            "Competition"                   :   competition,
            "Alliance"                      :   allianceValue,
            "MatchNumber"                   :   matchNumber,
            "TeamNumber"                    :   teamNumber,
            "StartLocation"                 :   startLocationValue,
            
            "AutoRun"                       :   autoRun,
            "AutoCubesScoreSwitch"          :   autoCubesScoreSwitch,
            "AutoCubesMissSwitch"           :   autoCubesMissSwitch,
            "AutoCubesUnscoreSwitch"        :   autoCubesUnscoreSwitch,
            "AutoCubesScoreScale"           :   autoCubesScoreScale,
            "AutoCubesMissScale"            :   autoCubesMissScale,
            "AutoCubesUnscoreScale"         :   autoCubesUnscoreScale,
            "AutoCubesExchanged"            :   autoCubesExchanged,
            
            "TeleopCubesScoreSwitch"        :   teleopCubesScoreSwitch,
            "TeleopCubesScoreScale"         :   teleopCubesScoreScale,
            "TeleopCubesScoreOpponentSwitch":   teleopCubesScoreOpponentSwitch,
            "TeleopCubesMissed"             :   teleopCubesMissed,
            "TeleopCubesExchanged"          :   teleopCubesExchanged,
            
            "PlayedDefense"                 :   playedDefense,
            "RobotEndPosition"              :   robotEndPositionValue,
            "HelpedOthersClimb"             :   helpedOthersClimb,
            "AssistedClimbs"                :   assistedClimbs,
            "EverInactive"                  :   everInactive,
            "Comments"                      :   comments
                
        }
    }

    console.log(postData);
    postData = JSON.stringify(postData);

    var xhr = new XMLHttpRequest();
    var url = "https://script.google.com/macros/s/AKfycbwWzE-GlcGUeAxwpS1_IJ4vYIUJTDUa3fbK0pUXPMPj2Qn_X3E/exec";
    xhr.open("POST", url, true);
    xhr.send(postData);
    
    //renames the outmost hierarchy of JSON which makes no duplicates
    postData = postData.replace("\"Data\"", "\"" + competition + " | Team " + teamNumber + " | Qualification Match " + matchNumber + "\"");
    postData = JSON.parse(postData);
    firebase.database().ref().update(postData);
    
    window.alert("Thank you for submitting!");

}