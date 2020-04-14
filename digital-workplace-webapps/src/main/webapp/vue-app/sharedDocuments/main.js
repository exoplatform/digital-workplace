import sharedDocumentsApp from './components/SharedDocumentsApp.vue';

import '../../css/main.less';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    dark: true,
    iconfont: '',
});

export function init() {
  new Vue({
    render: h => h(sharedDocumentsApp),
    vuetify,
  }).$mount('#digital-workplace-shared-documents');
}
