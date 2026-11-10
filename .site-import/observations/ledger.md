# Observation ledger — https://elitedesigns.co.ke (route /)

Source observed with Playwright at desktop 1280x900 and phone 390x844 (window scroll). Preview replayed at the same sizes.
Raw preview evidence: preview-replay.json, preview-replay-2.json. Source DOM: desktop-services-viewport.html, chat-panel.html, chatgpt-panel.html, hero-video-phase.html. Screenshots: source-*.png.

| Control | Viewport | Trigger | Expected (source) | Preview result | Status |
|---|---|---|---|---|---|
| Services dropdown | desktop | hover trigger | 520px panel: Print & Publications, Web Development, Digital Marketing, Creative Services, Domain Registration, Explore All Services | same links, closes on leave/Escape | pass |
| Products dropdown | desktop | hover trigger | ChamaBox, EliteHost, Elite HRIS, Frostwood CRM, Industries, Solutions, Products | same | pass |
| Header Get a Quote | desktop/phone | click | /contact | /contact (page not imported) | pass |
| Phone menu | phone | Open menu | right sheet, Main/Services/Products groups, Get a Free Quote | same; Escape + Close + link close it; focus returns | pass |
| Hero CTAs | both | click | /contact, /portfolio, #awards | same hrefs | pass |
| Hero slideshow | both | auto | typing words (Web Design, Digital Marketing, Brand Identity, SEO Strategy, E-Commerce); ~10s image, then showreel video (~32s) | same; desktop/phone video advance (7.3s -> 8.8s) | pass |
| Quote popup | both | auto ~25s | form modal | opens ~25s; Close, Escape, backdrop close | pass |
| Open chat | both | click | Let's Talk panel with 2 WhatsApp links + Start Live Chat | same; close returns focus | pass |
| Start Live Chat | desktop | click | no visible result observed on source | button only | blocked (external live chat not observed) |
| Ask ChatGPT | both | click | dialog; chips fill input; Ask ChatGPT link builds chatgpt.com query | same query text | pass |
| Testimonials | both | arrows/dots/auto 5s | slide changes | same | pass |
| Portfolio arrows | both | Scroll right/left | horizontal scroll by ~1 view | 1110px desktop / 300px phone, left arrow appears | pass |
| Floating quote pill + progress bar | both | scroll | pill after ~30% scroll, top bar shows progress | same | pass |
