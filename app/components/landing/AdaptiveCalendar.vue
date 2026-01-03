<script setup lang="ts">
import { ref, onMounted } from "vue";

const days = [
  {
    name: "Mon",
    events: [
      {
        id: "deep-work",
        name: "Deep Work",
        subtitle: "Focus",
        top: "8.33%",
        adaptedTop: "8.33%",
        height: "16%",
        adaptedHeight: "16%",
        type: "work",
      },
      {
        id: "strategy-sync",
        name: "Strategy Sync",
        subtitle: "Internal",
        top: "41.66%",
        adaptedTop: "41.66%",
        height: "21%",
        adaptedHeight: "21%",
        type: "conflict",
      },
      {
        id: "training-mon",
        name: "Training",
        subtitle: "Strength",
        top: "58.33%",
        adaptedTop: "66.66%",
        height: "18%",
        adaptedHeight: "12%",
        type: "training",
        isAdaptable: true,
      },
    ],
  },
  {
    name: "Tue",
    events: [
      {
        id: "work-meeting-tue",
        name: "Work Meeting",
        subtitle: "Status Sync",
        top: "16.66%",
        adaptedTop: "16.66%",
        height: "15%",
        adaptedHeight: "15%",
        type: "work",
      },
    ],
  },
  {
    name: "Wed",
    events: [
      {
        id: "family-meeting",
        name: "Family Meeting",
        subtitle: "",
        top: "8.33%",
        adaptedTop: "8.33%",
        height: "15%",
        adaptedHeight: "15%",
        type: "work",
      },
      {
        id: "team-dinner",
        name: "Team Dinner",
        subtitle: "Social",
        top: "83.33%",
        adaptedTop: "83.33%",
        height: "15%",
        adaptedHeight: "15%",
        type: "conflict",
      },
      {
        id: "training-wed",
        name: "Evening Run",
        subtitle: "Aerobic",
        top: "87.5%",
        adaptedTop: "100%",
        height: "12%",
        adaptedHeight: "12%",
        type: "training",
        isAdaptable: true,
      },
    ],
  },
  {
    name: "Thu",
    events: [
      {
        id: "work-meeting-thu",
        name: "Work Meeting",
        subtitle: "Project Sync",
        top: "20.83%",
        adaptedTop: "20.83%",
        height: "15%",
        adaptedHeight: "15%",
        type: "work",
      },
      {
        id: "child-care",
        name: "Child Care",
        subtitle: "",
        top: "54.16%",
        adaptedTop: "54.16%",
        height: "20%",
        adaptedHeight: "20%",
        type: "conflict",
      },
      {
        id: "training-thu",
        name: "Recovery Walk",
        subtitle: "Mobility",
        top: "83.33%",
        adaptedTop: "91.66%",
        height: "12%",
        adaptedHeight: "8.33%",
        type: "training",
        isAdaptable: true,
      },
    ],
  },
  {
    name: "Fri",
    events: [
      {
        id: "training-fri",
        name: "Long Ride",
        subtitle: "Endurance",
        top: "41.66%",
        adaptedTop: "41.66%",
        height: "25%",
        adaptedHeight: "25%",
        type: "training",
      },
    ],
  },
];

const timeSlots = [
  "08:00",
  "10:00",
  "12:00",
  "14:00",
  "16:00",
  "18:00",
  "20:00",
];

const isAdapted = ref(false);

onMounted(() => {
  setInterval(() => {
    isAdapted.value = !isAdapted.value;
  }, 4000);
});
</script>

