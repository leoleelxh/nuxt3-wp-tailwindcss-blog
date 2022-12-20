<template>
    <!-- blog Start -->
    <section>
        <div class="cardgrid grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-16 dark:text-gray-200">
            <BlogCard v-for="i in 9" :key="i" title="This is test title" date="Sep 6, 2022"
                image="https://leolee.top/wordpress/wp-content/uploads/2022/11/1.webp" slug="blog-1" />


        </div>
    </section>
    <!-- blog end -->

</template>

<script lang="ts" setup>




</script>

<style scoped>

</style>