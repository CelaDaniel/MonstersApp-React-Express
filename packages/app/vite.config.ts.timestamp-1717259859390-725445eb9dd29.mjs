// vite.config.ts
import { defineConfig } from "file:///C:/Users/danie/OneDrive/Documents/Projects/DanielCela111/sisal-challenge/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/danie/OneDrive/Documents/Projects/DanielCela111/sisal-challenge/node_modules/@vitejs/plugin-react-swc/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3e3,
    watch: {
      usePolling: true,
      // Enable polling
      interval: 100,
      // Poll every 100 milliseconds (adjust as necessary)
      ignored: ["**/node_modules/**", "**/.git/**", "**/dist/**"]
      // Ignore changes in specified directories
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkYW5pZVxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcRGFuaWVsQ2VsYTExMVxcXFxzaXNhbC1jaGFsbGVuZ2VcXFxccGFja2FnZXNcXFxcYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkYW5pZVxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcRGFuaWVsQ2VsYTExMVxcXFxzaXNhbC1jaGFsbGVuZ2VcXFxccGFja2FnZXNcXFxcYXBwXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9kYW5pZS9PbmVEcml2ZS9Eb2N1bWVudHMvUHJvamVjdHMvRGFuaWVsQ2VsYTExMS9zaXNhbC1jaGFsbGVuZ2UvcGFja2FnZXMvYXBwL3ZpdGUuY29uZmlnLnRzXCI7Ly8gdml0ZS5jb25maWcuanNcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRwbHVnaW5zOiBbcmVhY3QoKV0sXG5cdHNlcnZlcjoge1xuXHRcdGhvc3Q6IFwiMC4wLjAuMFwiLFxuXHRcdHBvcnQ6IDMwMDAsXG5cdFx0d2F0Y2g6IHtcblx0XHRcdHVzZVBvbGxpbmc6IHRydWUsIC8vIEVuYWJsZSBwb2xsaW5nXG5cdFx0XHRpbnRlcnZhbDogMTAwLCAvLyBQb2xsIGV2ZXJ5IDEwMCBtaWxsaXNlY29uZHMgKGFkanVzdCBhcyBuZWNlc3NhcnkpXG5cdFx0XHRpZ25vcmVkOiBbXCIqKi9ub2RlX21vZHVsZXMvKipcIiwgXCIqKi8uZ2l0LyoqXCIsIFwiKiovZGlzdC8qKlwiXSwgLy8gSWdub3JlIGNoYW5nZXMgaW4gc3BlY2lmaWVkIGRpcmVjdG9yaWVzXG5cdFx0fSxcblx0fSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUVsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsUUFBUTtBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ04sWUFBWTtBQUFBO0FBQUEsTUFDWixVQUFVO0FBQUE7QUFBQSxNQUNWLFNBQVMsQ0FBQyxzQkFBc0IsY0FBYyxZQUFZO0FBQUE7QUFBQSxJQUMzRDtBQUFBLEVBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
