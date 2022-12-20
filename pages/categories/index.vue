<template>
    <!-- blog Start -->
    <section>
        <div class="cardgrid grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-16 dark:text-gray-200">
            <BlogCard v-for="post in posts" :key="post.id" :title="post.title.rendered" :date="post.date"
                :image="post._embedded['wp:featuredmedia'][0]?.source_url" :slug="post.slug" />


        </div>
    </section>
    <!-- blog end -->

</template> 

<script lang="ts" setup>

const { data: posts } = await(await useWpApi()).getPosts();

</script>

<style scoped>

</style>