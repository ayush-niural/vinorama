import amarone from "./assets/amarone.jpg";
import basagoti_blanco from "./assets/basagoti-blanco.jpg";
import chardonnay_pays from "./assets/chardonnay-pays.jpg";
import etna_bianco from "./assets/etna-bianco.jpg";
import anne_de_leweiss from "./assets/anne-de-leweiss-gewurztraminer.jpg";
import bruno_paillard from "./assets/bruno-paillard.jpg";
import crognolo_toscana from "./assets/crognolo-toscana.jpg";
import donnamarzia_primitivo from "./assets/donna-marzia-primitivo.jpg";
import framingham from "./assets/framingham-pinot-noir.jpg";
import gaja_rossso from "./assets/gaja-rosso-bass.jpg";
import gaja_sperrs from "./assets/gaja-sperss.jpg";
import gavi_di_gavi from "./assets/gavi-di-gavi.jpg";
import grappa_gaja from "./assets/grappa-gaja-gaia-rey.jpg";
import lombard from "./assets/lombard.jpg";
import prosecco from "./assets/prosecco-follador-silver.jpg";
import raventos from "./assets/raventos-rose.jpg";
import si from "./assets/si.jpg";
import spumante_cuve from "./assets/spumante-cuvee-rose-brut.jpeg";
import raimat from "./assets/v-anima-raimat.png";

// Wine Object Model
// {
//   id: wine_id,
//   name: "Wine Name",
//   region: "Wine region",
//   country: "Country"
//   grape: "Wine grape"
//   rating: Rating,
//   price: "$Price",
//   image: "Image URL",
//   description: "Wine description."
// },

