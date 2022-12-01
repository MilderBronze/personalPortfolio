var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
  //this way, we are removing the styles from all the tabs and after removing, we are adding the style to the currently clicked tab.
}
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = 0;
}
function closemenu() {
  sidemenu.style.right = "-200px";
}
