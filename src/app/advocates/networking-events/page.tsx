"use client";

import PageTransition from "@/components/PageTransition";
import { useState } from "react";
import { ShoppingCart, FileText, BookOpen } from "lucide-react";

const products = [
	{
		id: 1,
		title: "Draft Bundles – General Legal Documentation",
		description: "Service Agreement, MoU, LoI, NDA, Indemnity, Undertaking formats. Vendor Agreement, Consultancy Agreement, Partnership MoU, Commission Agreement, Franchise Agreement. Offer Letter, Appointment Letter, Internship Agreement, Confidentiality Policy, Termination Letter, Employment Contract. Board Resolutions, Shareholders Agreement, Founders' Agreement, Rights Issue, Share Transfer Deed.",
		price: 2999,
		category: "General"
	},
	{
		id: 2,
		title: "Property Sale & Purchase Bundle",
		description: "Agreement to Sell, Sale Deed, Possession Letter, NOC formats.",
		price: 1999,
		category: "Property"
	},
	{
		id: 3,
		title: "Property Lease / Rent Documentation Bundle",
		description: "Residential Rent Agreement, Commercial Lease Agreement, Leave & License Agreement, Rent Increment Addendum.",
		price: 1499,
		category: "Property"
	},
	{
		id: 4,
		title: "Land/Plot Documentation Bundle",
		description: "Partition Deed, Gift Deed, Relinquishment Deed, Mutation Application, Land Use Affidavits.",
		price: 2499,
		category: "Property"
	},
	{
		id: 5,
		title: "Housing Society / RWA Docs Bundle",
		description: "Society Membership Form, NOC for Transfer, RWA Resolution, Society Bye-Laws.",
		price: 1799,
		category: "Property"
	},
	{
		id: 6,
		title: "Marriage & Relationship Bundle",
		description: "Pre-Nuptial Agreement, Post-Nuptial Agreement, Live-in Agreement.",
		price: 2499,
		category: "Family"
	},
	{
		id: 7,
		title: "Family Settlement & Inheritance Bundle",
		description: "Family Settlement Deed, Will, Codicil, Legal Heir Certificate Applications, Succession Rights Affidavits.",
		price: 2999,
		category: "Family"
	},
	{
		id: 8,
		title: "Child Custody & Guardianship Bundle",
		description: "Joint Custody Agreement, Sole Custody Petition Drafts, Guardian Appointment Deed.",
		price: 2499,
		category: "Family"
	},
	{
		id: 9,
		title: "Divorce & Separation Bundle",
		description: "Mutual Consent Divorce Petition, Divorce Settlement Agreement, Maintenance Terms, Child Visitation Terms.",
		price: 3499,
		category: "Family"
	},
	{
		id: 10,
		title: "Civil Case Drafting Bundle",
		description: "Plaint, Written Statement, Replication, Notice formats, Interlocutory Applications.",
		price: 3999,
		category: "Litigation"
	},
	{
		id: 11,
		title: "Criminal Case Drafting Bundle",
		description: "Complaint under 156(3), Bail Applications, Anticipatory Bail Affidavit, Compounding Agreement.",
		price: 3999,
		category: "Litigation"
	},
	{
		id: 12,
		title: "Consumer & Forum Case Bundle",
		description: "Consumer Complaint, Appeal Memo, Evidence Affidavit, Notice to Service Provider.",
		price: 2499,
		category: "Litigation"
	},
	{
		id: 13,
		title: "RTI Drafting Bundle",
		description: "RTI Request, First Appeal, Second Appeal, CIC Complaint.",
		price: 999,
		category: "Government"
	},
	{
		id: 14,
		title: "Startup Founder Bundle",
		description: "Founder Agreement, ESOP Agreement, Share Vesting Terms, Confidentiality + IP Assignment.",
		price: 4999,
		category: "Business"
	},
	{
		id: 15,
		title: "E-Commerce & Digital Bundle",
		description: "Website Terms of Use, Privacy Policy, Return & Refund Policy, Cookie Policy, Payment Gateway Agreement.",
		price: 3999,
		category: "Business"
	},
	{
		id: 16,
		title: "Freelancer / Agency Bundle",
		description: "Service Contract, Scope of Work Annexure, Non-disclosure Addendum, Invoicing & Late Fee Clause Templates.",
		price: 2499,
		category: "Business"
	},
	{
		id: 17,
		title: "Affidavit & Notary Bundle",
		description: "Identity Affidavit, Name Change, Address Proof, Lost Certificate, Income Affidavit.",
		price: 1499,
		category: "General"
	},
	{
		id: 18,
		title: "Power of Attorney Bundle",
		description: "General Power of Attorney, Specific POA for Property, Business Operations POA, Revocation of POA.",
		price: 1999,
		category: "General"
	},
	{
		id: 19,
		title: "IP Protection Bundle",
		description: "Trademark Filing Authorization Letter, Licensing Agreement, Assignment Deed, Copyright Transfer Deed.",
		price: 3499,
		category: "Business"
	}
];

