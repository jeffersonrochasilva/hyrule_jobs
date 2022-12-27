<template>
  <div class="home">
    <h1>{{ rename(name) }}</h1>
    <HelloWord />
    <h1>este é o resultado da general store : {{ text }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";
import { onMounted, computed } from "vue";
import HelloWord from "@/components/HelloWord.vue";
import { useGenralStore } from "../store/general";
const generalStore = useGenralStore();
let name: Ref<string> = ref("Jefferson");

const rename = (item: string): string => {
  return item.toUpperCase();
};

const text = computed(() => generalStore.teste);

onMounted(() => {
  alert("carregou o mounted");
});
</script>
