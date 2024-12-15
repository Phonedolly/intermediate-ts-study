/** @type {number} */
let amount;

amount = "12";

/**
 * Adds VAT to a price
 *
 * @param {number} price The pricewithout VAT
 * @param {number} vat The VAT [0-1]
 *
 * @return {number}
 */
function addVAT(price, vat = 0.2) {
  return price * (1 + vat);
}

/**
 * @typedef {Object} Article
 * @property {number} price
 * @property {number} vat
 * @property {string} string
 * @property {boolean=} sold
 */
/**
 * @param {[Article]} articles
 */
function totalAmount(articles) {
  return articles.reduce((total, article) => {
    return total + addVAT(article);
  });
}
