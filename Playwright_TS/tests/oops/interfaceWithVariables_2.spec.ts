import { test, expect } from '@playwright/test';

test('Test', async ({ page }) => {

    interface AdharCard {
        name: string;
        number: number;
        age: number;
    }

    let adharCard: AdharCard = {
        name: "Mridu",
        number: 1,
        age: 20
    }
     let adharCard2: AdharCard = {
        name: "Mridula",
        number: 2,
        age: 21
    }

    let adharCard3: AdharCard = {
        name: "Mridul",
         number: 3,
        age: 22
    }

    console.log(adharCard.age)
    console.log(adharCard2.number)
    console.log(adharCard3.age)

})