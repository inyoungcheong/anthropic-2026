export const scenes = [
	{
		kicker: "Seoul",
		variant: "landscape quiet",
		media: {
			type: "black",
			align: "center",
			width: "100vw",
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
		kicker: "Central Government",
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
				text: "Out of 5,500 candidates, I was one of about 100 selected for Korea's national civil service.",
				placement: "bottom-left"
			}
		]
	},
	{
		kicker: "2012-2019 / Government",
		variant: "archive",
		media: {
			type: "black",
			align: "center",
			width: "100vw",
			frame: "full"
		},
		beats: [
			{
				text: "I spent eight years moving across agencies and policy domains.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			},
			{
				text: "I drafted legislation, negotiated with parliament, and wrote speeches for Presidents and Ministers.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			},
			{
				text: "It was exciting, demanding, and closer to the center of public decision-making than I ever expected to be in my twenties.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			},
			{
				text: "My rotations included media regulation, data protection, and creative industries.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			},
			{
				text: "Media regulation taught me that technical systems become public issues through explanation, trust, and institutional process.",
				placement: "center-left",
				media: { type: "video", src: "/video/assembly_back.mp4", align: "center", width: "100vw", fit: "cover", tone: "dark", frame: "full" }
			},
			{
				text: "The most exciting project I worked on was with the National Museum of Korea.",
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
		motif: { type: "papers", intensity: "low", offset: 0 },
		media: {
			type: "black",
			align: "center",
			width: "100vw",
			frame: "full"
		},
		beats: [
			{
				text: "In 2019, I left Seoul on a Fulbright scholarship to study law at the University of Washington.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			},
			{
				text: "I expected to stay in my lane as a legal scholar.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			},
			{
				text: "Questions about online free speech and privacy could not be answered by law alone.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			}
		]
	},
	{
		kicker: "Crossing Buildings",
		motif: { type: "papers", intensity: "low", offset: 3 },
		media: {
			type: "black",
			align: "center",
			width: "100vw",
			frame: "full"
		},
		beats: [
			{
				text: "I was incredibly fortunate to meet mentors like Tadayoshi Kohno and Amy X. Zhang at UW Computer Science.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			},
			{
				text: "For three years, I worked between law and CS, learning the pace of labs, conferences, datasets, and collaborative technical research.",
				placement: "center-left",
				media: { type: "video", src: "/video/uw_lecture.mp4", align: "right", width: "86vw", fit: "contain" }
			},
			{
				text: "I was often the only person in the room who had drafted legislation and also sat through a machine learning lecture.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			}
		]
	},
	{
		kicker: "Research Translation",
		motif: { type: "papers", intensity: "medium", offset: 6 },
		media: {
			type: "black",
			align: "center",
			width: "100vw",
			frame: "full"
		},
		beats: [
			{
				text: "My work became a practice of translation across law, computer science, policy, public accountability, and human consequences.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
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
				text: "In 2025, after completing my doctorate, I began a postdoctoral fellowship at Princeton.",
				placement: "bottom-left"
			}
		]
	},
	{
		kicker: "2025-2026 / Princeton",
		motif: { type: "papers", intensity: "high", offset: 7 },
		media: {
			type: "video",
			src: "/video/papers.mp4",
			align: "center",
			width: "100vw",
			fit: "cover",
			tone: "dark",
			frame: "full"
		},
		beats: [
			{
				text: "At Princeton, I brought this practice into AI governance research.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			},
			{
				text: "My work now spans 22 peer-reviewed publications, including 2 US law review articles and 6 computer science conference papers across FAccT, CHI, AIES, and COLM.",
				placement: "bottom-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			},
			{
				text: "CITP widened the circle by bringing AI safety, machine learning, natural language processing, law, and public policy into the same conversation.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			},
			{
				text: "In spring 2026, that work extended to Harvard's Berkman Klein Center.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			}
		]
	},
	{
		kicker: "Why AI Safety",
		media: {
			type: "video",
			src: "/video/iaseai_short.mp4",
			align: "center",
			width: "84vw",
			fit: "contain",
			allowSound: true
		},
		beats: [
			{
				text: "The AI risks I care about most are often epistemic and emotional.",
				placement: "top-left"
			},
			{
				text: "They appear through beliefs that become easier to shape, relationships that become harder to understand, and agency that becomes harder to exercise.",
				placement: "center-left"
			},
			{
				text: "A system can feel personal while remaining structurally loyal to someone else.",
				placement: "bottom-right"
			},
			{
				text: "This is why I study agency, dependency, persuasion, and accountability as ordinary conditions of AI interaction.",
				placement: "bottom-left"
			}
		]
	},
	{
		kicker: "Why Anthropic",
		variant: "landscape",
		media: {
			type: "video",
			src: "/video/sanfran_back.mp4",
			align: "center",
			width: "100vw",
			fit: "cover",
			frame: "full"
		},
		beats: [
			{
				text: "These are the problems I want to study at Anthropic.",
				placement: "bottom-left"
			}
		]
	},
	{
		kicker: "Why Anthropic",
		variant: "pause anthropic-note",
		media: {
			type: "black",
			align: "center",
			width: "100vw",
			frame: "full"
		},
		beats: [
			{
				text: "Anthropic's safety work treats technical behavior, institutional accountability, and public trust as connected problems.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			},
			{
				text: "That is the kind of research culture where my work on epistemic harms, emotional dependency, agency, and public accountability belongs.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			},
			{
				text: "I want to help make AI safety research legible and useful to people outside the rooms where advanced systems are built.",
				placement: "center-left",
				media: { type: "black", align: "center", width: "100vw", frame: "full" }
			}
		]
	},
	{
		kicker: "Vibe Coding",
		variant: "landscape",
		media: {
			type: "video",
			src: "/video/coding.mp4",
			align: "center",
			width: "100vw",
			fit: "cover",
			frame: "full"
		},
		beats: [
			{
				text: "Vibe coding with Claude made that possibility feel concrete.",
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
				text: "With Claude and Claude Code, I began turning abstract governance questions into tools and experiences people can actually move through.",
				placement: "bottom-left"
			},
			{
				text: "That changed my sense of what public AI research can be. It can explain, test, invite, and make complicated stakes felt.",
				placement: "bottom-right"
			}
		]
	}
];
