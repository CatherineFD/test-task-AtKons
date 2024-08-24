import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import InputLink from "../components/InputLink.vue";
import MultiSelect from "../components/MultiSelect.vue";
import TextInCell from "../components/TextInCell.vue";
import DataTimePicker from "../components/DataTimePicker.vue";


const routes: Array<RouteRecordRaw> = [
    {
        path: '/input-link',
        name: 'InputLink',
        component: InputLink,
    },
    {
        path: '/multi-select',
        name: 'MultiSelect',
        component: MultiSelect,
    },
    {
        path: '/text-in-cell',
        name: 'TextInCell',
        component: TextInCell,
    },
    {
        path: '/data-time-picker',
        name: 'DataTimePicker',
        component: DataTimePicker,
    },
    {
        path: '/about',
        name: 'MultiSelect',
        component: MultiSelect,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;