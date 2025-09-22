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
const router = express_1.default.Router();
// Get all tutorials
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tutorials = yield models_1.Tutorial.find().sort({ createdAt: -1 });
        res.json(tutorials);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching tutorials' });
    }
}));
// Get single tutorial
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tutorial = yield models_1.Tutorial.findById(req.params.id);
        if (!tutorial) {
            return res.status(404).json({ error: 'Tutorial not found' });
        }
        res.json(tutorial);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching tutorial' });
    }
}));
// Create tutorial (protected)
router.post('/', auth_1.authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, videoUrl } = req.body;
        const tutorial = new models_1.Tutorial({
            title,
            description,
            videoUrl,
        });
        yield tutorial.save();
        res.status(201).json(tutorial);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating tutorial' });
    }
}));
// Update tutorial (protected)
router.put('/:id', auth_1.authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tutorial = yield models_1.Tutorial.findById(req.params.id);
        if (!tutorial) {
            return res.status(404).json({ error: 'Tutorial not found' });
        }
        const { title, description, videoUrl } = req.body;
        tutorial.title = title;
        tutorial.description = description;
        tutorial.videoUrl = videoUrl;
        yield tutorial.save();
        res.json(tutorial);
    }
    catch (error) {
        res.status(500).json({ error: 'Error updating tutorial' });
    }
}));
// Delete tutorial (protected)
router.delete('/:id', auth_1.authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tutorial = yield models_1.Tutorial.findByIdAndDelete(req.params.id);
        if (!tutorial) {
            return res.status(404).json({ error: 'Tutorial not found' });
        }
        res.json({ message: 'Tutorial deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error deleting tutorial' });
    }
}));
exports.default = router;
