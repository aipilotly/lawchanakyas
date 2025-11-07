"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function HomeParticles() {
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => setIsReady(true));
	}, []);

	const options: ISourceOptions = useMemo(
		() => ({
			fpsLimit: 60,
			detectRetina: true,
			particles: {
				number: {
					value: 180,
					density: {
						enable: true,
						area: 800,
					},
				},
				color: { value: "#000000" },
				shape: {
					type: "circle",
					stroke: { width: 0, color: "#000000" },
					polygon: { sides: 5 },
				},
				opacity: {
					value: 0.5,
					random: false,
					animation: {
						enable: false,
						speed: 1,
						sync: false,
						min: 0.1,
					},
				},
				size: {
					value: 2,
					random: { enable: true, minimumValue: 0.1 },
					animation: {
						enable: false,
						speed: 40,
						sync: false,
					},
				},
				links: {
					enable: true,
					distance: 150,
					color: "#000000",
					opacity: 0.4,
					width: 1,
				},
				move: {
					enable: true,
					speed: 4,
					direction: "none",
					random: false,
					straight: false,
					outModes: { default: "out" },
					attract: {
						enable: false,
						rotateX: 600,
						rotateY: 1200,
					},
				},
			},
			interactivity: {
				events: {
					onHover: { enable: true, mode: "repulse" },
					onClick: { enable: true, mode: "push" },
					resize: { enable: true },
				},
				modes: {
					grab: {
						distance: 400,
						links: { opacity: 1 },
					},
					bubble: {
						distance: 400,
						size: 40,
						duration: 2,
						opacity: 0.8,
						speed: 3,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
					push: { quantity: 4 },
					remove: { quantity: 2 },
				},
			},
		}),
		[]
	);

	if (!isReady) return null;

	return (
		<div className="absolute inset-0 h-full w-full pointer-events-none">
			<Particles id="home-particles" options={options} className="h-full w-full" />
		</div>
	);
}
