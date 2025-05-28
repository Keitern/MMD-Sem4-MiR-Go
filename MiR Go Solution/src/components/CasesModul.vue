<script setup>
import { useStoryblokApi } from '@storyblok/vue';
import { ref, onMounted } from 'vue';

const storyblokApi = useStoryblokApi();
const stories = ref([]);

onMounted(async () => {
  const response = await storyblokApi.get('cdn/stories', {
    version: 'published',
    starts_with: 'products/mir-go',
    per_page: 25,
    page: 1,
    resolve_links: 'url',
    sort_by: 'published_at:desc',
    language: 'en',
  });
  stories.value = response.data.stories;
});
</script>

<template>
  <div v-for="story in stories" :key="story.id">
    <h2>{{ story.name }}</h2>
    <!-- Vis yderligere data efter behov -->
  </div>
</template>