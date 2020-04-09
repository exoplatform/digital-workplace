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

Vue.directive('custom-click-outside', {
    bind: function (el, binding, vnode) {
        window.event = function (event) {
            if (!(el === event.target || el.contains(event.target))) {
                vnode.context[binding.expression](event);
            }
        };
        document.body.addEventListener('click', window.event);
    },
    unbind: function (el) {
        document.body.removeEventListener('click', window.event);
    }
});

const vuetify = new Vuetify({
    dark: true,
    iconfont: '',
});

// getting language of user
const lang = eXo && eXo.env && eXo.env.portal && eXo.env.portal.language || 'en';

const resourceBundleName = 'locale.portlet.dw.Portlets';
const url = `${eXo.env.portal.context}/${eXo.env.portal.rest}/i18n/bundle/${resourceBundleName}-${lang}.json`;

export function init(itemsLimit) {
//getting locale ressources
exoi18n.loadLanguageAsync(lang, url)
    .then(i18n => {
        // init Vue app when locale ressources are ready
        new Vue({
            data: {
                itemsLimit: itemsLimit
            },
            render: h => h(tasksApp),
            i18n,
            vuetify,
        }).$mount('#digital-workplace-tasks');
    });
}
