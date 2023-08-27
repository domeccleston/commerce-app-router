# Commerce personalization

### RSC

- SPA: render page skeleton from edge network -> load JS -> fetch on the client
- RSC: render page content while fetching -> hydrate on the client
- Servers are more powerful than mobile devices, and can execute JS faster
- Server is also closer to your data source
- RSC streams back HTML, rather than sending it in one block
- RSC reduces size of client-side bundle
  - According to Google, a .js bundle size of more than 170kb can impact speed and bounce rate
  - ID have 383kb
- Server actions: great DX for interacting with your backend and mutating data

### SEO

- Dynamic metadata for SEO purposes, with static analysis
- Better core web vitals means better SEO
  - RSC + streaming + performance primitives leads to better CWV
  - Speed insights lets you easily monitor over time
  
