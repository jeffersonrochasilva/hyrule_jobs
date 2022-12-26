<template>
  <div class="home">
    <h1>{{ rename(name) }}</h1>
  </div>
</template>

<script lang="ts" setup>
const name = "jefferson";
const rename = (item: string): string => {
  return item.toUpperCase();
};
</script>
