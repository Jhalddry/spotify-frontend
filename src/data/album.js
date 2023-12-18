import { getToken } from "../../token/getToken";

export async function album(query) {
    const token = await getToken();

    const response = await fetch(`https://api.spotify.com/v1/search?query=${query}&type=album`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data.albums.items;
}