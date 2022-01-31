# Week 4 Notes

[RollupJS](https://rollupjs.org/guide/en/) is a module bundler. Competitors include Web Pack and Parcel.

Although ES6 supports code modularization it can cause some performance issues.
In order for a modern browser to deal with modules, it has to download mutliple
files. And sometimes only small bits of code are exported/imported and used from
any one file download. Thus, similar to CSS imports, the browser has to make
multiple requests and download more files than necessary.
