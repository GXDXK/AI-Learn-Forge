import type { APIRoute } from "astro";
import satori from "satori";
import sharp from "sharp";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import config from "@/config";

// ✅ 指向唯一的 TTF 字体文件
const FONT_PATH = join(process.cwd(), "public", "fonts", "Oplus-Serif.ttf");

if (!existsSync(FONT_PATH)) {
  const dir = join(process.cwd(), "public", "fonts");
  let dirInfo = "Directory not found";
  try { dirInfo = readdirSync(dir).join(", ") || "(empty)"; } catch {}
  throw new Error(
    `[OG] Font missing: ${FONT_PATH}\n[OG] Available in ${dir}: ${dirInfo}`
  );
}

// 模块顶层同步加载，预渲染阶段零风险
const fontData = readFileSync(FONT_PATH);

export const GET: APIRoute = async () => {
  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          background: "#fefbfb",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Oplus-Serif",
        },
        children: [
          /* ... 保持你原有的 JSX children 结构完全不变 ... */
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: [
        // ✅ 同一个 TTF 数据同时注册为 400 和 700
        // Satori 在只有一个可用字体时，会自动回退使用该字体渲染所有字重
        { name: "Oplus-Serif", data: fontData, weight: 400, style: "normal" },
        { name: "Oplus-Serif", data: fontData, weight: 700, style: "normal" },
      ],
    }
  );

  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(pngBuffer), {
    headers: { "Content-Type": "image/png" },
  });
};