<script>
  import "../app.postcss";
  import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
</script>

<div
  class="absolute w-screen h-screen bg-white dark:bg-gray-800 bg-container flex flex-col overflow-auto justify-between"
>
  <Header />
  <div class="h-full">
    <slot />
  </div>
  <Footer />
</div>

<style>
  .bg-container {
    background-image: radial-gradient(circle, #aaa3 1px, rgba(0, 0, 0, 0) 1px);
    background-size: 1rem 1rem;
  }
</style>
