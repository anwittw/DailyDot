const activityResolver = {
  Query: {
    activity: async (_, { _id }, { req, models: { Activity } }) => {
      const errors = validateRequest(req);
      if (errors.length > 0) {
        return { errors };
      } else {
        const activity = await Activity.findbyId(_id);
        return activity;
      }
    },
  },
  Mutation: {
    createActivity: async (
      _,
      { title, color, user },
      { req, models: { Activity } }
    ) => {
      const errors = validateRequest(req);
      if (errors.length > 0) {
        return { errors };
      } else {
        const activity = await Activity.create({
          title,
          color,
          user,
        });
        return { activity };
      }
    },
    editActivity: async (
      _,
      { _id, title, color },
      { req, models: { Activity } }
    ) => {
      const errors = validateRequest(req);
      if (errors.length > 0) {
        return { errors };
      } else {
        const activity = await Activity.findbyId(_id);
        activity.title = title;
        activity.color = color;
        activity.save();
        return { activity };
      }
    },
    deleteActivity: async (_, { _id }, { req, models: { Activity } }) => {
      const errors = validateRequest(req);
      if (errors.length > 0) {
        return { errors };
      } else {
        await Activity.remove({ _id });
        return { message: "Activity has been removed" };
      }
    },
  },
};

module.exports = activityResolver;
