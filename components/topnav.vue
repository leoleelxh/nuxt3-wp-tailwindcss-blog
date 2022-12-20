<template>
    <nav id="topnav"
        class=" w-full flex flex-col  z-50 bg-white h-20 sticky top-0 md:h-0 md:w-0 md:opacity-0 dark:text-gray-200 dark:bg-gray-800 ">
        <div class=" flex flex-row justify-between items-center ">
            <mylogo  />
            <div @click="menuisopen = !menuisopen">
                <svg v-if="menuisopen" xmlns="http://www.w3.org/2000/svg" @click="openmenu = !openmenu" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" @click="openmenu = !openmenu" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 md:w-0 md:h-0">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>


            </div>
        </div>



        <div id="openedmenu" v-if="openmenu"
            class=" absolute top-20  w-full h-screen backdrop-blur-md  pb-6 bg-white/90  dark:bg-gray-800/90">
            <div @click="openmenu = !openmenu, menuisopen = !menuisopen">
                <mynavitem />
            </div>

            <div class=" pt-4">
                <mysocial />
            </div>
        </div>

    </nav>
</template>

<script>
export default {
    data() {
        return {
            openmenu: false,
            menuisopen: false
        }
    }
}

</script>

<style scoped>

</style>