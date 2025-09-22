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
// Get all projects
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield models_1.Project.find().sort({ createdAt: -1 });
        res.json(projects);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching projects' });
    }
}));
// Get single project
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield models_1.Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json(project);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching project' });
    }
}));
// Create project (protected)
router.post('/', auth_1.authenticate, upload_1.upload.single('image'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { title, description, liveUrl, githubUrl, tags } = req.body;
        const imageUrl = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
        if (!imageUrl) {
            return res.status(400).json({ error: 'Image is required' });
        }
        const project = new models_1.Project({
            title,
            description,
            imageUrl,
            liveUrl,
            githubUrl,
            tags: tags ? JSON.parse(tags) : [],
        });
        yield project.save();
        res.status(201).json(project);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating project' });
    }
}));
// Update project (protected)
router.put('/:id', auth_1.authenticate, upload_1.upload.single('image'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const project = yield models_1.Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        const { title, description, liveUrl, githubUrl, tags } = req.body;
        const imageUrl = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
        project.title = title;
        project.description = description;
        project.liveUrl = liveUrl;
        project.githubUrl = githubUrl;
        project.tags = tags ? JSON.parse(tags) : project.tags;
        if (imageUrl) {
            project.imageUrl = imageUrl;
        }
        yield project.save();
        res.json(project);
    }
    catch (error) {
        res.status(500).json({ error: 'Error updating project' });
    }
}));
// Delete project (protected)
router.delete('/:id', auth_1.authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield models_1.Project.findByIdAndDelete(req.params.id);
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json({ message: 'Project deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error deleting project' });
    }
}));
exports.default = router;
