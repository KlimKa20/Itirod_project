class Cocktail {
    constructor(name, addedBy, description, ingredients, createDate = new Date(), marks = 0) {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.addedBy = addedBy;
        this.createDate = createDate;
        this.marks = marks
    }
}

// Firestore data converter
var cocktailConverter = {
    toFirestore: function (cocktail) {
        return {
            name: cocktail.name,
            description: cocktail.description,
            ingredients: cocktail.ingredients,
            addedBy: cocktail.addedBy,
            createDate: cocktail.createDate,
            marks: cocktail.marks
        };
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return new Cocktail(data.name, data.addedBy, data.description, data.ingredients,
            new Date(data.createDate * 1000), data.marks);
    }
};