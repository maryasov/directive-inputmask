// import Inputmask from "inputmask";
import Inputmask from "inputmask/dist/inputmask/inputmask.date.extensions";
// const Inputmask = require('inputmask/dist/inputmask/dependencyLibs/inputmask.dependencyLib.jquery');
// const Inputmask = require('inputmask');

export const DirectiveInputmask = {
  bind(el, binding, vnode) {
    console.log(Inputmask, el, binding);
    // Inputmask(binding.value).mask(el);
    let alias = binding.value.alias
    delete binding.value.alias
    // $(el).inputmask(alias, binding.value);
    Inputmask(alias, binding.value).mask(el);
  }
};
