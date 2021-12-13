import { renderSlot, openBlock, createElementBlock } from 'vue';

function render$1(_ctx, _cache) {
  return renderSlot(_ctx.$slots, "default");
}

const script$2 = {};
script$2.render = render$1;
var script$3 = script$2;

function render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, "Child Component");
}

const script = {};
script.render = render;
var script$1 = script;

export { script$1 as ChildComponent, script$3 as ParentComponent };
