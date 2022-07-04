const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.createOne = async (keyword) => {
  try {
    await prisma.keyword.create({
      data: {
        connectOrCreate: {
          where: {
            name: keyword.name,
          },
          create: {
            name: keyword.name,
          },
        },
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};
