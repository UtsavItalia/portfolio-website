# Starter Bot

A Slack bot I built with Python. It runs using Slack Bolt and Socket Mode so you don't need to host it anywhere — just run the script and it works.

---

## What it can do

| Say this | Bot does this |
|----------|--------------|
| `hello`, `hi`, `hey` | Says hi back |
| `how are you` | Tells you how it's doing |
| `thank you` | You're welcome |
| `tell me a joke` | Drops a (usually bad) dev joke |
| `flip a coin` | Heads or tails |
| `roll a dice` | Rolls a 6-sided dice |
| `should I...` / `will I...` | Magic 8-Ball answer |
| `what time is it` | Current time |
| `what day is today` | Today's date |
| `motivate me` | Random motivational quote |
| `powerball` | Picks your lottery numbers for fun (no guarantees) |
| `who are you` | Bot introduces itself |
| `weather` | Sends you to weather.com |
| `help` | Shows all commands |

---

## Built with

- Python 3.12
- [Slack Bolt](https://github.com/slackapi/bolt-python)
- Socket Mode (no server needed)
- python-dotenv

---

## Getting started

### 1. Clone and set up
```bash
git clone https://github.com/your-username/slack-bot.git
cd slack-bot
python3 -m venv starter_bot
source starter_bot/bin/activate
pip install -r requirements.txt
```

### 2. Create a Slack App

Go to [api.slack.com/apps](https://api.slack.com/apps), hit **Create New App** → **From Scratch**, name it whatever you want.

**OAuth & Permissions** — add these bot scopes:
- `chat:write` #lets the bot send messages
- `channels:history` #lets the bot read messages in public channels
- `channels:read` #lets the bot see a list of channels in the workspace
- `im:write` #lets the bot open and send DMs
- `im:history` #lets the bot read messages in DMs
- `app_mentions:read` #lets the bot detect when someone @mentions it

**Socket Mode** — turn it on, create an App-Level Token with `connections:write` scope, save the `xapp-...` token.

**Event Subscriptions** — turn on and add:
- `message.channels` #triggers the bot when a message is sent in a public channel
- `message.im` #triggers the bot when someone sends it a DM
- `app_mention` #triggers the bot when someone @mentions it

Then go back to **OAuth & Permissions** → Install to Workspace → grab the `xoxb-...` token.

### 3. Add your tokens

Create a `.env` file:
```
SLACK_BOT_TOKEN=xoxb-your-token
SLACK_APP_TOKEN=xapp-your-token
```

Don't commit this file.

### 4. Run it
```bash
python slackbot.py
```

Then in Slack, do `/invite @starter_bot` in any channel and type `help`.

---

## Project structure

```
slack-bot/
├── slackbot.py
├── requirements.txt
├── .env           # keep this out of git
├── .gitignore
└── README.md
```

---

## Note on tokens

Your `xoxb-` and `xapp-` tokens are basically passwords. Don't push them to GitHub. If you accidentally do, regenerate them immediately from the Slack App dashboard.
