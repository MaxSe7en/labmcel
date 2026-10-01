/**
 * labmcel — all website text
 * ---------------------------------------------------------------------------
 * Edit this file only. Pages read from here.
 *
 * Writer's marks (headings):
 *   *these words* become italic
 *   | forces a line break
 *
 * BEFORE LAUNCH, replace the lines marked EDIT:
 *   phone, WhatsApp, email, street address, hours, registration.
 */

export const site = {
  name: "labmcel",
  descriptor: "Medical & laboratory supplies",
  base: "Accra, Ghana",

  /** EDIT — number as you want it read aloud and on the page */
  phoneDisplay: "+233 00 000 0000",
  /** EDIT — country code + number, digits only, no plus or spaces */
  phoneDigits: "233000000000",
  /** EDIT */
  email: "hello@labmcel.com",
  /** EDIT — street address. The city line is fine until you have one. */
  address: "Accra, Ghana",
  /** EDIT — opening hours. Leave "" to hide the line. */
  hours: "",
  /** EDIT — FDA Ghana or other registration line. Leave "" to hide it. */
  registration: "",

  /** Cities named as a list. Also mentioned in sentences below — keep them in step. */
  reach: ["Accra", "Kumasi", "Takoradi", "Tamale"],

  meta: {
    title: "labmcel · Medical equipment and laboratory supplies for Ghana",
    description:
      "labmcel supplies hospitals, clinics, pharmacies and laboratories across Ghana with rapid test kits, patient monitors, laboratory equipment, surgical consumables and hospital furniture.",
  },

  ui: {
    skip: "Skip to content",
    menu: "Open menu",
    close: "Close menu",
    whatsapp: "WhatsApp labmcel",
    whatsappShort: "WhatsApp",
    phone: "Phone",
    email: "Email",
    desk: "Desk",
    home: "labmcel home",
    catalogue: "Back to the catalogue",
    otherGroups: "Other groups",
    inThisGroup: "In this group",
    whereItLands: "Where it lands.",
    fig: "Fig. 01 — Instruments and kits",
  },

  nav: [
    { href: "/products", label: "Catalogue" },
    { href: "/about", label: "About" },
    { href: "/ordering", label: "Ordering" },
    { href: "/contact", label: "Contact" },
  ],

  cta: {
    quote: "Request a quotation",
    catalogue: "View product catalogue",
    whatsapp: "Talk to us on WhatsApp",
    email: "Email this request",
  },

  footer: {
    blurb:
      "Medical equipment, laboratory supplies and diagnostic kits for facilities across Ghana.",
    rights: "All rights reserved.",
    contactHeading: "Talk to us",
    pagesHeading: "Pages",
  },

  closing: {
    heading: "Share your requirement.|*We will price it.*",
    text: "Item, quantity, and where it is going. You get a quote in cedis, with what is in stock and what has to come in.",
  },

  home: {
    description:
      "labmcel supplies hospitals, clinics, pharmacies and laboratories across Ghana with rapid test kits, monitors, analyzers, surgical consumables and hospital furniture.",
    kicker: "Medical & laboratory supply",
    heading: "Medical supplies for|*the people who care.*",
    lede: "A dependable supply partner for hospitals, clinics, pharmacies and laboratories across Ghana. Source diagnostic kits, patient monitoring equipment, laboratory supplies, surgical consumables and essential hospital equipment through one professional procurement desk.",
    facts: [
      { mark: "GH₵", label: "Quotes in cedis" },
      { mark: "MoMo", label: "Mobile Money, bank or invoice" },
      { mark: "Tracked", label: "Dispatch you can follow" },
      { mark: "Papers", label: "Batch, expiry, documents" },
    ],
    catalogueKicker: "Catalogue",
    catalogueHeading: "The essential categories|*under one roof.*",
    catalogueLede:
      "Need something specific? Send your procurement list, specification or a photo of the item. We can review the requirement and prepare a quotation.",
    audiencesKicker: "Who orders",
    audiencesHeading: "The people who keep|the facility running.",
    audiences: [
      {
        title: "Hospitals",
        text: "Wards, theatres and the laboratory under one roof.",
        icon: "plus",
      },
      {
        title: "Clinics",
        text: "Consulting rooms that need kits in date and a monitor that switches on.",
        icon: "pulse",
      },
      {
        title: "Pharmacies",
        text: "Tests and consumables that turn over every week.",
        icon: "bag",
      },
      {
        title: "Laboratories",
        text: "Analyzers, rotors, optics and the reagents that feed them.",
        icon: "scope",
      },
    ],
    reasonsKicker: "Why facilities call back",
    reasonsHeading: "Clear quotations. *Reliable supply.*",
    reasons: [
      {
        title: "The paperwork travels with the box",
        text: "Batch numbers, expiry dates and manufacturer documents go out with the shipment. You should not have to chase them later.",
      },
      {
        title: "The quote says the price",
        text: "Each line names the item, the quantity and the cedis. Stock and incoming items are separated, so a ward is not promised a machine that is still at the port.",
      },
      {
        title: "Pay the way the facility already pays",
        text: "Mobile Money, bank transfer, cheque or an invoice for accounts. Tell us which one when you confirm.",
      },
      {
        title: "Someone stays after installation",
        text: "For equipment we install, show the team how it runs, and remain available on the warranty. A reagent without a person to call is a poor bargain.",
      },
    ],
    orderKicker: "Ordering",
    orderHeading: "A straightforward|*procurement process.*",
    orderLede: "Send your requirement by WhatsApp, phone or email. We confirm specifications, quantities and availability before you place the order.",
    orderLink: "Read how an order moves",
    steps: [
      { title: "Share your requirement", text: "Item, quantity, destination." },
      { title: "Receive a quotation", text: "A quote in cedis, stock marked clearly." },
      { title: "Confirm the order", text: "MoMo, bank, cheque or invoice." },
      { title: "Delivery & support", text: "Delivered to your facility." },
    ],
  },

  products: {
    title: "Catalogue",
    description:
      "Rapid test kits, patient monitoring, laboratory equipment, surgical consumables, imaging and hospital furniture from labmcel in Ghana.",
    kicker: "Catalogue",
    heading: "Medical equipment & supplies|*for every facility.*",
    lede: "Explore our core supply categories. Product availability, specifications and pricing can vary by brand, pack size and order quantity.",
    missing: "Cannot find the item? Put the name, the size and a photo of the old unit in a quote request.",
    folio: "02",
  },

  categories: [
    {
      slug: "rapid-test-kits",
      code: "01",
      title: "Rapid test kits",
      picture: "cassette",
      summary: "Malaria, HIV, hepatitis, typhoid, pregnancy and the other cassettes a bench uses up.",
      description:
        "Rapid diagnostic test kits from labmcel: malaria, HIV, hepatitis, typhoid, pregnancy, syphilis, COVID-19 antigen and blood glucose, supplied across Ghana.",
      kicker: "Point of care",
      intro:
        "Cassettes and strips for the tests Ghanaian facilities run every day. We would rather sell you a quantity you will finish before the expiry than a cupboard of kits going out of date.",
      items: [
        "Malaria RDT, Pf and Pan",
        "HIV 1/2 rapid tests",
        "Hepatitis B surface antigen",
        "Hepatitis C antibody",
        "Salmonella typhi / typhoid",
        "hCG pregnancy tests",
        "Syphilis rapid tests",
        "COVID-19 antigen",
        "Blood glucose meters and strips",
      ],
      note: "Tell us the monthly volume. High-turnover kits stay in date when the order matches real use, not a hopeful annual buy.",
      fit: "Outpatient desks, wards, pharmacies and any lab that still needs an answer before the analyzer queue.",
    },
    {
      slug: "patient-monitoring",
      code: "02",
      title: "Patient monitoring",
      picture: "monitor",
      summary: "Vital signs at the bedside, from a fingertip oximeter to a full monitor.",
      description:
        "Patient monitors, pulse oximeters, ECG, fetal dopplers and blood pressure devices supplied by labmcel to hospitals and clinics in Ghana.",
      kicker: "Bedside",
      intro:
        "Monitors and the small devices around them. A replacement is faster when we know the model already on the ward — cuffs, probes and leads are not universal.",
      items: [
        "Multiparameter patient monitors",
        "Handheld and fingertip pulse oximeters",
        "ECG machines and paper",
        "Fetal dopplers",
        "Digital and infrared thermometers",
        "Aneroid and digital blood pressure sets",
        "Replacement cuffs, probes and leads",
      ],
      note: "For a replacement, send a photo of the rating label. We will match the probe before we quote a machine that cannot use it.",
      fit: "Casualty, maternity, recovery and clinics that need a reliable set of vitals without a central station.",
    },
    {
      slug: "laboratory",
      code: "03",
      title: "Laboratory equipment",
      picture: "rotor",
      summary: "Analyzers, centrifuges, microscopes and the reagents that keep them honest.",
      description:
        "Laboratory analyzers, centrifuges, microscopes, incubators and reagents from labmcel for clinical and research labs in Ghana.",
      kicker: "The bench",
      intro:
        "Instruments for clinical chemistry, hematology and the everyday bench, plus the controls and reagents they consume. An analyzer without its reagent path is a heavy shelf.",
      items: [
        "Clinical chemistry analyzers",
        "Hematology analyzers",
        "Benchtop centrifuges",
        "Binocular and teaching microscopes",
        "Incubators and water baths",
        "Controls, calibrators and reagents",
        "Slides, tubes and pipette tips",
      ],
      note: "Ask us to quote the instrument and the consumables together. The second invoice is where a cheap machine becomes expensive.",
      fit: "Hospital labs, stand-alone diagnostic laboratories and teaching benches.",
    },
    {
      slug: "surgical-consumables",
      code: "04",
      title: "Surgical & consumables",
      picture: "suture",
      summary: "Gloves, syringes, gauze, sutures and the other goods a theatre uses up.",
      description:
        "Surgical and medical consumables from labmcel: gloves, syringes, gauze, sutures, catheters and sterile packs for facilities in Ghana.",
      kicker: "Theatre and treatment room",
      intro:
        "Sterile and non-sterile goods that disappear in a week. Specify size. A glove order without a size is a guess, and guesses get returned.",
      items: [
        "Examination and surgical gloves",
        "Syringes, needles and IV giving sets",
        "Gauze, cotton wool and bandages",
        "Absorbable and non-absorbable sutures",
        "Catheters and urine bags",
        "Sterile procedure packs",
        "Cannulas and infusion accessories",
      ],
      note: "Write the size, sterile or not, and the pack you are used to. If you have a sample, a photo of the wrap is enough.",
      fit: "Theatres, emergency rooms, treatment rooms and any store that refills them.",
    },
    {
      slug: "imaging",
      code: "05",
      title: "Imaging & diagnostics",
      picture: "probe",
      summary: "Ultrasound systems, probes and the accessories around digital imaging.",
      description:
        "Ultrasound systems, probes, gel and digital imaging accessories supplied and installed by labmcel in Ghana.",
      kicker: "Imaging",
      intro:
        "Ultrasound and the smaller diagnostic devices around it. These quotes include delivery, installation and a first orientation for the person who will actually scan.",
      items: [
        "Ultrasound systems",
        "Convex, linear and transvaginal probes",
        "Ultrasound gel",
        "Digital X-ray accessories",
        "Portable diagnostic devices",
        "Printers and storage for image output",
      ],
      note: "Tell us the examinations you run — obstetric, abdominal, small parts — and we will match the probe set instead of selling a console on its own.",
      fit: "Maternity units, outpatient imaging rooms and clinics adding a first ultrasound.",
    },
    {
      slug: "hospital-furniture",
      code: "06",
      title: "Hospital furniture & PPE",
      picture: "bed",
      summary: "Beds, trolleys, couches, and the gowns and masks around them.",
      description:
        "Hospital beds, examination couches, trolleys and personal protective equipment from labmcel for facilities across Ghana.",
      kicker: "Ward",
      intro:
        "The furniture a ward is built from, and the infection-control gear used beside it. A bed that does not fit the doorway is an expensive lesson, so we ask for the opening before we ship.",
      items: [
        "Hospital beds and mattresses",
        "Examination couches",
        "Patient trolleys and wheelchairs",
        "Drip stands and bedside lockers",
        "Masks, gowns and face shields",
        "Sharps bins and waste containers",
        "Overbed tables and screens",
      ],
      note: "Measure the doorway, the lift and the ward width. Send the numbers with the request and we will check them against the frame.",
      fit: "New wards, renovations and stores topping up PPE between larger orders.",
    },
  ],

  about: {
    title: "About",
    description:
      "labmcel is a Ghanaian supplier of medical equipment, laboratory instruments and diagnostic kits, based in Accra and dispatching nationwide.",
    folio: "03",
    kicker: "About labmcel",
    heading: "We supply the facility.|*We stay after it arrives.*",
    lede: "labmcel is a Ghanaian supplier of medical equipment, laboratory instruments and diagnostic kits. Procurement officers, laboratory scientists, nurses and clinic owners are who the quotes are written for.",
    chapters: [
      {
        title: "Chosen, not invented",
        text: "We do not manufacture the instruments. We select them, bring them in with the documents, and refuse the ones we would not put on our own bench. If a brand is wrong for the volume you run, we will say so in the quote.",
      },
      {
        title: "From Accra, outward",
        text: "The desk is in Accra. Dispatch runs to Kumasi, Takoradi, Tamale and the rest of the country. The quote names the lead time for your city. We do not print a single delivery promise that ignores the road.",
      },
      {
        title: "After the unboxing",
        text: "Equipment is installed and the people who will use it get a proper orientation, not a manual left on the trolley. Warranty calls come back to us. Consumables can be reordered from the same thread, so the second purchase is shorter than the first.",
      },
    ],
    reachHeading: "Where the goods go",
    reachText:
      "Based in Accra, with dispatch that includes Kumasi, Takoradi, Tamale and facilities beyond those cities. Lead time is confirmed on the quote, because stock and distance both change it.",
    registrationLabel: "Registration",
    hoursLabel: "Hours",
  },

  ordering: {
    title: "Ordering",
    description:
      "How to request a labmcel quote, how payment works in Ghana, and what to include so the price comes back right the first time.",
    folio: "04",
    kicker: "How an order moves",
    heading: "A list in, *a price back.*",
    lede: "No catalogue login and no minimum speech. Send what you need. We answer with cedis, stock and a lead time.",
    steps: [
      {
        title: "Tell us what you need",
        text: "A message is enough: item, quantity, and the town it is going to. For a replacement machine, add a photo of the old rating label. For gloves, sutures or tubes, add the size.",
      },
      {
        title: "Receive a quote in cedis",
        text: "The quote separates what we can dispatch from what has to come in. Expiry is visible on kits and reagents before you commit. If a cheaper option is the wrong one for your volume, we will mark that too.",
      },
      {
        title: "Confirm and pay",
        text: "Mobile Money, bank transfer, cheque, or an invoice if the facility pays on account. We start dispatch when the payment route you chose is confirmed.",
      },
      {
        title: "Delivery, then support",
        text: "You get a way to follow the shipment. Equipment is installed and the team is shown how it runs. The warranty does not end at the gate.",
      },
    ],
    payKicker: "Payment",
    payHeading: "Use the rail you already trust.",
    payments: [
      {
        title: "Mobile Money",
        text: "The usual way a clinic pays a supplier the same day.",
        icon: "phone",
      },
      {
        title: "Bank transfer",
        text: "For larger equipment orders and accounts that pay from a company account.",
        icon: "card",
      },
      {
        title: "Cheque",
        text: "Accepted where the facility still pays that way. The quote will say when dispatch starts.",
        icon: "file",
      },
      {
        title: "Invoice",
        text: "For hospitals and organisations that need a bill their accounts desk can file.",
        icon: "file",
      },
    ],
    includeHeading: "What makes a quote faster",
    include: [
      "The name of the item, as specific as you have it",
      "Quantity, and whether that is a one-off or a monthly use",
      "Size, pack and sterile or non-sterile, where it matters",
      "The city and the kind of facility",
      "A photo of the old machine, if this replaces one",
      "The name of the person who should receive the goods",
    ],
  },

  contact: {
    title: "Contact",
    description:
      "Request a labmcel quote by WhatsApp, email or phone. Send the item, the quantity and where in Ghana it is going.",
    folio: "05",
    kicker: "Contact",
    heading: "Share your requirement.|*We answer with a price.*",
    lede: "WhatsApp is the fastest desk. Email works if the request has to live in a thread. Either way, write it once in the form and we will open the message for you.",
    channelsHeading: "Direct",
    formHeading: "Quote request",
    fields: {
      name: "Your name",
      facility: "Facility",
      city: "City",
      phone: "Phone",
      need: "What you need",
      needHint: "Item, quantity, size, and anything we should know about the old unit.",
    },
    missing: "Add your name and what you need, and we can price it.",
    formNote: "This opens WhatsApp or your email with the message filled in. Nothing is stored on the website.",
    whatsappPrefill: "Hello labmcel, I would like a quote.",
    formGreeting: "Hello labmcel, I need a quote.",
    emailSubject: "Quote request",
  },

  notFound: {
    title: "Page not found",
    kicker: "404",
    heading: "That page is not|in the catalogue.",
    lede: "The link may be old. The supplies are still here.",
    home: "Back to the front",
    catalogue: "Browse the catalogue",
  },
};

export type Category = (typeof site.categories)[number];
