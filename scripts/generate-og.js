import fs from "fs";
import satori from "satori";
import sharp from "sharp";

const font = fs.readFileSync("./public/fonts/Inter-Bold.ttf");

const svg = await satori(
  {
    type: "div",
    props: {
      style: {
        width: "1200px",
        height: "630px",
        background: "linear-gradient(135deg, #052e1f, #064e3b)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        color: "white",
      },
      children: [
        {
          type: "h1",
          props: {
            style: { fontSize: "72px", marginBottom: "24px" },
            children: "Qurb E Muhammad Syed",
          },
        },
        {
          type: "p",
          props: {
            style: { fontSize: "36px", opacity: 0.85 },
            children: "Backend & Systems Software Engineering",
          },
        },
        {
          type: "p",
          props: {
            style: { fontSize: "24px", marginTop: "40px", opacity: 0.6 },
            children: "kirbydoestech.dev",
          },
        },
      ],
    },
  },
  {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Inter",
        data: font,
        weight: 700,
      },
    ],
  }
);

await sharp(Buffer.from(svg))
  .png()
  .toFile("./public/og.png");

console.log("✅ og.png generated");
