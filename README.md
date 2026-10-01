# labmcel

Medical and laboratory supply site. Astro, no database.

## Edit the words

All public text lives in one file:

`src/content/site.ts`

Change the name, phone, WhatsApp number, email, address, catalogue blurbs and page copy there. The pages pick the new words up on their own.

In headings, `*asterisks*` set italics and `|` starts a new line.

Before launch, replace the lines marked `EDIT` (phone, email, address). Leave `hours` and `registration` as empty strings to hide them, or fill them in.

When you have a real domain, set it in `astro.config.mjs`.

## Run

```
npm install
npm run dev
```

## Pages

- `/` front
- `/products` catalogue
- `/products/rapid-test-kits` and the other five groups
- `/about`
- `/ordering`
- `/contact`
