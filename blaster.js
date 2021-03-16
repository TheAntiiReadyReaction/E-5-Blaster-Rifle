// Paste this into the console of a lesson.
// Only works on Chrome and Brave

function turn_Off_On_Sound() {
  chrome.tabs.query({url: []}, function (tabs) {
    for (var i = 0; i < tabs.length; i++) {
      var mutedInfo = tabs[i].mutedInfo;
      if (mutedInfo) chrome.tabs.update(tabs[i].id, {"muted": true});
    }
});

function rapidFire () {
  const lesson_iframe_src = location.href;
  const ireadyWindow = window.open(lesson_iframe_src, "width=200, height=100");
  
  turn_Off_On_Sound();
  alert("Now, go to the recently opened window and do what you must to start the lesson.");
}
  
rapidFire();
