export const scenes = [
	{
		kicker: "2012-2019 / Government",
		variant: "opening",
		media: {
			type: "photo",
			align: "right",
			width: "88vw",
			fit: "cover",
			items: [
				{ type: "photo", src: "/images/govt_broadcasting.jpg", align: "center", width: "84vw", fit: "cover" },
				{ type: "photo", src: "/images/govt_meeting.jpg", align: "right", width: "82vw", fit: "cover" },
				{ type: "photo", src: "/images/govt_fashionweek.jpg", align: "left", width: "82vw", fit: "cover" }
			]
		},
		beats: [
			{
				text: "Before Anthropic, there was government.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			},
			{
				text: "Rooms full of paper, budgets, and competing public duties.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			},
			{
				text: "Technology policy arrived slowly, then all at once.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			},
			{
				text: "I learned that new systems become real only when institutions can act.",
				placement: "bottom-left",
				media: { type: "photo", src: "/images/govt_broadcasting.jpg", align: "center", width: "84vw", fit: "cover" }
			},
			{
				text: "That lesson stayed with me as AI moved from research into public life.",
				placement: "bottom-right",
				media: { type: "photo", src: "/images/govt_meeting.jpg", align: "right", width: "82vw", fit: "cover" }
			},
			{
				text: "Public-interest technology had to be argued into existence.",
				placement: "top-left",
				media: { type: "photo", src: "/images/govt_fashionweek.jpg", align: "left", width: "82vw", fit: "cover" }
			}
		]
	},
	{
		kicker: "A Museum Project",
		media: {
			type: "video",
			src: "/video/museum.mp4",
			align: "center",
			width: "84vw",
			fit: "contain",
			allowSound: true
		},
		beats: [
			{
				text: "The project I am most proud of began as a proposal everyone thought was too expensive.",
				placement: "top-left"
			},
			{
				text: "I reframed immersive exhibition technology as public-interest innovation, then walked it through the National Assembly and the Ministry of Finance.",
				placement: "bottom-left"
			},
			{
				text: "The result was a 10 million dollar immersive museum space, later used by BTS in a performance watched around the world.",
				placement: "bottom-right"
			},
			{
				text: "It was the first time I saw public-interest technology move from a written argument into a room people could enter.",
				placement: "center-left"
			}
		]
	},
	{
		kicker: "2019-2024 / Law + Computer Science",
		media: {
			type: "photo",
			src: "/images/uw_law_friends_2019.jpg",
			align: "left",
			width: "82vw",
			fit: "cover"
		},
		beats: [
			{
				text: "In 2019, I left Seoul on a Fulbright scholarship to study law at the University of Washington.",
				placement: "top-right"
			},
			{
				text: "I expected to stay in my lane as a legal scholar.",
				placement: "center-right"
			},
			{
				text: "Instead, the questions that mattered most kept crossing the boundaries that universities and agencies had drawn for them.",
				placement: "bottom-right"
			}
		]
	},
	{
		kicker: "Crossing Buildings",
		media: {
			type: "photo",
			src: "/images/uwcs_2022.jpeg",
			align: "right",
			width: "86vw",
			fit: "cover"
		},
		beats: [
			{
				text: "One course on explainable AI pulled me into a computer science building I had never entered.",
				placement: "top-left"
			},
			{
				text: "For three years, I worked between law and CS, learning the pace of labs, conferences, datasets, and collaborative technical research.",
				placement: "bottom-left"
			},
			{
				text: "I was often the only person in the room who had drafted legislation and also sat through a machine learning lecture.",
				placement: "bottom-right"
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
