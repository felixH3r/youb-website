<script setup lang="ts">
import { getToolGeoPageBySlug } from "~/data/toolGeoPages";

const page = getToolGeoPageBySlug("gear-ratio-calculator");

if (!page) {
  throw createError({
    statusCode: 404,
    statusMessage: "Tool page not found",
  });
}
</script>

<template>
  <ToolsToolGeoPage :page="page" />
</template>
