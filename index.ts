import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

const s = serve({ port: 8000 });
console.log("http//localhost:8000/");

function getCentury() {
  let d = new Date();
  const year = d.getFullYear();
  return Math.ceil(year / 100);
}

for await (const req of s) {
  req.respond({ body: `Ola terraquios do seculo ${getCentury()}` });
}
