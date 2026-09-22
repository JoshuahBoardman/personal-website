import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
	const portraitData = await readFile(join(process.cwd(), "public/portrait.png"));
	const portraitSrc = `data:image/png;base64,${portraitData.toString("base64")}`;

	return new ImageResponse(
		(
			<div
				style={{
					display: "flex",
					alignItems: "center",
					width: "100%",
					height: "100%",
					background: "#1C1712",
					padding: "70px",
					gap: "70px",
				}}
			>
				<div
					style={{
						display: "flex",
						width: "340px",
						height: "425px",
						borderRadius: "12px",
						overflow: "hidden",
					}}
				>
					<img
						src={portraitSrc}
						width={340}
						height={425}
						style={{ objectFit: "cover", objectPosition: "50% 38%" }}
					/>
				</div>
				<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
					<div style={{ display: "flex", gap: "8px" }}>
						<div style={{ width: "16px", height: "16px", background: "#E06B45" }} />
						<div style={{ width: "16px", height: "16px", background: "#A3B579" }} />
						<div style={{ width: "16px", height: "16px", background: "#A79A85", opacity: 0.5 }} />
						<div style={{ width: "16px", height: "16px", background: "#D4A94A" }} />
					</div>
					<div style={{ display: "flex", fontSize: "56px", color: "#EDE6D6", fontWeight: 500 }}>
						Joshuah Boardman
					</div>
					<div
						style={{
							display: "flex",
							fontSize: "28px",
							color: "#A79A85",
							letterSpacing: "1px",
							textTransform: "uppercase",
						}}
					>
						Developer, bassist, and a few other things
					</div>
				</div>
			</div>
		),
		{ ...size }
	);
}
