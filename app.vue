<template>
  <div class="">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script  >
export default {
  setup() {
  useHead({
      bodyAttrs: {
        class: 'dark:bg-gray-800'
      }
    })
  }
}
</script>

<style lang="postcss">



</style>
