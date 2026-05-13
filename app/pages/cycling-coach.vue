<script setup lang="ts">
import { getGeoPageBySlug } from "~/data/geoPages";


const page = getGeoPageBySlug("cycling-coach");

if (!page) {
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
}
</script>

<template>
  <GeoLandingPage :page="page" />
</template>
