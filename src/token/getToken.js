import { client_id, client_secret } from '../data/keys/credentials.json';

export async function getToken() {
    const clientId = client_id;
    const clientSecret = client_secret;
  
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
    });
  
    const data = await response.json();
    const newToken = data.access_token;
  
    return newToken;
}