const keyId = "rzp_test_T3VMn5Cwj4gEMO";
const keySecret = "vGeH9z16BuRS9FZRj3a3hNQh";
const basicAuth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
fetch("https://api.razorpay.com/v1/orders", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Basic ${basicAuth}`,
  },
  body: JSON.stringify({
    amount: 5000,
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
  }),
}).then(res => res.text()).then(console.log).catch(console.error);
