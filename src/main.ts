import { Denomander } from "./deps.ts";

const program = new Denomander({
  app_name: "lci",
  app_description: "A developer tool for managing Locize translations",
  app_version: "1.0.0",
});

program.action((args: unknown) => {
  console.log(args);
});

program.parse(Deno.args);
