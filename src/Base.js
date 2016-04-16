window.onload = function() {
  // 禁用浏览器右键菜单
  function block(event) {
    if (window.event) {
      event = window.event;
      event.returnValue = false;
    } else event.preventDefault();
  }
  document.oncontextmenu = block;
}