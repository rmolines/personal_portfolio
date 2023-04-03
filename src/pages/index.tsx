import Head from "next/head";
import { Roboto_Flex } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import vagasScreenShot from "../../public/vagas.png";

const inter = Roboto_Flex({ subsets: ["latin"] });

function returnHidden() {
	return new Promise((res, rej) => {
		setTimeout(() => res("hidden"), 200);
	});
}

function WebVideo({
	videoPath,
	hidden,
}: {
	videoPath: string;
	hidden: boolean;
}) {
	return (
		<div className={`w-full ${hidden && "hidden"}`}>
			<video
				autoPlay
				muted
				loop
				preload="true"
				className={`w-full rounded-lg shadow-xl transition-all duration-300 ${
					hidden && ""
				}`}
				key={videoPath}
			>
				<source src={videoPath} type="video/mp4" />
			</video>
		</div>
	);
}

function ScreenShot({
	screenShot,
	hidden,
}: {
	screenShot: any;
	hidden: boolean;
}) {
	return (
		<div className={`w-full ${hidden && "hidden"} `}>
			<Image
				alt="screenShot"
				src={screenShot}
				className={`h-full w-full rounded-lg shadow-xl transition-all duration-300 ${
					hidden && ""
				}`}
			/>
		</div>
	);
}

function MobileVideo({
	videoPath,
	hidden,
}: {
	videoPath: string;
	hidden: boolean;
}) {
	return (
		<div className={`inset-0 h-full w-full ${hidden && "hidden"}`}>
			<video
				autoPlay
				muted
				loop
				preload="true"
				className={`mx-auto w-72 rounded-[2.5rem] shadow-xl transition-all ${
					hidden && ""
				}`}
				key={videoPath}
			>
				<source src={videoPath} type="video/mp4" />
			</video>
		</div>
	);
}

function ProjectDescription({
	title,
	description,
	logoPath,
}: {
	title: string;
	description: string;
	logoPath: string;
}) {
	return (
		<>
			<div className="aspect-square h-24">
				<div className="relative m-auto aspect-square h-12">
					<Image alt="logo" src={logoPath} fill />
				</div>
			</div>
			<div>
				<div className="text-left text-4xl font-medium">{title}</div>
				<span className="text-left">{description}</span>
			</div>
		</>
	);
}

export default function Home() {
	const [projectInd, setProjectInd] = useState(0);
	const [videoPath, setVideoPath] = useState("/innfluenced.mp4");
	const [isVideoMobile, setIsVideoMobiile] = useState(false);

	const descriptions = [
		{
			title: "VagasEmStartups.com",
			description: "Jobs at startups from the best VC funds in Brazil",
			logoPath: "/vagas.png",
			screenShot: vagasScreenShot,
			videoPath: "",
			type: "screenshot",
		},
		{
			title: "Innfluenced.me",
			description: "Organize and showcase content creators' work",
			logoPath: "/innfluenced.png",
			videoPath: "/innfluenced-crop.mp4",
			type: "web",
		},
		{
			title: "Ticketeria",
			description: "Buy and resell tickets securely on WhatsApp",
			logoPath: "/ticketeria.png",
			videoPath: "/ticketeria.mp4",
			type: "web",
		},
		{
			title: "ToGather",
			description: "Connect partygoers before and after the party",
			logoPath: "/togather.png",
			videoPath: "/togather.mp4",
			type: "app",
		},
		{
			title: "Clam",
			description: "Investor relations for startups",
			logoPath: "/clam.png",
			videoPath: "/clam.mp4",
			type: "web",
		},
	];

	return (
		<>
			<Head>
				<title>Rafael Molines</title>
				<meta name="description" content="Personal Portfolio" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="196x196"
					href="/favicon-196x196.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="/favicon-96x96.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
			</Head>
			<main
				className={`flex h-max min-h-screen w-full grid-cols-12 flex-col bg-stone-100 ${inter.className}`}
			>
				<div className="container mx-auto flex max-w-4xl grow flex-col px-4 lg:px-0">
					<div className="col-span-4 flex flex-col items-start pt-16">
						<h1 className="text-right text-5xl font-semibold">
							Rafael Molines
						</h1>
						<h3 className="text-center">
							VC and Software Engineer
						</h3>
						<div className="mt-4 flex gap-x-2">
							<Link
								href={
									"https://www.linkedin.com/in/rafaelmolinesismael/"
								}
								target="_blank"
								className="relative aspect-square h-8"
							>
								<Image src="/linkedin.png" alt="logo" fill />
							</Link>
							<Link
								href={"https://github.com/rmolines"}
								target="_blank"
								className="relative aspect-square h-8"
							>
								<Image src="/github.png" alt="logo" fill />
							</Link>
							<Link
								href={"https://twitter.com/rafael_molines"}
								target="_blank"
								className="relative aspect-square h-8"
							>
								<Image src="/twitter.png" alt="logo" fill />
							</Link>
						</div>
					</div>
					<div className="col-span-8 flex grow flex-col items-center gap-y-8 pt-12">
						<div className="flex w-full flex-col items-center gap-y-4">
							<div className="flex w-full flex-col items-end gap-y-2">
								<h3 className="w-full text-end text-sm font-light">
									Projects
								</h3>
								<div className="flex items-end gap-x-8">
									{descriptions.map((item, ind) => (
										<button
											key={ind}
											className={`text-center transition-all ${
												projectInd === ind
													? "text-2xl text-stone-900"
													: "text-stone-500 hover:text-2xl"
											}`}
											onClick={() => {
												setVideoPath(
													"/innfluenced.mp4"
												);
												setIsVideoMobiile(false);
												setProjectInd(ind);
											}}
										>
											{item.title}
											<div
												className={`mx-auto w-full border border-stone-500 opacity-0 transition-all ${
													projectInd === ind &&
													"opacity-100"
												}`}
											/>
										</button>
									))}
								</div>
							</div>
							<div className="flex w-full items-start">
								<div className="mt-12 flex w-full max-w-lg justify-start">
									<ProjectDescription
										title={descriptions[projectInd].title}
										description={
											descriptions[projectInd].description
										}
										logoPath={
											descriptions[projectInd].logoPath
										}
									/>
								</div>
							</div>
						</div>
						<div className="relative flex h-full w-full grow items-center bg-stone-100">
							{descriptions.map((desc, ind) => {
								switch (desc.type) {
									case "app":
										return (
											<MobileVideo
												key={ind}
												videoPath={desc.videoPath}
												hidden={ind !== projectInd}
											/>
										);
									case "screenshot":
										return (
											<ScreenShot
												key={ind}
												screenShot={desc.screenShot}
												hidden={ind !== projectInd}
											/>
										);

									default:
										return (
											<WebVideo
												key={ind}
												videoPath={desc.videoPath}
												hidden={ind !== projectInd}
											/>
										);
								}
							})}
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
