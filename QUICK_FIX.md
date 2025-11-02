# Quick Fix for "Invalid API Key" Error

## 🔴 Problem
You're getting `401 Unauthorized` from OpenAI API.

## ✅ Solutions (Try in Order)

### Solution 1: Restart Dev Server
**MOST COMMON FIX** - Vite only reads .env when server starts:

```bash
# 1. Stop server (Ctrl+C)
# 2. Restart:
npm run dev
```

### Solution 2: Check API Key Validity
1. Go to: https://platform.openai.com/api-keys
2. Check if your key is **active** (not revoked)
3. If expired/revoked, create a new one

### Solution 3: Verify .env File
Open `.env` file and make sure it's exactly:
```
VITE_OPENAI_API_KEY=sk-proj-abc123...xyz789
```

**Important:**
- ✅ No quotes around the key
- ✅ No spaces before/after
- ✅ Single line only
- ✅ Key starts with `sk-proj-` or `sk-`

### Solution 4: Create New API Key
If key is invalid:

1. Go to: https://platform.openai.com/api-keys
2. Click "Create new secret key"
3. Copy the new key
4. Update `.env` file:
   ```
   VITE_OPENAI_API_KEY=your_new_key_here
   ```
5. **RESTART dev server**

### Solution 5: Check Console Logs
Open browser console (F12) and look for:
- `Using API key (first 7 chars):` - confirms key is loaded
- Any error messages about the key

## 🧪 Test
After restarting, try sending a message like:
```
Bro hydrate 💧
```

If it works, you'll see a response instead of the error!

---

**Remember: Any .env changes require server restart!**