const ITEMS_PER_PAGE = 6;

export default function Page() {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const currentProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

	const handleAddToCart = (productId: number) => {
		// Placeholder for add to cart functionality
		console.log(`Added product ${productId} to cart`);
		alert(`Added to cart!`);
	};

	return (
		<PageTransition>
			<div className="mx-auto max-w-7xl px-6 py-16">
				<h1 className="h1 mb-8 text-black">Networking Events</h1>
				<p className="text-black/70 mb-8 max-w-3xl">
					Professionally drafted legal templates reviewed by experienced advocates. 
					Each bundle includes multiple formats and documents ready for use.
				</p>

				{/* Products Grid */}
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
					{currentProducts.map((product) => (
						<div key={product.id} className="premium-card text-black hover-lift">
							{/* Product Image */}
							<div className="relative aspect-[4/5] w-full mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-black/5 to-black/10 border border-black/10 flex items-center justify-center">
								{product.category === "Litigation" ? (
									<FileText className="h-20 w-20 text-black/40" />
								) : (
									<BookOpen className="h-20 w-20 text-black/40" />
								)}
							</div>

							{/* Product Title */}
							<h3 className="font-semibold text-lg mb-2 text-black line-clamp-2 min-h-[3.5rem]">
								{product.title}
							</h3>

							{/* Product Description */}
							<p className="text-sm text-black/60 mb-4 line-clamp-3">
								{product.description}
							</p>

							{/* Price and Add to Cart */}
							<div className="flex items-center justify-between pt-4 border-t border-black/10">
								<div>
									<span className="text-2xl font-bold text-black">₹{product.price.toLocaleString()}</span>
									<span className="text-sm text-black/60 ml-1">/bundle</span>
								</div>
								<button
									onClick={() => handleAddToCart(product.id)}
									className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full hover:bg-black/80 transition text-sm font-medium"
								>
									<ShoppingCart className="h-4 w-4" />
									Add to Cart
								</button>
							</div>
						</div>
					))}
				</div>

				{/* Pagination */}
				{totalPages > 1 && (
					<div className="flex items-center justify-center gap-2">
						<button
							onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
							disabled={currentPage === 1}
							className="px-4 py-2 rounded-lg border border-black/10 bg-white text-black disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black/5 transition"
						>
							Previous
						</button>
						{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
							<button
								key={page}
								onClick={() => setCurrentPage(page)}
								className={`px-4 py-2 rounded-lg border transition ${
									currentPage === page
										? "bg-black text-white border-black"
										: "bg-white text-black border-black/10 hover:bg-black/5"
								}`}
							>
								{page}
							</button>
						))}
						<button
							onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
							disabled={currentPage === totalPages}
							className="px-4 py-2 rounded-lg border border-black/10 bg-white text-black disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black/5 transition"
						>
							Next
						</button>
					</div>
				)}
			</div>
		</PageTransition>
	);
}