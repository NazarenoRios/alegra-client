<script setup lang="ts">
import { RouterView } from "vue-router";
import useGetInitialSellers from "@/components/searchImages/composables/useGetInitialSellers";
import useGetInitialProducts from "@/features/composables/useGetInitialProducts";

useGetInitialSellers();
useGetInitialProducts();
</script>

<template>
  <RouterView />
</template>
