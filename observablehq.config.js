// See https://observablehq.com/framework/config for documentation.
export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: "Dev Experiments",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  pages: [
    {name: "Home", path: "/"},
    // {name: "Welcome", path: "/welcome"},
    // {
    //   name: "Miscellaneous",
    //   open: false,
    //   pages: [{ name: "Misc", path: "/misc/" }],
    // },
    // { name: "Info & Credits", path: "/info/" },
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="img/observable.png" type="image/png" sizes="32x32">',

  // The path to the source root.
  root: "src",

  // Some additional configuration options and their defaults:
  theme: ["glacier", "sun-faded"], // Overwritten by style custom css
  header: `<div style='width: 100%; text-align: right'><a href='https://www.abc.net.au'>${worm()}</a></div>`, // what to show in the header (HTML)
  // footer: "Built with Observable.", // what to show in the footer (HTML)
  // sidebar: true, // whether to show the sidebar
  toc: {
    show: true,
    label: "On this page",
  }, // whether to show the table of contents
  // pager: true, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  typographer: true, // smart quotes and other typographic improvements
  // preserveExtension: false, // drop .html from URLs
  // preserveIndex: false, // drop /index from URLs
  style: "styles/custom.css",

  home: `<span style="display: flex; align-items: center; font-weight: 500; gap: 0.5rem; margin-left: -0.5rem; color: var(--theme-foreground);">
    ${logo()} Dev Experiments
  </span>`,
  // dynamicPaths: ["/embeds/chart.js"],
}

function logo() {
  return `<svg width="24" height="24" viewBox="0 0 21.92930030822754 22.68549919128418" fill="currentColor">
  <path d="M10.9646 18.9046C9.95224 18.9046 9.07507 18.6853 8.33313 18.2467C7.59386 17.8098 7.0028 17.1909 6.62722 16.4604C6.22789 15.7003 5.93558 14.8965 5.75735 14.0684C5.56825 13.1704 5.47613 12.2574 5.48232 11.3427C5.48232 10.6185 5.52984 9.92616 5.62578 9.26408C5.7208 8.60284 5.89715 7.93067 6.15391 7.24843C6.41066 6.56618 6.74143 5.97468 7.14438 5.47308C7.56389 4.9592 8.1063 4.54092 8.72969 4.25059C9.38391 3.93719 10.1277 3.78091 10.9646 3.78091C11.977 3.78091 12.8542 4.00021 13.5962 4.43879C14.3354 4.87564 14.9265 5.49454 15.3021 6.22506C15.6986 6.97704 15.9883 7.7744 16.1719 8.61712C16.3547 9.459 16.447 10.3681 16.447 11.3427C16.447 12.067 16.3995 12.7593 16.3035 13.4214C16.2013 14.1088 16.0206 14.7844 15.7644 15.437C15.4994 16.1193 15.1705 16.7108 14.7739 17.2124C14.3774 17.714 13.8529 18.1215 13.1996 18.4349C12.5463 18.7483 11.8016 18.9046 10.9646 18.9046ZM12.8999 13.3447C13.4242 12.8211 13.7159 12.0966 13.7058 11.3427C13.7058 10.5639 13.4436 9.89654 12.92 9.34074C12.3955 8.78495 11.7441 8.50705 10.9646 8.50705C10.1852 8.50705 9.53376 8.78495 9.00928 9.34074C8.49569 9.87018 8.21207 10.5928 8.22348 11.3427C8.22348 12.1216 8.48572 12.7889 9.00928 13.3447C9.53376 13.9005 10.1852 14.1784 10.9646 14.1784C11.7441 14.1784 12.3891 13.9005 12.8999 13.3447ZM10.9646 22.6855C17.0199 22.6855 21.9293 17.6068 21.9293 11.3427C21.9293 5.07871 17.0199 0 10.9646 0C4.90942 0 0 5.07871 0 11.3427C0 17.6068 4.90942 22.6855 10.9646 22.6855Z"></path>
</svg>`
}

function worm() {
  return `<svg style="width: 24px; height: 24px; fill: var(--theme-foreground)" version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
  <path d="M57.733.28c15.15-.238 33.573 5.428 46 20.76 5.63 5.447 15.973 31.627 15.973 31.627l61.955 164.537c7.97 19.756 31.93 21.236 38.965 1.488L239.87 166.8l32.858 86.48c-15.973 29.157-31.435 36.304-49.765 42.966-21.346 6.68-46.932 4.477-65.245-6.9-6.086-3.947-22.06-14.318-32.86-40.516L59.616 66.494V232.53l24.417-70.16 31.325 87.586c-4.57 20.113-19.116 36.918-36.02 44.822-18.496 8.717-40.555 5.63-57.277-4.945C5.41 277.48.715 262.903 0 236.96L.22 57.366c1.9-29.91 21.017-46.193 37.794-53.486C45.67 1.16 48.944.418 57.734.28z"/>
  <path d="M343.146 299.71c-15.15.267-33.572-5.427-46.02-20.733-5.628-5.445-15.954-31.625-15.954-31.625L219.22 82.814c-7.987-19.784-31.93-21.264-38.965-1.5L161.01 133.21l-32.86-86.48c15.955-29.132 31.453-36.306 49.765-42.985 21.364-6.68 46.95-4.45 65.245 6.926 6.104 3.95 22.06 14.32 32.86 40.52l65.243 182.31V67.49l-24.397 70.16-31.344-87.586c4.57-20.14 19.135-36.926 36.04-44.82 18.478-8.7 40.555-5.64 57.258 4.942 16.668 12.327 21.347 26.93 22.06 52.845l-.237 179.626c-1.864 29.908-21 46.2-37.795 53.484-7.603 2.712-10.893 3.442-19.702 3.57z"/>
</svg>`
}
