"use client";

import { useMemo } from "react";
import Particles from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
	const options: ISourceOptions = useMemo(
		() => ({
			fpsLimit: 120,
			particles: {
				number: {
					value: 80,
					density: {
						enable: true,
						area: 800,
					},
				},
				color: {
					value: "#000000",
				},
				opacity: {
					value: 0.3,
					random: true,
					animation: {
						enable: true,
						speed: 0.5,
						sync: false,
					},
				},
				size: {
					value: { min: 1, max: 3 },
					random: true,
					animation: {
						enable: true,
						speed: 2,
						sync: false,
					},
				},
				links: {
					enable: true,
					color: "#000000",
					opacity: 0.2,
					distance: 150,
					width: 1,
				},
				move: {
					enable: true,
					speed: 1,
					direction: "none",
					random: false,
					straight: false,
					outModes: {
						default: "bounce",
					},
					bounce: false,
					attract: {
						enable: false,
						rotateX: 600,
						rotateY: 1200,
					},
				},
			},
			interactivity: {
				events: {
					onHover: {
						enable: true,
						mode: "repulse",
					},
					onClick: {
						enable: true,
						mode: "push",
					},
					resize: { enable: true },
				},
				modes: {
					repulse: {
						distance: 100,
						duration: 0.4,
					},
					push: {
						quantity: 4,
					},
				},
			},
			detectRetina: true,
		}),
		[]
	);

	return (
		<div 
			className="fixed inset-0 w-full h-full pointer-events-none" 
			style={{ 
				zIndex: 0,
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%'
			}}
		>
			<Particles
				id="tsparticles"
				options={options}
				className="w-full h-full"
				style={{ width: '100%', height: '100%' }}
			/>
		</div>
	);
}
