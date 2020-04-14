import recentDocumentsApp from './components/RecentDocumentsApp.vue';

import '../../css/main.less';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  dark: true,
  iconfont: '',
});

export function init() {
  new Vue({
    render: h => h(recentDocumentsApp),
    vuetify,
  }).$mount('#digital-workplace-recent-documents');
}
