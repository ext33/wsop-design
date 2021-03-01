const initialState={
    data1: [
    {
      "id": "new posts",
      "color": "hsl(174, 70%, 50%)",
      "data": [
        {
          "x": 1,
          "y": 21
        },
        {
          "x": 2,
          "y": 56
        },
        {
          "x": 3,
          "y": 104
        },
        {
          "x": 4,
          "y": 119
        },
        {
          "x": 5,
          "y": 258
        },
        {
          "x": 6,
          "y": 269
        },
        {
          "x": 7,
          "y": 265
        },
        {
          "x": 8,
          "y": 171
        },
        {
          "x": 9,
          "y": 151
        },
        {
          "x": 10,
          "y": 263
        },
        {
          "x": 11,
          "y": 269
        },
        {
          "x": 12,
          "y": 214
        }
      ]
    },
    {
      "id": "visits",
      "color": "hsl(332, 70%, 50%)",
      "data": [
        {
          "x": 1,
          "y": 248
        },
        {
          "x": 2,
          "y": 76
        },
        {
          "x": 3,
          "y": 29
        },
        {
          "x": 4,
          "y": 100
        },
        {
          "x": 5,
          "y": 89
        },
        {
          "x": 6,
          "y": 278
        },
        {
          "x": 7,
          "y": 213
        },
        {
          "x": 8,
          "y": 246
        },
        {
          "x": 9,
          "y": 269
        },
        {
          "x": 10,
          "y": 47
        },
        {
          "x": 11,
          "y": 2
        },
        {
          "x": 12,
          "y": 86
        }
      ]
    },
  ],
  data2: [
    {
      "activity": "Posts",
      "all": 159,
      "today": 82,
    },
    {
      "activity": "Visits",
      "all": 173,
      "today": 120,
    }
  ]
}

export default function dashboardReducer(state = initialState, action) {
    switch (action.type){

        default:
            return state
    }
}