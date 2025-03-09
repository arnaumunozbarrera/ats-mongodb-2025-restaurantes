db.getCollection('inspections').aggregate(
  [
    {
      $group: {
        _id: '$result',
        nInspectionsPerResult: { $sum: 1 }
      }
    },
    {
      $group: {
        _id: null,
        totalInspections: {
          $sum: '$nInspectionsPerResult'
        },
        data: { $push: '$$ROOT' }
      }
    },
    { $unwind: '$data' },
    {
      $project: {
        _id: '$data._id',
        nInspectionsPerResult:
          '$data.nInspectionsPerResult',
        inspectionsPercentage: {
          $multiply: [
            {
              $divide: [
                '$data.nInspectionsPerResult',
                '$totalInspections'
              ]
            },
            100
          ]
        }
      }
    },
    { $sort: { inspectionsPercentage: -1 } }
  ],
  { maxTimeMS: 60000, allowDiskUse: true }
);


