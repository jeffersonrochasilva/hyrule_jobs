<template>
  <div>
    <h1>Hello word</h1>
    <button @click="mudarmais()">click e mude o nome</button>
  </div>
</template>

<script lang="ts" setup>
import { useGenralStore } from "@/store/general";
const generalstore = useGenralStore();

function mudarmais() {
  generalstore.mudar("hello pinia");
}
</script>
