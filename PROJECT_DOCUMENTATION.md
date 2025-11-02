# WellAhead — Complete Project Documentation

## 📋 Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [How It Works](#how-it-works)
4. [Technical Architecture](#technical-architecture)
5. [Component Breakdown](#component-breakdown)
6. [Data Storage & Persistence](#data-storage--persistence)
7. [API Integration](#api-integration)
8. [User Flow](#user-flow)

---

## 🎯 Overview

**WellAhead** is a modern, interactive student wellness web application designed to help students maintain healthy habits, prevent injuries, and access preventive health resources. It combines gamification, AI assistance, and comprehensive wellness tracking into a single, user-friendly platform.

### Key Principles
- **Preventive Care Focus**: Encourages healthy habits before problems start
- **No Medical Advice**: Provides wellness tips only, not diagnoses
- **Zero Authentication**: Works entirely in the browser with local storage
- **Student-Friendly**: Casual, encouraging tone with emojis and friendly language

---

## ✨ Features

### 1. **Hero Section** 
- Animated gradient title with glowing effects
- Floating background particles and gradient orbs
- Interactive wellness feature cards (Hydration, Wellness, Sleep, Eye Care, Mindfulness)
- Call-to-action button that scrolls to Daily Habit Zone
- Scroll indicator at the bottom

### 2. **Daily Habit Zone**
- **5 Daily Habits**:
  - 💧 Water (Hydration tracking)
  - 🧘 Stretch (Physical activity)
  - 😴 Sleep (Sleep quality)
  - 👀 Screen Break (Eye care)
  - 🧠 Mood Check (Mental wellness)

- **Features**:
  - Interactive habit cards with hover animations
  - Daily completion tracking
  - Streak counters (consecutive days)
  - Total completion counts
  - Points system (10 points per habit)
  - Visual progress bar showing daily completion percentage
  - History tracking with modal view
  - **Calendar View**: Add/edit habits for any date (past or future)
  - Confetti celebration on 7-day streak milestones

### 3. **Analytics Dashboard**
- Visual representation of habit completion trends
- Weekly and monthly statistics
- Habit breakdown by category
- Progress charts and graphs

### 4. **Preventive Health Reminders**
- **5 Health Check Reminders**:
  - 💉 Flu Vaccination (Annual)
  - 🏥 Annual Health Check (Annual)
  - 👁️ Eye Exam (Annual)
  - 🦷 Dental Cleaning (Every 6 months)
  - 🩺 Skin Check (Annual)

- **Features**:
  - Mark reminders as completed with timestamps
  - Automatic next due date calculation based on frequency
  - Status indicators:
    - 🟣 Never completed
    - 🟡 Due soon (within 30 days)
    - 🔴 Overdue
    - 🟢 Up-to-date
  - Visual indicators (red ring for overdue, yellow for due soon)
  - Completion history tracking
  - "Show History" panel with all completion records

### 5. **Quick Self-Check Tools**
- **3 Self-Assessment Tools**:
  - 🩹 Pain Assessment (Location, severity, duration)
  - 💧 Hydration Check (Water intake, thirst level, activity)
  - 😴 Sleep Quality Check (Hours, quality, energy level)

- **Features**:
  - Interactive questionnaire interface
  - Personalized feedback based on answers
  - Color-coded recommendations
  - Disclaimer for educational purposes only

### 6. **Warm-up & Injury Safety**
- **5 Sport-Specific Warm-up Routines**:
  - 🏋️ Before Gym (10 min)
  - ⚽ Before Football (15 min)
  - 🏸 Before Badminton (8 min)
  - 🏃 Before Running (5 min)
  - 🏀 Before Basketball (12 min)

- **Features**:
  - Countdown timers for each routine
  - Timer progress indicators (circular progress)
  - Start/Pause/Reset controls
  - Step-by-step warm-up instructions
  - Injury prevention tips panel
  - Best practices panel

### 7. **Mini Mind Reset** (Breathing Exercise)
- **4-4-4-4 Breathing Cycle**:
  - Inhale (4 seconds)
  - Hold (4 seconds)
  - Exhale (4 seconds)
  - Hold (4 seconds)

- **Features**:
  - Animated breathing circle with scale effects
  - Visual cycle indicators
  - Session duration tracking
  - Sound toggle (UI only)
  - Session history sidebar
  - Persistent history in localStorage

### 8. **AI Wellness Buddy Chat**
- **OpenAI GPT-3.5-turbo Integration**
- **Features**:
  - Conversational AI assistant
  - Friendly, student-like tone ("bro", emojis, encouraging)
  - Chat history persistence
  - Saved tips functionality (star favorite tips)
  - Example prompts for quick questions
  - Error handling with user-friendly messages
  - Scroll-to-bottom on new messages
  - Auto-scroll prevention on form submission

### 9. **Rewards & Badges**
- **6 Unlockable Badges**:
  - 🌱 First Step (Complete first habit)
  - 🔥 Week Warrior (7-day streak)
  - ⭐ Month Master (30-day streak)
  - 💧 Hydration Hero (100 water habits)
  - 🧘 Mindful Master (50 stretch sessions)
  - ✨ Zen Legend (1000 total points)

- **Features**:
  - Points display
  - Best streak tracking
  - Badge unlock animations
  - Progress indicators for locked badges
  - Visual badge cards with descriptions

### 10. **Scroll Progress Bar**
- Animated progress bar at the top of the page
- Shows scroll percentage
- Purple/pink/indigo gradient
- Hover effect to increase height
- Shimmer animation

---

## 🔧 How It Works

### Data Flow

1. **User Interactions** → React State → localStorage → UI Updates

2. **Habit Tracking Flow**:
   ```
   User clicks habit → Toggle state → Save to localStorage → 
   Calculate streaks → Update UI → Check for milestones → Show confetti
   ```

3. **AI Chat Flow**:
   ```
   User sends message → POST /api/chat → OpenAI API → 
   Process response → Update chat history → Save to localStorage → Display
   ```

4. **Calendar Flow**:
   ```
   Select date → Load history for date → Toggle habit → 
   Save with date timestamp → Recalculate streaks → Update UI
   ```

### State Management

- **Local State**: React `useState` for component-level state
- **Persistence**: `localStorage` for all user data
- **No Backend**: Everything runs client-side
- **Storage Keys**:
  - `wellahead_habits` - Habit data
  - `wellahead_history` - Completion history
  - `wellahead_points` - User points
  - `wellahead_badges` - Unlocked badges
  - `wellahead_last_date` - Last reset date
  - `wellahead_chat_history` - Chat messages
  - `wellahead_saved_tips` - Saved AI tips
  - `wellahead_completed_reminders` - Health reminder completions
  - `wellahead_breathing_history` - Breathing session records

---

## 🏗️ Technical Architecture

### Frontend Stack
- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Emoji-based

### Backend/API
- **Runtime**: Next.js API Routes (Serverless Functions)
- **AI Provider**: OpenAI GPT-3.5-turbo
- **Hosting**: Netlify (with serverless functions)

### Build & Deployment
- **Build Tool**: Next.js built-in bundler
- **Package Manager**: npm
- **Deployment**: Netlify
- **Environment Variables**: `.env.local` (local), Netlify dashboard (production)

---

## 📦 Component Breakdown

### Core Components

1. **Hero.tsx**
   - Landing section with animated title
   - Background effects (particles, gradients)
   - Feature showcase cards
   - CTA button

2. **DailyHabitZone.tsx**
   - Main habit tracking interface
   - Progress overview card
   - Habit cards grid
   - Stats cards (Points, Completions, Best Streak)
   - Calendar integration

3. **HabitCalendar.tsx**
   - Monthly calendar view
   - Date selection
   - Visual completion indicators
   - Add/edit habits for any date
   - History display per date

4. **HabitHistoryModal.tsx**
   - Modal popup for habit history
   - Filter options (all, week, month, year)
   - Statistics display
   - Timeline view

5. **PreventiveHealthReminders.tsx**
   - Reminder cards grid
   - Completion tracking
   - Status indicators
   - History panel

6. **SelfCheckTools.tsx**
   - Tool selection interface
   - Questionnaire flow
   - Results display with recommendations

7. **WarmupSection.tsx**
   - Sport-specific warm-up cards
   - Timer components
   - Instruction lists
   - Safety tips

8. **MiniMindReset.tsx**
   - Breathing animation
   - Timer display
   - Session tracking
   - History sidebar

9. **AIWellnessChat.tsx**
   - Chat interface
   - Message history
   - Input handling
   - Saved tips view

10. **RewardsBadges.tsx**
    - Badge grid display
    - Unlock status
    - Progress tracking

11. **AnalyticsDashboard.tsx**
    - Charts and graphs
    - Trend analysis
    - Statistics overview

12. **ScrollProgress.tsx**
    - Top progress bar
    - Smooth animations

13. **Confetti.tsx**
    - Celebration animation
    - Gradient particles

14. **Footer.tsx**
    - Site information
    - Links and credits

---

## 💾 Data Storage & Persistence

### Storage Utility (`lib/storage.ts`)

Provides centralized localStorage management:

#### Habit Management
- `getHabits()` - Retrieve all habits
- `saveHabits(habits)` - Save habit data
- `addHistoryEntry(entry)` - Add completion record
- `getHistoryByHabit(habitId)` - Get history for specific habit
- `getAllHistory()` - Get all completion records
- `clearAllHistory()` - Clear all history

#### Points System
- `getPoints()` - Get current points
- `addPoints(points)` - Add points and return new total

#### Badges
- `getBadges()` - Get unlocked badges
- `unlockBadge(badgeId)` - Unlock a badge

#### Analytics
- `getDailyStats(date)` - Get stats for specific date
- `getAnalytics()` - Get comprehensive analytics

### Data Structures

#### Habit
```typescript
interface Habit {
  id: string
  emoji: string
  name: string
  completed: boolean
  streak: number
  totalCompleted: number
}
```

#### HabitHistory
```typescript
interface HabitHistory {
  id: string
  habitId: string
  date: string
  timestamp: number
  completed: boolean
}
```

---

## 🔌 API Integration

### OpenAI Chat API (`/app/api/chat/route.ts`)

**Endpoint**: `POST /api/chat`

**Request Body**:
```json
{
  "messages": [
    { "role": "user", "content": "Bro hydrate 💧" },
    { "role": "assistant", "content": "..." }
  ]
}
```

**Response**:
```json
{
  "message": "Drink a glass of water now! 💧"
}
```

**System Prompt**:
- Friendly, student-like tone
- Only preventive health advice
- No medical diagnoses
- Encouraging language
- Emojis welcome

**Error Handling**:
- Missing API key → User-friendly message
- Invalid API key → Authentication error
- Rate limit → Rate limit message
- Generic errors → Friendly fallback message

---

## 🔄 User Flow

### First-Time User
1. Lands on Hero section
2. Sees animated welcome
3. Scrolls to Daily Habit Zone
4. Starts completing habits
5. Earns first badge (First Step)
6. Explores other sections

### Daily Usage Flow
1. Checks Daily Habit Zone
2. Completes today's habits
3. Maintains streaks
4. Uses AI chat for tips
5. Checks preventive reminders
6. Uses warm-up routines before exercise

### Calendar Usage Flow
1. Clicks "View Calendar" button
2. Selects any date
3. Adds past completions (backfill)
4. Plans future habits
5. Views history visually

---

## 🎨 Design System

### Colors
- **Background**: Black (#000000)
- **Primary Gradients**: Purple (#6366f1), Pink (#ec4899), Indigo (#818cf8)
- **Text**: White/Gray shades
- **Accents**: Purple/Pink/Indigo gradients

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, gradient text
- **Body**: Regular weight, gray text

### Effects
- **Glassmorphism**: Translucent panels with blur
- **Glow Effects**: Box shadows and text shadows
- **Animations**: Framer Motion transitions
- **Hover States**: Scale, lift, glow

---

## 🚀 Deployment

### Local Development
```bash
npm run dev
# Opens on http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
```

### Netlify Deployment
- Configured via `netlify.toml`
- Uses `@netlify/plugin-nextjs`
- Environment variables in Netlify dashboard
- Auto-deploy on Git push (if connected)

---

## 📝 Important Notes

### Security
- API keys stored in environment variables
- Never committed to Git
- `.env.local` in `.gitignore`

### Limitations
- No user accounts (localStorage only)
- Data lost if browser storage cleared
- No cross-device sync
- API calls consume OpenAI credits

### Future Enhancements (Potential)
- User authentication
- Cloud database sync
- Mobile app version
- Social features
- Reminder notifications
- Export data functionality

---

## ⚠️ Medical Disclaimer

This application provides **preventive wellness tips only**. It does NOT:
- Provide medical diagnoses
- Replace professional medical advice
- Treat or cure medical conditions
- Replace emergency medical services

**Always consult healthcare professionals for serious health concerns.**

---

## 📞 Support & Contributing

- **Issues**: Report bugs or suggest features
- **Contributions**: Welcome improvements
- **License**: Check LICENSE file

---

**Built with ❤️ for student wellness**

