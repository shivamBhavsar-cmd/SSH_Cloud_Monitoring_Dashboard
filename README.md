# SSH_Cloud_Monitoring_Dashboard
SSH Cloud Monitoring Dashboard
# Cloud Monitoring Dashboard

A **Next.js** cloud monitoring dashboard that integrates **Supabase (PostgreSQL)** for authentication and data storage. The dashboard tracks IP addresses, SSH logs, and SSH IDs.

## Features
- User authentication with **Supabase Auth**
- Store user login information in **Supabase Database**
- Track and display **IP addresses, SSH logs, and SSH IDs**
- **CI/CD pipeline with Jenkins** (Optional)
- Deployed on **Vercel**

---

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/cloud-monitor-dashboard.git
cd cloud-monitor-dashboard
```

### 2. Install Dependencies
```bash
yarn install
# OR
npm install
```

### 3. Set Up Environment Variables
Create a `.env.local` file in the root directory and add your **Supabase credentials**:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 4. Run Locally
```bash
yarn dev
# OR
npm run dev
```
Access the app at `http://localhost:3000`

---

## Supabase Setup
1. **Create a Supabase Project** at [supabase.com](https://supabase.com/)
2. **Enable Authentication** (Email & Password Sign-Up)
3. **Create a `users` table** in the database with:
   - `id` (UUID, Primary Key)
   - `username` (Text)
   - `email` (Text, Unique)
   - `password` (Text, Hashed)
   - `country` (Text)
4. **Enable Row Level Security (RLS)** and add authentication policies

---

## Deployment on Vercel

### 1. Push Code to GitHub
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Deploy on Vercel
1. **Go to [Vercel](https://vercel.com/)** and import your GitHub repository.
2. **Set environment variables** in Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Click **Deploy**!

---

## CI/CD with Jenkins (Optional)
If you're integrating Jenkins for automated deployment:
1. **Install Jenkins** on an **AWS EC2 instance**
2. **Set up a Jenkins pipeline** to pull code, build, and deploy
3. **Configure GitHub Webhooks** for automatic deployment

---

## License
This project is licensed under the MIT License.

---

## Contributors
- **Your Name** - [GitHub Profile](https://github.com/your-username)

### Questions?
Feel free to open an **issue** or reach out!

