export default {
  async fetch(request, env, ctx) {
    const referer = request.headers.get("referer");
    const xrw = request.headers.get("x-requested-with");

    const isSuspicious =
      (!referer || referer.trim() === "") &&
      (!xrw || xrw.toLowerCase() === "null" || xrw.trim() === "");

    return new Response(
      JSON.stringify({ isSuspicious }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
};
