# Fix API Key Issue

## Problem
You're seeing "Invalid API key" error in the chat.

## Solution

### 1. Check your .env file
Make sure `.env` file exists in the root directory with:
```
VITE_OPENAI_API_KEY=your_actual_api_key_here
```

### 2. Restart Dev Server
**IMPORTANT:** After creating or modifying `.env` file, you MUST restart the dev server:

```bash
# Stop the current dev server (Ctrl+C)
# Then restart:
npm run dev
```

Vite only reads `.env` files when the server starts!

### 3. Verify the API Key
- Go to: https://platform.openai.com/api-keys
- Make sure your key is active and valid
- Copy the full key (should start with `sk-`)

### 4. Check for Formatting Issues
- No quotes needed around the key
- No spaces before/after the key
- Key should be on a single line

Example:
```
VITE_OPENAI_API_KEY=sk-proj-abc123...xyz789
```

### 5. For Production/Netlify
When deploying to Netlify:
1. Go to Site Settings → Environment Variables
2. Add: `VITE_OPENAI_API_KEY` with your API key value
3. Redeploy

---

**Remember: Always restart the dev server after changing .env files!**

