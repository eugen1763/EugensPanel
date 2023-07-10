<script>
  import { DarkMode } from "flowbite-svelte";
  import "../app.postcss";
</script>

<div class="absolute w-screen h-screen bg-white dark:bg-slate-800 bg-container">
  <slot />

  <DarkMode />
</div>

<style>
  .bg-container {
    background-image: radial-gradient(
      circle,
      #aaa3 1px,
      rgba(0, 0, 0, 0) 1px
    );
    background-size: 1rem 1rem;
  }
</style>
