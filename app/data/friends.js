var friends = [
    {
        "name":"Ahmed",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },

      {
		name: "Tara Naman",
		photo: "data:image/jpeg;base64,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",
		scores: [
			"3",
			"3",
			"3",
			"3",
			"3",
			"3",
			"3",
			"3",
			"3",
			"3"
		]
    },
    
    {
		name: "Tara Naman",
		photo: "data:image/jpeg;base64,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",
		scores: [
			"3",
			"3",
			"3",
			"3",
			"3",
			"3",
			"3",
			"3",
			"3",
			"3"
		]
	},

];

module.exports = friends;
