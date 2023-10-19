const userInputString = prompt ("Please choose up to 6 servings of ice cream flavors separated by commas");
const flavorArray = userInputString.split(',');
const flavorCount = {};

for (const userInputString of flavorArray) {
    const trimmedFlavor = userInputString.trim();

    if (trimmedFlavor !== "") {
        if (flavorCount[trimmedFlavor]) {
            flavorCount[trimmedFlavor]++;
        } else {
            flavorCount[trimmedFlavor] = 1;
        }
    }
}
console.table(flavorCount);