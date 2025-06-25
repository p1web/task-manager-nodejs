// middleware/upload.js
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/users/');
  },
  filename: (req, file, cb) => {
    const uniqueName = `user_${Date.now()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const isValid = allowedTypes.test(file.mimetype.toLowerCase());
  if (isValid) cb(null, true);
  else cb(new Error('Only JPEG, JPG, PNG files are allowed.'));
};

module.exports = multer({ storage, fileFilter });
