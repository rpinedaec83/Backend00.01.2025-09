const fs = require('fs');
const path = require('path');

const uploadsDir = path.join(__dirname, '..', '..', 'uploads');

exports.uploadAvatar = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({error: 'Archivo requerido'});
    }
    res.status(201).json({
        originalName: req.file.originalname,
        storedName: req.file.filename,
        size: req.file.size,
        mimetype: req.file.mimetype
    });
};

// Descarga.
exports.downloadFile = async (req, res) => {
    const safeName = path.basename(req.params.filename);
    const filePath = path.join(uploadsDir, safeName);
    if (!fs.existsSync(filePath)) {
        return res.status(404).json({error: 'Archivo no encontrado'});
    }
    res.download(filePath, safeName);
};
