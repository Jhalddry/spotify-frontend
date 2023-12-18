import { getToken } from "../../token/getToken";

export async function artist(query) {
    const token = await getToken();

    const response = await fetch(`https://api.spotify.com/v1/search?query=${query}&type=artist`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data.artists.items;
}