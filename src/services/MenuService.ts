import type { MenuItem } from "../models/MenuItem";

export module Menu {
    export const Items: MenuItem[] = [
        {
            path: '/',
            title: "Home"
        },
        {
            path: '/test',
            title: "Test"
        }
    ]
}