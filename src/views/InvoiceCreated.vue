<script lang="ts" setup>
import OverviewBox from "@/shared/components/ui/OverviewBox.vue";
import useTranslation from "@/shared/composables/useTranslation";
import OverviewInvoiceCreated from "../components/invoiceCreated/sections/OverviewInvoiceCreated.vue";
const t = useTranslation();
</script>
<template>
  <OverviewBox :title="t('invoiceCreated.title')" />
  <OverviewInvoiceCreated />
</template>
