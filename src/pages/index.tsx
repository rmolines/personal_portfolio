import Head from "next/head";
import { Roboto_Flex } from "next/font/google";
import React, { RefObject, useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import vagasScreenShot from "../../public/vagas.png";
import dynamic from "next/dynamic";
import { BeatLoader } from "react-spinners";
import ReactPlayer from "react-player";
import { HiOutlineExternalLink } from "react-icons/hi";
import awsLogo from "../../public/logos/aws-logo.png";
import bravoLogo from "../../public/logos/bravo-logo.png";
import firebaseLogo from "../../public/logos/firebase-logo.png";
import instagramLogo from "../../public/logos/instagram-logo.png";
import notionLogo from "../../public/logos/notion-logo.png";
import reactLogo from "../../public/logos/react-logo.png";
import rnLogo from "../../public/logos/react-native-logo.svg";
import supabaseLogo from "../../public/logos/supabase-logo.png";
import tsLogo from "../../public/logos/ts-logo.png";
import superLogo from "../../public/logos/super-logo.svg";
import whatsappLogo from "../../public/logos/whatsapp-biz-logo.svg";
import nextJSLogo from "../../public/logos/nextjs-logo.png";
import vercelLogo from "../../public/logos/vercel-logo.png";
import expoLogo from "../../public/logos/expo-logo.png";

import vagasLogo from "../../public/vagas.png";
import innfluencedLogo from "../../public/innfluenced.png";
import clamLogo from "../../public/clam.png";
import ticketeriaLogo from "../../public/ticketeria.png";
import togatherLogo from "../../public/togather.png";

const inter = Roboto_Flex({ subsets: ["latin"] });

const ReactPlayerLazy = dynamic(() => import("react-player/lazy"), {
	ssr: false,
});

function WebVideo({
	videoPath,
	hidden,
}: {
	videoPath: string;
	hidden: boolean;
}) {
	const [showLoader, setShowLoader] = useState(true);
	const playerRef = useRef<ReactPlayer>();

	useEffect(() => {
		if (playerRef.current) {
			console.log(playerRef.current);
			playerRef.current.seekTo(0);
		}
	}, [hidden]);

	return (
		<div
			className={`relative w-full overflow-hidden rounded-lg ${
				!showLoader && "shadow-xl"
			} ${hidden && "hidden"}`}
		>
			{showLoader && (
				<div className="absolute z-50 flex h-full w-full items-center justify-center bg-stone-100">
					<BeatLoader color="#1c1917" size={20} />
				</div>
			)}
			<ReactPlayerLazy
				// ref={playerRef}
				className={`z-0 w-full rounded-lg transition-all duration-300 ${
					!showLoader && "shadow-xl "
				} ${hidden && ""}`}
				url={videoPath}
				playing
				loop
				playsinline
				muted
				width="100%"
				height="100%"
				fallback={<BeatLoader color="#1c1917" size={20} />}
				onBufferEnd={() => setShowLoader(false)}
				onReady={(player) => (playerRef.current = player)}
			/>
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
	const playerRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (playerRef.current) {
			console.log(playerRef.current);
			playerRef.current.currentTime = 0;
		}
	}, [hidden, playerRef]);

	return (
		<div className={`inset-0 h-full w-full ${hidden && "hidden"}`}>
			<video
				ref={playerRef}
				autoPlay
				muted
				playsInline
				loop
				preload="true"
				className={`mx-auto w-72 rounded-[2.5rem] shadow-xl transition-all ${
					hidden && ""
				}`}
				key={videoPath}
			>
				<source src={videoPath} type="video/mp4" />
			</video>
			{/* <div
				className={`mx-auto w-72 overflow-hidden rounded-[2.5rem] bg-stone-200 shadow-xl transition-all ${
					hidden && ""
				}`}
			>
				<ReactPlayer
					className={`w-full rounded-[2.5rem] bg-stone-200 shadow-xl transition-all duration-300 ${
						hidden && ""
					}`}
					url={videoPath}
					playing
					loop
					muted
					width="100%"
					height="100%"
					fallback={
						<ClimbingBoxLoader color="hsla(168, 0%, 10%, 1)" />
					}
				/>
			</div> */}
		</div>
	);
}

