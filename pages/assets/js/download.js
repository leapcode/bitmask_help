$(document).ready(function() {
  var platform = platformStr();

  $(".download").click(function(e) {
    e.preventDefault();
    download(platform);
  });

  if (["GNU/Linux", "macOS", "Android"].indexOf(platform) != -1) {
    $(".download-text").text("Download Bitmask for " + platform);
  }
});


function download(platform) {
  var link = "install";
  switch (platform) {
    case "GNU/Linux":
      link = "https://dl.bitmask.net/client/linux/stable/Bitmask-linux64-latest.tar.gz";
      break;
    case "macOS":
      link = "https://dl.bitmask.net/client/osx/stable/Bitmask-OSX-latest.pkg";
      break;
    case "Android":
      link = "install/android";
      break;
  }
  window.location = link;
};

function platformStr() {
  if (navigator.platform.indexOf("Linux") != -1) {
    return "GNU/Linux";
  }
  if (navigator.platform.indexOf("Mac") != -1) {
    return "macOS";
  }
  if (navigator.platform.indexOf("Android") != -1) {
    return "Android";
  }
  if (navigator.platform.indexOf("Win") != -1) {
    return "Windows";
  }
  return "Other";
}
