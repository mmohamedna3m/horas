import mongoose from 'mongoose';

const pageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      default: '',
    },
    sections: [
      {
        id: String,
        type: String, // 'hero', 'products', 'text', 'gallery', etc
        title: String,
        content: String,
        backgroundColor: String,
        textColor: String,
        items: mongoose.Schema.Types.Mixed,
        order: Number,
      },
    ],
    theme: {
      primaryColor: { type: String, default: '#3b82f6' },
      secondaryColor: { type: String, default: '#10b981' },
      backgroundColor: { type: String, default: '#ffffff' },
      textColor: { type: String, default: '#000000' },
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Page = mongoose.models.Page || mongoose.model('Page', pageSchema);

export default Page;