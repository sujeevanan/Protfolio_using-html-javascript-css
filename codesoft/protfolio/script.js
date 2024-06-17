// select the link and select the content remove the active status and put it in the clicked one
var tabLinks = document.getElementsByClassName("tabLink");
var tabContents = document.getElementsByClassName("tabContents");
function display(name) {
  for (let tablink of tabLinks) {
    tablink.classList.remove("activeLink");
  }
  for (let tabcontent of tabContents) {
    tabcontent.classList.remove("activeContent");
  }
  event.currentTarget.classList.add("activeLink");
  document.getElementById(name).classList.add("activeContent");
}
