"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = exports.Contact = exports.Tutorial = exports.Project = exports.Blog = exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// User Model
const userSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    createdAt: { type: Date, default: Date.now },
});
// Blog Post Model (for the blog page)
const blogSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', required: true },
    thumbnail: { type: String },
    tags: [String],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
// Project Model (for the showcase page)
const projectSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    liveUrl: { type: String, required: true },
    githubUrl: { type: String, required: true },
    tags: [String],
    createdAt: { type: Date, default: Date.now },
});
// Tutorial Model (for the tutorials page)
const tutorialSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    videoUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
// Contact Form Model
const contactSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
// Image Model (for uploaded images)
const imageSchema = new mongoose_1.default.Schema({
    url: { type: String, required: true },
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User' },
    title: String,
    createdAt: { type: Date, default: Date.now },
});
exports.User = mongoose_1.default.model('User', userSchema);
exports.Blog = mongoose_1.default.model('Blog', blogSchema);
exports.Project = mongoose_1.default.model('Project', projectSchema);
exports.Tutorial = mongoose_1.default.model('Tutorial', tutorialSchema);
exports.Contact = mongoose_1.default.model('Contact', contactSchema);
exports.Image = mongoose_1.default.model('Image', imageSchema);
