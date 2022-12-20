<template>
    <div class=" overscroll-contain laypout  w-screen h-auto flex flex-col md:flex-row px-4 md:px-16 dark:bg-gray-800 ">
        <topnav />

        <SideNav />

        <main class="  w-full md:w-3/4 md:pl-8 flex flex-col overscroll-contain ">
            <slot />
            <myFooter />
        </main>
    </div>
</template>

<script>


</script>

<style lang="postcss" >

.html{
    @apply text-red-500
}

.body{
    @apply text-red-500
}
</style>