const wineData = [
  {
    category: "White",
    thumbnail:
      "https://www.joshcellars.com/wp-content/uploads/2022/03/BBZ-Lifestyle-Image-Square.jpg",
    wines: [
      {
        id: 1,
        name: "Basagoiti Blanco DOC La Rioja, Bodegas Basagoiti 2018",
        region: "Rioja",
        country: "Spain",
        grape: "White Tempranillo",
        rating: 4.8,
        price: "2986.59",
        image: basagoti_blanco,
        description:
          "Pale yellow color with greenish reflections. It has a high aromatic intensity with predominance of ripe white fruit such as pear and with a floral background. On the palate, with a friendly entrance, it has a very balanced acidity and a long aftertaste.",
      },
      {
        id: 2,
        name: "Chardonnay Pays D’OC IGP, Le Cellier Du Pic 2016",
        region: "Languedoc Roussillon",
        country: "France",
        grape: "Chardonnay",
        rating: 4.6,
        price: "2047.56",
        image: chardonnay_pays,
        description:
          "Bright gold in color with expressive aromas of dried flowers and fresh fruit peach & pear. Well balanced, sharp and lemony in the mouth, very refreshing.",
      },
      {
        id: 3,
        name: "Etna Bianco D.O.C, Pietradolce 2018",
        region: "Sicily",
        country: "Italy",
        grape: "Carricante",
        rating: 4.6,
        price: "3710.92",
        image: etna_bianco,
        description:
          "Soft straw yellow. The bouquet shows lovely aromas that highlight the freshness and lovely character of this wine. Because of the volcanic soil, its mineral component and the unique climate contitions, this Etna white has the pronounced minerality and unabashed acidity typical to wines of this territory.",
      },
      {
        id: 4,
        name: "Gavi Di Gavi DOCG, Villa Sparina 2018",
        region: "Piedmont",
        country: "Italy",
        grape: "Cortese",
        rating: 4.6,
        price: "4096.25",
        image: gavi_di_gavi,
        description:
          "Bright yellow straw in color with fragrance of flowers and fruit with hints of peach. Full and rich taste, soft and harmonical with tones of noble aromas, resulted from the complete ripening of the grapes, which intensify the character. This is a great anytime white that is sure to please any persnickety palate.",
      },
      {
        id: 5,
        name: "Gewurztraminer Reserve, Anne De Laweiss 2015",
        region: "Alsace",
        country: "France",
        grape: "Gewürztraminer",
        rating: 4.6,
        price: "3446.50",
        image: anne_de_leweiss,
        description:
          "A seductive and floral Alsatian white wine made from the spicy Gewürztraminer grape. Surfing the edge of off-dry, this Gewurz offers intense aromas of rosewater, lychee and candied grapefruit. In the mouth, these notes are joined by touches of candied ginger and spice.",
      },
    ],
  },
  {
    category: "Sparkling",
    thumbnail:
      "https://mayfair.ky/wp-content/uploads/2023/02/10380515_square.jpg",
    wines: [
      {
        id: 6,
        name: "Champagne Bruno Paillard “Blanc De Blancs” Grand Cru",
        region: "Champagne",
        country: "France",
        grape: "Chardonnay",
        rating: 4.6,
        price: "12136.20",
        image: bruno_paillard,
        description:
          "Very pale and shiny with green tints. The effervescence is lighter than in the other Champagnes thanks to a less powerful bottle fermentation. The entry is lively leading to a complex combination of citrus and white flowers.",
      },
      {
        id: 7,
        name: "Spumante Cuvee Rose Brut, NV",
        region: "Veneto",
        country: "Italy",
        grape: "Glera, Incrocio Manzoni Muscat rose",
        rating: 4.6,
        price: "2796.75",
        image: spumante_cuve,
        description:
          "Fruity, with intense notes of apple, pear and apricot. Floral notes also evident, particularly lime tree. Perfect as an aperitif and for cocktails, excellent accompaniment for the whole meal, particularly for fish and shellfish dishes.",
      },
      {
        id: 8,
        name: "Reserve, Anne De Laweiss 2015",
        region: "Alsace",
        country: "France",
        grape: "Gewürztraminer",
        rating: 4.6,
        price: "3446.50",
        image: anne_de_leweiss,
        description:
          "A seductive and floral Alsatian white wine made from the spicy Gewürztraminer grape. Surfing the edge of off-dry, this Gewurz offers intense aromas of rosewater, lychee and candied grapefruit. In the mouth, these notes are joined by touches of candied ginger and spice.",
      },
      {
        id: 9,
        name: "Prosecco Treviso Silver DOC, Follador",
        region: "Veneto",
        country: "Italy",
        grape: "Glera",
        rating: 4.6,
        price: "2733.47",
        image: prosecco,
        description:
          "It is bright yellow straw colour and shows very fine and persistent bubbles with a delicate foam. Aromas of fruity and flowery scents clearly perceived on the nose and the flavor is fresh, well structured and pleasant.",
      },
      {
        id: 10,
        name: "Champagne Brut Reference, Lombard & CIE",
        region: "Champagne",
        country: "France",
        grape: "Pinot Noir, Pinot Meunier, Chardonnay",
        rating: 4.6,
        price: "8429.80",
        image: lombard,
        description:
          "Dominated by Pinot Noir and Pinot Meunier, this brut champagne is a beautiful straw yellow in colour with reflections of gold. The nose is fresh and fruity with touches of vanilla and there is an abundance of fine persistent bubbles. The palate is rounded and full of stewed apple and white peach flavours with pastry notes and a citric acidity, which all combine in the mouth and lead into a pleasant, toasty finish.",
      },
    ],
  },
  {
    category: "Rose",
    thumbnail:
      "https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/02/22/16/wine1.jpg?width=1200&height=1200&fit=crop",
    wines: [
      {
        id: 11,
        name: "R. Raventos Rose, DO Penedes 2018",
        region: "Penedes",
        country: "Spain",
        grape: "Grenache noir, Syrah, Merlot, Tempranillo",
        rating: 4.6,
        price: "2938.00",
        image: raventos,
        description:
          "Dominated by Grenache noir, Syrah, Merlot, Tempranillo, this rose is a beautiful straw yellow in colour with reflections of gold. The nose is fresh and fruity with touches of vanilla and there is an abundance of fine persistent bubbles. The palate is rounded and full of stewed apple and white peach flavours with pastry notes and a citric acidity, which all combine in the mouth and lead into a pleasant, toasty finish.",
      },
      {
        id: 12,
        name: "Rose SI I.G.P 1.5 Ltr, Deumani 2017 (Bio-dynamic)",
        region: "Tuscany",
        country: "Italy",
        grape: "Syrah",
        rating: 4.6,
        price: "16353.36",
        image: si,
        description:
          "Intense bouquet of pink grapefruit, raspberry and cranberry. Aromas of cherries and flint and matchstick notes, following through to a full body with delicious fruit and cantaloupe undertones. Creamy and flavorful.Taut, juicy and lively on the palate – a perfect harmony of expression, freshness and body.",
      },
      {
        id: 13,
        name: "V Anima Raimat Rs ECO, 2021",
        region: "Costers del Segre",
        country: "Spain",
        grape: "Chardonnay, Pinot Noir",
        rating: 4.6,
        price: "2592.22",
        image: raimat,
        description:
          "High acidity and freshness. With volume and ripe red fruit finish. Ideal for dishes with legume salads, vegetables, pasta, oily fish and poultry dishes.",
      },
      {
        id: 14,
        name: "Spumante Cuvee Rose Brut, NV",
        region: "Veneto",
        country: "Italy",
        grape: "Glera, Incrocio Manzoni Muscat rose",
        rating: 4.6,
        price: "2796.75",
        image: spumante_cuve,
        description:
          "Fruity, with intense notes of apple, pear and apricot. Floral notes also evident, particularly lime tree. Perfect as an aperitif and for cocktails, excellent accompaniment for the whole meal, particularly for fish and shellfish dishes.",
      },

      // Add more Pinot Noir wines here
    ],
  },
  {
    category: "Red",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/1504/5726/products/ITM253823_GiantStepsKnownPleasuresYarraValleySyrah2021_wk44_Apr112023_0641_SQUARE_1024x1024.jpg?v=1681341150",
    wines: [
      {
        id: 15,
        name: "Amarone Della Valpolicella D.O.C.G, Tedeschi 2018",
        region: "Veneto",
        country: "Italy",
        grape: "Corvina, Corvinone, Rondinella, Molinara.",
        rating: 4.6,
        price: "6326.87",
        image: amarone,
        description:
          "Rich, shiny ruby red, compact bouquet with intense aromas of plum, black cherry, green tea and tobacco, a fine chocolate note in the background. The body, coated with fine berry fruit, develops a dynamic taste experience on the palate with sweet fruit melting, taut tannin and long finish.",
      },
      {
        id: 16,
        name: "Pinot Noir, Framingham 2016",
        region: "Marlborough",
        country: "New Zealand",
        grape: "Pinot Noir",
        rating: 4.6,
        price: "6155.11",
        image: framingham,
        description:
          "New Zealand Pinot Noir is bright and displays mid – garnet color. It has complex nose with some attractive savoury smoked meat and spice notes. Cherry fruits with herbs and floral note. It is rounded on the palate with cherry fruit structured but well balanced tannins.",
      },
      {
        id: 17,
        name: "Donna Marzia Primitivo IGT, Conti Zecca 2018",
        region: "Puglia",
        country: "Italy",
        grape: "Primitivo",
        rating: 4.6,
        price: "2548.15",
        image: donnamarzia_primitivo,
        description:
          "This Primitivo has a pleasant, harmonious flavor with hints of blackberry, dark chocolate and nuances of warm spices. The taste of wine is full-bodied, warm, with hints of fruit, balanced structure and moderately long finish.",
      },
      {
        id: 18,
        name: "Crognolo Toscana IGT, Tenuta Sette Ponti 2014",
        region: "Tuscany",
        country: "Italy",
        grape: "Sangiovese, Merlot, Cabernet Sauvignon.",
        rating: 4.6,
        price: "4723.40",
        image: crognolo_toscana,
        description:
          "Intense ruby red in color, the wine has a fruity, spicy bouquet and ripe cherry and berries on the palate. It has the vivid acidity typical of Sangiovese, with well-integrated tannins and an earthy finish.",
      },
      {
        id: 19,
        name: "Chianti Toscana Vigna Di Pallino DOCG, Tenuta Sette Ponti 2015",
        region: "Tuscany",
        country: "Italy",
        grape: "Sangiovese",
        rating: 4.6,
        price: "3,784.37",
        image:
          "https://images.vivino.com/labels/DM0WUmZoR4GBjA_BtFnA2w_pb_x300.png",
        description:
          "Intense ruby red with the nose expresses floral and fruity notes of marasca embellished by light balsamic lures. On the palate it is juicy, fresh, persistence and with a great drink it is sure to be pleasurable.",
      },
      // Add more Syrah wines here
    ],
  },
  {
    category: "Grappa",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/1504/5726/products/ITM276075_2021BMinorHeathcoteShiraz_wk41_Mar292023_0581_SQUARE_1024x1024.jpg?v=1681341273",
    wines: [
      {
        id: 20,
        name: "Grappa Gaia & Rey, Gaja",
        region: "Piedmont",
        country: "Italy",
        grape: "Chardonnay",
        rating: 4.6,
        price: "14616.55",
        image: grappa_gaja,
        description:
          "Crystal clear with herbaceous varietal aromas, warm and inviting.On the palate, it is full and round, with spicy notes that are accentuated in the long, lingering finish.",
      },
      {
        id: 21,
        name: "Grappa Rossj-Bass, Gaja",
        region: "Piedmont",
        country: "Italy",
        grape: "Chardonnay",
        rating: 4.6,
        price: "12853.75",
        image: gaja_rossso,
        description:
          "Full, fruity bouquet. Balanced body, with an enchanting finish that clearly exhibits varietal characteristics.",
      },
      {
        id: 22,
        name: "Grappa Sperss, Gaja",
        region: "Piedmont",
        country: "Italy",
        grape: "Nebbiolo",
        rating: 4.6,
        price: "14616.55",
        image: gaja_sperrs,
        description:
          "Delicate golden colour, with attractive aromas of ripe fruits, hazelnuts and raisins. Good body and a round, full finish.",
      },
      // Add more Merlot wines here
    ],
  },
  // Add more wine categories here
];

export default wineData;
