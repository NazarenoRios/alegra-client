<script lang="ts" setup>
import CardBox from "../ui/CardBox.vue";
import SellerProgressDetail from "./SellerProgressDetail.vue";

defineProps({
  seller: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  disabled: {
    type: Boolean,
  },
  selected: {
    type: Boolean,
  },
});

defineEmits(["like", "previewImage"]);
</script>
<template>
  <CardBox
    :aria-disabled="disabled"
    :class="
      selected
        ? 'flex border-2 bg-gray-100 border-primary h-[20vh]'
        : 'flex items-center h-[20vh]'
    "
  >
    <img
      v-if="seller.image"
      :src="seller.image"
      class="w-24 h-24 rounded-xl bg-gray-50 cursor-pointer mt-6"
      :alt="seller.observations || ''"
      @click="$emit('previewImage')"
    />
    <div class="flex-1">
      <h3 class="font-semibold text-sm text-center">{{ seller.name }}</h3>
      <SellerProgressDetail
        @increment="$emit('like', seller)"
        :score="seller.score"
        :disabled="disabled"
      />
    </div>
  </CardBox>
</template>
