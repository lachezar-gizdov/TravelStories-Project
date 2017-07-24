class Stories {
    static isValid(model) {
        return typeof model !== 'undefined' &&
            typeof model.text === 'string' &&
            model.text.length > 3;
    }

    get id() {
        return this._id;
    }

    static toViewModel(model) {
        const viewModel = new Stories();
        Object.keys(model)
            .forEach((prop) => {
                viewModel[prop] = model[prop];
            });

        return viewModel;
    }
}

module.exports = Stories;