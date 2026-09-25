// One-off/rerunnable generator for derived image assets that don't belong
// checked in as their own source of truth — rerun after portrait.png or
// icon.svg change.
import sharp from "sharp";
import { readFile } from "fs/promises";
import path from "path";

const root = process.cwd();

async function generatePortraitOg() {
	const source = path.join(root, "public/portrait.png");
	const output = path.join(root, "public/portrait-og.jpg");

	await sharp(source)
		.resize(680, 850, { fit: "cover", position: "top" })
		.jpeg({ quality: 82 })
		.toFile(output);

	console.log(`wrote ${output}`);
}

async function generateAppleIcon() {
	const source = path.join(root, "app/icon.svg");
	const output = path.join(root, "app/apple-icon.png");
	const svg = await readFile(source);

	await sharp(svg, { density: 384 })
		.resize(180, 180)
		.flatten({ background: "#1C1712" })
		.png()
		.toFile(output);

	console.log(`wrote ${output}`);
}

await generatePortraitOg();
await generateAppleIcon();
