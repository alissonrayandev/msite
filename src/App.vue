<template>
  <div :class="['app', { dark: isDarkMode }]">
    <div class="controls">
      <div class="locale-select">
        <select v-model="locale" @change="changeLocale">
          <option value="en">🇺🇸 EN</option>
          <option value="pt">🇧🇷 PT</option>
          <option value="es">🇪🇸 ES</option>
        </select>
      </div>
      <div v-if="false" class="toggle-darkmode" @click="toggleDarkMode">
        <span v-if="isDarkMode">🌙</span>
        <span v-else>☀️</span>
      </div>
    </div>
    <BackgroundParticles :isDarkMode="isDarkMode" />
    <ProfileCard />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import BackgroundParticles from './components/BackgroundParticles.vue';
import ProfileCard from './components/ProfileCard.vue';

export default {
  name: 'App',
  components: {
    BackgroundParticles,
    ProfileCard
  },
  setup() {
    const { locale } = useI18n({ useScope: 'global' });
    const isDarkMode = ref(true);

    const changeLocale = (event) => {
      locale.value = event.target.value;
    };

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      document.documentElement.setAttribute('data-theme', isDarkMode.value ? 'dark' : 'light');
    };

    onMounted(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
    });

    return {
      locale,
      isDarkMode,
      changeLocale,
      toggleDarkMode
    };
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

:root {
  --text-color: #333;
  --background-color: #ddddf0;
}

[data-theme="dark"] {
  --text-color: #fff;
  --background-color: #1d1d1d;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6em;
  font-family: 'Poppins', sans-serif;
  line-height: 1.3;
  color: var(--text-color);
  background-color: var(--background-color);
}

.app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.controls {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
  z-index: 100;
}

.locale-select select {
  padding: 8px;
  font-size: 1.4rem;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  color: var(--text-color);
  cursor: pointer;
}

.toggle-darkmode {
  font-size: 1.4rem;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: var(--background-color);
  color: var(--background-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
}

.toggle-darkmode:hover {
  transform: scale(1.1);
}
</style>
