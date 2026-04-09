interface Exercice {
	id: number;
	nom: string;
	categorie: string;
	muscles: string[];
	gif_url: string;
}

export const exercices: Exercice[] = [
	{
		id: 1,
		nom: "Lever de jambes",
		categorie: "abdominaux",
		muscles: ["Abdos"],
		gif_url:
			"/gifs/Un homme fait un exercice de soulèvement des jambes sur une chaise de capitaine pour les abdominaux.gif",
	},
	{
		id: 2,
		nom: "Corde à sauter",
		categorie: "cardio",
		muscles: [],
		gif_url: "/gifs/Homme faisant un exercice cardio à la corde à sauter.gif",
	},
	{
		id: 3,
		nom: "Squat",
		categorie: "jambes",
		muscles: ["Fessiers", "Lombaires"],
		gif_url: "/gifs/Man Doing Air Squat Exercise for Legs.gif",
	},
	{
		id: 4,
		nom: "Crunch vélo",
		categorie: "abdominaux",
		muscles: ["Abdos"],
		gif_url: "/gifs/Man Doing Bicycle Crunch Exercise for ABS.gif",
	},
	{
		id: 5,
		nom: "Fente bulgare",
		categorie: "jambes",
		muscles: ["Fessiers", "Lombaires"],
		gif_url: "/gifs/Man Doing Bulgarian Split Squat Exercise for Legs.gif",
	},
	{
		id: 6,
		nom: "Talons-fesses",
		categorie: "cardio",
		muscles: [],
		gif_url: "/gifs/Man Doing Butt Kicks Cardio Exercise.gif",
	},
	{
		id: 7,
		nom: "Planche diagonale",
		categorie: "core",
		muscles: ["Abdos", "Lombaires"],
		gif_url: "/gifs/Man Doing Diagonal Plank Exercise For Core.gif",
	},
	{
		id: 8,
		nom: "Pompes pike surélevées",
		categorie: "épaules",
		muscles: ["Épaule", "Triceps"],
		gif_url: "/gifs/Man Doing Elevated Pike Push Up Exercise for Shoulders.gif",
	},
	{
		id: 9,
		nom: "Dips banc surélevé",
		categorie: "bras",
		muscles: ["Triceps", "Pectoraux"],
		gif_url: "/gifs/Man Doing Feet Elevated Bench Dip Exercise For Arm.gif",
	},
	{
		id: 10,
		nom: "Crunch inversé",
		categorie: "abdominaux",
		muscles: ["Abdos"],
		gif_url: "/gifs/Man Doing Reverse Crunch Exercise for ABS and Core.gif",
	},
	{
		id: 11,
		nom: "Jumping Jack",
		categorie: "cardio",
		muscles: [],
		gif_url: "/gifs/Man Doing Simplified Jumping Jack Cardio Exercise.gif",
	},
	{
		id: 12,
		nom: "Course sur place",
		categorie: "cardio",
		muscles: [],
		gif_url: "/gifs/Man Running In Place Cardio Exercise.gif",
	},
	{
		id: 13,
		nom: "Gainage roue",
		categorie: "core",
		muscles: ["Abdos", "Lombaires", "Épaule"],
		gif_url:
			"/gifs/Homme effectuant un exercice de déploiement des abdominaux pour les abdominaux et le tronc.gif",
	},
	{
		id: 14,
		nom: "Traction inversée",
		categorie: "dos",
		muscles: ["Dos", "Biceps"],
		gif_url:
			"/gifs/Homme effectuant un exercice de traction inversée rapprochée pour le dos.gif",
	},
	{
		id: 15,
		nom: "Mountain climber",
		categorie: "cardio",
		muscles: ["Abdos", "Épaule"],
		gif_url:
			"/gifs/Homme faisant de la planche en courant, exercice cardio.gif",
	},
	{
		id: 16,
		nom: "Burpees",
		categorie: "cardio",
		muscles: ["Pectoraux", "Épaule", "Abdos", "Fessiers"],
		gif_url:
			"/gifs/Homme faisant des burpees avec des pompes, exercice cardio.gif",
	},
	{
		id: 17,
		nom: "Crunch",
		categorie: "abdominaux",
		muscles: ["Abdos"],
		gif_url:
			"/gifs/Homme faisant des exercices de crunch pour les abdominaux.gif",
	},
	{
		id: 18,
		nom: "Dips",
		categorie: "poitrine",
		muscles: ["Pectoraux", "Triceps"],
		gif_url:
			"/gifs/Homme faisant des exercices de trempage pour la poitrine.gif",
	},
	{
		id: 19,
		nom: "Relevé de jambes",
		categorie: "abdominaux",
		muscles: ["Abdos", "Lombaires"],
		gif_url:
			"/gifs/Homme faisant des exercices verticaux pour les abdominaux.gif",
	},
	{
		id: 20,
		nom: "Fentes alternées",
		categorie: "jambes",
		muscles: ["Fessiers", "Lombaires"],
		gif_url:
			"/gifs/Homme faisant des fentes avant en alternance pour les jambes.gif",
	},
	{
		id: 21,
		nom: "Pompes scapulaires",
		categorie: "poitrine",
		muscles: ["Pectoraux", "Dos", "Épaule"],
		gif_url:
			"/gifs/Homme faisant des pompes avec les omoplates pour la poitrine et le dos.gif",
	},
	{
		id: 22,
		nom: "Pompes diamant",
		categorie: "bras",
		muscles: ["Triceps", "Pectoraux"],
		gif_url:
			"/gifs/Homme faisant des pompes en diamant pour la poitrine et les triceps.gif",
	},
	{
		id: 23,
		nom: "Pompes",
		categorie: "poitrine",
		muscles: ["Pectoraux", "Triceps", "Épaule"],
		gif_url: "/gifs/Homme faisant des pompes pour la poitrine.gif",
	},
];
