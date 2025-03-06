db.getCollection('inspections').aggregate(
    [
      {
        $group: {
          _id: '$restaurant_id',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } }
    ],
    { maxTimeMS: 60000, allowDiskUse: true }
);

