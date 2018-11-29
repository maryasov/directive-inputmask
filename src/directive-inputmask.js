import Inputmask from 'inputmask'

export const DirectiveInputmask = {
  bind(el, binding, vnode) {
    console.log(Inputmask, el, binding);
    Inputmask(binding.value).mask(el);
  }
};
