# cloudcomputing-backend

  **FoodCloud - Recipes App**

  **Băban Alexandru-Cristian**

  **Grupa 1117**

  **Introducere**
În prezent, după o continuă și accelerată evoluție a internetului, informația a devenit foarte accesibilă. Oamenii pot descoperi și învăța cu ușurință lucruri pentru care în trecut era nevoie de un efort considerabil mai mare printr-o simplă căutare pe internet. Acest lucru a crescut dorința oamenilor de a încerca noi hobby-uri și a făcut posibilă descoperirea mai ușoară a noi pasiuni prin simpla accesare a unor cursuri sau pagini pe web.
	
  **Descrierea problemei**
  FoodCloud reprezintă o aplicație web ce face posibilă descoperirea și împărtășirea de noi rețete într-un mod foarte accesibil, lucru realizat prin intermediul serviciilor Cloud. Aceasta reprezintă o aplicație în care utilizatorii pot împărtăși rețete proprii cu restul utilizatorilor sau pot căuta și urmări rețetele altora. Pentru că scopul aplicației este acela de a servi și celor mai începători dintre viitorii bucătari, rețetelor adăugate de utilizatori le este asociat în mod automat un videoclip de pe YouTube în care se gătește respectiva rețetă. De asemenea, utilizatorii care nu sunt siguri ce își doresc să gătească pot căuta rețete care să conțina o serie de ingrediente.

  **Descriere API**
  Realizarea aplicației a fost posibilă prin utilizarea a două API-uri:
-	YouTube Data API v3 – prin intermediul acestui API pus la dispoziție de către Google, rețetele adăugate de către utilizatori au ascociate în mod automat un videoclip pe YouTube în care respectivele rețete sunt gătite. 
-	Edamam API – acest API oferă posibilitatea căutării unor rețete după unul sau mai multe ingrediente și permite filtrarea rezultatelor în funcție de originea rețetei (ex.: American, Asian) sau a unor calități nutritive (ex.: Proteine). Pe lângă rețeta în sine, API-ul calculează și numărul total de calorii al respectivului preparat.

Flux de date
•	Exemple de request / response

-	Request / response pentru afișarea tuturor rețetelor din cadrul bazei de date:
<img width="824" alt="request1" src="https://user-images.githubusercontent.com/72206104/168476260-46989b4c-0174-4a6b-b0d8-3138936565ec.png">

-	Request / response pentru afișarea doar a acelor rețete cu un nume specificat din cadrul bazei de date:
<img width="826" alt="request2" src="https://user-images.githubusercontent.com/72206104/168476274-b0cb176b-18ea-4095-9363-a0710a411ff4.png">

 
-	Request / response pentru adăugarea unei rețete în baza de date:
<img width="809" alt="request3" src="https://user-images.githubusercontent.com/72206104/168476287-a4547158-ff39-47d4-a716-0bbbeb84a74c.png">


•	Metode HTTP

-	GET pentru returnarea tuturor rețetelor din cadrul bazei de date;
-	GET pentru returnarea rețetelor care conțin un anumit cuvânt cheie în titlu;
-	GET pentru returnarea unei rețete căutate după id-ul acesteia;
-	POST pentru adăugarea unei rețete în baza de date;
-	DELETE pentru ștergerea unei rețete din baza de date;
-	PUT pentru modificarea unei rețete din baza de date;


•	Autorizarea servicii utilizate
-	Youtube Data API v3: Accesul către acest API a fost realizat prin intermediul unui API Key furnizat de către Google.


Capturi de ecran:
<img width="1366" alt="mainPage" src="https://user-images.githubusercontent.com/72206104/168476305-3e3dec83-8ca8-4de2-ae19-8812271a27a2.png">

<img width="1367" alt="mainPageSearch" src="https://user-images.githubusercontent.com/72206104/168476308-a69195ae-3ff3-4f49-a56b-0412e577ef70.png">

<img width="1367" alt="Add" src="https://user-images.githubusercontent.com/72206104/168476314-0979bbf6-cf51-497e-a6b3-a352772b7812.png">

<img width="1361" alt="edamamApi" src="https://user-images.githubusercontent.com/72206104/168476320-8344a2ab-0641-4783-bb62-a65ecb10bc22.png">

<img width="1364" alt="youtubeApi" src="https://user-images.githubusercontent.com/72206104/168476324-4f61a713-f914-4435-94e7-0fa3c2a16701.png">


