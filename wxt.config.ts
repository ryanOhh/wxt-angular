import { defineConfig } from 'wxt';
import angular from '@analogjs/vite-plugin-angular';

// export default defineConfig({
//   vite: () => ({
//     plugins: [angular()],
//     resolve: {
//       mainFields: ['module'],
//     },
//   }),
// });

export default defineConfig({
  vite: () => ({
    plugins: [
      angular({
        transformFilter: (_, id) => !(id.endsWith('background.ts') || id.endsWith('content.ts')),
      }),
    ],
  }),
})

// export default defineConfig({
//   modules: ['@analogjs/vite-plugin-angular']
// });
// // https://vitejs.dev/config/
// export default defineConfig({
//   resolve: {
//     mainFields: ['module'],
//   },
//
//   plugins: [angular()],
// });

// // import react from '@vitejs/plugin-react';
//
// export default defineConfig({
//   vite: () => ({
//     plugins: [angular()],
//   }),
// });



