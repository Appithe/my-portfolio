import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
	integrations: [react(), svelte(), tailwind(), image()]
});