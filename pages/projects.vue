<template>
    <div data-aos="fade-up" class=" flex w-full h-screen flex-col justify-center dark:text-gray-200">
        <h1 class=" pt-8 text-6xl   font-bold ">
            丰富的实战项目经验
        </h1>
        <h2 data-aos="fade-up" class=" pt-8 pr-8 text-xl">
            Björk is a clean, simple and fast block theme designed for blogs and personal websites.
        </h2>
    </div>
<!-- blog Start -->
<section>
    <div class="cardgrid grid gap-8 grid-cols-1 lg:grid-cols-2 pt-16 dark:text-gray-200">
        <BlogCard v-for="post in posts" :key="post.id" :title="post.title.rendered" :date="post.date"
            :image="post._embedded['wp:featuredmedia'][0]?.source_url" :slug="post.slug" />


    </div>
</section>
<!-- blog end -->
<!-- 11 -->

</template>




<script lang="ts" setup>

const { data: posts } = await(await useWpApi()).getPosts(3);

</script>

<style scoped>

</style>