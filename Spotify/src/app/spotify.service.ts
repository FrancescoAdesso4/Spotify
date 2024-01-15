import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  //url per oauth: https://developer.spotify.com/console/get-search-item/
 //Ottengo il modulo HttpClient
 constructor(private http: HttpClient) { }

 searchTrack(query: string) {
   const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
   const headers = new HttpHeaders({
     Authorization:
       'Bearer BQB8_JosbweGG5Z11SGrfD_1FGPbLbmNmj3hoj5SfaCEuP_CMXqcEO-b2nivaXJsL5aP1Ozni0Bzd0TT4B52ghCBmXgGNlP03OF0f9O-4ie1yBLdcgvNJ1Api75OabGKbU-vdv0io2rkiwvPb9CeM8JIaNcMVFqKAM2tm2S_bAGfQ1lM_MVnehTme_dAXE8upxrqPkyn4tr9gZQ'
   });

   let obsTracks = this.http.get(url, { headers });
   return obsTracks;
//Ritorno un observable ai componenti che richiedono il servizio
 }
}

