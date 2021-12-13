import { renderSlot, openBlock, createElementBlock } from "vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {};
function _sfc_render$1(_ctx, _cache) {
  return renderSlot(_ctx.$slots, "default");
}
var ParentComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, "Child Component");
}
var ChildComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ChildComponent, ParentComponent };
