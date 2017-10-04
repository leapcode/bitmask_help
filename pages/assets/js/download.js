$(document).ready(function() {
  var platform = platformStr();

  $(".download").click(function(e) {
    e.preventDefault();
    download(platform);
  }); 

  if (["linux", "mac", "android"].indexOf(platform) != -1) {
    $(".download-text").text("Download Bitmask for " + platform);
  }
});

function download(platform) {
  var link = "install";
  switch (platform) {
    case "linux":
      link = "https://dl.bitmask.net/client/linux/stable/Bitmask-linux64-latest.tar.gz";
      break;
    case "mac":
      link = "https://dl.bitmask.net/client/osx/stable/Bitmask-OSX-latest.pkg";
      break;
    case "android":
      link = "install/android";
      break;
  }
  window.location = link;
};

function platformStr() {
  if (navigator.platform.indexOf("Linux") != -1) {
    return "linux";
  }
  if (navigator.platform.indexOf("Mac") != -1) {
    return "mac";
  }
  if (navigator.platform.indexOf("Android") != -1) {
    return "android";
  }
  if (navigator.platform.indexOf("Win") != -1) {
    return "win";
  }
  return "other";
}
