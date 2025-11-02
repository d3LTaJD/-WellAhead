# WellAhead — Student Wellness AI

A modern, interactive student wellness web application built with React and Vite.

## 🚀 Features

- **Daily Habit Zone** - Track wellness habits (water, sleep, stretching, etc.)
- **Habit Calendar** - View and manage habits across dates
- **Preventive Health Reminders** - Stay on top of check-ups and screenings
- **Quick Self-Check Tools** - Quick wellness assessments
- **Warm-up & Injury Safety** - Exercise routines and safety tips
- **Mini Mind Reset** - Breathing exercises and mindfulness
- **AI Wellness Chat** - Chat with an AI wellness assistant
- **Rewards & Badges** - Gamified wellness tracking
- **Analytics Dashboard** - View your wellness progress

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **OpenAI API** - AI chat functionality

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

**Important:** 
- Get your API key from: https://platform.openai.com/api-keys
- Restart dev server after changing `.env` file

## 🚀 Deployment

### Quick Deploy (Netlify Drop)

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to: https://app.netlify.com/drop

3. Drag the `dist` folder onto the page

4. Your site is live! 🎉

### Deploy via Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

### Environment Variables on Netlify

1. Go to Site Settings → Environment Variables
2. Add: `VITE_OPENAI_API_KEY` with your API key
3. Redeploy

## 📁 Project Structure

```
src/
├── components/      # React components
├── lib/            # Utilities (storage)
├── services/       # API services (chatApi)
├── types/          # TypeScript types
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## ⚠️ Important Notes

- **API Key**: The OpenAI API key will be visible in the client-side code (it's bundled into the build). For production, consider using a backend proxy.
- **Local Storage**: All data (habits, points, chat history) is stored in browser's local storage.
- **No Backend**: This is a static site - no server required!

## 📄 License

MIT

---

**Stay healthy before problems start! 💚**
