// i18n.js - Language Toggle System (con traducciones embebidas para evitar CORS)

// Traducciones en inglés embebidas
var englishTranslations = {
  "logo": "Diary of a Black Sheep",
  "nav.home": "Home",
  "nav.story": "Story",
  "nav.essence": "Essence",
  "nav.preorder": "Preorder",
  "hero.title": "Diary of a Black Sheep",
  "hero.subtitle": "The journey you lived in my videos... now complete",
  "hero.author": "by Dani Bonilla",
  "hero.cta": "Continue the journey",
  "hero.hook": "For those who never really fit in.",
  "book.spine": "DIARY OF A BLACK SHEEP",
  "book.inner.title": "For those who<br>felt different",
  "book.inner.author": "by Dani Bonilla",
  "book.back.quote": "Have you ever felt different? You know... the odd one, the one out of the ordinary.<br>My name is Lane and for as long as I can remember I've felt like a black sheep...",
  "page.intro.title": "Introduction",
  "page.intro.p1": "Have you ever felt different from everyone else? You know... the odd one, the strange one, the black sheep.",
  "page.intro.p2": "My name is Lane. For a long time I didn't understand why, but maybe the best place to start is the way I came into this world...",
  "book.backinner.quote1": "\"An introspective journey that challenges social conventions and celebrates the beauty of being different. Bonilla gifts us an honest and moving work that will resonate with anyone who has ever felt out of place.\"",
  "book.backinner.critic": "— Literary critic",
  "book.backinner.reader1": "\"For the first time, I felt seen.\"<br>— Reader",
  "book.backinner.reader2": "\"This book turned my pain into hope.\"<br>— Anonymous",
  "book.backouter.text": "\"A raw and honest exploration of human identity.\"",
  "book.ethereal": "The beginning of a great adventure",
  "story.title": "Story Beginnings",
  "story.loading": "Loading...",
  "story.step1.number": "Suddenly...",
  "story.step1.title": "Everything Falls Apart",
  "story.step1.desc": "A beautiful childhood becomes a nightmare after sudden collapse. Now, he must seek refuge and a sense of security in a new and unknown world.",
  "story.step1.quote": "\"From one moment to the next, everything changed completely.\"",
  "story.step2.number": "Then...",
  "story.step2.title": "The Darkness",
  "story.step2.desc": "Settling in feeling out of place, surrounded by others but always on guard, he learns to survive by hiding his true self.",
  "story.step2.quote": "\"I never really fit in. Somehow, I was always defending myself.\"",
  "story.step3.number": "After...",
  "story.step3.title": "Inner Escape",
  "story.step3.desc": "Creativity becomes his secret refuge. He begins to build imaginary worlds in his mind, a place where he can finally breathe and exist without fear, a silent rebellion invisible to those around him.",
  "story.step3.quote": "\"I created worlds inside my head, places where no one could reach me.\"",
  "story.step4.number": "Finally...",
  "story.step4.title": "The Adventure Begins",
  "story.step4.desc": "Little by little, he finds the courage to go beyond his fears. Uncertain but determined to discover who he really is. No longer hiding from the world or from himself.",
  "story.step4.quote": "\"Even though I was scared from head to toe, I decided to jump into the unknown.\"",
  "characters.title": "The Characters",
  "characters.card1.front.desc": "Seeking meaning",
  "characters.card1.back.title": "The Dreamer",
  "characters.card1.back.desc": "Shadows cling to his story.<br>He survives by finding beauty in exile.",
  "characters.card1.back.quote": "\"Some destinies are written in darkness.\"",
  "characters.card2.front.title": "The Caretakers",
  "characters.card2.front.desc": "In small acts, they rewrite his destiny.",
  "characters.card2.back.title": "The Silent Anchors",
  "characters.card2.back.desc": "They repair what has been forgotten.<br>Even the smallest kindness resonates for years.",
  "characters.card2.back.quote": "\"Small actions can heal a great heart\"",
  "characters.card3.front.title": "The Shadows",
  "characters.card3.front.desc": "Surviving means learning to move unseen.",
  "characters.card3.back.title": "Gatekeepers",
  "characters.card3.back.desc": "What is the result of distance and control?<br>Keeps Lane close to his realm.",
  "characters.card3.back.quote": "\"Not all cages are visible.\"",
  "characters.card4.front.title": "Robal",
  "characters.card4.front.desc": "He sees hidden promise where others only see defect.",
  "characters.card4.back.title": "The Mentor",
  "characters.card4.back.desc": "Inspires Lane to dream beyond his limits.<br>Appears when most needed.",
  "characters.card4.back.quote": "\"Sometimes you need to see through another's eyes to find your own path.\"",
  "characters.card5.front.title": "Germán",
  "characters.card5.front.desc": "Together, they rewrite the rules.",
  "characters.card5.back.title": "The Friendship",
  "characters.card5.back.desc": "Together, they ignite revolutions.<br>Helps Lane transcend his own limitations.",
  "characters.card5.back.quote": "\"Change often begins with a single reckless friend.\"",
  "characters.card6.front.title": "The Enemies",
  "characters.card6.front.desc": "Their presence persists, even in silence.",
  "characters.card6.back.title": "Inner Shadows",
  "characters.card6.back.desc": "Fear, doubt, betrayal. Their weapons are subtle.<br>Their true power: making you question yourself.",
  "characters.card6.back.quote": "\"Some battles are fought in the mind, not the world.\"",
  "themes.title": "The Themes",
  "themes.card1.front.title": "Search for Purpose",
  "themes.card1.front.desc": "The knowledge of what you must do is revealed in the most unexpected folds of the journey.<br><span class=\"highlight\">Purpose is the greatest compass when you are lost.</span>",
  "themes.card1.back.title": "The Inner Compass",
  "themes.card1.back.desc": "Purpose is not found, it is lived.<br>The journey reveals what matters.<br>What calls you, transforms you.",
  "themes.card1.back.quote": "\"If you are lost, follow what moves your soul.\"",
  "themes.card2.front.title": "Technology",
  "themes.card2.front.desc": "In modern chaos, learning to listen to digital whispers can become the soul's subtle compass.<br><span class=\"highlight\">Between lines of text, sometimes signals bloom.</span>",
  "themes.card2.back.title": "Digital Echoes",
  "themes.card2.back.desc": "Technology is both refuge and oracle.<br>Between code and screen, guidance can be found.<br>Wisdom hides in the data streams.",
  "themes.card2.back.quote": "\"Even the artificial can point us the way home.\"",
  "themes.card3.front.title": "World Exploration",
  "themes.card3.front.desc": "Travel and geographical spaces can open doors to places never imagined.<br><span class=\"highlight\">There is no difference between inner and outer exploration.</span>",
  "themes.card3.back.title": "Inner and Outer Maps",
  "themes.card3.back.desc": "New places reflect new selves.<br>Each journey transforms both landscape and heart.<br>Exploration is inner work.",
  "themes.card3.back.quote": "\"Every mile outside is a mile inside.\"",
  "author.title": "About the Author",
  "author.stats": "Dani Bonilla • Storyteller • International Creator",
  "author.name": "Dani Bonilla",
  "author.back.desc": "Content creator and passionate narrator for creating stories that reach deep inside. More than a decade dedicated to creating introspective and meaningful content for a global audience.",
  "author.back.quote": "My purpose is to create transformative content that truly impacts people's inner world.",
  "author.bio1": "Dani is a content creator passionate about storytelling. He has spent more than a decade crafting profound and introspective stories. His journey began from his room, alone—just a young man with a camera and a need to understand who he is and how the world works. What started as a personal search for meaning grew into a mission to help others with their own experience.",
  "author.quote": "My purpose is to connect deeply through stories: to be a mirror, a spark, and a moment of inner transformation. This book is the culmination of everything I've learned.",
  "author.bio2": "Brilliantly, his work has reached millions, not because of trends, but because of the power of honest storytelling. He reveals the extraordinary hidden in our ordinary lives, turning personal experience into something universal. For many, he is a trusted voice when they need to see life with new eyes.",
  "author.intro": "Here's what people say about the impact of his stories",
  "preorder.title": "Join the journey",
  "preorder.subtitle": "Be part of the creation of this transformative story",
  "preorder.timeline": "Estimated to finish mid-2026",
  "preorder.promise": "Every contribution and every person on the waiting list helps bring this story to life.<br>Thank you for believing in the power of being different.",
  "donate.description": "Want to support the project with no strings attached?",
  "donate.cta": "Just donate",
  "preorder.testimonial1": "\"An emotional rollercoaster—sometimes I laughed, sometimes I cried. I always felt less alone.\"",
  "preorder.testimonial2": "\"A truly transformative experience\"",
  "tiers.backer.title": "🖤 BACKER TIER",
  "tiers.backer.subtitle": "For foundational supporters who believe in raw storytelling",
  "tiers.backer.cta": "Join as Backer - $50",
  "tiers.backer.benefits.title": "What you get:",
  "tiers.backer.benefits.item1.strong": "Immediate access",
  "tiers.backer.benefits.item1.text": "to an exclusive 8-12 page sample (Chapters 1-2)",
  "tiers.backer.benefits.item2.strong": "Multiple manuscript excerpts",
  "tiers.backer.benefits.item2.text": "during the writing process—content no one else will see",
  "tiers.backer.benefits.item3.strong": "Your opinion matters:",
  "tiers.backer.benefits.item3.text": "Direct input channel to influence the story's direction",
  "tiers.backer.benefits.item4.strong": "Your name immortalized",
  "tiers.backer.benefits.item4.text": "in the \"Backers\" section of the final book",
  "tiers.backer.benefits.item5.strong": "Final ebook",
  "tiers.backer.benefits.item5.text": "(EPUB + PDF) upon completion (estimated March 2026)",
  "tiers.backer.benefits.item6.strong": "Regular progress updates",
  "tiers.backer.benefits.item6.text": "throughout the journey",
  "tiers.backer.message": "You're not just supporting—you're co-creating. Your voice helps shape this story.",
  "tiers.producer.title": "🔥 PRODUCER TIER",
  "tiers.producer.subtitle": "For creators and serious supporters who want the full experience",
  "tiers.producer.cta": "Join as Producer - $250",
  "tiers.producer.benefits.title": "Everything in Backer, PLUS:",
  "tiers.producer.benefits.item1.strong": "Distinguished Producer Credit",
  "tiers.producer.benefits.item1.text": "prominently featured in the book's opening pages",
  "tiers.producer.benefits.item2.strong": "The Producer Video Pack",
  "tiers.producer.benefits.item2.text": "(delivered throughout the process):",
  "tiers.producer.benefits.item3.strong": "Book Structure Masterclass:",
  "tiers.producer.benefits.item3.text": "Complete video breakdown of my storytelling framework and process",
  "tiers.producer.benefits.item4.strong": "AI Trailer Creation Tutorial:",
  "tiers.producer.benefits.item4.text": "Step-by-step guide to designing compelling book trailers with cutting-edge AI tools",
  "tiers.producer.benefits.item5.strong": "Behind-the-Scenes Chronicles:",
  "tiers.producer.benefits.item5.text": "Regular video updates showing the true creative process",
  "tiers.producer.benefits.item6.strong": "Producer-Only Exclusive Content:",
  "tiers.producer.benefits.item6.text": "Early drafts, deleted scenes, creative decisions explained",
  "tiers.producer.message": "This is your backstage pass to see a book come to life. See every decision, every twist, every breakthrough in real time.",
  "tiers.footer.promise": "**Estimated completion:** March 2026 with regular progress updates throughout the process. One story. One project. Finished.",
  "tiers.footer.cta": "This is for people who understand that authentic art requires authentic support. If you've ever felt like the black sheep in your own life, this story is for you.",
  "modal.donate.title": "Support the Project",
  "pricing.presale": "(PRESALE)",
  "pricing.delivery": "Est. Delivery: April 1, 2026",
  "modal.donate.presale_badge": "PRESALE",
  "modal.donate.description": "Choose your preferred way to support this transformative story. Every contribution, no matter the size, helps bring this project to life.",
  "modal.donate.ko-fi.title": "Ko-fi",
  "modal.donate.ko-fi.desc": "Buy me a coffee to fuel the writing process",
  "modal.donate.paypal.title": "PayPal",
  "modal.donate.paypal.desc": "Direct donation via PayPal",
  "modal.donate.revolut.title": "Revolut",
  "modal.donate.revolut.desc": "Support through Revolut",
  "modal.donate.twint.title": "Twint (Switzerland)",
  "modal.donate.twint.desc": "Swiss mobile payment - Click to get the number",
  "modal.donate.bizum.title": "Bizum (Spain)",
  "modal.donate.bizum.desc": "Spanish mobile payment - Click to get the number",
  "modal.donate.crypto.title": "Cryptocurrencies",
  "modal.donate.crypto.desc": "Click to view crypto addresses",
  "modal.donate.crypto.btc.label": "Bitcoin (BTC):",
  "modal.donate.crypto.eth.label": "Ethereum (ETH):",
  "modal.donate.crypto.sol.label": "Solana (SOL):",
  "modal.donate.mural": "💜 **Want to appear on our backers wall?**<br>Send a screenshot of your donation with your name to: **hola.danibonilla@gmail.com**",
  "modal.donate.gratitude": "Thank you for believing in the power of storytelling and being different. Your support means the world! 💜",
  "meta.title": "Diary of a Black Sheep",
  "footer.copyright": "© Dani Bonilla. All are products of the author's artistic expression.",
  "footer.disclaimer": "Autobiographical fiction. Names, characters, places, and incidents are products of the author's artistic expression.",
  "pricing.eyebrow": "Your way to experience the story",
  "pricing.title": "Diary of a Black Sheep",
  "pricing.subtitle": "Three ways to experience the story. Choose the one that resonates with you.",
  "pricing.tier1.subtitle": "Complete Story",
  "pricing.tier1.title": "The Immersive Journey",
  "pricing.tier1.description": "More than a book. It's the raw story told in my own voice. Put on your headphones and live with me a completely transformative experience. A movie for your ears.",
  "pricing.tier1.guarantee": "Files yours forever",
  "pricing.tier1.feature1": "Audiobook Narrated by the Author",
  "pricing.tier1.feature2": "The Digital Manuscript (Ebook)",
  "pricing.tier1.feature3": "Atmosphere Pack",
  "pricing.tier1.feature4": "Total Ownership",
  "pricing.tier1.feature1.details": "Not a robotic reading. 10+ hours of intimate narration, with the tone, silences, and intention I lived in every moment.",
  "pricing.tier1.feature2.details": "The complete work in high quality (PDF/EPUB), beautifully formatted to read at your own pace and keep forever. No subscriptions, no expiration.",
  "pricing.tier1.feature3.details": "The soundtrack that inspired the work, visual sketches, and exclusive wallpapers. The visual universe of the Black Sheep.",
  "pricing.tier1.feature4.details": "Download it and store it wherever you want. It's yours for life.",
  "pricing.badge.recommended": "RECOMMENDED",
  "pricing.tier2.subtitle": "For Content Makers",
  "pricing.tier2.title": "The Creator's Toolkit",
  "pricing.tier2.description": "For those who ask \"How do you do it?\". Enter my creative kitchen. I'll show you, unfiltered, how I structured, wrote, and designed this work from nothing.",
  "pricing.tier2.guarantee": "Learn my complete process",
  "pricing.tier2.feature1": "Full Creative Process Breakdown",
  "pricing.tier2.feature2": "The \"Graveyard\" of Ideas",
  "pricing.tier2.feature3": "\"Dani's Vibe\" Music License",
  "pricing.tier2.feature4": "Everything in The Immersive Journey included",
  "pricing.tier2.feature1.details": "A technical and deeply detailed analysis of how I went from an abstract idea to the final product. Tools, creative processes, AI usage, and narrative decisions. My real workflow documented.",
  "pricing.tier2.feature2.details": "Access to messy drafts, deleted scenes, and test audios that never saw the light. Learn from my mistakes and discards.",
  "pricing.tier2.feature3.details": "Permission to use my original compositions in your own YouTube, TikTok, or social media videos. Just mention me as the author in the description. No remixes, ads, or redistribution.",
  "pricing.tier3.subtitle": "Exclusive Personal Access",
  "pricing.tier3.title": "The Inner Circle",
  "pricing.tier3.description": "Become part of the story, permanently. Leave your mark on this work and access psychological & creative analysis I won't publish anywhere else.",
  "pricing.tier1.cta": "Join the Journey",
  "pricing.tier2.cta": "Get the Kit",
  "pricing.tier3.cta": "Join the Circle",
  "pricing.tier3.guarantee": "Pure patronage & connection",
  "pricing.tier3.limit": "Limited",
  "pricing.tier3.topLabel": "★ Top Supporter",
  "pricing.tier3.feature1": "Private Session: What I Can't Say on YouTube",
  "pricing.tier3.feature2": "Your Legacy: Name in the Credits",
  "pricing.tier3.feature3": "Full Access: The Journey + The Creator's Kit",
  "pricing.tier3.feature1.details": "Recorded exclusively for the Inner Circle. This will never be published. I talk about the real wounds, the decisions that cost me years, and the psychological analysis too vulnerable for the general public.",
  "pricing.tier3.feature2.details": "You're not just a viewer, you're a patron. Your name (or alias) will be immortalized in the final pages and listed as a \"Producer/Supporter.\" You'll be part of this work forever.",
  "pricing.tier3.feature3.details": "Every euro goes directly to the creator. No publishers or platforms taking a cut. Pure patronage, the way art should be funded.",
  "pricing.secret_door.text": "Just want to read? Text-only option available — or download a sample",
  "pricing.notify_me.text": "Notify me of updates or when the work is released",
  "pricing.tier3.limitedBonus": "Your Question Answered (First 10 Only)",
  "pricing.tier3.limitedBonus.details": "Submit a personal question (about creativity, life, the work, your situation, or any other topic) and I'll dedicate part of the exclusive video to answering you in depth. It's the closest thing to having a coffee with me in person.",
  "pricing.tier3.limitedBonus.soldout": "<s>Your Question Answered (First 10 Only)</s> Sold Out",
  "secret.ebook.subtitle": "Digital Reading",
  "secret.ebook.title": "Text Edition",
  "secret.ebook.description": "Access 500+ pages in text-only format (PDF/EPUB). The book is yours forever. (You can choose to remain anonymous) Direct contribution to the author.",
  "secret.ebook.cta": "Reserve",
  "secret.ebook.delivery": "Est. Delivery: April 1, 2026",
  "secret.ebook.feature1": "500 Pages (PDF)",
  "secret.ebook.feature2": "Yours Forever",
  "secret.ebook.feature3": "Direct Support to the Author",
  "secret.donate.subtitle": "Free Contribution",
  "secret.donate.title": "Just Donate",
  "secret.donate.description": "Pure support. No product included. Just contribute what you feel.",
  "secret.donate.cta": "Choose Amount",
  "secret.donate.note": "No product included",
  "secret.donate.price": "Whatever You Want",
  "secret.donate.feature1": "Ko-fi, PayPal, Revolut",
  "secret.donate.feature2": "Bizum, Twint, Crypto",
  "secret.donate.feature3": "100% Goes to Creator",
  "secret.free.badge": "✦ FREE",
  "secret.free.title": "Sample Chapter",
  "secret.free.description": "Try before you buy. Get a complete chapter instantly.",
  "secret.free.cta": "Free",
  "secret.free.note": "Just your email",
  "pricing.trust.secure.title": "Secure Payment",
  "pricing.trust.secure.desc": "256-bit SSL Encryption",
  "pricing.trust.transparency.title": "No Fine Print",
  "pricing.trust.transparency.desc": "What you see is what you get",
  "pricing.trust.direct.title": "100% Support",
  "pricing.trust.direct.desc": "Every euro goes to the creator",
  "manifesto.text1": "This is for all those who never quite fit in.",
  "manifesto.text2": "For those who always felt different, who saw the world with different eyes and wondered why no one else seemed to see it the same way. For those who learned to hide parts of themselves, who carried the feeling of being a stranger, even among their own.",
  "manifesto.text3": "",
  "manifesto.text4": "If you have ever felt like the black sheep, looking for where to fit in, you are not alone.",
  "manifesto.final": "This story is for you.",
  "manifesto.youtube": "You probably came here from one of my videos. You did because you felt something different: the depth, the message... This journey is everything that didn't fit in a single YouTube video. No algorithms. No ad breaks.",
  "testimonial.citation": "On the YouTube channel:",
  "testimonial.1.text": "\"Bro, I feel so identified with your story. You have no idea how much I relate to you.\"",
  "testimonial.2.text": "\"Storytelling is your gift. Your voice brings a sense of calm and is a pleasure to listen to. Never lose your curiosity to discover new worlds.\"",
  "testimonial.3.text": "\"This guy has a lot of potential, the shots, the editing, the narration. This is one of those times I thank YouTube for recommending quality content.\"",
  "testimonial.4.text": "\"I don't understand how your videos don't have way more likes. Your content has soul. I'm catching up on all your videos because you inspire me to go for it.\"",
  "testimonial.5.text": "\"It couldn't be explained better, and you do it with so much respect and sincerity. Thank you for translating feelings into words.\"",
  "testimonial.6.text": "\"First YouTube channel that has really made sense to me... How does such a good channel have so few views and subscribers? You represent, Dani!\"",
  "testimonial.7.text": "\"...and so HONEST in your communication. That transparency makes every video feel close and authentic.\"",
  "testimonial.8.text": "\"I watched it all. Trial and error, Dani: you're a living example of how to tell a real story and keep us glued to the screen.\"",
  "testimonial.9.text": "\"It is so beautiful to hear your story. You speak from honesty, not ego, and that shows in every minute.\"",
  "testimonial.10.text": "\"After 50 years in Switzerland and 30 years in TV, your maturity analyzing and narrating these differences really surprises me. You explain everything with admirable clarity.\"",
  "testimonial.11.text": "\"Beautiful video: genuine, honest personal experiences. Thank you for sharing them with such a human touch.\"",
  "testimonial.12.text": "\"Talking for an hour straight to the camera and keeping us engaged shows your passion and a true gift for storytelling. Thanks for the inspiration.\"",
  "testimonial.13.text": "\"It is better to regret what you have done than what you haven't... Love your catharsis.\"",
  "testimonial.14.text": "\"Thanks for your reflections; they motivate me to create my own content. The way you tell things makes me want to start too.\"",
  "testimonial.15.text": "\"This video is so powerful; I'm on the same path as you, Dani. It really touched me.\"",
  "testimonial.16.text": "\"As exciting as the ending of a movie saga.\"",
  "testimonial.17.text": "\"I see myself totally reflected in you... thank you for transforming my vision and courage to face life.\"",
  "testimonial.18.text": "\"I am blown away by your editing. Your strength is telling stories and making people feel them as their own. Exploit that quality.\"",
  "testimonial.19.text": "\"What an amazing edit, dude! The voiceover, the music, everything! Every video you outdo yourself. You're awesome and you'll get there.\"",
  "modal.phone.title.default": "Privacy Protection",
  "modal.phone.title.unlock": "Unlock number for",
  "faq.title": "Frequently Asked Questions",
  "faq.q1.question": "Is this a \"normal\" audiobook?",
  "faq.q1.answer": "No. It's an <strong>author's immersive edition</strong>: premium narration + extras (ebook, art, playlist) and direct support to the author.",
  "faq.q2.question": "Where can I listen to it?",
  "faq.q2.answer": "You can listen on <strong>mobile with app</strong> or in <strong>your browser</strong> with the web player.",
  "faq.q3.question": "Can I download the audio?",
  "faq.q3.answer": "If enabled, you'll have <strong>DRM-free MP3 download</strong> from your library.",
  "faq.q4.question": "When will I receive it?",
  "faq.q4.answer": "It's a <strong>presale</strong>. Estimated delivery: <strong>early April 2026</strong>. You'll receive an email with access when published.",
  "faq.q5.question": "How do I access after purchasing?",
  "faq.q5.answer": "You'll receive an email with instructions. Access is linked to the <strong>email you purchase with</strong>.",
  "faq.q6.question": "Is this a self-contained story?",
  "faq.q6.answer": "Yes. This book is designed as a <strong>complete experience</strong> by itself.",
  "faq.q7.question": "Is there community, calls, or 1:1 support?",
  "faq.q7.answer": "No. This is a <strong>finished work</strong>, not a program or mentorship.",
  "faq.q8.question": "What if I lose the email or change devices?",
  "faq.q8.answer": "You can log in with your email and recover access from your library. The delivery platform offers support for technical issues.",


  "faq.new.q1.question": "What if I pay and you never finish the work?",
  "faq.new.q1.answer": "This is a <strong>presale</strong>. If I fail to deliver the product, you have the right to a full refund. I'll keep you informed of any changes to the plan.",
  "faq.new.q2.question": "What's the difference between this and your YouTube videos?",
  "faq.new.q2.answer": "On YouTube you get fragments designed for the algorithm. This is the <strong>complete experience</strong>: hours of uninterrupted connection, the same emotional quality but more depth. It's the difference between a glimpse and the full journey.",
  "faq.new.q3.question": "How do I know if this is for me?",
  "faq.new.q3.answer": "If you've resonated with the stories I tell on YouTube, this is for you. If you enjoy <strong>deep connection</strong>, feeling understood, and stories that stay with you long after they end. All tiers include the complete PDF if you prefer reading.",
  "faq.new.q4.question": "The delivery date is far away. Do I receive anything now?",
  "faq.new.q4.answer": "My main focus is to finish and deliver the book. That's why you get a <strong>discount now</strong> for trusting me early. I'll share occasional updates on the process, so you won't be left alone. Thank you for your support.",
  "faq.new.q5.question": "Is there a refund policy?",
  "faq.new.q5.answer": "No refunds once purchased. I want to focus on finishing this work in the <strong>best way possible</strong>. My videos on YouTube show exactly the style of story, connection, and depth you can expect. I commit to delivering the highest quality experience.",

  "faq.tech.q1.question": "What happens if the delivery date is delayed?",
  "faq.tech.q1.answer": "Estimated delivery: <strong>April 1, 2026</strong>. If there's any delay due to production, I'll notify you by email and update the delivery date. You're buying a presale with a discount for trusting early.",
  "faq.tech.q2.question": "How will I receive the product?",
  "faq.tech.q2.answer": "You'll receive an <strong>email with download links</strong> on the delivery date. You can also access everything from your Gumroad library anytime. Check spam if you don't see it.",
  "faq.tech.q3.question": "How are taxes calculated?",
  "faq.tech.q3.answer": "Taxes are calculated <strong>automatically at checkout</strong> based on your country. The platform charges in USD, so your bank will convert from dollars to your local currency. Your bank may apply a small conversion fee.",
  "faq.tech.q4.question": "What's NOT included in the purchase?",
  "faq.tech.q4.answer": "This is a <strong>finished digital work</strong>, not a program or mentorship. It does not include: 1:1 technical support, personalized sessions, physical shipping, or community/calls. For platform issues, the sales platform can offer support."
};

