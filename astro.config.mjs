// @ts-check
import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
    site: isGitHubPages ? 'https://hunter2801a.github.io' : 'https://stash-ims-landing.vercel.app',
    base: isGitHubPages ? '/StashIMS-Landing' : '',
    output: 'static',
});
