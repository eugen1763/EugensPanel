import type { TodoItemData } from "../models/TodoItemData";
import { writable } from "svelte/store";

export module TodoService {
    const localStorageKey: string = "todo-items";
    export const Items = writable<TodoItemData[]>([]);

    export function AddItem() {
        Items.update(items => {
            items.push({
                title: '',
                done: false
            });

            return items;
        })
    }

    export function RemoveItem(eventData: CustomEvent<TodoItemData>) {
        const item = eventData.detail;
        Items.update(items => {
            const index = items.indexOf(item, 0);
            if (index > -1) {
                items.splice(index, 1);
            }

            return items;
        });
    }

    export function Init() {
        Items.set(getItems());
        Items.subscribe(items => {
            storeItems(items);
        });
    }

    function storeItems(items: TodoItemData[]) {
        localStorage.setItem(localStorageKey, JSON.stringify(items));
    }

    function getItems(): TodoItemData[] {
        const storedJson = localStorage.getItem(localStorageKey);
        return storedJson
            ? JSON.parse(storedJson) as TodoItemData[] || []
            : [];
    }
}