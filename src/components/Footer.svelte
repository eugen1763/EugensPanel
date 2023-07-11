<script>
    import {
        Footer,
        FooterCopyright,
        FooterLinkGroup,
        FooterLink,
        DarkMode,
    } from "flowbite-svelte";
</script>

<Footer>
    <!-- <FooterCopyright href="/" by="Company™" year={2023} /> -->
    <FooterLinkGroup
        ulClass="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
    >
        <!-- <FooterLink href="/">About</FooterLink>
        <FooterLink href="/">Privacy Policy</FooterLink>
        <FooterLink href="/">Licensing</FooterLink>
        <FooterLink href="/">Contact</FooterLink> -->
        <DarkMode />
    </FooterLinkGroup>
</Footer>