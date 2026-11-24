<script setup lang="ts">
// Fetched on the server during the first render, then hydrated in the browser.
const { data } = await useFetch('/api/hello')
const config = useRuntimeConfig()
</script>

<template>
  <h1>Nuxt on Containify</h1>
  <p>Edit <code>app/pages/index.vue</code> and push to deploy a new version.</p>
  <p>
    The server API at <a href="/api/hello">/api/hello</a> says: <strong>{{ data?.message }}</strong>,
    at <time :datetime="data?.at">{{ data?.at }}</time>.
  </p>
  <p>Greeting from runtime config: {{ config.public.greeting }}</p>
  <p class="links">
    <a href="https://nuxt.com/docs">Nuxt docs</a>
    <a href="https://containify.cloud/docs">Containify docs</a>
  </p>
</template>

<style scoped>
.links {
  display: flex;
  gap: 1.5rem;
}
</style>
