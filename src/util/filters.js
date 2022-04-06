import Vue from "vue";

Vue.filter("truncate", (text, length, clamp) => {
  const cod = clamp || "...";
  const node = document.createElement("div");
  node.innerHTML = text;
  const content = node.textContent;
  return content.length > length ? content.slice(0, length) + cod : content;
});
