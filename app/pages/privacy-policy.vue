<template>
  <div class="min-h-screen text-white">
    <div class="mx-auto pt-32 pb-20">
      <div class="max-w-screen-xl px-5 mx-auto">
        <NuxtLink
          target="_blank"
          to="/privacy.pdf"
          class="p-4 bg-stone-100/10 text-white rounded-xl hover:bg-stone-300/20 transition-colors inline-block"
        >
          {{ $t("privacyPolicy.downloadPdf") }}
        </NuxtLink>

        <h1 class="text-4xl font-bold text-center mb-6 mt-10">
          {{ $t("privacyPolicy.title") }}
        </h1>

        <div class="space-y-6">
          <p>
            <strong>{{ $t("privacyPolicy.version") }}:</strong> 1.1 (December
            2025)<br >
            <strong>{{ $t("privacyPolicy.effectiveDate") }}:</strong> 1.
            December 2025
          </p>

          <div class="space-y-4">
            <h2 class="text-xl font-semibold">
              {{ $t("privacyPolicy.controller") }}:
            </h2>
            <p>
              Felix Hermanutz<br >
              Herrenstraße 2, Top 20<br >
              4020 Linz<br >
              AT - Austria<br >
              <a
                href="mailto:felix@youb.app"
                class="text-blue-400 hover:underline"
                >felix@youb.app</a
              >
            </p>
          </div>

          <p>
            {{ $t("privacyPolicy.intro") }}
          </p>

          <div class="space-y-4">
            <h2 class="text-xl font-semibold">
              {{ $t("privacyPolicy.section1.title") }}
            </h2>
            <p>
              {{ $t("privacyPolicy.section1.content") }}<br >
              Felix Hermanutz<br >
              <a
                href="mailto:felix@youb.app"
                class="text-blue-400 hover:underline"
                >felix@youb.app</a
              >
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-xl font-semibold">
              {{ $t("privacyPolicy.section2.title") }}
            </h2>
            <p>
              {{ $t("privacyPolicy.section2.content") }}
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-xl font-semibold">
              {{ $t("privacyPolicy.section3.title") }}
            </h2>
            <p>
              {{ $t("privacyPolicy.section3.content") }}
            </p>
            <ul class="list-disc pl-6">
              <li>
                <strong>Article 6(1)(a) GDPR:</strong>
                {{ $t("privacyPolicy.section3.item1") }}
              </li>
              <li>
                <strong>Article 9(2)(a) GDPR:</strong>
                {{ $t("privacyPolicy.section3.item2") }}
              </li>
            </ul>
          </div>

          <div class="space-y-4">
            <h2 class="text-xl font-semibold">
              {{ $t("privacyPolicy.section4.title") }}
            </h2>
            <p>
              {{ $t("privacyPolicy.section4.content") }}
            </p>
            <ul class="list-disc pl-6">
              <li
                v-for="(item, index) in $tm('privacyPolicy.section4.items')"
                :key="index"
              >
                {{ $rt(item) }}
              </li>
            </ul>
          </div>

          <div class="space-y-4">
            <h2 class="text-xl font-semibold">
              {{ $t("privacyPolicy.section5.title") }}
            </h2>
            <p>
              {{ $t("privacyPolicy.section5.content") }}
            </p>

            <h3 class="text-lg font-semibold">
              {{ $t("privacyPolicy.section5.sub1.title") }}
            </h3>
            <p>
              {{ $t("privacyPolicy.section5.sub1.content1") }}
            </p>
            <ul class="list-disc pl-6">
              <li
                v-for="(item, index) in $tm(
                  'privacyPolicy.section5.sub1.items'
                )"
                :key="index"
              >
                {{ $rt(item) }}
              </li>
            </ul>
            <p>
              {{ $t("privacyPolicy.section5.sub1.content2") }}
            </p>

            <h3 class="text-lg font-semibold">
              {{ $t("privacyPolicy.section5.sub2.title") }}
            </h3>
            <p>{{ $t("privacyPolicy.section5.sub2.content") }}</p>
            <ul class="list-disc pl-6">
              <li
                v-for="(item, index) in $tm(
                  'privacyPolicy.section5.sub2.items'
                )"
                :key="index"
              >
                {{ $rt(item) }}
              </li>
            </ul>
            <p>
              {{ $t("privacyPolicy.section5.sub2.content2") }}
            </p>

            <h3 class="text-lg font-semibold">
              {{ $t("privacyPolicy.section5.sub3.title") }}
            </h3>
            <ul class="list-disc pl-6">
              <li
                v-for="(item, index) in $tm(
                  'privacyPolicy.section5.sub3.items'
                )"
                :key="index"
              >
                {{ $rt(item) }}
              </li>
            </ul>

            <h3 class="text-lg font-semibold">
              {{ $t("privacyPolicy.section5.sub4.title") }}
            </h3>
            <p>
              {{ $t("privacyPolicy.section5.sub4.content") }}
            </p>

            <h3 class="text-lg font-semibold">
              {{ $t("privacyPolicy.section5.sub5.title") }}
            </h3>
            <p>
              {{ $t("privacyPolicy.section5.sub5.content") }}
            </p>
            <ul class="list-disc pl-6">
              <li
                v-for="(item, index) in $tm(
                  'privacyPolicy.section5.sub5.items'
                )"
                :key="index"
              >
                {{ $rt(item) }}
              </li>
            </ul>
          </div>

          <div class="space-y-4">
            <h2 class="text-xl font-semibold">
              {{ $t("privacyPolicy.section6.title") }}
            </h2>
            <p>
              {{ $t("privacyPolicy.section6.content1") }}
            </p>
            <p>
              <strong>Important clarification:</strong>
              {{ $t("privacyPolicy.section6.content2") }}
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-xl font-semibold">
              {{ $t("privacyPolicy.section7.title") }}
            </h2>
            <p>
              {{ $t("privacyPolicy.section7.content") }}
            </p>
            <p>
              {{ $t("privacyPolicy.section7.content2") }}
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-xl font-semibold">
              {{ $t("privacyPolicy.section8.title") }}
            </h2>
            <p>
              {{ $t("privacyPolicy.section8.content") }}
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-xl font-semibold">
              {{ $t("privacyPolicy.section9.title") }}
            </h2>
            <p>{{ $t("privacyPolicy.section9.content") }}</p>
            <ul class="list-disc pl-6">
              <li
                v-for="(item, index) in $tm('privacyPolicy.section9.items')"
                :key="index"
              >
                {{ $rt(item) }}
              </li>
            </ul>
            <p>
              {{ $t("privacyPolicy.section9.contact") }}
              <a
                href="mailto:felix@youb.app"
                class="text-blue-400 hover:underline"
                >felix@youb.app</a
              >.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-xl font-semibold">
              {{ $t("privacyPolicy.section10.title") }}
            </h2>
            <p>
              {{ $t("privacyPolicy.section10.content") }}
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-xl font-semibold">
              {{ $t("privacyPolicy.section11.title") }}
            </h2>
            <p>
              {{ $t("privacyPolicy.section11.content") }}
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-xl font-semibold">
              {{ $t("privacyPolicy.section12.title") }}
            </h2>
            <p>
              {{ $t("privacyPolicy.section12.content") }}
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-xl font-semibold">
              {{ $t("privacyPolicy.section13.title") }}
            </h2>
            <p>
              {{ $t("privacyPolicy.section13.content") }}<br >
              {{ $t("privacyPolicy.section13.address") }}<br >
              <a
                href="mailto:felix@youb.app"
                class="text-blue-400 hover:underline"
                >felix@youb.app</a
              >
            </p>
          </div>

          <p>
            {{ $t("privacyPolicy.consent") }}
          </p>

          <p>
            {{ $t("privacyPolicy.footer") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
