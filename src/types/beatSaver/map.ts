export type FindMapsResponse = {
	docs: Doc[];
};

export type Doc = {
	name: string;
	description: string;
	createdAt: string;
	stats: Stats;
	versions: Version[];
};

export type Stats = {
	downloads: number;
	downvotes: number;
	plays: number;
	score: number;
	upvotes: number;
};

export type Version = {
	coverURL: string;
};