<template>
  <div
    class="adaptive-calendar w-full aspect-square md:aspect-video rounded-3xl border border-white/10 bg-black/40 backdrop-blur-2xl overflow-hidden p-4 md:p-6 shadow-2xl flex flex-col"
  >
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <div class="flex gap-1.5">
        <div class="w-2 h-2 rounded-full bg-white/20" />
        <div class="w-2 h-2 rounded-full bg-white/20" />
        <div class="w-2 h-2 rounded-full bg-white/20" />
      </div>
      <div
        class="text-white/40 text-[10px] font-mono tracking-widest uppercase opacity-50"
      >
        Intelligent Schedule
      </div>
    </div>

    <!-- Calendar Grid -->
    <div
      class="flex-1 grid grid-cols-[auto_repeat(3,1fr)] md:grid-cols-[auto_repeat(5,1fr)] gap-2 relative"
    >
      <!-- Time Labels -->
      <div class="flex flex-col justify-between py-2 pr-4">
        <span
          v-for="time in timeSlots"
          :key="time"
          class="text-[9px] text-white/20 font-mono"
          >{{ time }}</span
        >
      </div>

      <!-- Days Column -->
      <div
        v-for="day in days"
        :key="day.name"
        class="relative group"
        :class="{
          'hidden md:block': day.name === 'Tue' || day.name === 'Fri',
        }"
      >
        <div
          class="text-[9px] text-white/30 font-bold mb-2 text-center uppercase tracking-tighter"
        >
          {{ day.name }}
        </div>
        <div class="h-full border-l border-white/5 relative">
          <!-- Static Background Grid Lines (Subtle) -->
          <div
            v-for="i in 6"
            :key="i"
            class="absolute left-0 right-0 border-t border-white/5"
            :style="{ top: `${(i - 1) * 16.66}%` }"
          />

          <!-- Events for this day -->
          <template v-for="event in day.events" :key="event.id">
            <!-- Training Session -->
            <div
              v-if="event.type === 'training'"
              class="absolute left-1 right-1 rounded-lg bg-white border border-white px-1.5 py-1 md:py-1.5 shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all duration-1000 ease-in-out z-20 flex flex-col justify-center overflow-hidden"
              :style="{
                top:
                  isAdapted && event.isAdaptable ? event.adaptedTop : event.top,
                height:
                  isAdapted && event.isAdaptable
                    ? event.adaptedHeight
                    : event.height,
              }"
            >
              <div class="flex items-center gap-1 mb-0.5 min-w-0">
                <Icon
                  name="ph:barbell-fill"
                  class="w-2.5 h-2.5 md:w-3 md:h-3 shrink-0 text-black"
                />
                <div
                  class="text-[7px] md:text-[9px] font-black text-black leading-none uppercase tracking-tighter truncate flex-1"
                >
                  {{ event.name }}
                </div>
                <div
                  v-if="isAdapted && event.isAdaptable"
                  class="text-[4px] md:text-[5px] font-extrabold bg-black text-white px-0.5 py-0.25 rounded-[1px] animate-pulse-fast whitespace-nowrap"
                >
                  ADAPTED
                </div>
              </div>
              <div
                v-if="
                  parseFloat(
                    isAdapted && event.isAdaptable
                      ? event.adaptedHeight
                      : event.height
                  ) > 13.5
                "
                class="text-[6px] md:text-[7px] text-black/60 font-semibold leading-none truncate pl-3.5 md:pl-4"
              >
                {{ event.subtitle }}
              </div>
            </div>

            <!-- Conflict -->
            <div
              v-else-if="event.type === 'conflict'"
              class="absolute left-1 right-1 rounded-lg bg-white/10 border border-white/20 px-1.5 py-1 md:py-1.5 backdrop-blur-md transition-all duration-1000 origin-top z-10 flex flex-col justify-center overflow-hidden"
              :class="[
                isAdapted
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95 pointer-events-none',
              ]"
              :style="{
                top: isAdapted ? event.adaptedTop : event.top,
                height: isAdapted ? event.adaptedHeight : event.height,
              }"
            >
              <div
                class="text-[7px] md:text-[9px] font-bold text-white leading-none truncate"
              >
                {{ event.name }}
              </div>
              <div
                v-if="event.subtitle"
                class="text-[6px] md:text-[7px] text-white/40 leading-none mt-0.5 truncate"
              >
                {{ event.subtitle }}
              </div>
            </div>

            <!-- Standard/Work Event -->
            <div
              v-else
              class="absolute left-1 right-1 rounded-lg bg-white/5 border border-white/10 px-1.5 py-1 md:py-1.5 backdrop-blur-md transition-all duration-700 flex flex-col justify-center overflow-hidden"
              :style="{
                top:
                  isAdapted && event.isAdaptable ? event.adaptedTop : event.top,
                height:
                  isAdapted && event.isAdaptable
                    ? event.adaptedHeight
                    : event.height,
              }"
            >
              <div
                class="text-[7px] md:text-[9px] font-bold text-white/80 leading-none truncate"
              >
                {{ event.name }}
              </div>
              <div
                v-if="event.subtitle"
                class="text-[6px] md:text-[7px] text-white/30 leading-none mt-0.5 truncate"
              >
                {{ event.subtitle }}
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- Status Bar -->
    <div
      class="mt-6 pt-4 border-t border-white/5 flex items-center justify-between"
    >
      <div class="flex items-center gap-3">
        <div class="w-2 h-2 rounded-full bg-white animate-pulse" />
        <span
          class="text-[10px] text-white/60 font-medium uppercase tracking-widest"
        >
          {{ isAdapted ? "Syncing Life Events..." : "Analyzing Schedule..." }}
        </span>
      </div>
      <div class="text-[10px] text-white/30 font-mono">YOUB ENGINE v2.4</div>
    </div>
  </div>
</template>

<style scoped>
.adaptive-calendar {
  container-type: inline-size;
}

@keyframes pulse-subtle {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

@keyframes pulse-fast {
  0%,
  100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}

.animate-pulse {
  animation: pulse-subtle 2s infinite ease-in-out;
}

.animate-pulse-fast {
  animation: pulse-fast 1.5s infinite ease-in-out;
}
</style>
