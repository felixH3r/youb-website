<template>
  <section
    id="waitlist"
    class="relative w-full py-24 md:py-32 px-4 overflow-hidden min-h-[800px] flex items-center"
  >
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <img
        src="/LoneCyclistMountain.png"
        alt="Cyclist in mountains"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      <div
        class="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/20 to-transparent"
      />
      <div
        class="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black via-black/20 to-transparent"
      />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto w-full">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <!-- Text Content -->
        <div
          class="text-center lg:text-left animate-in fade-in slide-in-from-bottom-8 duration-1000"
        >
          <h2
            class="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 leading-[1.1]"
          >
            {{ $t("waitlist.title") }}
          </h2>
          <p
            class="text-lg md:text-xl text-white/70 leading-relaxed font-light max-w-xl mx-auto lg:mx-0"
          >
            {{ $t("waitlist.subtitle") }}
          </p>
        </div>

        <!-- Waitlist Form -->
        <div
          class="w-full max-w-md mx-auto lg:ml-auto lg:mr-0 p-8 md:p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 shadow-2xl overflow-hidden"
        >
          <div
            v-if="submitted"
            class="text-center py-8 animate-in fade-in duration-500"
          >
            <div
              class="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 text-white"
            >
              <Icon name="ph:check-bold" class="w-10 h-10" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Fast geschafft!</h3>
            <p class="text-white/60 leading-relaxed italic mb-8">
              Wir haben dir eine E-Mail zur Bestätigung gesendet. Bitte schau in
              dein Postfach (und ggf. Spam-Ordner).
            </p>
            <button
              @click="submitted = false"
              class="text-white/40 hover:text-white transition-colors text-sm font-medium"
            >
              Noch eine Anmeldung?
            </button>
          </div>

          <form v-else @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name Field -->
            <div class="space-y-2">
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-all duration-300"
                :placeholder="$t('waitlist.form.name')"
              />
            </div>

            <!-- Email Field -->
            <div class="space-y-2">
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-all duration-300"
                :placeholder="$t('waitlist.form.email')"
              />
            </div>

            <!-- Sport Dropdown -->
            <div class="space-y-2">
              <div class="relative">
                <select
                  id="sport"
                  v-model="form.sport"
                  required
                  class="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white appearance-none focus:outline-none focus:border-white/30 transition-all duration-300 cursor-pointer"
                >
                  <option value="" disabled selected>
                    {{ $t("waitlist.form.sport.label") }}
                  </option>
                  <option value="triathlon">
                    {{ $t("waitlist.form.sport.triathlon") }}
                  </option>
                  <option value="cycling">
                    {{ $t("waitlist.form.sport.cycling") }}
                  </option>
                  <option value="running">
                    {{ $t("waitlist.form.sport.running") }}
                  </option>
                  <option value="other">
                    {{ $t("waitlist.form.sport.other") }}
                  </option>
                </select>
                <div
                  class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/40"
                >
                  <Icon name="ph:caret-down-light" class="w-5 h-5" />
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="loading"
              class="w-full group relative px-8 py-5 rounded-2xl bg-white text-black font-semibold text-lg hover:bg-white/90 active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100 overflow-hidden cursor-pointer"
            >
              <div class="relative z-10 flex items-center justify-center gap-2">
                <span v-if="!loading">{{ $t("waitlist.form.submit") }}</span>
                <span v-else class="flex items-center gap-2">
                  <Icon
                    name="ph:circle-notch-bold"
                    class="w-5 h-5 animate-spin"
                  />
                  {{ $t("waitlist.form.submit") }}
                </span>
                <Icon
                  name="ph:arrow-right-bold"
                  class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  v-if="!loading"
                />
              </div>
            </button>

            <!-- Error Message -->
            <p
              v-if="error"
              class="text-red-400 text-sm text-center animate-in fade-in duration-300"
            >
              {{ error }}
            </p>

            <!-- Microcopy -->
            <p
              class="mt-8 text-center text-sm text-white/40 leading-relaxed max-w-[280px] mx-auto"
            >
              {{ $t("waitlist.microcopy") }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const form = ref({
  name: "",
  email: "",
  sport: "",
});

const loading = ref(false);
const submitted = ref(false);
const error = ref("");

const handleSubmit = async () => {
  loading.value = true;
  error.value = "";

  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: form.value,
    });
    submitted.value = true;
    form.value = { name: "", email: "", sport: "" };
  } catch (err: any) {
    console.error("Submission Error:", err);
    error.value =
      err.data?.statusMessage || "Something went wrong. Please try again.";
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.animate-in {
  animation-fill-mode: both;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-in-from-bottom {
  from {
    transform: translateY(var(--tw-enter-translate-y, 2rem));
  }
  to {
    transform: translateY(0);
  }
}

.fade-in {
  animation-name: fade-in;
}

.slide-in-from-bottom-8 {
  --tw-enter-translate-y: 2rem;
  animation-name: fade-in, slide-in-from-bottom;
}

.slide-in-from-bottom-12 {
  --tw-enter-translate-y: 3rem;
  animation-name: fade-in, slide-in-from-bottom;
}

.delay-300 {
  animation-delay: 300ms;
}

/* Custom styles for select dropdown */
select {
  background-image: none;
}

select option {
  background-color: #1a1a1a;
  color: white;
}

/* Ensure backdrop blur works on safari */
.backdrop-blur-3xl {
  -webkit-backdrop-filter: blur(64px);
  backdrop-filter: blur(64px);
}
</style>
