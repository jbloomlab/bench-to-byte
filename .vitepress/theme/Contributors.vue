<script>
import { contributorsData } from '../../contributors.js';

export default {
  data() {
    return {
      contributors: contributorsData
    };
  },
  computed: {
    gridStyle() {
      const columns = this.contributors.length;
      return {
        'grid-template-columns': `repeat(auto-fit, minmax(150px, 1fr))`,
        'max-width': `${210 * columns}px`
      };
    }
  }
};

</script>

<template>
  <div class="contributors-container">
    <h2>Contributors</h2>
    <div class="grid-container" :style="gridStyle">
      <div v-for="contributor in contributors" :key="contributor.name" class="contributor">
        <img :src="contributor.image" :alt="contributor.name" class="contributor-image">
        <div class="contributor-name">{{ contributor.name }}</div>
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --text-color-light: rgba(60, 60, 67, 0.78);
  /* Light mode text color */
  --text-color-dark: #ffffff;
  /* Dark mode text color */
}

.theme-default {
  --text-color: var(--text-color-light);
}

.theme-default-dark {
  --text-color: var(--text-color-dark);
}

.contributors-container {
  text-align: center;
  margin-top: 100px;
}

.grid-container {
  display: grid;
  gap: 10px;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

.contributor {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contributors-container h2 {
  font-size: 1.5em;
  margin-bottom: 0.5em;
  /* color: rgba(60, 60, 67, 0.78); */
}

.contributor-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.contributor-name {
  margin-top: 2px;
  /* color: rgba(60, 60, 67, 0.78); */
}

.contributors-container h2,
.contributor-name {
  color: var(--text-color);
}
</style>