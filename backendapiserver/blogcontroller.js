// blogController.js - Handles blog posts and content
import Post from '../models/Post.js';
import { generateAIResponse } from '../services/aiService.js';

// Create new blog post
export const createPost = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const author = req.user.userId;

    const post = new Post({
      postId: uuidv4(),
      title,
      content,
      tags,
      author,
      createdAt: new Date(),
    });

    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// AI-generated blog post
export const generateAIPost = async (req, res) => {
  try {
    const { topic, tone, length } = req.body;
    
    const prompt = `Write a ${tone} blog post about ${topic} that's approximately ${length} words long.`;
    const aiContent = await generateAIResponse(prompt);
    
    res.json({ content: aiContent });
  } catch (error) {
    res.status(500).json({ message: 'AI generation failed' });
  }
};