db.getCollection('inspections').aggregate(
  [
    {
      $match: {
        result: {
          $regex: '^Violation Issued$',
          $options: ''
        }
      }
    },
    { $sort: { date: -1 } }
  ],
  { maxTimeMS: 60000, allowDiskUse: true }
);

