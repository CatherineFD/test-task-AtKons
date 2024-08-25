import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import InputLink from "../components/InputLink.vue";
import MultiSelect from "../components/MultiSelect.vue";
import TextInCell from "../components/TextInCell.vue";
import DataTimePicker from "../components/DataTimePicker.vue";
import TableWithSearch from "../components/TableWithSearch.vue";


const routes: Array<RouteRecordRaw> = [
    { path: '/', redirect: '/input-link' },
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
        path: '/table-with-search',
        name: 'TableWithSearch',
        component: TableWithSearch,
    },
];

const router = createRouter({
    history: createWebHistory('/test-task-AtKons/'),
    routes,
});

export default router;