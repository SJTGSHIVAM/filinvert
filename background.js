browser.menus.create({
  id: "filinvert-100",
  title: "Dark mode",
  contexts: ["all"],
  checked: false,
});

browser.menus.create({
  id: "filinvert-100-color-fix",
  title: "Dark mode color fix",
  contexts: ["all"],
  checked: false,
});
browser.menus.create({
  id: "filinvert-clear",
  title: "back to light",
  contexts: ["all"],
  checked: false,
});

let addFilterColorFix = `document.documentElement.classList.remove("fnv--filter__set");
  document.documentElement.classList.add("fnv--filter__colorfix");`;
let addFilter = `document.documentElement.classList.remove("fnv--filter__colorfix");
  document.documentElement.classList.add("fnv--filter__set");`;
let clearFilter = `document.documentElement.classList.remove("fnv--filter__set");
    document.documentElement.classList.remove("fnv--filter__colorfix");`;

browser.menus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "filinvert-100-color-fix")
    browser.tabs.executeScript(tab.id, {
      code: addFilterColorFix,
    });
  else if (info.menuItemId == "filinvert-100")
    browser.tabs.executeScript(tab.id, {
      code: addFilter,
    });
  else if (info.menuItemId == "filinvert-clear")
    browser.tabs.executeScript(tab.id, {
      code: clearFilter,
    });
});
