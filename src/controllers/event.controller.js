const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new post
exports.createEvent = async (req, res) => {
  const { email, name } = req.body; // Include authorId
  const result = await prisma.events.create({
    data: {
      email: email,
      name: name,
    },
  });
  res.json(result);
};

// Get all posts
exports.getEvents = async (req, res) => {
  const events = await prisma.events.findMany({
    include: { posts: true }, // Include author details
  });
  res.json(events);
};

// Get a single post by ID
exports.getEventById = async (req, res) => {
  const { id } = req.params;
  const event = await prisma.events.findUnique({
    where: { id: id },
    include: { posts: true }, // Include author details
  });
  res.json(event);
};





