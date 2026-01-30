import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Counter } from './components/counter/counter';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "counter",
        component: Counter
    }
];
