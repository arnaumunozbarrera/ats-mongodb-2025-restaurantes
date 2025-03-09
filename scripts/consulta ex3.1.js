db.getCollection('restaurants').aggregate(
  [
    {
      $group: {
        _id: '$type_of_food',
        averageRating: { $avg: '$rating' }
      }
    },
    { $sort: { averageRating: 1 } }
  ],
  { maxTimeMS: 60000, allowDiskUse: true }
);


