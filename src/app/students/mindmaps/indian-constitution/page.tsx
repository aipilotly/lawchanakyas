"use client";

import { useEffect, useMemo, useState } from "react";
import ReactFlow, { Background, Controls, Edge, MarkerType, MiniMap, Node, Position } from "reactflow";
import "reactflow/dist/style.css";
import PageTransition from "@/components/PageTransition";

type ArticleNodeData = {
	article: string;
	focus: string;
	cases: string[];
	description: string;
	expanded: boolean;
};

const ArticleNode = ({ data }: { data: ArticleNodeData }) => {
	return (
		<div
			className={`group relative flex flex-col rounded-xl border-2 transition-all duration-200 ${
				data.expanded
					? "min-w-[280px] border-blue-500 bg-white p-5 shadow-lg"
					: "min-w-[100px] border-slate-300 bg-white p-3 shadow-md hover:border-blue-400 hover:shadow-lg"
			}`}
		>
			<div className="flex items-center justify-center">
				<div
					className={`flex items-center justify-center rounded-lg font-bold text-white transition-colors ${
						data.expanded
							? "h-12 w-12 bg-blue-600 text-base"
							: "h-10 w-10 bg-slate-700 text-sm hover:bg-blue-600"
					}`}
				>
					{data.article}
				</div>
			</div>

			{data.expanded && (
				<div className="mt-4 space-y-3">
					<h3 className="text-base font-semibold text-slate-900">{data.focus}</h3>
					{data.description && (
						<p className="text-sm leading-relaxed text-slate-600">{data.description}</p>
					)}
					{data.cases.length > 0 && (
						<div className="space-y-2">
							<div className="text-xs font-semibold uppercase tracking-wide text-blue-600">Key Cases</div>
							<div className="space-y-1.5">
								{data.cases.map((caselaw) => (
									<div
										key={caselaw}
										className="rounded-md bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-900"
									>
										{caselaw}
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

const nodeTypes = { article: ArticleNode };

export default function IndianConstitutionMindmap() {
	const [articles, setArticles] = useState<
		{ article: string; focus: string; description: string; cases: string[] }[]
	>([]);
	const [expandedId, setExpandedId] = useState<string | null>(null);

	useEffect(() => {
		const load = async () => {
			try {
				const response = await fetch("/data/articles_1_51.csv");
				if (!response.ok) {
					throw new Error(`Failed to fetch dataset: ${response.statusText}`);
				}
				const csvText = await response.text();

				const lines = csvText.trim().split("\n");
				const [, ...rows] = lines;

				const parsed = rows
					.map((line) => {
						const parts = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/).map((part) => part.replace(/^"|"$/g, "").trim());
						const [article, focus, description, casesRaw = ""] = parts;
						const cases = casesRaw
							.split(/;|,/)
							.map((c) => c.trim())
							.filter(Boolean);

						if (!article) {
							return null;
						}

						return {
							article,
							focus,
							description,
							cases,
						};
					})
					.filter(Boolean) as { article: string; focus: string; description: string; cases: string[] }[];

				setArticles(parsed);
			} catch (error) {
				console.error("Failed to load constitution article dataset", error);
			}
		};

		load();
	}, []);

	const isLoading = articles.length === 0;

	const { nodes, edges } = useMemo(() => {
		// Simple horizontal timeline layout - articles flow left to right
		// Increased gap to ensure edges are clearly visible between nodes
		const horizontalGap = 180;
		const verticalOffset = 0; // Keep all nodes on same horizontal line for simplicity

		const nodes: Node<ArticleNodeData>[] = articles.map((articleData, index) => {
			const x = index * horizontalGap;
			const y = verticalOffset;

			return {
				id: articleData.article,
				type: "article",
				position: { x, y },
				sourcePosition: Position.Right,
				targetPosition: Position.Left,
				data: {
					...articleData,
					expanded: expandedId === articleData.article,
				},
			};
		});

		// Connect each node to the next node in sequence
		const edges: Edge[] = [];
		for (let i = 0; i < articles.length - 1; i++) {
			edges.push({
				id: `edge-${articles[i].article}-${articles[i + 1].article}`,
				source: articles[i].article,
				target: articles[i + 1].article,
				animated: true,
				type: "straight",
				style: {
					stroke: "#3b82f6",
					strokeWidth: 4,
					opacity: 0.8,
				},
				markerEnd: {
					type: MarkerType.ArrowClosed,
					color: "#3b82f6",
					width: 24,
					height: 24,
				},
			});
		}

		return { nodes, edges };
	}, [articles, expandedId]);

	return (
		<PageTransition>
			<div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16">
				<div className="space-y-3">
					<div className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-black px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-white/80 shadow-[0_12px_40px_rgba(15,23,42,0.2)]">
						Mindmap
					</div>
					<h1 className="h1 text-black">Indian Constitution</h1>
					<p className="max-w-3xl text-sm leading-relaxed text-slate-600">
						Articles 1 to 51 displayed in chronological order. Click any article number to view details, focus areas, and key case laws.
					</p>
				</div>

				<div className="relative h-[600px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg">
					{isLoading && (
						<div className="absolute inset-0 z-10 flex items-center justify-center bg-white/90 backdrop-blur-sm">
							<div className="rounded-full border border-slate-300 bg-white px-5 py-2 text-xs font-medium uppercase tracking-[0.35em] text-slate-600">
								Loading articles…
							</div>
						</div>
					)}

					<ReactFlow
						nodes={nodes}
						edges={edges}
						nodeTypes={nodeTypes}
						fitView
						nodesDraggable={false}
						nodesConnectable={false}
						elementsSelectable={false}
						zoomOnDoubleClick={false}
						panOnScroll
						panOnDrag
						onNodeClick={(_, node) => {
							setExpandedId((prev) => (prev === node.id ? null : (node.id as string)));
						}}
						defaultViewport={{ zoom: 0.6, x: 0, y: 200 }}
						fitViewOptions={{ padding: 0.3, maxZoom: 1.2 }}
					>
						<MiniMap className="!bg-white/90 !border !border-slate-200" nodeColor={() => "#3b82f6"} maskColor="#f1f5f9" pannable zoomable />
						<Controls className="bg-white border border-slate-200 shadow-md" showInteractive={false} position="bottom-right" />
						<Background gap={20} size={1} color="#e2e8f0" />
					</ReactFlow>
				</div>
			</div>
		</PageTransition>
	);
}

