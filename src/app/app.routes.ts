import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Counter } from './components/counter/counter';
import { NotFound } from './components/not-found/not-found';
import { Tabs } from './components/tabs/tabs';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "counter",
        component: Counter
    },
    {
        path:"tabs",
        component: Tabs
    },
    {
        path: "**",
        component: NotFound
    }
];
