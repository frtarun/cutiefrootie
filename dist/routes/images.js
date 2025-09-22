"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = require("../models");
const auth_1 = require("../utils/auth");
const upload_1 = require("../utils/upload");
const router = express_1.default.Router();
// Get all images (with optional user filter)
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.query;
        const query = userId ? { userId } : {};
        const images = yield models_1.Image.find(query).sort({ createdAt: -1 });
        res.json(images);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching images' });
    }
}));
// Upload image (protected)
router.post('/', auth_1.authenticate, upload_1.upload.single('image'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { title } = req.body;
        const imageUrl = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
        if (!imageUrl) {
            return res.status(400).json({ error: 'Image file is required' });
        }
        const image = new models_1.Image({
            url: imageUrl,
            userId: req.userId,
            title,
        });
        yield image.save();
        res.status(201).json(image);
    }
    catch (error) {
        res.status(500).json({ error: 'Error uploading image' });
    }
}));
// Delete image (protected)
router.delete('/:id', auth_1.authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const image = yield models_1.Image.findOneAndDelete({
            _id: req.params.id,
            userId: req.userId,
        });
        if (!image) {
            return res.status(404).json({ error: 'Image not found' });
        }
        // Here you could add logic to delete the image from Cloudinary
        // using cloudinary.uploader.destroy()
        res.json({ message: 'Image deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error deleting image' });
    }
}));
exports.default = router;
