let baseUrl = "http://192.168.15.2:3000";
let baseUrlServer = "http://192.168.15.2:3333";

const ngrok = false;

if (ngrok) {
  baseUrl = "http://adbc-45-237-194-34.ngrok.io";
  baseUrlServer = "http://2403-45-237-194-34.ngrok.io";
}

export { baseUrl, baseUrlServer };
