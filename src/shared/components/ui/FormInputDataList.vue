<template>
  <div class="w-full">
    <VueSelect
      v-model="local"
      :label="label"
      :reduce="renderId"
      @search="onSearch"
      :options="options"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import "vue-select/dist/vue-select.css";
//@ts-ignore
import VueSelect from "vue-select";

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  term: {
    type: [String, Number],
    default: "",
  },
  renderId: {
    type: Function,
    default: () => false,
  },
  label: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue", "update:term"]);
const local = ref(props.modelValue);

const onSearch = (value: string) => {
  emit("update:term", value);
};

watch(local, (value) => {
  emit("update:modelValue", value);
});

onMounted(() => {
  // Your onMounted logic here
  console.log("Component is mounted");
  onSearch("a");
  // You can perform additional setup or actions when the component is mounted
});
</script>
