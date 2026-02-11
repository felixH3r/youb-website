<template>
  <div class="min-h-screen text-white">
    <div class="mx-auto pt-32 pb-20">
      <div class="max-w-screen-xl px-5 mx-auto">
        <h1 class="text-4xl font-bold text-center mb-6">
          {{ $t("legalNotice.title") }}
        </h1>

        <div class="space-y-6">
          <h2 class="text-xl font-semibold">
            {{ $t("legalNotice.serviceProvider") }}
          </h2>
          <p>
            Felix Hermanutz<br >
            Dr. Greilstraße 11 Top 3.09<br >
            St. Georgen im Attergau, 4880<br >
            AT - Austria
          </p>

          <h2 class="text-xl font-semibold">
            {{ $t("legalNotice.contactDetails") }}
          </h2>
          <p>
            Email:
            <a
              href="mailto:felix@youb.app"
              class="text-blue-400 hover:underline"
              >felix@youb.app</a
            ><br >
          </p>

          <h2 class="text-xl font-semibold">
            {{ $t("legalNotice.soleProprietorship") }}
          </h2>
          <p>
            {{ $t("legalNotice.soleProprietorshipText") }}
          </p>

          <h2 class="text-xl font-semibold">
            {{ $t("legalNotice.responsibleContent") }}
          </h2>
          <p>
            Felix Hermanutz<br >
            Dr. Greilstraße 11 Top 3.09<br >
            St. Georgen im Attergau, 4880<br >
            AT - Austria
          </p>

          <h2 class="text-xl font-semibold mb-4">
            {{ $t("legalNotice.businessInfo") }}
          </h2>
          <ul class="list-none space-y-2">
            <li>
              <strong>{{ $t("legalNotice.businessStructure") }}:</strong>
              {{ $t("legalNotice.businessStructureText") }}
            </li>
            <li>
              <strong>{{ $t("legalNotice.tradeAuthority") }}:</strong>
              {{ $t("legalNotice.tradeAuthorityText") }}
            </li>
            <li>
              <strong>{{ $t("legalNotice.tradeRegulations") }}:</strong>
              <a
                href="https://www.ris.bka.gv.at/"
                class="text-blue-400 underline"
                target="_blank"
                >{{ $t("legalNotice.tradeRegulationsLink") }}</a
              >
              {{ $t("legalNotice.tradeRegulationsText") }}
            </li>
            <li>
              <strong>{{ $t("legalNotice.vatNumber") }}:</strong>
              {{ $t("legalNotice.vatNumberText") }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
