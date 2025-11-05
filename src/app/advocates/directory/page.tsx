"use client";

import PageTransition from "@/components/PageTransition";
import { useState, useMemo } from "react";
import { Building2, User, MapPin, Filter } from "lucide-react";

// Parse CSV data
const csvData = `title,specialization,city,description
Lex & Co. Law Associates,Intellectual Property,Pune,Providing complete legal support across diverse areas of practice with professionalism.
Adv. Raghav Menon,Cyber Law,Chennai,Dedicated advocate with years of experience in handling complex legal matters and litigation.
Adv. Ramesh Kumar,Start-up Legal Advisory,Lucknow,Empowering clients through informed legal advice and strategic representation.
LawBridge Legal,Real Estate Law,Bhopal,Dedicated advocate with years of experience in handling complex legal matters and litigation.
LegalSphere Partners,Real Estate Law,Chandigarh,Combining legal expertise with technology for efficient and transparent legal services.
LegalSphere Partners,Real Estate Law,Delhi,Known for meticulous case preparation and strong courtroom advocacy.
Adv. Tanvi Kapoor,Property Disputes,Hyderabad,A reputed law office known for client-focused representation and effective legal solutions.
Adv. Anil Desai,Cyber Law,Jaipur,Dedicated advocate with years of experience in handling complex legal matters and litigation.
LegalSphere Partners,Consumer Rights,Surat,Known for meticulous case preparation and strong courtroom advocacy.
LexPoint Associates,Employment Law,Bengaluru,Trusted by individuals and businesses for reliable and timely legal assistance.
RightTrack Legal Advisors,Banking & Finance,Jaipur,Empowering clients through informed legal advice and strategic representation.
LexPoint Associates,Taxation,Lucknow,Dedicated advocate with years of experience in handling complex legal matters and litigation.
Adv. Shweta Ghosh,Contract Drafting,Jaipur,Known for meticulous case preparation and strong courtroom advocacy.
Adv. Arun Sharma,Cyber Law,Indore,A reputed law office known for client-focused representation and effective legal solutions.
LexPoint Associates,Banking & Finance,Kolkata,Trusted by individuals and businesses for reliable and timely legal assistance.
Adv. Kiran Rao,Contract Drafting,Chandigarh,A reputed law office known for client-focused representation and effective legal solutions.
Judicore Law Office,Cyber Law,Delhi,A reputed law office known for client-focused representation and effective legal solutions.
RightTrack Legal Advisors,Intellectual Property,Kolkata,Trusted by individuals and businesses for reliable and timely legal assistance.
Adv. Sneha Nair,Real Estate Law,Bhopal,Known for meticulous case preparation and strong courtroom advocacy.
Adv. Arun Sharma,Arbitration,Hyderabad,A reputed law office known for client-focused representation and effective legal solutions.
CourtDesk Law Chambers,Consumer Rights,Jaipur,Dedicated advocate with years of experience in handling complex legal matters and litigation.
Adv. Tanvi Kapoor,Criminal Defense,Pune,Known for meticulous case preparation and strong courtroom advocacy.
Adv. Raghav Menon,Start-up Legal Advisory,Lucknow,A reputed law office known for client-focused representation and effective legal solutions.
Adv. Tanvi Kapoor,Property Disputes,Kolkata,Focused on achieving favorable outcomes through precision and persistence.
Adv. Ramesh Kumar,Criminal Defense,Delhi,Empowering clients through informed legal advice and strategic representation.
Adv. Arun Sharma,Civil Litigation,Chennai,A reputed law office known for client-focused representation and effective legal solutions.
Adv. Shweta Ghosh,Contract Drafting,Hyderabad,Empowering clients through informed legal advice and strategic representation.
EquiLaw Solutions,Taxation,Bengaluru,Trusted by individuals and businesses for reliable and timely legal assistance.
Adv. Shweta Ghosh,Civil Litigation,Delhi,Providing complete legal support across diverse areas of practice with professionalism.
RightTrack Legal Advisors,Contract Drafting,Surat,Focused on achieving favorable outcomes through precision and persistence.
Lex & Co. Law Associates,Criminal Defense,Chandigarh,Known for meticulous case preparation and strong courtroom advocacy.
Adv. Raghav Menon,Family Law,Bengaluru,Trusted by individuals and businesses for reliable and timely legal assistance.
Adv. Shweta Ghosh,Property Disputes,Kolkata,Empowering clients through informed legal advice and strategic representation.
JusticePath Legal,Civil Litigation,Jaipur,A modern firm offering a balance of traditional advocacy and innovative legal strategies.
Adv. Ramesh Kumar,Civil Litigation,Chandigarh,Known for meticulous case preparation and strong courtroom advocacy.
CourtDesk Law Chambers,Corporate Law,Jaipur,Providing complete legal support across diverse areas of practice with professionalism.
Lex & Co. Law Associates,Corporate Law,Pune,A modern firm offering a balance of traditional advocacy and innovative legal strategies.
Adv. Neha Agarwal,Start-up Legal Advisory,Chandigarh,Known for meticulous case preparation and strong courtroom advocacy.
CourtDesk Law Chambers,Cyber Law,Kolkata,Focused on achieving favorable outcomes through precision and persistence.
Adv. Anil Desai,Property Disputes,Chennai,A modern firm offering a balance of traditional advocacy and innovative legal strategies.
Veritas Law Firm,Criminal Defense,Chandigarh,Dedicated advocate with years of experience in handling complex legal matters and litigation.
LawBridge Legal,Intellectual Property,Surat,Known for meticulous case preparation and strong courtroom advocacy.
Adv. Anil Desai,Criminal Defense,Surat,Focused on achieving favorable outcomes through precision and persistence.
JusticePath Legal,Civil Litigation,Bhopal,A full-service firm serving clients nationwide with a focus on ethical practice.
Adv. Tanvi Kapoor,Employment Law,Chennai,Combining legal expertise with technology for efficient and transparent legal services.
Adv. Raghav Menon,Taxation,Hyderabad,Combining legal expertise with technology for efficient and transparent legal services.
Adv. Anil Desai,Employment Law,Delhi,Dedicated advocate with years of experience in handling complex legal matters and litigation.
Adv. Priya Mehta,Start-up Legal Advisory,Chandigarh,A modern firm offering a balance of traditional advocacy and innovative legal strategies.
LawBridge Legal,Start-up Legal Advisory,Surat,A modern firm offering a balance of traditional advocacy and innovative legal strategies.
Adv. Anil Desai,Cyber Law,Delhi,Focused on achieving favorable outcomes through precision and persistence.
Adv. Arun Sharma,Intellectual Property,Hyderabad,A reputed law office known for client-focused representation and effective legal solutions.
Veritas Law Firm,Taxation,Kochi,Providing complete legal support across diverse areas of practice with professionalism.
LegalSphere Partners,Real Estate Law,Hyderabad,Providing complete legal support across diverse areas of practice with professionalism.
LexPoint Associates,Corporate Law,Ahmedabad,A full-service firm serving clients nationwide with a focus on ethical practice.
Adv. Shweta Ghosh,Family Law,Indore,Focused on achieving favorable outcomes through precision and persistence.
Adv. Arun Sharma,Property Disputes,Ahmedabad,Combining legal expertise with technology for efficient and transparent legal services.
Adv. Neha Agarwal,Employment Law,Kochi,A full-service firm serving clients nationwide with a focus on ethical practice.
LawBridge Legal,Taxation,Jaipur,Empowering clients through informed legal advice and strategic representation.
Adv. Priya Mehta,Criminal Defense,Delhi,Focused on achieving favorable outcomes through precision and persistence.
JusticePath Legal,Intellectual Property,Bengaluru,Dedicated advocate with years of experience in handling complex legal matters and litigation.
Adv. Raghav Menon,Civil Litigation,Lucknow,Trusted by individuals and businesses for reliable and timely legal assistance.
Adv. Sneha Nair,Corporate Law,Kolkata,Empowering clients through informed legal advice and strategic representation.
Adv. Shweta Ghosh,Arbitration,Hyderabad,Trusted by individuals and businesses for reliable and timely legal assistance.
Adv. Kiran Rao,Consumer Rights,Mumbai,Trusted by individuals and businesses for reliable and timely legal assistance.
LawBridge Legal,Arbitration,Bengaluru,Known for meticulous case preparation and strong courtroom advocacy.
CourtDesk Law Chambers,Consumer Rights,Bhopal,Trusted by individuals and businesses for reliable and timely legal assistance.
CourtDesk Law Chambers,Family Law,Kolkata,Focused on achieving favorable outcomes through precision and persistence.
Adv. Anil Desai,Taxation,Delhi,Providing complete legal support across diverse areas of practice with professionalism.
Adv. Arun Sharma,Civil Litigation,Bengaluru,Providing complete legal support across diverse areas of practice with professionalism.
Adv. Kiran Rao,Employment Law,Bhopal,A modern firm offering a balance of traditional advocacy and innovative legal strategies.
Adv. Neha Agarwal,Arbitration,Chandigarh,Providing complete legal support across diverse areas of practice with professionalism.
EquiLaw Solutions,Taxation,Chennai,Known for meticulous case preparation and strong courtroom advocacy.
Adv. Raghav Menon,Cyber Law,Bengaluru,Trusted by individuals and businesses for reliable and timely legal assistance.
Adv. Raghav Menon,Contract Drafting,Kolkata,Combining legal expertise with technology for efficient and transparent legal services.
LegalSphere Partners,Start-up Legal Advisory,Mumbai,Known for meticulous case preparation and strong courtroom advocacy.
Judicore Law Office,Start-up Legal Advisory,Bengaluru,Providing complete legal support across diverse areas of practice with professionalism.
EquiLaw Solutions,Employment Law,Hyderabad,Providing complete legal support across diverse areas of practice with professionalism.
LegalSphere Partners,Banking & Finance,Jaipur,Dedicated advocate with years of experience in handling complex legal matters and litigation.
Adv. Kiran Rao,Intellectual Property,Lucknow,A full-service firm serving clients nationwide with a focus on ethical practice.
Adv. Tanvi Kapoor,Family Law,Bhopal,Focused on achieving favorable outcomes through precision and persistence.
LegalSphere Partners,Taxation,Ahmedabad,Empowering clients through informed legal advice and strategic representation.
LegalSphere Partners,Intellectual Property,Bengaluru,Trusted by individuals and businesses for reliable and timely legal assistance.
Adv. Kiran Rao,Corporate Law,Pune,A full-service firm serving clients nationwide with a focus on ethical practice.
Adv. Neha Agarwal,Consumer Rights,Pune,Combining legal expertise with technology for efficient and transparent legal services.
Lex & Co. Law Associates,Banking & Finance,Ahmedabad,Combining legal expertise with technology for efficient and transparent legal services.
JusticePath Legal,Civil Litigation,Ahmedabad,Providing complete legal support across diverse areas of practice with professionalism.
Adv. Anil Desai,Arbitration,Chennai,A reputed law office known for client-focused representation and effective legal solutions.
Veritas Law Firm,Property Disputes,Mumbai,Empowering clients through informed legal advice and strategic representation.
Judicore Law Office,Consumer Rights,Ahmedabad,A full-service firm serving clients nationwide with a focus on ethical practice.
Adv. Ramesh Kumar,Start-up Legal Advisory,Delhi,Dedicated advocate with years of experience in handling complex legal matters and litigation.
LegalSphere Partners,Property Disputes,Delhi,Dedicated advocate with years of experience in handling complex legal matters and litigation.
LegalSphere Partners,Property Disputes,Indore,Empowering clients through informed legal advice and strategic representation.
Adv. Ramesh Kumar,Corporate Law,Mumbai,Combining legal expertise with technology for efficient and transparent legal services.
LexPoint Associates,Civil Litigation,Lucknow,Focused on achieving favorable outcomes through precision and persistence.
LawBridge Legal,Real Estate Law,Indore,Trusted by individuals and businesses for reliable and timely legal assistance.
Veritas Law Firm,Employment Law,Ahmedabad,Empowering clients through informed legal advice and strategic representation.
RightTrack Legal Advisors,Employment Law,Kochi,Trusted by individuals and businesses for reliable and timely legal assistance.
Adv. Raghav Menon,Real Estate Law,Mumbai,Combining legal expertise with technology for efficient and transparent legal services.
Adv. Anil Desai,Cyber Law,Ahmedabad,A full-service firm serving clients nationwide with a focus on ethical practice.
Adv. Neha Agarwal,Consumer Rights,Chennai,A full-service firm serving clients nationwide with a focus on ethical practice.
Adv. Kiran Rao,Employment Law,Kochi,Providing complete legal support across diverse areas of practice with professionalism.
RightTrack Legal Advisors,Property Disputes,Mumbai,Focused on achieving favorable outcomes through precision and persistence.
Adv. Sneha Nair,Arbitration,Surat,Known for meticulous case preparation and strong courtroom advocacy.
Judicore Law Office,Contract Drafting,Kolkata,Dedicated advocate with years of experience in handling complex legal matters and litigation.
Adv. Anil Desai,Consumer Rights,Chennai,Known for meticulous case preparation and strong courtroom advocacy.
LegalSphere Partners,Arbitration,Jaipur,A modern firm offering a balance of traditional advocacy and innovative legal strategies.
Judicore Law Office,Banking & Finance,Ahmedabad,Combining legal expertise with technology for efficient and transparent legal services.
Adv. Tanvi Kapoor,Contract Drafting,Chandigarh,Focused on achieving favorable outcomes through precision and persistence.
CourtDesk Law Chambers,Start-up Legal Advisory,Lucknow,A full-service firm serving clients nationwide with a focus on ethical practice.
RightTrack Legal Advisors,Civil Litigation,Hyderabad,A full-service firm serving clients nationwide with a focus on ethical practice.
Adv. Sneha Nair,Cyber Law,Chandigarh,Known for meticulous case preparation and strong courtroom advocacy.
CourtDesk Law Chambers,Consumer Rights,Mumbai,Providing complete legal support across diverse areas of practice with professionalism.
Veritas Law Firm,Arbitration,Lucknow,Known for meticulous case preparation and strong courtroom advocacy.
Adv. Arun Sharma,Consumer Rights,Bengaluru,Focused on achieving favorable outcomes through precision and persistence.
Veritas Law Firm,Consumer Rights,Hyderabad,Trusted by individuals and businesses for reliable and timely legal assistance.
Adv. Anil Desai,Contract Drafting,Bengaluru,Trusted by individuals and businesses for reliable and timely legal assistance.
Adv. Arun Sharma,Family Law,Lucknow,Dedicated advocate with years of experience in handling complex legal matters and litigation.
LexPoint Associates,Contract Drafting,Chandigarh,Empowering clients through informed legal advice and strategic representation.
Adv. Ramesh Kumar,Start-up Legal Advisory,Hyderabad,Focused on achieving favorable outcomes through precision and persistence.
Lex & Co. Law Associates,Real Estate Law,Delhi,A modern firm offering a balance of traditional advocacy and innovative legal strategies.
CourtDesk Law Chambers,Arbitration,Chandigarh,A modern firm offering a balance of traditional advocacy and innovative legal strategies.
RightTrack Legal Advisors,Cyber Law,Pune,A full-service firm serving clients nationwide with a focus on ethical practice.
Adv. Anil Desai,Intellectual Property,Kochi,Focused on achieving favorable outcomes through precision and persistence.
LawBridge Legal,Real Estate Law,Surat,Empowering clients through informed legal advice and strategic representation.
Judicore Law Office,Contract Drafting,Jaipur,Trusted by individuals and businesses for reliable and timely legal assistance.
LexPoint Associates,Corporate Law,Kochi,A full-service firm serving clients nationwide with a focus on ethical practice.
Lex & Co. Law Associates,Cyber Law,Surat,Providing complete legal support across diverse areas of practice with professionalism.
Judicore Law Office,Arbitration,Hyderabad,Trusted by individuals and businesses for reliable and timely legal assistance.
Adv. Kiran Rao,Civil Litigation,Indore,Combining legal expertise with technology for efficient and transparent legal services.
LawBridge Legal,Contract Drafting,Hyderabad,Dedicated advocate with years of experience in handling complex legal matters and litigation.`;

