import { request, Spotify } from "electron/spotify";
import { PaginationParameters, TracksResponse, TrackList } from "types/spotify";

export const spotifyApi = {
	async getTracks(
		paginationParameters: PaginationParameters = {
			limit: 50,
			offset: 0,
		}
	): Promise<TrackList> {
		const response = await request.get<TracksResponse>({
			url: `me/tracks?market=ES&limit=${paginationParameters.limit}&offset=${paginationParameters.offset}`,
			headers: {
				Authorization: `Bearer ${Spotify.accessToken}`,
			},
		});

		const tracks = response.data.items.map(item => {
			const id = item.track.id;
			const name = item.track.name;
			const previewUrl = item.track.album.images[0].url;
			const artists = item.track.artists.map(artist => {
				return { name: artist.name };
			});

			return { name, artists, previewUrl, id };
		});

		return {
			total: response.data.total,
			list: tracks,
		};
	},
};
