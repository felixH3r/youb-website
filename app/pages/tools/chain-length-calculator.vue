<script setup lang="ts">
import { getToolGeoPageBySlug } from "~/data/toolGeoPages";

const page = getToolGeoPageBySlug("chain-length-calculator");

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
