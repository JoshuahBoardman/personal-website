
type VolumeLevel = 1 | 2 | 3 | 4;

export default function RadioWaveBar({ volume = 4 }: { volume?: VolumeLevel }) {
	return (
		<div className="flex gap-1 items-end h-5" data-volume={volume}>
			<span className="wave-bar w-1.25 rounded-xs bg-screen-text opacity-65 h-2"></span>
			<span className="wave-bar w-1.25 rounded-xs bg-screen-text opacity-65 h-3"></span>
			<span className="wave-bar w-1.25 rounded-xs bg-screen-text opacity-65 h-5"></span>
			<span className="wave-bar w-1.25 rounded-xs bg-screen-text opacity-65 h-3.5"></span>
			<span className="wave-bar w-1.25 rounded-xs bg-screen-text opacity-65 h-4"></span>
			<span className="wave-bar w-1.25 rounded-xs bg-screen-text opacity-65 h-2.5"></span>
			<span className="wave-bar w-1.25 rounded-xs bg-screen-text opacity-65 h-4.5"></span>
			<span className="wave-bar w-1.25 rounded-xs bg-screen-text opacity-65 h-3"></span>
			<span className="wave-bar w-1.25 rounded-xs bg-screen-text opacity-65 h-5"></span>
			<span className="wave-bar w-1.25 rounded-xs bg-screen-text opacity-65 h-2"></span>
			<span className="wave-bar w-1.25 rounded-xs bg-screen-text opacity-65 h-3.5"></span>
			<span className="wave-bar w-1.25 rounded-xs bg-screen-text opacity-65 h-4"></span>
		</div>
	)
}
