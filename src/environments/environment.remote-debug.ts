// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {  
    production: false,
    isDesktop: false,
    isMobileApp: false,
    appName: 'Xog',
    assetsUrl: '/assets', 
    uploadsUrl: "https://modernmartsupermarket.com/", 
    apiUrl: 'https://modernmartsupermarket.com/api/',
    appAuthUrl: 'https://modernmartsupermarket.com/token',
    azureClientId: "f8af8402-0170-4cd1-9c57-1cc8680f1d17",
    azureAuthorization: "b1c28fc1-9a29-44ab-b406-84b796afa21c",
    razorPayOptions: {
      "key": "rzp_test_jOS35pftXDE8SC", // Enter the Key ID generated from the Dashboard
      "amount": "", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Modern Mart",
      "description": "",
      "image": "https://example.com/your_logo",
      "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": null,
      "prefill": {
        "name": "",
        "email": "",
        "contact": ""
      },
      "notes": {
        "address": ""
      },
      "theme": {
        "color": "#3399cc"
      }
    }
  };
  
  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.