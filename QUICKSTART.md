# Horas Platform
## Quick Start Guide

### Prerequisites
- Node.js 16+
- MongoDB

### Installation

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.local.example .env.local

# Run development server
npm run dev
```

### Access Points

- **Frontend**: http://localhost:3000
- **Products**: http://localhost:3000/products
- **Admin Dashboard**: http://localhost:3000/admin

### Key Features

1. **Product Management**: Add, edit, delete products
2. **Page Builder**: Create custom pages with color themes
3. **Dynamic Pages**: Create pages with custom slugs
4. **Admin Dashboard**: Full control panel
5. **Responsive Design**: Works on all devices

### API Documentation

**Get All Products**
```bash
GET /api/products
```

**Create Product**
```bash
POST /api/products
{
  "name": "Product Name",
  "price": 100,
  "description": "...",
  "image": "...",
  "stock": 10
}
```

**Update Product**
```bash
PUT /api/products/:id
```

**Delete Product**
```bash
DELETE /api/products/:id
```

### Folder Structure

```
├── pages/
│   ├── api/          # API routes
│   ├── admin/        # Admin dashboard
│   └── ...           # Front-end pages
├── lib/
│   ├── models/       # MongoDB models
│   └── mongodb.js    # DB connection
├── components/       # React components
└── styles/          # CSS styles
```

### Environment Variables

```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_API_URL=http://localhost:3000
ADMIN_PASSWORD=admin123
```

### Deployment

**Vercel** (Recommended)
```bash
git push origin main
# Connect to Vercel and deploy
```

**Local Server**
```bash
npm run build
npm start
```

### Troubleshooting

- **MongoDB Connection Error**: Check your connection string
- **API not responding**: Ensure MongoDB is running
- **Styles not loading**: Clear `.next` folder and rebuild

---

**Happy Building! 🚀**
