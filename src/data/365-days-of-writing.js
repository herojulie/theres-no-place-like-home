const writingSubjects = {
  "Mar14": {
    "subject": "180 degrees",
    "description": "Tell us about a time you did a 180 changed your views on something, reversed a decision, or acted in a way you ordinarily don’t."
  },
  "Mar15": {
    "subject": "Comfort zone",
    "description": "What are you more comfortable with routine and planning, or laissez-faire spontaneity?"
  },
  "Mar16": {
    "subject": "Show and tell",
    "description": "You’ve been asked to do a five-minute presentation to a group of young schoolchildren on the topic of your choice. Describe your presentation."
  },
  "Mar17": {
    "subject": "Bone of contention",
    "description": "Pick a contentious issue about which you care deeply — it could be the same-sex marriage debate, or just a disagreement you’re having with a friend. Write a post defending the opposite position, and then reflect on what it was like to do that."
  },
  "Mar18": {
    "subject": "Impossible",
    "description": "Why, sometimes I’ve believed as many as six impossible things before breakfast.” – the White Queen, Alice in Wonderland. What are the six impossible things you believe in? (If you can only manage one or two, that’s also okay.)"
  },
  "Mar19": {
    "subject": "Menagerie",
    "description": "Do you have animals in your life? If yes, what do they mean to you? If no, why have you opted not to?"
  },
  "Mar20": {
    "subject": "INTJ",
    "description": "Do parties and crowds fill you with energy, or send you scurrying for peace and quiet?"
  },
  "Mar21": {
    "subject": "Bedtime stories",
    "description": "What was your favorite book as a child? Did it influence the person you are now?"
  },
  "Mar22": {
    "subject": "Stranded",
    "description": "You’re stranded in a foreign city for a day with no money and no friends. Where do you go; what do you do?"
  },
  "Mar23": {
    "subject": "Local flavor",
    "description": "Write a piece about a typically “local” experience from where you come from as though it’s an entry in a travel guide."
  },
  "Mar24": {
    "subject": "Competition",
    "description": "What activity, task, or game most brings out your competitive streak?"
  },
  "Mar25": {
    "subject": "Idyllic",
    "description": "What does your ideal community look like? How is it organized, and how is community life structured? What values does the community share?"
  },
  "Mar26": {
    "subject": "Déjà vu",
    "description": "Have you ever truly felt déjà vu, the sensation that you’ve already had the experience you’re currently having?"
  },
  "Mar27": {
    "subject": "Judgment day",
    "description": "If you were to judge your favorite book by its cover, would you still read it?"
  },
  "Mar28": {
    "subject": "Happy happy joy joy",
    "description": "We cry for lots of reasons: sadness, pain, fear . . . and happiness. When was the last time you shed tears of joy?"
  },
  "Mar29": {
    "subject": "Trading spaces",
    "description": "Have you ever wondered what it would be like to be a member of the opposite sex for a day? What do you think life would be like?"
  },
  "Mar30": {
    "subject": "Five a day",
    "description": "You’ve being exiled to a private island, and your captors will only supply you with five foods. What do you pick?"
  },
  "Mar31": {
    "subject": "Odd couple",
    "description": "Does a messy home (or office) make you anxious and cranky, or is cleaning something you just do before company comes over?"
  },
  "Apr1": {
    "subject": "The social network",
    "description": "Do you feel like you 'get' social media, or do you just use it because that's where all your friends and family are?"
  },
  "Apr2": {
    "subject": "Prized possession",
    "description": "Describe an item you were incredibly attached to as a child. What became of it?"
  },
  "Apr3": {
    "subject": "Excape!",
    "description": "Describe your ultimate escape plan (and tell us what you're escaping from)."
  },
  "Apr4": {
    "subject": "The transporter",
    "description": "Tell us about a sensation - a taste, a smell, a piece of music - that transports you back to childhood."
  },
  "Apr5": {
    "subject": "Share the love",
    "description": "Tell us about another blogger who has influenced your own online journey."
  },
  "Apr6": {
    "subject": "Thrid from the top",
    "description": "Head to your favorite blog. Scroll down to the third post in the list. Take the third sentence in the post, and work it into a new post of your own."
  },
  "Apr7": {
    "subject": "Alma mater",
    "description": "You've been asked to speak at your high school alma mater - about the path of life. (Whoa.) Draft the speech."
  },
  "Apr8": {
    "subject": "Turn, turn, turn",
    "description": "For many of us, winter is blooming into spring, or fall hardening into winter. Which season do you most look forward to?"
  },
  "Apr9": {
    "subject": "Do-over",
    "description": "Go back to a blog post you always thought could be better, or were unsatisfied with - now, fix it."
  },
  "Apr10": {
    "subject": "Imperfection",
    "description": "Imperfections - in things, in people, in places - add character to life. Tell us about an imperfection that you cherish."
  },
  "Apr11": {
    "subject": "Press it",
    "description": "Give some love to three blog posts you've read and loved in the past week, and tell us why they're worth reading."
  },
  "Apr12": {
    "subject": "Decisions, decisions",
    "description": "How are you more likely to make an important decision by reasoning through it, or by going with your gut?"
  },
  "Apr13": {
    "subject": "Charitable",
    "description": "You've inherited $5 million, with instructions that you must give it all away but you can choose any organizations you like to be the beneficiaries. Where does the money go?"
  },
  "Apr14": {
    "subject": "S/he said",
    "description": "Pause whatever you're doing, and ask the person nearest you what they're thinking about (call someone if you have to). Write a post based on it."
  },
  "Apr15": {
    "subject": "The satisfaction of a list",
    "description": "Who doesn't love a list? So write one! Top five slices of pizza in your town, ten reasons disco will never die, the three secrets to happiness - go silly or go deep, just go list-y."
  },
  "Apr16": {
    "subject": "History of language",
    "description": "Write a piece of fiction describing the incident that gave rise to the phrase, 'third times's the charm.'"
  },
  "Apr17": {
    "subject": "Million-dollar question",
    "description": "Why do you blog?"
  },
  "Apr18": {
    "subject": "Unknown caller",
    "description": "You receive a call from an unexpected person. Who is it, and what is the conversion about? Go!"
  },
  "Apr19": {
    "subject": "Freaky Friday",
    "description": "If you could be someone else for a day, who would you be, and why? If that seems too easy, try this one: who whould you like to have spend a day as you and what do you hope they'd learn from the experience?"
  },
  "Apr20": {
    "subject": "The bizarro world",
    "description": "In the DC comics universe, a planet called “Htrae” (“Earth” spelled backwards) is populated with bizarre versions of superheroes. A Seinfeld episode made the idea of this Bizarro World popular, where the characters encountered their opposite selves. Craft a scene in which you meet an opposite version of yourself — or a story in a bizarre, backwards world."
  },
  "Apr21": {
    "subject": "Companionable",
    "description": "Head to one of your favorite blogs. Write a companion piece to their penultimate post."
  },
  "Apr22": {
    "subject": "Critical eye",
    "description": "Write about the subject you usually blog about as if you were a music critic."
  },
  "Apr23": {
    "subject": "Earworm",
    "description": "What song is stuck in your head (or on permanent rotation in your CD or MP3 player) these days? Why does it speak to you?"
  },
  "Apr24": {
    "subject": "Stranger",
    "description": "Have you ever had a random encounter or fleeting moment with a stranger that stuck with you?"
  },
  "Apr25": {
    "subject": "Clone wars",
    "description": "If you could clone yourself, how would you split up your responsibilities?"
  },
  "Apr26": {
    "subject": "Second time around",
    "description": "Tell us about a book you can read again and again without getting bored — what is it that speaks to you?"
  },
  "Apr27": {
    "subject": "Wall to wall",
    "description": "What do you display on the walls of your home — photos, posters, artwork, nothing? How do you choose what to display? What mood are you trying to create?"
  },
  "Apr28": {
    "subject": "Your time to shine",
    "description": "Early bird, or night owl?"
  },
  "Apr29": {
    "subject": "Cringe-worthy",
    "description": "Do you feel uncomfortable when you see someone else being embarrassed? What’s most likely to make you squirm?"
  },
  "Apr30": {
    "subject": "Art appreciation",
    "description": "Do you need to agree with an artist’s lifestyle or politics to appreciate their art? To spend money on it?"
  }
};

export default writingSubjects
