const multer = require('multer');
const path = require('path');

// Define storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './Public/images');
    },
    filename: (req, file, cb) => {
        // Get the file extension
        const ext = path.extname(file.originalname);
        // Generate a unique filename using current timestamp
        const filename = Date.now() + ext;
        cb(null, filename);
    }
});

// Create multer instance
const upload = multer({ storage: storage }).single('image');

module.exports = upload;
