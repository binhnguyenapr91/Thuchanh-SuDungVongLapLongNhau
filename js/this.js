let row=0;
let col=0;
let html="";

//su dung for
for(row =1;row<=10;row++){
    html = html + "<tr>";
    for (col = 1;col<=10;col++){
        html = html+"<td>" + col*row + "</td>";
        console.log(html);
    }
    html = html+ "</tr>";

}
document.getElementById("mainTable").innerHTML  = html;

//su dung while
let sout, i, j;
sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
i = j = 1;
while (i <= 10) {
    sout = sout + "<tr>";
    while (j <= 10) {
        sout = sout + "<td>" + i * j + "</td>";
        j++;
    }
    sout = sout + "</tr>";
    j = 1;
    i++;
}
sout = sout + "</table>";
document.write(sout);