function ProjectDescription({
	title,
	description,
	logo,
	techStack,
	link,
}: {
	title: string;
	description: string;
	logo: StaticImageData;
	techStack: StaticImageData[];
	link?: string;
}) {
	return (
		<div className="flex w-full flex-col md:px-4">
			<div className="flex items-center gap-x-3">
				<div className="flex h-16 items-center">
					<Image
						alt="logo"
						src={logo}
						className="my-auto h-5/6 w-auto"
					/>
				</div>
				<div className="flex flex-col">
					<div className="flex items-center gap-x-1">
						<div className="text-left text-4xl font-medium">
							{title}
						</div>
						{link && (
							<Link
								href={link}
								target="_blank"
								className="text-left text-3xl font-bold text-gray-400 hover:text-gray-900"
							>
								<HiOutlineExternalLink />
							</Link>
						)}
					</div>
					<span className="text-left">{description}</span>
				</div>
			</div>
			<div className="mt-4 flex w-full flex-col items-end">
				<div className="text-left text-sm text-stone-500">
					Tech Stack
				</div>
				<div className="mt-2 mb-8 flex h-8 w-full flex-wrap justify-end gap-4 md:mb-0 md:flex-nowrap">
					{techStack.map((tech, ind) => (
						<div key={ind} className="relative h-full">
							<Image
								src={tech}
								alt="logo"
								// fill
								className="h-full w-auto"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default function Home() {
	const [projectInd, setProjectInd] = useState(0);
	const [videoPath, setVideoPath] = useState("/innfluenced.mp4");
	const [isVideoMobile, setIsVideoMobiile] = useState(false);

	const descriptions = [
		{
			title: "VagasEmStartups.com",
			link: "https://www.vagasemstartups.com",
			description:
				"Find at jobs at startups from the best VC funds in Brazil",
			logo: vagasLogo,
			screenShot: vagasScreenShot,
			videoPath: "/vagas.mp4",
			type: "web",
			techStack: [nextJSLogo, supabaseLogo, vercelLogo, tsLogo],
		},
		{
			title: "Innfluenced.me",
			description: "Organize and showcase content creators' work",
			logo: innfluencedLogo,
			videoPath: "/innfluenced-crop.mp4",
			type: "web",
			techStack: [nextJSLogo, supabaseLogo, vercelLogo, tsLogo],
		},
		{
			title: "Ticketeria",
			description: "Buy and resell tickets securely on WhatsApp",
			logo: ticketeriaLogo,
			videoPath: "/ticketeria.mp4",
			type: "web",
			techStack: [instagramLogo, notionLogo, whatsappLogo, superLogo],
		},
		{
			title: "ToGather",
			description: "Connect partygoers before and after the party",
			logo: togatherLogo,
			videoPath: "/togather.mp4",
			type: "app",
			techStack: [bravoLogo, expoLogo, rnLogo],
		},
		{
			title: "Clam",
			description: "Investor relations for startups",
			logo: clamLogo,
			videoPath: "/clam.mp4",
			type: "web",
			techStack: [nextJSLogo, firebaseLogo, vercelLogo, tsLogo],
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
					<div className="col-span-4 flex flex-col items-start pt-10">
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
					<div className="col-span-8 flex grow flex-col items-center pt-12">
						<div className="flex w-full flex-col items-center">
							<div className="flex w-full flex-col items-end gap-y-2">
								<h3 className="w-full text-end text-sm font-light">
									Projects
								</h3>
								<div className="flex flex-col items-end gap-y-2 gap-x-8 md:flex-row">
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
							<div className="mt-12 flex w-full items-start">
								<div className="mt-12 flex w-full justify-start">
									<ProjectDescription
										title={descriptions[projectInd].title}
										description={
											descriptions[projectInd].description
										}
										logo={descriptions[projectInd].logo}
										techStack={
											descriptions[projectInd].techStack
										}
										link={descriptions[projectInd].link}
									/>
								</div>
							</div>
						</div>
						<div className="relative mb-16 mt-8 flex h-full w-full grow items-center bg-stone-100">
							{descriptions.map((desc, ind) => {
								// if (ind === projectInd) {
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
								// }
							})}
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
