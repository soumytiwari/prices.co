import { chromium } from 'playwright';
import { Card } from './cardInterface';
import { amazonSelectors } from './selectors';

async function searchAndLogData(amazon: typeof amazonSelectors) {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://amazon.in');
    await page.fill('#twotabsearchtextbox', 'clothes');
    await page.press('#twotabsearchtextbox', 'Enter');

    await page.waitForSelector('.s-main-slot', { timeout: 10000 });
    await page.waitForTimeout(5000);

    let hasNextPage = true;
    const allCards: Card[] = [];

    while (hasNextPage) {
        const results: Card[] = await page.evaluate((amazon) => {
            const cardList = document.querySelectorAll(".s-asin > .sg-col-inner");
            const cards: Card[] = [];

            cardList.forEach((card, index) => {
                const titleElement = card.querySelector(amazon.titleElement) as HTMLElement | null;
                const urlElement = card.querySelector(amazon.urlElement) as HTMLAnchorElement | null;
                const brandElement = card.querySelector(amazon.brandElement) as HTMLElement | null;
                const mainImageElement = card.querySelector(amazon.mainImageElement) as HTMLImageElement | null;
                const priceElement = card.querySelector(amazon.priceElement) as HTMLElement | null;
                const originalPriceElement = card.querySelector(amazon.originalPriceElement) as HTMLElement | null;
                const ratingElement = card.querySelector(amazon.ratingElement) as HTMLElement | null;
                const totalRatingElement = card.querySelector(amazon.totalRatingElement) as HTMLElement | null;
                const discountElement = card.querySelector(amazon.discountElement) as HTMLElement | null;

                const cardData: Card = {
                    id: (index + 1).toString(),
                    url: urlElement ? urlElement.href : 'null',
                    brand: brandElement ? brandElement.innerText : 'N/A',
                    title: titleElement ? titleElement.innerText : 'N/A',
                    price: priceElement ? priceElement.innerText : 'N/A',
                    originalPrice: originalPriceElement ? originalPriceElement.innerText : 'N/A',
                    rating: ratingElement ? ratingElement.innerText.split(" ")[0] : 'N/A',
                    totalRating: totalRatingElement ? totalRatingElement.innerText : 'N/A',
                    discount: discountElement ? discountElement.innerText : 'N/A',
                    mainImage: mainImageElement ? mainImageElement.src : 'null',
                };

                cards.push(cardData);
            });

            return cards;
        }, amazon);

        allCards.push(...results);

        const nextButton = await page.$("a.s-pagination-next");
        if (nextButton) {
            await nextButton.click();
            await page.waitForSelector('.s-main-slot', { timeout: 10000 });
            await page.waitForTimeout(2000);
        } else {
            hasNextPage = false;
        }
    }

    console.log("All Cards:", allCards);

    await browser.close();
}

// Call the function and pass the `amazonSelectors`
searchAndLogData(amazonSelectors);
