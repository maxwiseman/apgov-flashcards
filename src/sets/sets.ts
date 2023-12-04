import { type CardSet } from "@/app/[slug]/page";

export const sets: CardSet[] = [
  {
    title: "Bill of Rights Amendments",
    slug: "bill-of-rights",
    description: "Flashcards for each of the amendments in the Bill of Rights",
    cards: [
      {
        front: {
          heading: "1st Amendment",
        },
        back: {
          heading: "Freedom of Expression",
          description:
            "Protects the freedom of speech, religion, press, assembly, and the right to petition the government for a redress of grievances.",
        },
      },
      {
        front: {
          heading: "2nd Amendment",
        },
        back: {
          heading: "Right to Bear Arms",
          description:
            "Protects the right of the people to keep and bear arms.",
        },
      },
      {
        front: {
          heading: "3rd Amendment",
        },
        back: {
          heading: "Protection from Quartering",
          description:
            "Prohibits the forced quartering of soldiers in private homes during peacetime without the owner's consent.",
        },
      },
      {
        front: {
          heading: "4th Amendment",
        },
        back: {
          heading: "Protection from Unreasonable Searches and Seizures",
          description:
            "Protects against unreasonable searches and seizures and requires a judicially sanctioned warrant supported by probable cause for such actions.",
        },
      },
      {
        front: {
          heading: "5th Amendment",
        },
        back: {
          heading: "Rights of the Accused",
          description:
            "Protects individuals from being compelled to be witnesses against themselves in criminal cases and prohibits double jeopardy and deprivation of life, liberty, or property without due process of law.",
        },
      },
      {
        front: {
          heading: "6th Amendment",
        },
        back: {
          heading: "Right to a Fair Trial",
          description:
            "Guarantees the right to a fair and speedy public trial by an impartial jury, including the right to be informed of the nature and cause of the accusation, to confront witnesses, and to have the assistance of counsel.",
        },
      },
      {
        front: {
          heading: "7th Amendment",
        },
        back: {
          heading: "Trial by Jury in Civil Cases",
          description:
            "Provides for the right to trial by jury in certain civil cases, according to the rules of common law.",
        },
      },
      {
        front: {
          heading: "8th Amendment",
        },
        back: {
          heading: "Protection from Cruel and Unusual Punishment",
          description:
            "Prohibits the imposition of excessive bail or fines and cruel and unusual punishments.",
        },
      },
      {
        front: {
          heading: "9th Amendment",
        },
        back: {
          heading: "Unenumerated Rights",
          description:
            "Affirms that the listing of individual rights in the Constitution and Bill of Rights does not deny or disparage other rights retained by the people.",
        },
      },
      {
        front: {
          heading: "10th Amendment",
        },
        back: {
          heading: "States' Rights",
          description:
            "Reserves powers not delegated to the federal government to the states or the people.",
        },
      },
    ],
  },
  {
    title: "Biology and Environmental Science Flashcards",
    slug: "bio-test",
    description:
      "A set of flashcards covering various biological and environmental concepts.",
    cards: [
      {
        front: {
          heading: "Autotrophs",
        },
        back: {
          heading: "Self-feeders",
          description:
            "Produce their own food through photosynthesis or chemosynthesis.",
        },
      },
      {
        front: {
          heading: "Chemotrophs",
        },
        back: {
          heading: "Chemical feeders",
          description:
            "Obtain energy by breaking down inorganic or organic molecules.",
        },
      },
      {
        front: {
          heading: "Heterotrophs",
        },
        back: {
          heading: "Other-feeders",
          description:
            "Obtain energy by consuming other organisms or organic substances.",
        },
      },
      {
        front: {
          heading: "Detrivore",
        },
        back: {
          heading: "Decay feeder",
          description: "Feeds on dead and decaying organic matter.",
        },
      },
      {
        front: {
          heading: "Nitrogen Cycle",
        },
        back: {
          heading: "Nitrogen cycling",
          description:
            "Continuous process of nitrogen movement through the environment.",
        },
      },
      {
        front: {
          heading: "Phosphorus Cycle",
        },
        back: {
          heading: "Phosphorus cycling",
          description: "Movement of phosphorus through the Earth's systems.",
        },
      },
      {
        front: {
          heading: "Carbon Cycle",
        },
        back: {
          heading: "Carbon cycling",
          description:
            "Continuous exchange of carbon between organisms and the environment.",
        },
      },
      {
        front: {
          heading: "Diatoms",
        },
        back: {
          heading: "Microscopic algae",
          description:
            "Have intricate cell walls; significant in phytoplankton.",
        },
      },
      {
        front: {
          heading: "Dinoflagellates",
        },
        back: {
          heading: "Flagellated algae",
          description: "Unicellular; crucial in marine ecosystems.",
        },
      },
      {
        front: {
          heading: "EM Spectrum",
        },
        back: {
          heading: "Electromagnetic Radiation",
          description: "Range from radio waves to gamma rays.",
        },
      },
      {
        front: {
          heading: "Albedo Effect",
        },
        back: {
          heading: "Surface reflectivity",
          description: "Reflects sunlight; influences temperature.",
        },
      },
      {
        front: {
          heading: "Homologous and Analogous Structures",
        },
        back: {
          heading: "Structural similarities",
          description:
            "Homologous share evolutionary origin; Analogous have similar functions.",
        },
      },
      {
        front: {
          heading: "Vestigial Structures",
        },
        back: {
          heading: "Functionless remnants",
          description: "Structures that have lost their original function.",
        },
      },
      {
        front: {
          heading: "Echinoderms and Arthropods",
        },
        back: {
          heading: "Marine invertebrates",
          description:
            "Echinoderms include starfish; Arthropods include insects and crustaceans.",
        },
      },
      {
        front: {
          heading: "Nucleotide",
        },
        back: {
          heading: "Genetic building block",
          description: "Basic unit of DNA and RNA.",
        },
      },
      {
        front: {
          heading: "Allele Frequency",
        },
        back: {
          heading: "Allele proportion",
          description:
            "Proportion of a specific allele in a population's gene pool.",
        },
      },
      {
        front: {
          heading: "Blood Genotypes",
        },
        back: {
          heading: "Blood type genetics",
          description:
            "Genotypes A, B, AB, O; determined by antigens on red blood cells.",
        },
      },
    ],
  },
  {
    title: "Freedom of Speech Limitations",
    description:
      "Key limitations on the freedom of speech in the United States",
    slug: "freedom-of-speech-limitations",
    cards: [
      {
        front: {
          heading: "Clear and Present Danger Test",
          subheading: "Case: Schenck v. United States (1919)",
        },
        back: {
          heading: "Imminent Lawless Action",
          description:
            "Speech can be restricted if it poses a clear and present danger of imminent lawless action. This test considers whether the words create a threat that society has a right to prevent.",
        },
      },
      {
        front: {
          heading: "Hate Speech",
          subheading: "No specific case (general principle)",
        },
        back: {
          heading: "Protected vs. Unprotected Speech",
          description:
            "While hate speech is generally protected, speech that incites violence, discrimination, or 'fighting words' may face restrictions. The distinction lies in the potential harm caused by the speech.",
        },
      },
      {
        front: {
          heading: "Incitement Test",
          subheading: "Case: Brandenburg v. Ohio (1969)",
        },
        back: {
          heading: "Imminent Lawless Action",
          description:
            "Sets the standard for restricting speech that advocates illegal conduct. Speech can only be prohibited if it is directed at inciting or producing imminent lawless action and is likely to incite or produce such action.",
        },
      },
      {
        front: {
          heading: "Commercial Speech",
          subheading:
            "Case: Central Hudson Gas & Electric Corp. v. Public Service Commission (1980)",
        },
        back: {
          heading: "Intermediate Scrutiny",
          description:
            "Commercial speech (advertising) is protected but subject to intermediate scrutiny. Restrictions must advance a substantial government interest, directly advance that interest, and not be more extensive than necessary.",
        },
      },
    ],
  },
  {
    title: "Landmark Supreme Court Cases",
    slug: "court-cases",
    description:
      "Key Supreme Court cases that have shaped legal precedent in the United States.",
    cards: [
      {
        front: {
          heading: "Marbury v. Madison",
          subheading: "1803",
        },
        back: {
          heading: "Establishment of Judicial Review",
          description:
            "In 1803, Marbury v. Madison established the principle of judicial review, empowering the Supreme Court to declare laws unconstitutional. This landmark case played a crucial role in defining the separation of powers within the federal government.",
        },
      },
      {
        front: {
          heading: "McCulloch v. Maryland",
          subheading: "1819",
        },
        back: {
          heading: "Federal Supremacy and Necessary and Proper Clause",
          description:
            "In 1819, McCulloch v. Maryland confirmed the supremacy of federal laws over state laws and established the necessary and proper clause. This decision had a lasting impact on the balance of power between the federal government and individual states.",
        },
      },
      {
        front: {
          heading: "Brown v. Board of Education",
          subheading: "1954",
        },
        back: {
          heading: "Overturning 'Separate but Equal'",
          description:
            "Brown v. Board of Education (1954) overturned the 'separate but equal' doctrine, marking a historic step towards desegregation in public schools. The case played a pivotal role in the civil rights movement and the pursuit of equality.",
        },
      },
      {
        front: {
          heading: "Gideon v. Wainwright",
          subheading: "1963",
        },
        back: {
          heading: "Right to Counsel",
          description:
            "Gideon v. Wainwright (1963) established the right to counsel for criminal defendants, ensuring that even those who couldn't afford an attorney would receive a fair trial. This decision significantly impacted the criminal justice system in the United States.",
        },
      },
      {
        front: {
          heading: "Tinker v. Des Moines",
          subheading: "1969",
        },
        back: {
          heading: "Protection of Student Speech",
          description:
            "Tinker v. Des Moines (1969) protected students' rights to free speech in public schools. The case set a precedent for student expression and clarified the limitations that schools could place on individual rights.",
        },
      },
      {
        front: {
          heading: "United States v. Lopez",
          subheading: "1995",
        },
        back: {
          heading: "Limiting Federal Power",
          description:
            "United States v. Lopez (1995) limited the scope of the Commerce Clause, asserting that the federal government's authority is not unlimited. The decision clarified the boundaries of federal power in regulating activities within the states.",
        },
      },
      {
        front: {
          heading: "Baker v. Carr",
          subheading: "1962",
        },
        back: {
          heading: "One Person, One Vote",
          description:
            "Baker v. Carr (1962) established the principle of 'one person, one vote' in the apportionment of legislative districts. The case aimed to address the issue of malapportionment and ensure equal representation for all citizens.",
        },
      },
      {
        front: {
          heading: "Engel v. Vitale",
          subheading: "1962",
        },
        back: {
          heading: "Prohibition of School Prayer",
          description:
            "Engel v. Vitale (1962) struck down prayer in public schools, ruling it unconstitutional under the First Amendment's Establishment Clause. The decision reinforced the separation of church and state in public education.",
        },
      },
      {
        front: {
          heading: "New York Times v. US",
          subheading: "1971",
        },
        back: {
          heading: "Freedom of the Press",
          description:
            "New York Times v. US (1971) upheld the freedom of the press, preventing prior restraint on the publication of classified documents. The case affirmed the importance of a free and independent press in a democratic society.",
        },
      },
      {
        front: {
          heading: "Schenck v. US",
          subheading: "1919",
        },
        back: {
          heading: "Clear and Present Danger Test",
          description:
            "Schenck v. US (1919) established the 'clear and present danger' test, limiting free speech during wartime when it poses a threat to national security. The case set a precedent for balancing free speech rights with the need for national security.",
        },
      },
      {
        front: {
          heading: "McDonald v. Chicago",
          subheading: "2010",
        },
        back: {
          heading: "Application of Second Amendment to States",
          description:
            "McDonald v. Chicago (2010) applied the Second Amendment to the states, affirming an individual's right to bear arms for self-defense. The decision had significant implications for gun rights and regulations at the state level.",
        },
      },
      {
        front: {
          heading: "Shaw v. Reno",
          subheading: "1993",
        },
        back: {
          heading: "Racial Gerrymandering",
          description:
            "Shaw v. Reno (1993) addressed racial gerrymandering, ruling that race cannot be the primary factor in the drawing of electoral district lines. The case aimed to prevent the manipulation of electoral boundaries based on race.",
        },
      },
      {
        front: {
          heading: "Wisconsin v. Yoder",
          subheading: "1972",
        },
        back: {
          heading: "Freedom of Religion",
          description:
            "Wisconsin v. Yoder (1972) protected the right to freedom of religion, allowing Amish parents to withdraw their children from public school for religious reasons. The decision recognized the importance of accommodating religious practices within the legal framework.",
        },
      },
    ],
  },
];