// Store original Spanish texts globally
window.originalTexts = {};
window.currentLanguage = 'es';

// Toggle function exposed globally
window.toggleLanguage = function () {
  if (window.currentLanguage === 'es') {
    loadEnglish();
  } else {
    loadSpanish();
  }
};

document.addEventListener('DOMContentLoaded', function () {
  // Save original Spanish texts FIRST (before any translation)
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    window.originalTexts[key] = el.innerHTML;
  });

  // Check for URL param or saved preference
  var urlParams = new URLSearchParams(window.location.search);
  var langParam = urlParams.get('lang');
  var savedLang = localStorage.getItem('userLanguage');

  // Priority: URL param > LocalStorage > Default 'es'
  var targetLang = langParam || savedLang || 'es';

  // Set initial language
  if (targetLang === 'en') {
    loadEnglish();
  } else {
    updateButton('EN');
    window.currentLanguage = 'es';
    document.documentElement.lang = 'es';
  }
});

function loadEnglish() {
  // Apply translations from embedded object
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (englishTranslations[key]) {
      el.innerHTML = englishTranslations[key];
    }
  });

  window.currentLanguage = 'en';
  localStorage.setItem('userLanguage', 'en');
  updateButton('ES');
  document.documentElement.lang = 'en';

  // Update URL
  var url = new URL(window.location);
  url.searchParams.set('lang', 'en');
  window.history.replaceState({}, '', url);

  document.dispatchEvent(new CustomEvent('translationsLoaded'));
}

function loadSpanish() {
  // Restore original Spanish texts
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (window.originalTexts[key]) {
      el.innerHTML = window.originalTexts[key];
    }
  });

  window.currentLanguage = 'es';
  localStorage.setItem('userLanguage', 'es');
  updateButton('EN');
  document.documentElement.lang = 'es';

  // Update URL
  var url = new URL(window.location);
  url.searchParams.delete('lang');
  window.history.replaceState({}, '', url);

  document.dispatchEvent(new CustomEvent('translationsLoaded'));
}

function updateButton(label) {
  var btn = document.getElementById('langToggleBtn');
  if (btn) {
    btn.textContent = label;
  }
}