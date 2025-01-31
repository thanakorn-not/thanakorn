const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createCamera = async (req, res) => {
  const { name,location } = req.body; // Include authorId
  const result = await prisma.cameras.create({
    data: {
      location: location,
      name: name,
    },
  });
  res.json(result);
};

// Get all posts
exports.getCameras = async (req, res) => {
  const camera = await prisma.cameras.findMany({
    include: { events: true }, // Include author details
  });
  res.json(camera);
};

// Get a single post by ID
exports.getCameraById = async (req, res) => {
  const { id } = req.params;
  const camera = await prisma.cameras.findUnique({
    where: { id: id },
    include: { events: true }, // Include author details
  });
  res.json(camera);
};

