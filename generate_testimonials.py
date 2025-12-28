
testimonials = [
    {"id": 1, "name": "El Mattew", "handle": "@El_Mattew", "channel": "Dani Bonilla", "channel_url": "https://www.youtube.com/@danibonilla1", "initial": "E"},
    {"id": 2, "name": "coleccioninfinita1156", "handle": "@coleccioninfinita1156", "channel": "La Oveja Gris", "channel_url": "https://www.youtube.com/@laovejagris", "initial": "C"},
    {"id": 3, "name": "Andre Padron", "handle": "@andrepadron1232", "channel": "Dani Bonilla", "channel_url": "https://www.youtube.com/@danibonilla1", "initial": "A"},
    {"id": 4, "name": "ben_franco", "handle": "@ben_franco", "channel": "La Oveja Gris", "channel_url": "https://www.youtube.com/@laovejagris", "initial": "B"},
    {"id": 5, "name": "magnoliaarbol8060", "handle": "@magnoliaarbol8060", "channel": "La Oveja Gris", "channel_url": "https://www.youtube.com/@laovejagris", "initial": "M"},
    {"id": 6, "name": "Guillermo Trejo", "handle": "@guillermotrejo437", "channel": "Dani Bonilla", "channel_url": "https://www.youtube.com/@danibonilla1", "initial": "G"},
    {"id": 7, "name": "manueljosegarciaperez9164", "handle": "@manueljosegarciaperez9164", "channel": "La Oveja Gris", "channel_url": "https://www.youtube.com/@laovejagris", "initial": "M"},
    {"id": 8, "name": "Joker-po7ei", "handle": "@Joker-po7ei", "channel": "La Oveja Gris", "channel_url": "https://www.youtube.com/@laovejagris", "initial": "J"},
    {"id": 9, "name": "mariajose_11", "handle": "@mariajose_11", "channel": "La Oveja Gris", "channel_url": "https://www.youtube.com/@laovejagris", "initial": "M"},
    {"id": 10, "name": "hugoorell", "handle": "@hugoorell", "channel": "La Oveja Gris", "channel_url": "https://www.youtube.com/@laovejagris", "initial": "H"},
    {"id": 11, "name": "estebanmartinhusulak5037", "handle": "@estebanmartinhusulak5037", "channel": "La Oveja Gris", "channel_url": "https://www.youtube.com/@laovejagris", "initial": "E"},
    {"id": 12, "name": "nazald", "handle": "@nazald", "channel": "La Oveja Gris", "channel_url": "https://www.youtube.com/@laovejagris", "initial": "N"},
    {"id": 13, "name": "Decimequeno", "handle": "@decimequeno9916", "channel": "Dani Bonilla", "channel_url": "https://www.youtube.com/@danibonilla1", "initial": "D"},
    {"id": 14, "name": "soyjesusgonzalez3720", "handle": "@soyjesusgonzalez3720", "channel": "La Oveja Gris", "channel_url": "https://www.youtube.com/@laovejagris", "initial": "S"},
    {"id": 15, "name": "Leon Hernando", "handle": "@leonhernando666", "channel": "Dani Bonilla", "channel_url": "https://www.youtube.com/@danibonilla1", "initial": "L"},
    {"id": 16, "name": "Drumerto", "handle": "@Drumerto", "channel": "Dani Bonilla", "channel_url": "https://www.youtube.com/@danibonilla1", "initial": "D"},
    {"id": 17, "name": "Economía Desde Casa", "handle": "@EconomiaDesdeCasa", "channel": "Dani Bonilla", "channel_url": "https://www.youtube.com/@danibonilla1", "initial": "E"},
    {"id": 18, "name": "Rubén Loan", "handle": "@RubenLoan", "channel": "Dani Bonilla", "channel_url": "https://www.youtube.com/@danibonilla1", "initial": "R"},
    {"id": 19, "name": "Reborsito Paquistani", "handle": "@reborsitopaquistani9220", "channel": "Dani Bonilla", "channel_url": "https://www.youtube.com/@danibonilla1", "initial": "R"}
]

# Original texts are not needed here as we will use the data-i18n attribute, 
# but we need to preserve the inner text for the initial render (English).
# I'll just put a placeholder or try to copy them if I can, but actually 
# the user's file has English text. I should probably try to keep it.
# To be safe and precise, I will read the file content in the script and parse it? 
# No, that's too complex for a quick script.
# I'll just use the text I saw in the view_file output.

