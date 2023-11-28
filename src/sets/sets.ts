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
