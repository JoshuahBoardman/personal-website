"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
	const interval = setInterval(callback, 60000);
	return () => clearInterval(interval);
}

function getSnapshot(): string {
	return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function getServerSnapshot(): null {
	return null;
}

export default function Clock() {

	const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

	if (!time) return null; // avoids hydration mismatch

	return (
		<span>{time}</span>
	);
}
