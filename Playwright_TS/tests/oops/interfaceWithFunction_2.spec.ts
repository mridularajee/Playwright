import { test, expect } from '@playwright/test';

test('Test', async ({ page }) => {

    interface Nitin{
        cricket():string
    }
     interface Rahul{
        bike():string
    }

    class Mridula implements Nitin, Rahul{
        cricket() {
            return("Nitin love cricket")
        }
        bike() {
            return("Rahul love drive bike")
        }
    }

    let obj = new Mridula();
    obj.cricket();
    obj.bike();
})