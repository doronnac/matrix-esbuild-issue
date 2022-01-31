const esbuild = require("esbuild");
const alias = require("esbuild-plugin-alias");

esbuild.build({
  entryPoints: ["index.js"],
  bundle: true,
  outdir: "out/",
  platform: "browser",
  plugins: [
    // alias({
    //   crypto: require.resolve("crypto-browserify"),
    //   path: require.resolve("path-browserify"),
    //   fs: require.resolve("browserify-fs"),
    //   stream: require.resolve("stream-browserify"),
    // }),
  ],
});
