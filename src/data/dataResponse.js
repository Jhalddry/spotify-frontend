import { getToken } from "../token";

export async function tracks(query) {
    const token = await getToken();

    const response = await fetch(`https://api.spotify.com/v1/search?query=${query}&type=track`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data.tracks.items;
}

export async function artists(query) {
    const token = await getToken();
  
    const response = await fetch(
        `https://api.spotify.com/v1/search?query=${query}/related-artists&type=artist&limit=50`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  
    const data = await response.json();
    console.log(data);
    return data.artists.items;
  }