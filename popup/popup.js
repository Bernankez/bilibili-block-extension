let showSidebar = true;

function updateSidebar() {
  showSidebar = !showSidebar;
  console.log(showSidebar);
  if (showSidebar) {
    hideSidebar();
  } else {
    displaySidebar();
  }
}

function displaySidebar() {}

function hideSidebar() {
  // chrome.tabs.executeScript({

  // });
}

const sidebarCheckbox = document.getElementById("sidebar-checkbox");
if (sidebarCheckbox) {
  sidebarCheckbox.onchange = () => {
    updateSidebar();
  };
}
