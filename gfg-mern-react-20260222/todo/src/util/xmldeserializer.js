export const isInterpretedEmpty = (htmlString) => {
    // 1. Create a virtual parser (doesn't touch the real UI)
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    // 2. Get the "interpreted" text (ignores all tags, keeps only what a human sees)
    const visibleText = doc.body.textContent || "";

    // 3. Check for "meaningful" elements that don't have text (images, horizontal rules)
    const hasAssets = doc.body.querySelector('img, hr, iframe, table') !== null;

    // 4. Return true only if there is no text AND no assets
    return visibleText.trim().length === 0 && !hasAssets;
};