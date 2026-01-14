import { defineComponent } from 'vue';

import { App } from 'antdv-next';

/**
 * 弹窗上下文
 * 提供 message, modal, notification 方法
 * @see https://ant.design/components/app-cn#global-scene-redux
 */
export const PopupContext = defineComponent({
  name: 'PopupContext',
  render() {
    const staticFunction = App.useApp();
    window.message = staticFunction.message;
    window.modal = staticFunction.modal;
    window.notification = staticFunction.notification;

    return null;
  },
});
