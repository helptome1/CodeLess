#!/usr/bin/env zx
import {createRequire as __$$createRequireN} from 'module';var require=__$$createRequireN(import.meta.url);
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};

// node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js
import { createRequire as __$$createRequire } from "module";
var require2;
var init_client = __esm({
  "node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js"() {
    require2 = __$$createRequire("file:///Users/heziguang/Desktop/Person-project/lowcode/node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js");
  }
});

// scripts/util.ts
function printObject(object, method = "log") {
  for (const [key, value] of Object.entries(object)) {
    console[method](`${key}:
${value}
`);
  }
}
var init_util = __esm({
  "scripts/util.ts"() {
    init_client();
  }
});

// scripts/check.ts
var check_exports = {};
import { $ } from "zx";
var init_check = __esm({
  async "scripts/check.ts"() {
    init_client();
    init_util();
    await Promise.all([$`pnpm type-check`, $`pnpm lint:stage`]).catch((out) => {
      printObject(out);
      throw new Error(out.stdout);
    });
  }
});

// scripts/pre-commit.ts
init_client();
import { $ as $2 } from "zx";
console.log("\u5F00\u59CB\u6267\u884C\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30...\n");
await init_check().then(() => check_exports).catch(() => {
  throw new Error("\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30\u5931\u8D25, \u8BF7\u68C0\u67E5\u4EE3\u7801");
});
console.log('printf "\u68C0\u6D4B\u901A\u8FC7, \u521B\u5EFA commit \u4E2D...\n');
await $2`git add .`;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL3Rzbm9AMi4wLjAvbm9kZV9tb2R1bGVzL3Rzbm8vZGlzdC9jbGllbnQuanMiLCAic2NyaXB0cy91dGlsLnRzIiwgInNjcmlwdHMvY2hlY2sudHMiLCAic2NyaXB0cy9wcmUtY29tbWl0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2NyZWF0ZVJlcXVpcmUgYXMgX18kJGNyZWF0ZVJlcXVpcmV9IGZyb20gJ21vZHVsZSc7dmFyIHJlcXVpcmU9X18kJGNyZWF0ZVJlcXVpcmUoXCJmaWxlOi8vL1VzZXJzL2hlemlndWFuZy9EZXNrdG9wL1BlcnNvbi1wcm9qZWN0L2xvd2NvZGUvbm9kZV9tb2R1bGVzLy5wbnBtL3Rzbm9AMi4wLjAvbm9kZV9tb2R1bGVzL3Rzbm8vZGlzdC9jbGllbnQuanNcIik7XG5pbXBvcnQge1xuICBjb2xvcnNcbn0gZnJvbSBcIi4vY2h1bmstRkhEWFhPS1kuanNcIjtcblxuXG4vLyBzcmMvY2xpZW50LnRzXG52YXIgZmV0Y2ggPSAodXJsLCBpbml0KSA9PiBpbXBvcnQoXCIuL3NyYy00UTdRNjdDMy5qc1wiKS50aGVuKChyZXMpID0+IHJlcy5kZWZhdWx0KHVybCwgaW5pdCkpO1xudmFyIGF4aW9zID0gKGNvbmZpZykgPT4gaW1wb3J0KFwiLi9heGlvcy1QSVo0QzVVWi5qc1wiKS50aGVuKChyZXMpID0+IHJlcy5kZWZhdWx0KGNvbmZpZykpO1xuZXhwb3J0IHtcbiAgYXhpb3MsXG4gIGNvbG9ycyxcbiAgZmV0Y2hcbn07XG4iLCAiaW1wb3J0IHsgUHJvY2Vzc091dHB1dCB9IGZyb20gJ3p4L2NvcmUnXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludE9iamVjdChcbiAgb2JqZWN0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IFByb2Nlc3NPdXRwdXQsXG4gIG1ldGhvZDogJ2xvZycgfCAnd2FybicgfCAnZXJyb3InID0gJ2xvZydcbikge1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmplY3QpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlW21ldGhvZF0oYCR7a2V5fTpcXG4ke3ZhbHVlfVxcbmApXG4gIH1cbn1cbiIsICIjIS91c3IvYmluL2VudiB6eFxuXG5pbXBvcnQgdHlwZSB7IFByb2Nlc3NPdXRwdXQgfSBmcm9tICd6eCdcbmltcG9ydCB7ICQgfSBmcm9tICd6eCdcbmltcG9ydCB7IHByaW50T2JqZWN0IH0gZnJvbSAnLi91dGlsJ1xuXG4vLyBhd2FpdCAkYHBucG0gc3BlbGxjaGVja2AuY2F0Y2goKG91dDogUHJvY2Vzc091dHB1dCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhvdXQpXG5cbi8vICAgdGhyb3cgbmV3IEVycm9yKG91dC5zdGRvdXQpXG4vLyB9KVxuXG4vLyBhd2FpdCBQcm9taXNlLmFsbChbJGBwbnBtIHR5cGUtY2hlY2tgLCAkYHBucG0gbGludGBdKS5jYXRjaCgob3V0OiBQcm9jZXNzT3V0cHV0KSA9PiB7XG4vLyAgIHByaW50T2JqZWN0KG91dClcbi8vICAgdGhyb3cgbmV3IEVycm9yKG91dC5zdGRvdXQpXG4vLyB9KVxuXG4vLyBjaGVjayB0eXBlIGFuZCBzdGFnZVxuYXdhaXQgUHJvbWlzZS5hbGwoWyRgcG5wbSB0eXBlLWNoZWNrYCwgJGBwbnBtIGxpbnQ6c3RhZ2VgXSkuY2F0Y2goKG91dDogUHJvY2Vzc091dHB1dCkgPT4ge1xuICBwcmludE9iamVjdChvdXQpXG4gIHRocm93IG5ldyBFcnJvcihvdXQuc3Rkb3V0KVxufSlcbiIsICIjIS91c3IvYmluL2VudiB6eFxuXG5pbXBvcnQgeyAkIH0gZnJvbSAnengnXG5cbmNvbnNvbGUubG9nKCdcdTVGMDBcdTU5Q0JcdTYyNjdcdTg4NENcdTRFRTNcdTc4MDFcdThEMjhcdTkxQ0ZcdThCQzRcdTRGMzAuLi5cXG4nKVxuXG5hd2FpdCBpbXBvcnQoJy4vY2hlY2snKS5jYXRjaCgoKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcignXHU0RUUzXHU3ODAxXHU4RDI4XHU5MUNGXHU4QkM0XHU0RjMwXHU1OTMxXHU4RDI1LCBcdThCRjdcdTY4QzBcdTY3RTVcdTRFRTNcdTc4MDEnKVxufSlcblxuY29uc29sZS5sb2coJ3ByaW50ZiBcIlx1NjhDMFx1NkQ0Qlx1OTAxQVx1OEZDNywgXHU1MjFCXHU1RUZBIGNvbW1pdCBcdTRFMkQuLi5cXG4nKVxuXG5hd2FpdCAkYGdpdCBhZGQgLmBcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7O0FBQUEsU0FBUSxpQkFBaUIseUJBQXdCO0FBQWpELElBQThEQTtBQUE5RDtBQUFBO0FBQTBELElBQUlBLFdBQVEsa0JBQWtCLHVIQUF1SDtBQUFBO0FBQUE7OztBQ0V4TSxTQUFTLFlBQ2QsUUFDQSxTQUFtQyxPQUNuQztBQUNBLGFBQVcsQ0FBQyxLQUFLLEtBQUssS0FBSyxPQUFPLFFBQVEsTUFBTSxHQUFHO0FBRWpELFlBQVEsUUFBUSxHQUFHO0FBQUEsRUFBUztBQUFBLENBQVM7QUFBQSxFQUN2QztBQUNGO0FBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFHQSxTQUFTLFNBQVM7QUFIbEI7QUFBQTtBQUFBO0FBSUE7QUFjQSxVQUFNLFFBQVEsSUFBSSxDQUFDLG9CQUFvQixrQkFBa0IsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxRQUF1QjtBQUN4RixrQkFBWSxHQUFHO0FBQ2YsWUFBTSxJQUFJLE1BQU0sSUFBSSxNQUFNO0FBQUEsSUFDNUIsQ0FBQztBQUFBO0FBQUE7OztBQ3JCRDtBQUVBLFNBQVMsS0FBQUMsVUFBUztBQUVsQixRQUFRLElBQUksbUVBQWlCO0FBRTdCLE1BQU0sdUNBQWtCLE1BQU0sTUFBTTtBQUNsQyxRQUFNLElBQUksTUFBTSxrRkFBaUI7QUFDbkMsQ0FBQztBQUVELFFBQVEsSUFBSSxtRUFBZ0M7QUFFNUMsTUFBTUE7IiwKICAibmFtZXMiOiBbInJlcXVpcmUiLCAiJCJdCn0K
