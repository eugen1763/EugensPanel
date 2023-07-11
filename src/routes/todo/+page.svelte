<script lang="ts">
    import TodoList from "../../components/TodoList.svelte";
    import { TodoService } from "../../services/TodoService";
    import { onMount } from "svelte";
    import LoadingOverlay from "../../components/LoadingOverlay.svelte";

    let isLoading = true;
    const items = TodoService.Items;

    onMount(() => {
        TodoService.Init();
        isLoading = false;
    });
</script>

<div class="my-3 md:w-3/5 md:mx-auto">
    <LoadingOverlay isLoading={isLoading}>
        <TodoList
            bind:items={$items}
            on:addItem={TodoService.AddItem}
            on:removeItem={TodoService.RemoveItem}
        />
    </LoadingOverlay>
</div>
