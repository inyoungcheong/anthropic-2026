export const scenes = [
	{
		kicker: "Seoul",
		variant: "landscape",
		media: {
			type: "video",
			src: "/video/govt_back.mp4",
			align: "center",
			width: "100vw",
			fit: "cover",
			frame: "full"
		},
		beats: [
			{
				text: "This story begins in the South Korean government.",
				placement: "bottom-left"
			}
		]
	},
	{
		kicker: "2012-2019 / Government",
		variant: "archive",
		media: {
			type: "photo",
			align: "right",
			width: "52vw",
			fit: "cover",
			items: [
				{ type: "photo", src: "/images/govt_working.jpg", align: "right", width: "50vw", fit: "cover" },
				{ type: "photo", src: "/images/govt_meeting2.jpg", align: "right", width: "52vw", fit: "cover" },
				{ type: "photo", src: "/images/govt_broadcasting.jpg", align: "left", width: "54vw", fit: "cover" }
			]
		},
		beats: [
			{
				text: "I passed the national civil service exam and spent eight years moving across agencies and policy domains.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			},
			{
				text: "I drafted legislation, negotiated with parliament, and wrote speeches for Presidents and Ministers.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			},
			{
				text: "The work taught me how difficult it is to turn public values into institutional action.",
				placement: "bottom-left",
				media: { type: "photo", src: "/images/govt_working.jpg", align: "right", width: "50vw", fit: "cover" }
			},
			{
				text: "My rotations included media regulation, data protection, and creative industries.",
				placement: "bottom-left",
				media: { type: "photo", src: "/images/govt_meeting2.jpg", align: "right", width: "52vw", fit: "cover" }
			},
			{
				text: "Media regulation taught me that technical systems become public issues through explanation, trust, and institutional process.",
				placement: "center-right",
				media: { type: "photo", src: "/images/govt_broadcasting.jpg", align: "left", width: "54vw", fit: "cover" }
			},
			{
				text: "One project made that lesson concrete.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			}
		]
	},
	{
		kicker: "A Museum Project",
		variant: "silent",
		media: {
			type: "video",
			src: "/video/museum.mp4",
			align: "center",
			width: "84vw",
			fit: "contain",
			allowSound: true
		},
		beats: []
	},
	{
		kicker: "The Question",
		variant: "pause",
		media: {
			type: "black",
			align: "center",
			width: "100vw",
			frame: "full"
		},
		beats: [
			{
				text: "I thought government might become my lifetime career.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			},
			{
				text: "At the same time, a question kept pressing on me.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			},
			{
				text: "How should law protect freedom of expression when governments can be overbearing and global technology companies can be overwhelmingly powerful?",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			},
			{
				text: "South Korea's government could feel both overbearing and powerless.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			},
			{
				text: "That question brought me to the University of Washington School of Law as a Fulbright scholar.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			}
		]
	},
	{
		kicker: "Seattle",
		variant: "landscape",
		media: {
			type: "video",
			src: "/video/uw_back.mp4",
			align: "center",
			width: "100vw",
			fit: "cover",
			frame: "full"
		},
		beats: [
			{
				text: "I crossed the ocean to study the limits of institutional power.",
				placement: "bottom-left"
			}
		]
	},
	{
		kicker: "2019-2024 / Law + Computer Science",
		media: {
			type: "video",
			src: "/video/uw_lecture.mp4",
			align: "right",
			width: "86vw",
			fit: "contain"
		},
		beats: [
			{
				text: "In 2019, I left Seoul on a Fulbright scholarship to study law at the University of Washington.",
				placement: "bottom-left",
				media: { type: "photo", src: "/images/uw_law_friends_2019.jpg", align: "left", width: "82vw", fit: "cover" }
			},
			{
				text: "I expected to stay in my lane as a legal scholar.",
				placement: "center-left",
				media: { type: "video", src: "/video/uw_lecture.mp4", align: "right", width: "86vw", fit: "contain" }
			},
			{
				text: "Instead, the questions that mattered most kept crossing the boundaries that universities and agencies had drawn for them.",
				placement: "bottom-right",
				media: { type: "video", src: "/video/uw_study.mp4", align: "center", width: "84vw", fit: "contain" }
			}
		]
	},
	{
		kicker: "Crossing Buildings",
		media: {
			type: "video",
			src: "/video/uw_study.mp4",
			align: "center",
			width: "84vw",
			fit: "contain"
		},
		beats: [
			{
				text: "One course on explainable AI pulled me into a computer science building I had never entered.",
				placement: "top-left",
				media: { type: "photo", src: "/images/uw_study.jpg", align: "right", width: "84vw", fit: "cover" }
			},
			{
				text: "For three years, I worked between law and CS, learning the pace of labs, conferences, datasets, and collaborative technical research.",
				placement: "bottom-left",
				media: {
					type: "photo",
					src: "/images/uw_presentation_neurips_2023.png",
					align: "center",
					width: "82vw",
					fit: "contain",
					position: "center 32%"
				}
			},
			{
				text: "I was often the only person in the room who had drafted legislation and also sat through a machine learning lecture.",
				placement: "bottom-right",
				media: { type: "photo", src: "/images/uwcs_2022.jpeg", align: "right", width: "82vw", fit: "cover" }
			}
		]
	},
	{
		kicker: "Research Translation",
		media: {
			type: "photo",
			src: "/images/scholar_stanford_present_2022.jpg",
			align: "center",
			width: "80vw",
			fit: "cover"
		},
		beats: [
			{
				text: "That combination turned out to matter.",
				placement: "center-left"
			},
			{
				text: "My work became a practice of translation across law, computer science, policy, public accountability, and human consequences.",
				placement: "bottom-left"
			},
			{
				text: "I published across FAccT, CHI, AIES, COLM, and law reviews, often writing from the space between fields rather than from the center of one.",
				placement: "top-right"
			}
		]
	},
	{
		kicker: "Princeton",
		variant: "landscape",
		media: {
			type: "video",
			src: "/video/princeton_back.mp4",
			align: "center",
			width: "100vw",
			fit: "cover",
			frame: "full"
		},
		beats: [
			{
				text: "The question widened again.",
				placement: "bottom-left"
			}
		]
	},
	{
		kicker: "2024-2026 / Princeton",
		media: {
			type: "photo",
			src: "/images/princeton_citp_present_2025.jpeg",
			align: "right",
			width: "86vw",
			fit: "cover"
		},
		beats: [
			{
				text: "After completing my doctorate, I joined Princeton's Center for Information Technology Policy.",
				placement: "top-left"
			},
			{
				text: "CITP widened the circle by bringing AI safety, machine learning, natural language processing, law, and public policy into the same conversation.",
				placement: "bottom-left"
			},
			{
				text: "In spring 2026, that work extended to Harvard's Berkman Klein Center, another place where public institutions and AI governance meet.",
				placement: "center-left"
			},
			{
				text: "The through line stayed the same. I kept asking how advanced systems can be made accountable to people outside the rooms where they are built.",
				placement: "center-left"
			}
		]
	},
	{
		kicker: "Why AI Safety",
		media: {
			type: "video",
			src: "/video/iasesai-small.mp4",
			align: "center",
			width: "84vw",
			fit: "contain",
			allowSound: true
		},
		beats: [
			{
				text: "I care about AI safety because many serious harms do not arrive as visible catastrophe.",
				placement: "top-left"
			},
			{
				text: "They appear gradually, through agency that becomes harder to exercise and relationships that become harder to understand.",
				placement: "center-left"
			},
			{
				text: "A system can feel personal while remaining structurally loyal to someone else.",
				placement: "bottom-right"
			},
			{
				text: "This is why I study agency, dependency, persuasion, and accountability as ordinary conditions of AI interaction, not as edge cases.",
				placement: "bottom-left"
			}
		]
	},
	{
		kicker: "Building With Claude",
		media: {
			type: "video",
			src: "/video/vavaprompter.mp4",
			align: "right",
			width: "86vw",
			fit: "contain",
			allowSound: true
		},
		beats: [
			{
				text: "For years, my research outputs were papers, talks, and policy memos.",
				placement: "top-left"
			},
			{
				text: "I still value those forms. Building also changed how I communicate research.",
				placement: "center-left"
			},
			{
				text: "With Claude, I began turning abstract governance questions into tools and experiences people can actually move through.",
				placement: "bottom-left"
			},
			{
				text: "That changed my sense of what public AI research can be. It can explain, test, invite, and make complicated stakes felt.",
				placement: "bottom-right"
			}
		]
	}
];
