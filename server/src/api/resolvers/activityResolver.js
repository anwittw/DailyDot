const activityResolver = {
  Query: {
    activities: async (_, __, { models: { Activity } }) => {
      const activities = await Activity.find({});
      return activities;
    },
  },
};

module.exports = activityResolver;
