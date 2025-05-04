// Dom Table Task

// [Şəkildə](https://drive.google.com/file/d/1NVJ62kdMEIS0ivojnaWaWiVq4-iTEYS4/view?usp=drive_link) görünən table hazırlanmalıdır.<br> Html və CSS ixtiyaridir.(Lakin "nice design" olmalıdır). <br> Table-da görünən məlumatlar aşağıda qeyd edəcəyim arraydan oxunub table-a yığılmalıdır.

// **Data olaraq istifadə olunacaq:**

// ```javascript
// const data = [
//   { name: "Bitcoin", ticker: "BTC", value: "9685", change: "2.83%" },
//   { name: "Ethereum", ticker: "ETH", value: "210.5", change: "6.17%" },
//   { name: "Ripple", ticker: "XRP", value: "0.2812", change: "2.47%" },
//   { name: "Bitcoin Cash", ticker: "BCH", value: "441.4", change: "5.01%" },
//   { name: "Bitcoin SV", ticker: "BSV", value: "303.17", change: "5.53%" },
//   { name: "Litecoin", ticker: "LTC", value: "74.935", change: "4.25%" },
//   { name: "Tether", ticker: "USDT", value: "0.9994", change: "-1.7%" },
//   { name: "EOS", ticker: "EOS", value: "4.6161", change: "3.15%" },
//   { name: "Binance Coin", ticker: "BNB", value: "19.824", change: "-3.82%" },
//   { name: "Cardano", ticker: "ADA", value: "0.060389", change: "2.93%" },
//   { name: "Tezos", ticker: "XTZ", value: "2.1247", change: "6.12%" },
//   {
//     name: "Ethereum Classic",
//     ticker: "ETC",
//     value: "12.5988",
//     change: "4.09%",
//   },
//   { name: "Stellar", ticker: "XLM", value: "0.07034", change: "-4.10%" },
//   { name: "Monero", ticker: "XMR", value: "79.523", change: "3.45%" },
//   { name: "TRON", ticker: "TRX", value: "0.020881", change: "5.21%" },
// ];
// ```


const data = [
  { name: "Bitcoin", ticker: "BTC", value: "9685", change: "2.83%" },
  { name: "Ethereum", ticker: "ETH", value: "210.5", change: "6.17%" },
  { name: "Ripple", ticker: "XRP", value: "0.2812", change: "2.47%" },
  { name: "Bitcoin Cash", ticker: "BCH", value: "441.4", change: "5.01%" },
  { name: "Bitcoin SV", ticker: "BSV", value: "303.17", change: "5.53%" },
  { name: "Litecoin", ticker: "LTC", value: "74.935", change: "4.25%" },
  { name: "Tether", ticker: "USDT", value: "0.9994", change: "-1.7%" },
  { name: "EOS", ticker: "EOS", value: "4.6161", change: "3.15%" },
  { name: "Binance Coin", ticker: "BNB", value: "19.824", change: "-3.82%" },
  { name: "Cardano", ticker: "ADA", value: "0.060389", change: "2.93%" },
  { name: "Tezos", ticker: "XTZ", value: "2.1247", change: "6.12%" },
  {
    name: "Ethereum Classic",
    ticker: "ETC",
    value: "12.5988",
    change: "4.09%",
  },
  { name: "Stellar", ticker: "XLM", value: "0.07034", change: "-4.10%" },
  { name: "Monero", ticker: "XMR", value: "79.523", change: "3.45%" },
  { name: "TRON", ticker: "TRX", value: "0.020881", change: "5.21%" },
];

const dataWrapper = document.getElementById("dataWrapper")

data.forEach((item) => {
  const changeValue = parseFloat(item.change);
  let changeClass = "neutral";

  if (changeValue > 0) {
    changeClass = "positive";
  } else if (changeValue < 0) {
    changeClass = "negative";
  }

  dataWrapper.innerHTML += `
    <tr>
      <td>${item.name}</td>
      <td>${item.ticker}</td>
      <td>${item.value}</td>
      <td class="${changeClass}">${item.change}</td>
    </tr>
  `;
});
