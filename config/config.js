
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';


export const home = {
	name: "Thomas",
	links: [
		{
			title: "About",
			link: "/#about",
		},
		{
			title: "Internships",
			link: "/#internships",
		},
		/*{
			title: "Projects",
			link: "/projects",
		},*/
		{
			title: "Contact",
			link: "/#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}

export const navigation = {
	name: "Thomas",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Internships",
			link: "#internships",
		},
		/*{
			title: "Projects",
			link: "#projects",
		},*/
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}


export const intro = {
	title: "Hey, I'm Thomas",
	description: "A Computer Scientist who enjoys image processing and data analytics.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://docs.google.com/document/d/1DLVepWo3QmgN5DX3q83T41hFFuK5Leoy/edit?usp=sharing&ouid=115261387513057212015&rtpof=true&sd=true",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I graduated with a Computer Science degree from both Montgomery College (A.A.) in 2019 and the University of Maryland: College Park (B.S.) in 2022 with a minor concentration of Technology Entreprenuership. I interned twice for NASA in two seperate programs; NASA's Goddard Space Flight Center located in Greenbelt, Maryland and NASA's Kennedy Space Center located in Merritt Island, Florida. In addition to my internship experiences, I worked as a data analyst for Wellington Finch and Sinclair LLC while I was in school as well as after graduating.",
		"I am eager to delve deeper into AWS Cloud to enhance my current machine learning expertise. By mastering AWS services like Amazon SageMaker and EC2, I aim to scale and optimize model training efficiently. With a focus on deploying models as APIs using AWS Lambda and integrating AI-driven services like Amazon Rekognition and Polly, I envision creating innovative applications that harness the power of cloud computing and cutting-edge machine learning algorithms. Through this pursuit, I aspire to push the boundaries of computer vision, natural language processing, and predictive modeling, ultimately making a positive impact in the field of AI."
		"When I’m not programming, I like to make tea, practice linear algebra, build cars, and play soccer. I think the most interesting thing about me outside of programming is that my engineering mindset has made me so facinated with doing the impossible on cars. Using my entrepreneurship skills from school combined with my problem solving abilities, I was able to fabricate and weld together the only turbo manifold available at the time for BMW's 3 series (328i 2005-2011) to replicate and sell to consumers."
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Image Processing",
			description: "I train and testfit data.",
			icons: null,
		},
		{
			title: "Data Analytics",
			description: "I question and find reasoning in data.",
			icons: null,
		}
	],
}

export const internships = {
	title: "Internships",
	cards: [
		{
			title: "NASA's Kennedy Space Center",
			description: "Autonomous Swarmie Robot.",
			icons: [
				{
					icon: faGithub,
					link: "./Swarmathon",
				},
			]
		},
		{
			title: "NASA's Goddard Space Flight Center",
			description: "Data Automation.",
			icons: [
				{
					icon: faAppStore,
					link: "./GSFCintern",
				},
			]
		},
	],
}


export const projects = {
	title: "Projects",
	cards: [
		{
			title: "",
			description: "My significant projects with code are currently under contract to not share.",
			icons: [
				{
					icon: faGithub,
					link: "/Swarmathon",
				},
			]
		},

	],
}



export const contact = {
	title: "Contact",
	description: "Let's chat! Alternatively, please reach me at thomas.winkert@gmail.com or connect on LinkedIn.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:thomas.winkert@gmail.com",
			isPrimary: true,
		},
		{
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/thomas-winkert-241775141/",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE
export const SEO = {
	// 50 - 60 char
	title: "Thomas Winkert | Computer Scientist",
	description: "",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@twinkert",
	description: "Computer Scientist",
	cards: [
		{
			title: "My website",
			link: "/",
		},
		{
			title: "Internships",
			link: "/",
		},
		{
			title: "Projects",
			link: "/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/twinkert",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/thomas-winkert-241775141/",
		},
	]
}