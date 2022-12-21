<template>



    <div class="titlebar pt-16 flex flex-col dark:text-gray-200">
        <!-- back btn -->
        <div
            class=" bg-black z-50 dark:bg-gray-600 text-white w-16 h-16 rounded-lg sticky top-[84px] md:top-16 flex justify-center items-center hover:bg-gray-800">
            <NuxtLink @click="$router.back()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-full h-full p-4 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
                </svg>
            </NuxtLink>

        </div>

        <!-- title -->
        <h1 class=" blogtitle text-4xl xl:text-6xl font-bold pt-8 ">
            {{ post.title.rendered }}
        </h1>
        <h2 class=" pt-6 text-base text-gray-500">{{ post.date }}</h2>
        <!-- image -->
        <img class=" rounded-xl " :src="post._embedded['wp:featuredmedia'][0]?.source_url" :alt="post.title.rendered">

        <!-- contents -->
        <div v-html="post.content.rendered" class="blog_content ">
          

        </div>
    </div>

</template>

<script lang="ts" setup>
const params = useRoute().params;
const routename = useRoute().name;
useHead({
    title: `leolee.design-${params.slug}`,
    meta: [
        {
            name: "description",
            content: `${params.slug}`,
        },
    ],
});
const { data: posts } = await(await useWpApi()).getPost(params.slug as string);
const post = posts.value[0];


</script>



<style  lang="postcss" >
.blog_content {
    @apply leading-7 dark:text-gray-200
}

.blog_content h1,h2,h3,h4,h5
{
    @apply mt-10 font-bold mb-11
}

.blog_content p {
    @apply my-6 leading-7 text-base
}

.blog_content li {
    @apply my-10 leading-7
}

.blog_content em {
    @apply text-gray-300 dark:text-gray-500
}

.blog_content strong {
    @apply font-bold my-7 
}

.blog_content br {
    @apply my-6
}

.blog_content hr {
    @apply opacity-50 dark:opacity-20
}

.blog_content img {
    @apply rounded-xl 
}
</style>

