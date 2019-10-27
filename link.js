/**Write a program to find all of the URLs to which those link tags link and verify that the URLs return a  200 response */

const myFunction = () => {
  var x = document.getElementsByTagName("a");
  var success = [];
  for (var i = 0; i < x.length; i++) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", x[i].href, true);
    xhttp.send();
    xhttp.onreadystatechange = () => {
      if (this.readyState == 4 && this.status == 200) {
        var x = document.getElementsByTagName("a");
        var that = this;
        for (var i = 0; i < x.length; i++) {
          if (x[i].href == that.responseURL) success.push(x[i].innerText);
        }
        return success;
      }
    };
  }
};
