class Cocktail {
    constructor(name, addedBy, description, ingredients, marks = [], comments = []) {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.addedBy = addedBy;
        this.createDate = new Date();
        this.marks = marks;
        this.comments = comments;
    }
}

// Firestore data converter
var cocktailConverter = {
    toFirestore: function (cocktail) {
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