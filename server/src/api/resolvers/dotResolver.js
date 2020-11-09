const dotResolver = {
  Query: {
    dot: async (_, { _id }, { models: { Dot } }) => {
      const errors = validateRequest(req);
      if (errors.length > 0) {
        return { errors };
      } else {
        const dot = await Dot.find({ _id });
        return { dot };
      }
    },
  },
  Mutation: {
    createDot: async (_, { date, user, activity }, { models: { Dot } }) => {
      const errors = validateRequest(req);
      if (errors.length > 0) {
        return { errors };
      } else {
        const dot = await Dot.create({
          date,
          user,
          activity,
        });

        return { dot };
      }
    },
    deleteDot: async (_, { _id }, { models: { Dot } }) => {
      const errors = validateRequest(req);
      if (errors.length > 0) {
        return { errors };
      } else {
        Dot.remove({ _id });
        return { message: "Dot has been removed" };
      }
    },
  },
};

module.exports = dotResolver;
