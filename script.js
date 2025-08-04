function openTab(evt, tabName) {
  document.querySelectorAll('.tabcontent').forEach(tab => tab.style.display = 'none');
  document.querySelectorAll('.tablink').forEach(btn => btn.style.background = '#444');
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.style.background = '#666';
}
document.getElementById("defaultTab").click();
