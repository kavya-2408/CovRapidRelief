let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let pincode = data[i]["gsx$pincode"]["$t"];
      let state = data[i]["gsx$state"]["$t"];
      let city = data[i]["gsx$city"]["$t"];
      let hospitalname = data[i]["gsx$hospitalname"]["$t"];
      let type = data[i]["gsx$type"]["$t"];
      let lastupdatedat = data[i]["gsx$lastupdatedat"]["$t"];
      let total = data[i]["gsx$total"]["$t"];
      let occupied = data[i]["gsx$occupied"]["$t"];
      let vacant = data[i]["gsx$vacant"]["$t"];

      document.getElementById("remdesivir-data").innerHTML +=
        "<tr>" +
        "<td>" +
        pincode +
        "</td>" +
        "<td>" +
        state +
        "</td>" +
        "<td>" +
        city +
        "</td>" +
        "<td>" +
        hospitalname +
        "</td>" +
        "<td>" +
        type +
        "</td>" +
        "<td>" +
        lastupdatedat +
        "</td>" +
        "<td>" +
        total +
        "</td>" +
        "<td>" +
        occupied +
        "</td>" +
        "<td>" +
        vacant +
        "</td>" +
        "</tr>";
    }
  }
};

xmlhttp.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/16eDYNEXFcd3cBUIUgJNpci1-u2KjoAUPqZkuq7JQz50/7/public/values?alt=json",
  true
);
xmlhttp.send();