<template>
  <NavBar />
  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>

</template>

<script setup>
import NavBar from './components/Layout/NavBar.vue';

import { onMounted } from 'vue';
import { useStoreNotes } from './stores/storeNotes';

const storeNotes = useStoreNotes()

onMounted(() => {
  storeNotes.getNote()
})
</script>

<style>
@import 'bulma/css/bulma.min.css'
</style>
