import tasksApp from './components/TasksApp.vue';
import TaskDrawer from './components/TaskDrawer.vue';
import TaskDetails from './components/TaskDetails.vue';
import TaskLabels from './components/TaskLabels.vue';
import TaskProjects from './components/TaskProject.vue';
import TaskAssignment from './components/TaskAssignment.vue';

import '../../css/main.less';

Vue.use(Vuetify);
Vue.component('task-drawer', TaskDrawer);
Vue.component('task-details', TaskDetails);
Vue.component('task-labels', TaskLabels);
Vue.component('task-projects', TaskProjects);
Vue.component('task-assignment', TaskAssignment);

const vuetify = new Vuetify({
    dark: true,
    iconfont: '',
});

// getting language of user
const lang = eXo && eXo.env && eXo.env.portal && eXo.env.portal.language || 'en';

const resourceBundleName = 'locale.addon.DigitalWorkplace';
const url = `${eXo.env.portal.context}/${eXo.env.portal.rest}/i18n/bundle/${resourceBundleName}-${lang}.json`;

export function init() {
//getting locale ressources
exoi18n.loadLanguageAsync(lang, url)
    .then(i18n => {
        // init Vue app when locale ressources are ready
        new Vue({
            render: h => h(tasksApp),
            i18n,
            vuetify,
        }).$mount('#digital-workplace-tasks');
    });
}
