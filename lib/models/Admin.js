import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    siteTitle: {
      type: String,
      default: 'Horas',
    },
    siteLogo: String,
    primaryColor: { type: String, default: '#3b82f6' },
    secondaryColor: { type: String, default: '#10b981' },
    isLoggedIn: Boolean,
  },
  { timestamps: true }
);

const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

export default Admin;