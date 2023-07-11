<script lang="ts">
    import {
        Checkbox,
        Input,
        Button
    } from "flowbite-svelte";
    import type { TodoItemData } from "../models/TodoItemData";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let item: TodoItemData;

    function remove() {
        dispatch('remove');
    }
</script>

{#if item}
    <div class="my-2 mx-3 flex flex-row items-center">
        <Checkbox bind:checked={item.done} />
        <Input bind:value={item.title} />
        <Button class="ml-2" on:click={remove}>
            <i class="bi bi-dash-lg"></i>
        </Button>
    </div>
{/if}