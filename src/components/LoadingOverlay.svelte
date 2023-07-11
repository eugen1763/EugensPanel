<script lang="ts">
    import { Spinner } from "flowbite-svelte";

    export let isLoading: boolean;
</script>

<div class="w-full h-full slot-container">
    <div>
        <slot />
    </div>
    {#if isLoading}
        <div class="w-full h-full flex justify-center items-center">
            <Spinner />
        </div>
    {/if}
</div>

<style>
    .slot-container {
        display: grid;
        grid-template-areas: "grid-overlay-area";
    }

    .slot-container > * {
        grid-area: grid-overlay-area;
        overflow: hidden;
    }
</style>