texts = {
    1: '"Bro, I feel so identified with your story. You have no idea how much I relate to you."',
    2: '"Telling stories is your gift. Your voice brings a sense of calm and it’s a pleasure to listen to you. Never lose your curiosity to discover new worlds."',
    3: '"This dude has so much potential, the shots, the editing, the storytelling. This is one of those times I\'m grateful YouTube recommended quality content."',
    4: '"I don’t understand how your videos don’t have way more likes. Your content has soul. I’m catching up on all your videos because you inspire me to go for it."',
    5: '"It couldn’t be explained better, and you do it with so much respect and sincerity. Thank you for translating feelings into words."',
    6: '"First YouTube channel that has really made sense to me... How does such a good channel have so few views and subscribers? You\'re awesome, Dani!"',
    7: '"...and so HONEST in your communication." That transparency makes every video feel close and authentic.',
    8: '"I watched the whole thing. Trial and error, Dani: you are a living example of how to tell a real story and keep us glued to the screen."',
    9: '"It’s so beautiful to listen to your story. You speak from honesty, not from ego, and that shows in every minute."',
    10: '"After 50 years in Switzerland and 30 years in TV, your maturity analyzing and narrating these differences really surprises me. You explain everything with admirable clarity."',
    11: '"Beautiful video: genuine and honest personal experiences. Thank you for sharing them with such a human touch."',
    12: '"Talking for an hour straight to the camera and keeping us engaged shows your passion and a real gift for storytelling. Thank you for the inspiration."',
    13: '"It\'s better to regret what you\'ve done than what you didn\'t do... I love your catharsis."',
    14: '"Thank you for your reflections; they motivate me to create my own content. The way you tell things makes me want to get started too."',
    15: '"This video is so powerful; I\'m on the same path as you, Dani. It really touched me."',
    16: '"Just as thrilling as the end of a movie saga."',
    17: '"I see myself totally reflected in you... thank you for transforming my vision and the courage to face life."',
    18: '"I\'m blown away by your editing. Your strength is telling stories and making people feel them as their own. Take advantage of that quality."',
    19: '"What an amazing edit, dude! The voiceover, the music, everything! Every video you outdo yourself. You\'re awesome and you\'ll get there."'
}




# Updated SVG icon (white/gold via CSS)
svg_icon = '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'
like_icon = '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.25-1.52,0.68l-3.45,4.05C9.14,9.03,8.86,9.5,8.86,10 v9c0,1.1,0.9,2,2,2h6.25c0.8,0,1.52-0.48,1.84-1.21l2.26-5.31C21.46,13.86,21.48,13.44,21.48,13C21.48,11.9,20.58,11,19.48,11z M4,9 v12H1V9H4z"/></svg>'

import random

time_units = ["days", "weeks", "months"]

for t in testimonials:
    active_class = " active" if t["id"] == 1 else ""
    # Clean handle for unavatar (remove @ if present, though unavatar might handle it)
    clean_handle = t["handle"].replace("@", "")
    likes = random.randint(12, 850)
    
    # Random date generation
    val = random.randint(1, 11)
    unit = random.choice(time_units)
    if val == 1:
        unit = unit[:-1] # Remove 's' for singular
    date_str = f"{val} {unit} ago"
    
    print(f'''            <div class="testimonial{active_class}">
                <div class="youtube-comment">
                    <div class="comment-header">
                        <a href="https://youtube.com/{t["handle"]}" target="_blank" class="comment-avatar-link">
                            <div class="comment-avatar">
                                <img src="https://unavatar.io/youtube/{clean_handle}" alt="{t["name"]}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                                <div class="avatar-initials" style="display:none">{t["initial"]}</div>
                            </div>
                        </a>
                        <div class="comment-meta">
                            <a href="https://youtube.com/{t["handle"]}" target="_blank" class="comment-author-name" data-username="{t["name"].replace(" ", "")}">{t["name"]}</a>
                            <span class="comment-author-handle">{t["handle"]}</span>
                        </div>
                        <div class="comment-source">
                             <a href="{t["channel_url"]}" target="_blank" class="channel-link">
                                {svg_icon}
                                <span class="channel-name">{t["channel"]}</span>
                             </a>
                        </div>
                    </div>
                    <div class="comment-body">
                        <p class="comment-text" data-i18n="testimonial.{t["id"]}.text">
                            {texts[t["id"]]}
                        </p>
                    </div>
                    <div class="comment-actions">
                        <div class="action-item like-action">
                            {like_icon}
                            <span class="like-count">{likes}</span>
                        </div>
                        <div class="action-item date-action">{date_str}</div>
                    </div>
                </div>
            </div>''')
