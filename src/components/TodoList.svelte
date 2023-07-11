<script lang="ts">
    import type { TodoItemData } from "../models/TodoItemData";
    import TodoItem from "./TodoItem.svelte";
    import { Button } from "flowbite-svelte";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let items: TodoItemData[] = [];

    function removeItem(item: TodoItemData) {
        dispatch("removeItem", item);
    }

    function addItem() {
        dispatch("addItem");
    }
</script>

<div class="flex flex-col">
    {#each items as item}
        <TodoItem bind:item={item} on:remove={() => removeItem(item)} />
    {/each}
    <div class="flex justify-end mx-3 mt-3">
        <Button on:click={addItem}>
            <i class="bi bi-plus-lg"></i>
        </Button>
    </div>
</div>