export default {
    async fetch(request, env) {
        // Serve static assets using the ASSETS binding
        return env.ASSETS.fetch(request);
    }
};
