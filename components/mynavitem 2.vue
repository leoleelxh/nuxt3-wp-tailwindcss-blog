<template>

    <div id="menu" class="  md:h-auto overflow-hidden w-full flex justify-center items-center">
        <ul class=" text-2xl w-full h-fit overflow-hidden md:h-auto">
            <NuxtLink to="/">
                <li class=" pt-2 block border-b-4   w-fit border-blue-500 border-opacity-0 hover:border-opacity-100 
                 hover:w-fit transition-all ">Intro</li>
            </NuxtLink>

            <NuxtLink to="/skill">
                <li class=" pt-2 block border-b-4  w-fit border-green-500 border-opacity-0 hover:border-opacity-100 
                 hover:w-fit transition-all  ">Skills</li>
            </NuxtLink>

            <NuxtLink to="/projects">
                <li class=" pt-2 block border-b-4 w-fit border-yellow-500 border-opacity-0 hover:border-opacity-100 
                                 hover:w-fit transition-all  ">Projects</li>
            </NuxtLink>

            <NuxtLink to="/blog">
                <li class=" pt-2 block border-b-4 w-fit border-red-500 border-opacity-0 hover:border-opacity-100 
                 hover:w-fit transition-all  ">Blog</li>
            </NuxtLink>

        </ul>

    </div>

</template>

<script>
// export default {
//     data() {
//         return {
//             openmenu: false,
//             menuisopen: false
//         }
//     }
// }

</script>

<style scoped>

</style>