import Inputmask from "inputmask/dist/inputmask/inputmask.date.extensions";

export const DirectiveInputmask = {
  bind(el, binding, vnode) {
    let alias = binding.value.alias;
    delete binding.value.alias;
    Inputmask(alias, binding.value).mask(el);
  }
};