function parseCSV(csv: string) {
	const lines = csv.trim().split('\n');
	const headers = lines[0].split(',');
	const data = [];
	
	for (let i = 1; i < lines.length; i++) {
		const values = lines[i].split(',');
		const obj: any = {};
		headers.forEach((header, index) => {
			obj[header.trim()] = values[index]?.trim() || '';
		});
		data.push(obj);
	}
	
	return data;
}

const advocatesData = parseCSV(csvData);

const ITEMS_PER_PAGE = 10;

export default function DirectoryPage() {
	const [selectedSpecialization, setSelectedSpecialization] = useState<string>("");
	const [selectedCity, setSelectedCity] = useState<string>("");
	const [currentPage, setCurrentPage] = useState(1);

	const specializations = useMemo(() => {
		const specs = new Set(advocatesData.map((a: any) => a.specialization));
		return Array.from(specs).sort();
	}, []);

	const cities = useMemo(() => {
		const cityList = new Set(advocatesData.map((a: any) => a.city));
		return Array.from(cityList).sort();
	}, []);

	const filteredAdvocates = useMemo(() => {
		return advocatesData.filter((adv: any) => {
			const matchSpec = !selectedSpecialization || adv.specialization === selectedSpecialization;
			const matchCity = !selectedCity || adv.city === selectedCity;
			return matchSpec && matchCity;
		});
	}, [selectedSpecialization, selectedCity]);

	const totalPages = Math.ceil(filteredAdvocates.length / ITEMS_PER_PAGE);
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const currentAdvocates = filteredAdvocates.slice(startIndex, startIndex + ITEMS_PER_PAGE);

	const isLawFirm = (title: string) => !title.startsWith("Adv.");

	// Reset to page 1 when filters change
	const handleFilterChange = () => {
		setCurrentPage(1);
	};

	return (
		<PageTransition>
			<div className="mx-auto max-w-7xl px-6 py-16">
				<h1 className="h1 mb-8 text-black">Advocates Directory</h1>

				{/* Filters */}
				<div className="premium-card mb-8">
					<div className="flex items-center gap-2 mb-4">
						<Filter className="h-5 w-5 text-black/60" />
						<h2 className="text-lg font-semibold text-black">Filters</h2>
					</div>
					<div className="grid md:grid-cols-2 gap-4">
						<div>
							<label className="block text-sm font-medium text-black/80 mb-2">Specialization</label>
							<select
								value={selectedSpecialization}
								onChange={(e) => {
									setSelectedSpecialization(e.target.value);
									handleFilterChange();
								}}
								className="w-full px-4 py-2 rounded-lg border border-black/10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/20"
							>
								<option value="">All Specializations</option>
								{specializations.map((spec) => (
									<option key={spec} value={spec}>{spec}</option>
								))}
							</select>
						</div>
						<div>
							<label className="block text-sm font-medium text-black/80 mb-2">City</label>
							<select
								value={selectedCity}
								onChange={(e) => {
									setSelectedCity(e.target.value);
									handleFilterChange();
								}}
								className="w-full px-4 py-2 rounded-lg border border-black/10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/20"
							>
								<option value="">All Cities</option>
								{cities.map((city) => (
									<option key={city} value={city}>{city}</option>
								))}
							</select>
						</div>
					</div>
					{filteredAdvocates.length > 0 && (
						<div className="mt-4 text-sm text-black/60">
							Showing {filteredAdvocates.length} advocate{filteredAdvocates.length !== 1 ? 's' : ''}
						</div>
					)}
				</div>

				{/* Advocates List */}
				{currentAdvocates.length > 0 ? (
					<>
						<div className="space-y-4 mb-8">
							{currentAdvocates.map((adv: any, index: number) => (
								<div key={index} className="premium-card text-black">
									<div className="flex gap-6">
										{/* Left: Image */}
										<div className="flex-shrink-0">
											<div className="w-24 h-24 rounded-lg overflow-hidden bg-gradient-to-br from-black/10 to-black/5 border border-black/10 flex items-center justify-center">
												{isLawFirm(adv.title) ? (
													<Building2 className="h-12 w-12 text-black/40" />
												) : (
													<User className="h-12 w-12 text-black/40" />
												)}
											</div>
										</div>

										{/* Right: Content */}
										<div className="flex-1">
											<div className="flex items-start justify-between mb-2">
												<h3 className="text-xl font-semibold text-black">{adv.title}</h3>
											</div>
											<div className="flex flex-wrap gap-2 mb-3">
												<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/10 text-black text-sm font-medium">
													{adv.specialization}
												</span>
												<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/5 text-black/70 text-sm">
													<MapPin className="h-3.5 w-3.5" />
													{adv.city}
												</span>
											</div>
											<p className="text-black/70 leading-relaxed">{adv.description}</p>
										</div>
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
					</>
				) : (
					<div className="premium-card text-center py-12">
						<p className="text-black/60">No advocates found matching your filters.</p>
					</div>
				)}
			</div>
		</PageTransition>
	);
}
