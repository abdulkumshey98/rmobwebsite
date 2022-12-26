export const environment = {
  production: false,
  isDesktop: false,
  isMobileApp: false,
  appName: 'Xog',
  assetsUrl: '/assets/', 
  uploadsUrl: "https://modernmartsupermarket.com/", 
  apiUrl: 'https://localhost:44317/api/',
  appAuthUrl: 'https://localhost:44317/token',
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
}