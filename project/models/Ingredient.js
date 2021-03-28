class Ingredient {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

var ingredientConverter = {
    toFirestore: function (I) {
        return {
            name: cocktail.name,
            description: cocktail.description,
            // ingredients: cocktail.ingredients,
            addedBy: cocktail.addedBy,
            createDate: cocktail.createDate,
            marks: cocktail.marks,
            comments: cocktail.comments
        };
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return new Cocktail(data.name,data.addedBy, data.description,data.ingredients,
            data.createDate, data.marks, data.comments);
    }
};