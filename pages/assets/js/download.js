$(document).ready(function() {
  $(".download").click(function(e) {
    e.preventDefault();
    download();
  }); 
});

function download() {
  var link = "install";
  if (navigator.platform.indexOf("Linux") != -1) {
    link = "https://dl.bitmask.net/client/linux/stable/Bitmask-linux64-latest.tar.gz";
  }
  if (navigator.platform.indexOf("Mac") != -1) {
    link = "https://dl.bitmask.net/client/osx/stable/Bitmask-latest.pkg";
  }
  if (navigator.platform.indexOf("Android") != -1) {
    link = "install/android";
  }
  //if (navigator.platform.indexOf("Win") != -1) {
  //}
  window.location = link;
};
