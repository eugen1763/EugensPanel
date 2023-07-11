import type { MenuItem } from "../models/MenuItem";
import { writable } from "svelte/store";

export module Menu {
    export const Items: MenuItem[] = [
        {
            path: '/',
            title: "Home"
        },
        {
            path: '/todo',
            title: "TODO List"
        }
    ];

    export const PageTitle = writable<string>("Home");
}