function Car(name, model) {

    this.name = name;
    this.model = model;

}

Car.prototype.getCarname = function () {
    return this.name
}

