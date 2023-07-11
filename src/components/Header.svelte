<script lang="ts">
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
    } from "flowbite-svelte";
    import { Menu } from "../services/MenuService";
    import { page } from "$app/stores";

    page.subscribe(page => {
    var possibleItems = Menu.Items.filter(item => 
        item.path === page.url.pathname || 
        item.path.startsWith(page.url.pathname));
    
    if (possibleItems.length > 0) {
        Menu.PageTitle.set(possibleItems[0].title);
    }
});
</script>

<Navbar let:hidden let:toggle color="gray">
    <NavBrand href="/">
        <!-- <img
            src="/images/flowbite-svelte-icon-logo.svg"
            class="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
        /> -->
        <span
            class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
        >
            Flowbite
        </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
        {#each Menu.Items as menuItem}
            <NavLi
                href={menuItem.path}
                active={$page.url.pathname === menuItem.path}
            >
                {menuItem.title}
            </NavLi>
        {/each}
    </NavUl>
</Navbar>
