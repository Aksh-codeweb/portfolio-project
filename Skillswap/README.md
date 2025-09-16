SkillSwap Circle — Peer-to-Peer Skill Exchange Platform

Tagline: Learn what you want — teach what you know. Match with friendly local or online partners and swap skills.

Project Overview

SkillSwap Circle is a responsive, privacy-conscious front-end web app that helps people list skills they want to learn and skills they can teach, then intelligently matches them with compatible partners based on tag overlap, availability, and mode (in-person / online). The prototype focuses on matching logic, stateful UI, and local persistence (localStorage) so it can later be extended into a full-stack product.

Key Features

Friendly homepage explaining the problem (learning can be expensive & lonely) and solution (peer-to-peer skill swaps) with strong CTA to create a profile.

Profile creation: city/area, availability (days & time slots), preferred learning mode (in-person/online), Teach & Learn tag lists, short bio, avatar.

Matching engine:

Scores potential partners by tag overlap, availability matches, mode compatibility, proximity (if in-person), and rating.

Displays friendly match cards: avatar, name, distance/online flag, overlap score, badges, short intro.

Search & Filters:

Filter by category (Tech, Languages, Music, Cooking, Fitness, Art, Academics, Other), mode, distance, rating, availability.

Search bar supports multi-tag queries (e.g., guitar + beginner).

Profile detail page:

Extended bio, experience level per skill, schedule blocks, past swaps count, reviews (dummy), buttons for Start Chat and Propose Swap.

Messaging simulation:

Local-only chat with read receipts and quick-reply templates.

Swap proposal flow:

Pick what you’ll teach, what you want to learn in return, duration, meeting mode.

Track proposals → confirmations → completed swaps in localStorage.

Dashboard:

Swaps timeline (pending / confirmed / completed)

Badges & achievements (First Swap, 5 Skills Shared, Night Owl, Weekend Warrior)

Progress counters (skills learned / taught)

Lightweight analytics widget (top categories, weekly activity)

Ratings & feedback (stars + short comment) after a completed swap; average rating shown on cards.

Favorites: save profiles for quick access.

Seeded with dummy JSON data for profiles, skills, chats, and swaps.

Mobile-first, accessible UI with soft illustrations, rounded cards, subtle animations.

Local-first privacy: all user actions persisted in localStorage by default. Export / import backup available.

Tech Stack

HTML5 (semantic markup)

CSS3 (Flexbox & Grid, custom properties, accessible color contrast)

JavaScript (ES6+, module pattern / small component pattern)

No backend required for prototype — persistence via localStorage (JSON)

Scalable to backend: code organized with API-stub-friendly modules