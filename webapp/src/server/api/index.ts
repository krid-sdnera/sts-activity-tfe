import { RuntimeConfig } from "@/nuxt.config";
import type { IncomingMessage, ServerResponse } from "http";

export const nuxtConfig = {
  NUXT_NO_SSR: process.env.NUXT_NO_SSR as unknown as boolean,
  NUXT_STATIC_BASE: process.env.NUXT_STATIC_BASE as unknown as string,
  NUXT_STATIC_VERSION: process.env.NUXT_STATIC_VERSION as unknown as string,
  NUXT_FULL_STATIC: process.env.NUXT_FULL_STATIC as unknown as boolean,
  NITRO_PRESET: process.env.NITRO_PRESET as unknown as string,
  RUNTIME_CONFIG: process.env.RUNTIME_CONFIG as unknown as RuntimeConfig,
  DEBUG: process.env.DEBUG as unknown as boolean,
};

export default async (_req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 404;
};

export async function body2Data<Data>(
  req: IncomingMessage
): Promise<Partial<Data>> {
  if (req.body || process.env.NETLIFY === "true") {
    return JSON.parse(req.body ?? "{}") ?? {};
  } else {
    return await new Promise((resolve, reject) => {
      var result: any[] = [];
      req.on("data", function (chunk) {
        console.error("RESPONSE DATA", chunk);
        result.push(chunk);
      });

      req.on("end", function () {
        console.error("RESPONSE END");

        if (result.length === 0) {
          // No data in the buffer. Return early.
          resolve({});
          return;
        }

        const output = Buffer.concat(result).toString("utf8");

        resolve(JSON.parse(output));
      });
    });
  }
}
