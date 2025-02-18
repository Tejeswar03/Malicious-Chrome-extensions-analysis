chrome.declarativeNetRequest.updateDynamicRules({
  addRules: [{
    id: 1,
    priority: 1,
    action: { type: 'modifyHeaders', responseHeaders: [{ operation: 'remove', header: 'content-security-policy' }] },
    condition: { urlFilter: '*', resourceTypes: ['main_frame', 'sub_frame'] }
  }],
  removeRuleIds: [1]
});
