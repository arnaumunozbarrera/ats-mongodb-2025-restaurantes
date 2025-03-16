[
    {
      $addFields: {
        restaurant_id_obj: {
          $toObjectId: '$restaurant_id'
        }
      }
    },
    {
      $lookup: {
        from: 'restaurants',
        localField: 'restaurant_id_obj',
        foreignField: '_id',
        as: 'Info'
      }
    },
  {$match: {
    date: "Dec 26 2023"
  }},
  {
        "$addFields": {
            "type_of_food": {
                "$arrayElemAt": ["$Info.type_of_food", 0]
            }
        }
    },
    {
        "$project": {
            "Info": 0
        }
    },
  {$match: {type_of_food:"Chinese"} }
]