let website = window.location.href.match(
  /[^\sw\.@/]([0-9a-zA-Z\-\.]*[0-9a-zA-Z\-]+\.[0-9a-zA-Z\-\.]*)/
)[0];
console.log(website);

async function fetchData() {
  const res = await fetch(`https://www.usom.gov.tr/api/address?url=${website}`);
  const record = await res.json();
  maliciousSite = record.models.find((e) => e.url === website);
  if (maliciousSite.length != 0) {
    alert("malicious website found");
  }
}
fetchData();
