const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mock News Data
const News = [
    {
      "id": 1,
      "title": "Breaking News: Tech Innovation",
      "description": "A new technology is reshaping the industry with unprecedented breakthroughs...",
      "url": "https://www.technews.com/news1",
      "image": "https://via.placeholder.com/150/ff5733/ffffff?text=Tech+News+1"
    },
    {
      "id": 2,
      "title": "Economy Update: Market Trends",
      "description": "The global market is showing signs of growth despite challenges...",
      "url": "https://www.economywatch.com/news2",
      "image": "https://via.placeholder.com/150/33b5ff/ffffff?text=Economy+News+2"
    },
    {
      "id": 3,
      "title": "Health Alert: New Developments",
      "description": "Researchers have discovered promising treatments for various diseases...",
      "url": "https://www.healthnews.com/news3",
      "image": "https://via.placeholder.com/150/ff5733/ffffff?text=Health+News+3"
    },
    {
      "id": 4,
      "title": "Space Exploration: Mars Mission",
      "description": "NASA is planning a new mission to explore Mars and beyond...",
      "url": "https://www.spaceexploration.com/news4",
      "image": "https://via.placeholder.com/150/4CAF50/ffffff?text=Space+News+4"
    },
    {
      "id": 5,
      "title": "Global Climate Change",
      "description": "World leaders are discussing immediate action to combat climate change...",
      "url": "https://www.climatewatch.com/news5",
      "image": "https://via.placeholder.com/150/ff9800/ffffff?text=Climate+News+5"
    },
    {
      "id": 6,
      "title": "AI Revolution: The Future is Now",
      "description": "Artificial intelligence is transforming industries worldwide...",
      "url": "https://www.aiworld.com/news6",
      "image": "https://via.placeholder.com/150/673ab7/ffffff?text=AI+News+6"
    },
    {
      "id": 7,
      "title": "Sports Update: Football Season Starts",
      "description": "The new football season brings exciting teams and matches...",
      "url": "https://www.sportsupdate.com/news7",
      "image": "https://via.placeholder.com/150/ff4081/ffffff?text=Sports+News+7"
    },
    {
      "id": 8,
      "title": "Entertainment: New Movie Releases",
      "description": "This month's movie releases include some of the most awaited blockbusters...",
      "url": "https://www.entertainmenttoday.com/news8",
      "image": "https://via.placeholder.com/150/009688/ffffff?text=Entertainment+News+8"
    },
    {
      "id": 9,
      "title": "International Politics: Global Summit",
      "description": "World leaders gather for a global summit to discuss international relations...",
      "url": "https://www.politicsglobal.com/news9",
      "image": "https://via.placeholder.com/150/607d8b/ffffff?text=Politics+News+9"
    },
    {
      "id": 10,
      "title": "Tech Breakthrough: Quantum Computing",
      "description": "Scientists have made a major breakthrough in quantum computing...",
      "url": "https://www.quantumnews.com/news10",
      "image": "https://via.placeholder.com/150/00bcd4/ffffff?text=Tech+News+10"
    }
  ]
  

// Routes
app.get("/news", (req, res) => {
  res.json(News);
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
