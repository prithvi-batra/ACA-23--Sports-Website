  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBDGF9n8ZH6i_cLxJet7jG-i89SbHkhLjk",
    authDomain: "ipl-results-2bc90.firebaseapp.com",
    databaseURL: "https://ipl-results-2bc90-default-rtdb.firebaseio.com",
    projectId: "ipl-results-2bc90",
    storageBucket: "ipl-results-2bc90.appspot.com",
    messagingSenderId: "4110202788",
    appId: "1:41102027888:web:e759bf11d1c0b716ea18b5"
  };
  firebase.initializeApp(firebaseConfig);
  document.getElementById('datavalue').addEventListener('submit', submitForm);
    function submitForm(e){
      e.preventDefault();
      console.log("submit Sucess");
      var year = getInputVal('year');
      year = year*1;
      readResult(year);
    }
 function getInputVal(id){
    return document.getElementById(id).value;
 }
 function readResult(year){
  var result = firebase.database().ref(year);
  result.on('value', (data) => {
    var ranks = data.val();
    document.getElementById("result1").innerHTML ="<br > 1. " +ranks[1];
    document.getElementById("result2").innerHTML ="<br > 2. " +ranks[2];
    document.getElementById("result3").innerHTML ="<br > 3. " +ranks[3];
    document.getElementById("result4").innerHTML ="<br > 4. " +ranks[4];
    document.getElementById("result5").innerHTML ="<br > 5. " +ranks[5];
    document.getElementById("result6").innerHTML ="<br > 6. " +ranks[6];
    document.getElementById("result7").innerHTML ="<br > 7. " +ranks[7];
    document.getElementById("result8").innerHTML ="<br > 8. " +ranks[8];
  }) 
 }
 