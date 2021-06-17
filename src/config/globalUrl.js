class ConfigAPIURL {
    static searchUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&limit=10&namespace=0&origin=*&format=json&search="
    static viewsUrl = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/"
    static summaryUrl = "https://en.wikipedia.org/api/rest_v1/page/summary"
  }
  
  export default ConfigAPIURL;
  

//   fetch("https://en.wikipedia.org/w/api.php?action=opensearch&limit=5&namespace=0&origin=*&format=json&search=value", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,hi;q=0.7",
//     "content-type": "application/json; charset=utf-8",
//     "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "cross-site"
//   },
//   "referrer": "http://localhost:3000/",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "omit"
// });