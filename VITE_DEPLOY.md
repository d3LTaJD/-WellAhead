# Deploy React + Vite App to Netlify

## ✅ Your app is now React + Vite!

The project has been successfully converted from Next.js to React + Vite. 

## 📦 Build Output

After running `npm run build`, you'll get a `dist` folder that contains:
- `index.html`
- `assets/` (CSS and JS bundles)

This is a **static site** that can be hosted anywhere!

## 🚀 Deploy to Netlify

### Option 1: Netlify Drop (Easiest!)

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Go to Netlify Drop:**
   - Visit: https://app.netlify.com/drop

3. **Drag and drop:**
   - Simply drag the entire `dist` folder onto the page
   - Wait for upload
   - Your site will be live instantly!

### Option 2: Netlify Dashboard

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Go to Netlify:**
   - Visit: https://app.netlify.com
   - Click "Add new site" → "Deploy manually"

3. **Upload dist folder:**
   - Drag `dist` folder or browse to select it
   - Wait for deployment

### Option 3: Netlify CLI

```bash
# Build
npm run build

# Install Netlify CLI (if not installed)
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

## 🔑 Environment Variables

For the chatbot to work, you need to set the API key:

**Option A: In Netlify Dashboard**
1. Go to Site settings → Environment variables
2. Add: `VITE_OPENAI_API_KEY` with your API key value
3. Redeploy

**Option B: In build process (not recommended for production)**
- Create `.env` file with `VITE_OPENAI_API_KEY=your-key`
- This will be bundled into the build (less secure)

## ⚠️ Important Note About API Keys

**With Vite, environment variables starting with `VITE_` are exposed to the client-side code.**

This means your OpenAI API key will be visible in the browser if you use `VITE_OPENAI_API_KEY`. 

**For production, consider:**
1. Using Netlify Functions as a proxy
2. Using a backend service
3. Accepting that the key will be visible (only if you're okay with this)

## 📁 Project Structure (New)

```
kuku/
├── src/
│   ├── components/      # All React components
│   ├── lib/             # Utilities (storage)
│   ├── types/           # TypeScript types
│   ├── services/        # API services (chatApi.ts)
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── dist/                # Build output (deploy this!)
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── package.json         # Dependencies
└── .env                 # Environment variables
```

## 🎯 Quick Deploy Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview locally
npm run preview

# Deploy to Netlify (using CLI)
netlify deploy --prod --dir=dist
```

## 🌐 Your Site

Once deployed, your site will be live at a URL like:
`https://your-site-name.netlify.app`

---

**No more Next.js complexity - just pure React + Vite! 🎉**

