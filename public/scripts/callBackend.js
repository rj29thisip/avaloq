var baseurl = "http://35.215.149.13:3000/dateInfo";
function loadDateInfo(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET",baseurl,true);
    xmlhttp.onreadystatechange = function (){
        if(xmlhttp.readyState ==4 && xmlhttp.status ==200){
            var dateInfo = JSON.parse(xmlhttp.responseText);
            var tbltop = `<table>
                            <tr><th>Date</th><th>Time</th><th>Timezone</th></tr>`;
            
            //
            var main ="";
            for (i = 0; i < dateInfo.length; i++){
                main += "<tr><td>"+dateInfo[i].Date+"</td><td>"+dateInfo[i].Time+"</td><td>"+dateInfo[i].Timezone+"</td></tr>";
            }
            var tblbottom = "</table>";
            var tbl = tbltop + main + tblbottom;
            document.getElementById("dateInfo").innerHTML = tbl;
        }
    };
    xmlhttp.send();
}
window.onload = function(){
    loadDateInfo();
}
