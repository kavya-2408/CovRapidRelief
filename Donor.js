let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let pincode = data[i]["gsx$pincode"]["$t"];
      let state = data[i]["gsx$state"]["$t"];
      let city = data[i]["gsx$city"]["$t"];
      let distributorName = data[i]["gsx$distributorname"]["$t"];
      let address = data[i]["gsx$address"]["$t"];
      let email = data[i]["gsx$e-mailaddress"]["$t"];
      let phone = data[i]["gsx$telephone"]["$t"];
      let remarks = data[i]["gsx$remarks"]["$t"];
      let bloodgroup = data[i]["gsx$bloodgroup"]["$t"];

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
        distributorName +
        "</td>" +
        "<td>" +
        address +
        "</td>" +
        "<td>" +
        email +
        "</td>" +
        "<td>" +
        "<a>" + phone +"</a>" +
        "</td>" +
        "<td>" +
        remarks +
        "</td>" +
        "<td>" +
        bloodgroup +
        "</td>" +
        "</tr>";
    }
  }
};

xmlhttp.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/16eDYNEXFcd3cBUIUgJNpci1-u2KjoAUPqZkuq7JQz50/2/public/values?alt=json",
  true
);
xmlhttp.send();