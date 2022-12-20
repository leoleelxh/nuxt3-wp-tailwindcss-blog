<template>
    <div data-aos="fade-up" class="blogcard">
        <img v-if="image" class="w-full  h-[500px] md:h-[220px]  object-cover rounded-xl" :src="image" alt="">
        <h1 class=" text-base pt-5 text-gray-500">{{ date }}</h1>
        <!-- <NuxtLink class=" pt-8 text-3xl font-bold hover:underline" :to="`/${slug}`">{{ title }}</NuxtLink> -->

        <NuxtLink :to="`/${slug}`">
            <p class=" pt-3 text-3xl font-bold hover:underline">{{ title }}</p>
        </NuxtLink>

        <p v-if="excerpt" class=" ">{{ excerpt }}</p>



    </div>
</template>

<script lang="ts" setup>




defineProps<
    {
        title: string;
        image?: string;
        excerpt?: string;
        slug?: string;
        date: string;
    }>();


</script>

<style scoped>

</style>