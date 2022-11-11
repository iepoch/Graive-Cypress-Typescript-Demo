import { defineConfig } from 'cypress';
import dotenvPlugin from 'cypress-dotenv';

export default defineConfig({
    e2e: {
        setupNodeEvents(on: any, config: any): void {
            config = dotenvPlugin(config);
            return config;
        },
        baseUrl: 'https://www.giantbomb.com/api/',
    },
});
