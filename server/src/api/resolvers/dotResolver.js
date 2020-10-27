const dotResolver = {
  Query: {
    dots: async (_, __, { models: { Dot } }) => {
      const dots = await Dot.find({});
      return dots;
    },
  },
};

module.exports = dotResolver;
