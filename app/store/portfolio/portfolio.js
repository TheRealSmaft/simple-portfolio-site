const portfolio = [
	{
		name: "AGT Tapes Website",
		url: "agt-tapes-website",
		challenge: "Design a website to promote AGT Products' tape division.",
		concept: "Business to business focused site that allows users to submit quote requests for both stock and custom adhesive tapes.",
		method: "The front-end of the site was built with AngularJS and SASS, with PHP and an SQL database on the back-end. I also shot and edited all of the photos with Photoshop and created all of the graphics using Illustrator.",
		funFacts: [
			"The foam tapes are highly customizable, which necessitated that I program a part number generator."
		],
		images: ["AGTTapes/AGTTapesThumbnail.png"],
		thumb: "AGTTapes/AGTTapesThumbnail.png",
		siteUrl: "http://www.agttapes.com/home",
		outline: true,
		magnifiable: false
	},
	{
		name: "Piano Competition Poster",
		url: "piano-competition-poster",
		challenge: "Design a poster for the Emilio Del Rosario youth piano competition.",
		concept: "A whimsical and vibrant design intended to reach younger audiences, yet retain the inherent elegance of a live classical performance.",
		method: "I used Illustrator to create the initial piano and music notes, then used Photoshop's 3D capabilities to give the artwork depth and arrange the scene. The elements were brought together in the final layout using InDesign.",
		funFacts: [
			"The piano is supposed to appear as though its own music is lifting it in the air."
		],
		thumb: "PianoPoster/PianoPosterThumbnail.png",
		images: ["PianoPoster/PianoPosterLarge.jpg"],
		outline: true,
		magnifiable: true
	},
	{
		name: "Elvisaurus Rex and the Carrot from Outer Space",
		url: "bunny-cartoon",
		challenge: "Create an animated short featuring my pet rabbit, Elvisaurus Rex.",
		concept: "Use rotoscoping techniques to animate Elvis moving around naturally, then used this animation in a ridiculous story about an alien carrot.",
		method: "I spliced together multiple videos taken with my phone camera and converted them to frames in Photoshop. I then used a Wacom drawing tablet to trace Elvis frame by frame for a hand-drawn style. I then animated the carrot, UFO, and cage using the same hand-drawn, frame by frame method and compiled all of the elements in After Effects.",
		funFacts: [
			"I also did the voice work and created the sound effects, which I recorded and edited in Adobe Audition.",
			"Rabbits will do ANYTHING for a carrot. They are stereotypical like that.",
			"Elvisaurus Rex now has a female companion named Priscilladactyl."
		],
		images: ["ElvisCartoon/ElvisCartoonThumbnail.jpg"],
		thumb: "ElvisCartoon/ElvisCartoonThumbnail.jpg",
		outline: true,
		magnifiable: false
	},
	{
		name: 'Sacrilicious Hopnipotent',
		url: 'sacrilicious-hopnipotent',
		challenge: "Design a beverage label as a school project.",
		concept: "This is a label for an invented brewery called Sacrilicious and their even more imaginary beer, Hopnipotent. These names may be real now or in the future, so I would like to note that my label design is unaffiliated.",
		method: "I drew the hop-bearded god by hand using charcoal pencils, scanned it, then colorized it in Photoshop. I designed the Sacrilicious logo and all other graphics in Illustrator, then composed the artwork and the text in InDesign. I did all of this while drinking beer.",
		funFacts: [
			"My name over \"Brewmaster\" is written in a font I made of my own handwriting.",
			"I really like IPAs, if you couldn't tell."
		],
		thumb: 'Hopnipotent/HopnipotentThumbnail.png',
		images: ['Hopnipotent/HopnipotentLabelLarge.png'],
		outline: false,
		magnifiable: true
	},
	{
		name: 'Flambé',
		url: 'flambe',
		challenge: "Design a restaurant menu as a school project.",
		concept: "This is a menu for a restaurant concept I invented called Flambé. The concept is an upscale/casual eatery with a pyromaniacal twist.",
		method: "I designed the Flambé logo and the menu graphics using Illustrator, then composed the graphics and text in InDesign. I then printed and folded the menu and burnt the edges using good ol' fashioned fire.",
		funFacts: [
			"I started conceptualizing real fire-inspired items for the menu, which was well outside the project scope, before realizing I was spending too much time on it. I then quickly devolved into writing weird stuff for my own amusement."
		],
		thumb: 'Flambe/FlambeThumbnail.png',
		images: ['Flambe/FlambeFrontLarge.png', 'Flambe/FlambeBackLarge.png'],
		outline: false,
		magnifiable: true
	},
	{
		name: 'Batavia Main Street Events Poster',
		url: 'batavia-events-poster',
		challenge: "Design a poster for local nonprofit Batavia MainStreet to advertise upcoming public events.",
		concept: "Create a simple, colorful graphic image of the heart of Batavia's downtown, complete with a windmill (an icon of Batavia, IL).",
		method: "I visited downtown Batavia to shoot photos of recognizable places. I selected the best photo and used Illustrator to recreate the image in the intended style. I also created the graphics for the windmill and geese in Illustrator (not part of the original image) and compiled it along with the text in InDesign.",
		funFacts: [
			"This poster was the winning entrant in a Batavia MainStreet design contest.",
			"Winning the contest provided me the opportunity to do more design work for the city of Batavia."
		],
		thumb: 'BataviaPoster/BataviaPosterThumbnail.png',
		images: ['BataviaPoster/BataviaPosterLarge.png'],
		outline: true,
		magnifiable: true
	},
	{
		name: 'Skull and Fishbowl Still Life',
		url: 'skull-and-fishbowl-still-life',
		challenge: "Draw a cool still life as a school project.",
		concept: "Draw what I see as best I as I can, bless my heart.",
		method: "I drew this still life completely by hand using black and white conté crayons on toned paper.",
		funFacts: [
			"The skull was probably fake."
		],
		thumb: 'SkullAndBowl/SkullAndBowlThumbnail.jpg',
		images: ['SkullAndBowl/SkullAndBowlLarge.jpg'],
		outline: true,
		magnifiable: true
	},
	{
		name: 'Ladies Night Out Event',
		url: 'ladies-night-out',
		challenge: "Create a print advertisement for the travel-themed Ladies Night Out event in Batavia, IL.",
		concept: "Make the advertisement look like a postcard, featuring a postage stamp version of the downtown Batavia logo.",
		method: "I was the creative lead on this collaborative project, so not all of the work was done by me personally. I designed the event logo using Illustrator and the postage stamp style version of the downtown Batavia logo. I also composed the layout in InDesign.",
		funFacts: [
			"The event was a big success in giving small, local businesses in Batavia exposure to new customers.",
			"The hand in the Ladies Night Out logo is meant to be racially ambiguous."
		],
		thumb: 'LadiesNightOut/BLNLogo.jpg',
		images: ['LadiesNightOut/LNOPostcardLarge.png'],
		outline: true,
		magnifiable: true
	},
	{
		name: 'Batavia Farmers\'s Market',
		url: 'batavia-farmers-market',
		challenge: "Design a new logo for the Batavia Farmers' Market for their 20th anniversary, and another version of that logo for the following years moving forward.",
		concept: "This was another collaborative effort. I had the idea to make the new logo circular, so that it could be the \"0\" in \"20th\". The logo itself was conceptualized by my friend.",
		method: "Using my friend's logo concept, I created the round logo in Illustrator. I then incorporated it into the 20th anniversary version. I added distress to both logos in Photoshop to give them a rustic vibe.",
		funFacts: [
			"Batavia also had reusable shopping bags made with a one color outline version of the logo on them. They turned out great!"
		],
		thumb: 'FarmersMarket/BFMLogoThumbnail.png',
		images: ['FarmersMarket/BFMLogoLarge.png', 'FarmersMarket/BFMLogo20.png'],
		outline: false,
		magnifiable: true
	},
	{
		name: 'Twisted Roots Game',
		url: 'twisted-roots',
		challenge: "Conceptualize a fictitious video game and design the box art as a school project.",
		concept: "Twisted Roots is a video game concept I invented in which you play as an old tree trying to unravel the dark mystery of its previous life as a human. I wanted to use hand-drawings in the box design, as I imagined the game's graphics would be hand drawn as well.",
		method: "I used charcoal pencils to draw the tree and created all of the other graphics in Illustrator and/or Photoshop. I used InDesign to compose the final design.",
		funFacts: [
			"I also created fictitious game design company (and logo) Pumpkin Turtle Games as well as the fake game system, Dirt Box.",
			"I really think this could be an interesting indie game idea. Maybe one day I will make it using my C# and Unity skills, which by the way, I have."
		],
		thumb: 'TwistedRoots/TwistedRootsThumbnail.jpg',
		images: ['TwistedRoots/TwistedRootsLarge.jpg'],
		outline: true,
		magnifiable: true
	},
	{
		name: 'Carla and I Vector Portrait',
		url: 'carla-and-i',
		challenge: "Create a vector self portrait as a school project.",
		concept: "I was only tasked to do a portrait of myself but I wanted to be an overachiever, so I also did one of my wife, Carla.",
		method: "Using a nice picture of Carla and I, I posterized the image in Photoshop, then painstakingly traced the resulting image in Illustrator.",
		funFacts: [
			"Carla was the inspiration for the desire for overachievement through her constant drive to achieve overly."
		],
		thumb: 'CarlaAndI/CarlaAndIThumbnail.png',
		images: ['CarlaAndI/CarlaAndILarge.png'],
		outline: true,
		magnifiable: true
	},
];

export default portfolio;