import { ref, Ref } from "vue";
import { computed } from "vue";
import { acceptHMRUpdate, defineStore } from "pinia";

export const useGenralStore = defineStore("general", () => {
  const teste: Ref<string> = ref("hello word");

  const mudarNomeDaStore = () => {
    teste.value = "Hello pinia";
  };

  function mudar(item: any) {
    teste.value = item;
  }

  return {
    mudarNomeDaStore,
    mudar,
    teste,
  };
});
