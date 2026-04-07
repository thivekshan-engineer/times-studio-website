const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const nodemailer = require('nodemailer');

// Email transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  family: 4,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Validation Helpers
const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const isValidPhone = (phone) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(phone.replace(/\D/g, ''));
};

// POST - Create new booking
router.post('/', async (req, res) => {
  try {
    const { firstName, phone, email, service, message } = req.body;

    // Validation
    if (!firstName || firstName.trim().length < 2) {
      return res.status(400).json({ 
        success: false, 
        message: 'First name must be at least 2 characters' 
      });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email format' 
      });
    }
    if (!isValidPhone(phone)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Phone must be 10 digits' 
      });
    }
    if (!service || service.trim().length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'Service selection is required' 
      });
    }

    // Save to MongoDB
    const booking = new Booking(req.body);
    await booking.save();

    // Send email to owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      subject: `📸 New Booking - ${service} from ${firstName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0a1628; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
            📸 New Booking Received!
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background: #f8fafc;">
              <td style="padding: 12px; font-weight: bold; color: #0a1628; width: 40%;">Name</td>
              <td style="padding: 12px; color: #334155;">${firstName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #0a1628;">Phone</td>
              <td style="padding: 12px; color: #334155;">${phone}</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 12px; font-weight: bold; color: #0a1628;">Email</td>
              <td style="padding: 12px; color: #334155;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #0a1628;">Service</td>
              <td style="padding: 12px; color: #f59e0b; font-weight: bold;">${service}</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 12px; font-weight: bold; color: #0a1628;">Message</td>
              <td style="padding: 12px; color: #334155;">${message || 'No message provided'}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #0a1628;">Date</td>
              <td style="padding: 12px; color: #334155;">${new Date().toLocaleString()}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; color: #64748b; font-size: 0.85rem;">
            This booking was submitted via Times Studio website.
          </p>
        </div>
      `
    };

    // Send confirmation email to customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `✅ Booking Confirmed - Times Studio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0a1628; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
            ✅ Booking Received!
          </h2>
          <p style="color: #334155;">Dear <strong>${firstName}</strong>,</p>
          <p style="color: #334155;">Thank you for contacting <strong>Times Studio & T Marin Air Travels</strong>! We have received your booking request and will get back to you shortly.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background: #f8fafc;">
              <td style="padding: 12px; font-weight: bold; color: #0a1628; width: 40%;">Service</td>
              <td style="padding: 12px; color: #f59e0b; font-weight: bold;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #0a1628;">Phone</td>
              <td style="padding: 12px; color: #334155;">${phone}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #f8fafc; border-radius: 6px;">
            <p style="color: #0a1628; font-weight: bold; margin: 0;">📍 Visit Us</p>
            <p style="color: #334155; margin: 5px 0;">21/3 Munai Street, Batticaloa, Sri Lanka</p>
            <p style="color: #334155; margin: 5px 0;">📞 076 108 2959 / 077 200 9686</p>
            <p style="color: #334155; margin: 5px 0;">🕐 Mon-Sat: 9:00 AM - 8:00 PM</p>
          </div>
          <p style="margin-top: 20px; color: #64748b; font-size: 0.85rem;">
            Times Studio & T Marin Air Travels, Batticaloa
          </p>
        </div>
      `
    };

    // Send emails but don't fail if email fails
    try {
      await transporter.sendMail(ownerMailOptions);
      await transporter.sendMail(customerMailOptions);
    } catch (emailError) {
      console.log('Email failed but booking saved:', emailError.message);
    }

    res.status(201).json({ 
      success: true, 
      message: 'Booking received successfully!',
      data: booking 
    });

  } catch (error) {
    console.error('Booking error:', error);
    res.status(400).json({ 
      success: false, 
      message: error.message 
    });
  }
});

// GET - Get all bookings (Protected with admin password)
router.get('/', async (req, res) => {
  try {
    const adminPassword = req.query.password || req.headers['x-admin-password'];
    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      return res.status(403).json({ 
        success: false, 
        message: 'Unauthorized - Invalid admin password' 
      });
    }
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json({ 
      success: true, 
      data: bookings 
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: error.message 
    });
  }
});

module.exports = router;