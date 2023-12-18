<script lang="ts" setup>
import SearchImageEngine from "@/components/searchImages/sections/SearchImageEngine.vue";
import PreviewWinner from "@/components/searchImages/sections/PreviewWinner.vue";
import useSearchImagesStore from "@/store/useSearchImagesStore";
import ModalBox from "@/shared/components/ui/ModalBox.vue";
import LoadingSpinner from "@/shared/components/ui/LoadingSpinner.vue";
import { defineAsyncComponent } from "vue";
import useSubscribeNewWinner from "@/components/searchImages/composables/useSubscribeNewWinner";
import useNewInvoiceStore from "@/store/useNewInvoiceStore";
import ToggleInvoicedTab from "@/components/newInvoice/sections/ToggleInvoicedTab.vue";
import InvoicePresenter from "@/shared/components/ui/InvoicePresenter.vue";

const ListSellerImages = defineAsyncComponent(
  () => import("../components/searchImages/sections/ListSellerImages.vue")
);

const searchImages = useSearchImagesStore();
const newInvoice = useNewInvoiceStore();
useSubscribeNewWinner();
</script>
<template>
  <div>
    <SearchImageEngine />
    <div class="md:mt-14 mx-4">
      <ToggleInvoicedTab />
      <InvoicePresenter class="fade-up" v-if="!searchImages.canSearch" />
      <Suspense v-else>
        <ListSellerImages />
        <template #fallback>
          <LoadingSpinner />
        </template>
      </Suspense>
    </div>
    <ModalBox :open="newInvoice.showNewInvoice">
      <PreviewWinner />
    </ModalBox>
  </div>
</template>
