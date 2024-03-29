import Vue from 'vue'
Vue.directive('click-outside', {
    bind: function (el, binding, vnode) {
      event = function (event) {
        if (!(el == event.target || el.contains(event.target))) {
          vnode.context[binding.expression](event);
        }
      };
      document.body.addEventListener('click',  event)
    },
    unbind: function (el) {
      document.body.removeEventListener('click',  event)
    },
  });