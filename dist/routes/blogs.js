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
// Get all blog posts
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield models_1.Blog.find()
            .sort({ createdAt: -1 })
            .populate('author', 'username');
        res.json(blogs);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching blog posts' });
    }
}));
// Get single blog post
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield models_1.Blog.findById(req.params.id).populate('author', 'username');
        if (!blog) {
            return res.status(404).json({ error: 'Blog post not found' });
        }
        res.json(blog);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching blog post' });
    }
}));
// Create blog post (protected)
router.post('/', auth_1.authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content, thumbnail, tags } = req.body;
        const blog = new models_1.Blog({
            title,
            content,
            author: req.userId,
            thumbnail,
            tags,
        });
        yield blog.save();
        res.status(201).json(blog);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating blog post' });
    }
}));
// Update blog post (protected)
router.put('/:id', auth_1.authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content, thumbnail, tags } = req.body;
        const blog = yield models_1.Blog.findOne({
            _id: req.params.id,
            author: req.userId,
        });
        if (!blog) {
            return res.status(404).json({ error: 'Blog post not found' });
        }
        blog.title = title;
        blog.content = content;
        blog.thumbnail = thumbnail;
        blog.tags = tags;
        blog.updatedAt = new Date();
        yield blog.save();
        res.json(blog);
    }
    catch (error) {
        res.status(500).json({ error: 'Error updating blog post' });
    }
}));
// Delete blog post (protected)
router.delete('/:id', auth_1.authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield models_1.Blog.findOneAndDelete({
            _id: req.params.id,
            author: req.userId,
        });
        if (!blog) {
            return res.status(404).json({ error: 'Blog post not found' });
        }
        res.json({ message: 'Blog post deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error deleting blog post' });
    }
}));
exports.default = router;
