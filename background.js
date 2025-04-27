chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "metaSearchQuery",
    title: "Query with MetaSearch",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "metaSearchQuery") {
    chrome.storage.local.set({ selectedText: info.selectionText });
    chrome.action.openPopup();
  }
});
