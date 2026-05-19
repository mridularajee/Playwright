import { test, expect } from '@playwright/test';


test('Test1', async ({ page }) => {


    interface Father {
        earn(): void; 
    }

    interface Mother {
        cook(): void;
    }

    class child implements Father, Mother {

        earn() {

            console.log("Earn Money");
        }
        cook() {

            console.log("Cook Food");
        }
    }

    let obj = new child();
    obj.cook();
    obj.earn();





});