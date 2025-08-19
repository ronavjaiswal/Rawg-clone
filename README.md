# 🎮 RAWG Game Hub (React + TypeScript + Vite)

A game discovery web app built with [RAWG.io](https://rawg.io/apidocs) API.  
Browse games by **genre**, **platform**, **sort order**, or **search** by title — with a clean, responsive UI powered by Chakra UI.

---

## ✨ Features

- 🔍 Search for games by title (uses RAWG’s `search` param)  
- 🕹️ Filter by genre and platform  
- ↕️ Sort results (popularity, release date, rating, etc.)  
- 🎨 Dark/Light mode toggle  
- 📱 Responsive design with Chakra UI Grid/Flex  
- ⚡ Fast build with Vite + TypeScript  
- 🌐 Live data from RAWG Video Games Database API  

---

## 🛠️ Tech Stack

- React 18 with TypeScript  
- Vite (blazing fast dev/build tool)  
- Chakra UI (accessible, responsive components)  
- Axios for API requests  
- RAWG.io API for game data  

---

## 🚀 Getting Started

### 1. Clone repo
git clone https://github.com/ronavjaiswal/Rawg-clone.git
cd Rawg-clone

### 2. Install dependencies
npm install

or
yarn install

or
pnpm install


### 3. Configure API key
Create a `.env` file based on `.env.example`:

VITE_RAWG_API_KEY=your_rawg_api_key_here

Get a free key from [RAWG.io](https://rawg.io/apidocs).

### 4. Start dev server
npm run dev

### 5. Build for production
npm run build

---

## 🔮 Future Improvements

- Unit tests with Vitest + React Testing Library  
- CI/CD with GitHub Actions + Vercel deploy previews  
- Pagination / infinite scrolling  
- Favorites & user authentication  
- Screenshots / trailers per game  

---

## 🙌 Acknowledgements

- Game data from [RAWG.io](https://rawg.io/)  
- UI built with [Chakra UI](https://chakra-ui.com/)  
