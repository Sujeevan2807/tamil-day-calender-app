import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
   base: '/tamil-day-calender-app/',
     build: {
       rollupOptions: {
         input: {
            main: resolve(__dirname, "index.html"),
         },
       },
     },
});
