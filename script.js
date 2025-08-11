function openTab(evt, tabName) {
  document.querySelectorAll('.tabcontent').forEach(tab => tab.style.display = 'none');
  document.querySelectorAll('.tablink').forEach(btn => btn.classList.remove('active'));
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.classList.add('active');
}
document.getElementById("defaultTab").click();
