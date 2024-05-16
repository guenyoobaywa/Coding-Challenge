/**
As part of the checkout process, we want to offer pickup at a nearby store. 
In order to get users address for checkout process we have to determine the exact address by users browser  geolocation.

 Tasks:

 1. Add a button with label "Get address" to HTML
 2. Add a textarea field to HTML
 3. Bind a JavaScript eventhandler to the button, so when user clicks on the button its exact address is determined by browsers geolocation or by address string that the user has to enter when geolocation is not available
 4. Fetch address data via OpenStreetMap Api:
 https://nominatim.openstreetmap.org/reverse?lat=<LATITUDE>&lon=<LONGITUDE>&format=json
 https://nominatim.openstreetmap.org/search?q=<ADDRESS>&format=json

 5. Get the address data from response json and put it into the textarea field.
 6. Consider a proper error handling
 **/

console.log('vanilla ts coding challenge log');
