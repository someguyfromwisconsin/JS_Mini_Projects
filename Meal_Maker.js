const menu = {
    _meal: "",
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === "string") {
        this._meal = mealToCheck;
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === "number") {
        this._price = priceToCheck;
      }
    },
    get todaysSpecial() {
      if (this._meal && this._price) {
        return "Today's Special is Pasta Fagioli for $10!"
      } else {
        return "Meal or price was not set correctly!"
      }
    }
  };
  
  menu.meal = "pasta fagioli";
  menu.price = 10;
  
  console.log(menu.todaysSpecial);