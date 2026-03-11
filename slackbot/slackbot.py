import os
from slack_bolt import App
import datetime
import random
from slack_bolt.adapter.socket_mode import SocketModeHandler

app = App(token=os.environ["SLACK_BOT_TOKEN"])

@app.message("")
def handle_hello(message, say):
    text = message.get("text", "").lower()
    user = message["user"]

    #greetings
    if any(word in text for word in ["hello", "hi", "hey", "howdy", "sup"]):
        greetings = [
            f"Hey <@{user}>! 👋 How can I help?",
            f"Hello <@{user}>! 😊 What's up?",
            f"Hi there <@{user}>! 🤖 Ready to help!",
        ]
        say(random.choice(greetings))

    #how are you
    elif any(phrase in text for phrase in ["how are you", "how r you", "how are u", "you ok"]):
        responses = [
            f"I'm doing great <@{user}>! Thanks for asking...",
            f"Feeling fantastic <@{user}>! 🚀",
            f"All systems operational <@{user}>! 🤖",
        ]
        say(random.choice(responses))

    #bye-bye
    elif any(word in text for word in ["bye", "goodbye", "see you", "later", "cya"]):
        say(f"Goodbye <@{user}>! See you soon!")

    #tell me a joke
    elif any (phrase in text for phrase in ["joke", "funny", "make me laugh", "tell me joke"]):
        jokes = [
            "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
            "Why did the developer go broke? Because he used up all his cache! 💸",
            "What's a computer's favorite snack? Microchips! 🍟",
            "Why was the JavaScript developer sad? Because he didn't Node how to Express himself!",
            "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
        ]
        say(random.choice(jokes))

    # Flip a coin
    elif any(phrase in text for phrase in ["flip a coin", "heads or tails", "coin flip"]):
        result = random.choice(["Heads 🪙", "Tails 🪙"])
        say(f"I flipped a coin and got... *{result}*!")

    # Roll a dice
    elif any(phrase in text for phrase in ["roll a dice", "roll dice", "dice", "roll"]):
        result = random.randint(1, 6)
        say(f"🎲 You rolled a *{result}*!")

    # Magic 8 ball
    elif any(phrase in text for phrase in ["8 ball", "magic 8", "predict", "will i", "should i"]):
        responses = [
            "It is certain", "Without a doubt", "Yes definitely",
            "You may rely on it", "Most likely", "Outlook good",
            "Reply hazy, try again", "Ask again later", "Cannot predict now",
            "Don't count on it", "My reply is no", "Outlook not so good",
            "Very doubtful"
        ]
        say(f"🎱 Magic 8-Ball says: *{random.choice(responses)}*")

    # Current time
    elif any(phrase in text for phrase in ["what time", "current time", "time now", "time"]):
        now = datetime.datetime.now().strftime("%I:%M %p")
        say(f"🕐 The current time is *{now}*")

    # Current date
    elif any(phrase in text for phrase in ["what date", "today's date", "what day", "today"]):
        today = datetime.datetime.now().strftime("%A, %B %d, %Y")
        say(f"📅 Today is *{today}*")

    # Motivational quote
    elif any(phrase in text for phrase in ["motivate me", "motivation", "inspire me", "quote"]):
        quotes = [
            "\"The only way to do great work is to love what you do.\" - Steve Jobs 💡",
            "\"It does not matter how slowly you go as long as you do not stop.\" - Confucius 🐢",
            "\"Success is not final, failure is not fatal.\" - Winston Churchill 💪",
            "\"Believe you can and you're halfway there.\" - Theodore Roosevelt 🌟",
            "\"Don't watch the clock; do what it does. Keep going.\" - Sam Levenson ⏰",
        ]
        say(random.choice(quotes))

    # Weather (placeholder)
    elif "weather" in text:
        say("⛅ I don't have live weather data yet, but you can check weather at https://weather.com!")

    # Math calculations
    elif any(phrase in text for phrase in ["calculate", "what is", "solve"]):
        say("For calculations, try something like `2 + 2`. I'm working on full math support!")

    # Who are you
    elif any(phrase in text for phrase in ["who are you", "what are you", "your name", "about you"]):
        say(
            f"Hi <@{user}>! I'm *Starter Bot* 🤖\n"
            "I'm a Slack bot built with Python and Slack Bolt.\n"
            "Type `help` to see everything I can do!"
        )

    elif any(phrase in text for phrase in ["powerball", "lottery", "pick numbers", "lucky numbers", "lucky number"]):
        white_balls = random.sample(range(1, 70), 5)
        white_balls.sort()
        powerball = random.randint(1, 26)
        say(
            f"*Here are your Powerball numbers <@{user}>!*\n"
            f"White Balls: *{' - '.join(map(str, white_balls))}*\n"
            f"Powerball: *{powerball}*\n"
            f"Good luck!"
        )

    # Help menu
    elif "help" in text:
        say(
            "🤖 *Here's everything I can do:*\n\n"
            "👋 *Greetings:* `hello`, `hi`, `hey`\n"
            "😊 *Mood:* `how are you`\n"
            "👏 *Gratitude:* `thank you`, `thanks`\n"
            "😂 *Fun:* `tell me a joke`\n"
            "🪙 *Games:* `flip a coin`, `roll a dice`\n"
            "🎱 *Magic 8-Ball:* `should I...`, `will I...`\n"
            "🕐 *Time:* `what time is it`\n"
            "📅 *Date:* `what day is today`\n"
            "💡 *Inspiration:* `motivate me`, `give me a quote`\n"
            "⛅ *Weather:* `weather`\n"
            "🤖 *About:* `who are you`\n"
            "👋 *Goodbye:* `bye`, `see you`\n"
            "🤞🏻 *Powerball:* `lucky numberes`\n"
        )

    # Default fallback
    else:
        say(
            f"Hmm, I didn't quite get that <@{user}>. 🤔\n"
            "Type `help` to see what I can do!"
        )



@app.event("app_mention")
def handle_mention(event, say):
    user = event("user")
    say(f"Hi <@{user}>, You mentioned me — I'm here!")

@app.event("message")
def handle_dm(event, say):
    if event.get("subtype") is None and event.get("both_id") is None:
        say("Got your message!!!")



if __name__== "__main__":
    handler = SocketModeHandler(app, os.environ["SLACK_APP_TOKEN"])
    print("Slack bot is running")
    handler.start()
