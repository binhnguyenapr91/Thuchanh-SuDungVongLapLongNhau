let row=0;
let col=0;
let html="";

for(row =1;row<=10;row++){
    html = html + "<tr>";
    for (col = 1;col<=10;col++){
        html = html+"<td>" + col*row + "</td>";
        console.log(html);
    }
    html = html+ "</tr>";

}
document.getElementById("mainTable").innerHTML  = html;
