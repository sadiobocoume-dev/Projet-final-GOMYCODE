import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Product from '../models/Product'

dotenv.config()

const LOCAL = (file: string) => `/images/products/${file}`

const updates: { name: string; image: string }[] = [
    // ── Electronics ──────────────────────────────────────
    { name: 'Apple AirPods Max',                         image: LOCAL('airpods-max.jpg') },
    { name: 'Xiaomi Redmi Buds 5 Pro',                   image: LOCAL('redmi-buds-5-pro.jpg') },
    { name: 'Apple iPad 10ème Génération (PRODUCT)RED',  image: LOCAL('ipad-10-rouge.jpg') },
    { name: 'Infinix Note 40 Pro 5G',                    image: LOCAL('infinix-note-40-pro.jpg') },
    { name: 'Xiaomi Redmi Watch 3 Active',               image: LOCAL('redmi-watch-3.jpg') },
    { name: 'Samsung Réfrigérateur Twin Cooling Plus 400L', image: LOCAL('samsung-frigo.jpg') },

    // ── Clothing ─────────────────────────────────────────
    { name: 'Tissu Wax Africain Hitarget (6 mètres)',    image: LOCAL('tissu-wax.jpg') },
    { name: 'Tissu Bogolan Noir/Blanc (5 mètres)',       image: LOCAL('tissu-bogolan.jpg') },
    { name: 'Tissu Bazin Riche (5 mètres)',              image: LOCAL('tissu-bazin.jpg') },
    { name: 'Grand Boubou Agbada 3 Pièces Vert',        image: LOCAL('boubou-agbada-vert.jpg') },
    { name: 'Tenue Aso-Ebi Bordeaux Couple',             image: LOCAL('tenue-asoebi-bordeaux.jpg') },
    { name: 'Jeans Warp+Weft JFK Skinny',               image: LOCAL('jeans-warp-weft.jpg') },
    { name: 'Survêtement Zara Bicolore Marron/Blanc',    image: LOCAL('survet-zara.jpg') },
    { name: 'Survêtement NY New York Beige',             image: LOCAL('survet-ny.jpg') },
    { name: 'Hoodie Yahweh Bleu Marine',                 image: LOCAL('hoodie-yahweh.jpg') },
    { name: 'Maillot Équipe Nationale Sénégal Puma 2024', image: LOCAL('maillot-senegal-puma.jpg') },

    // ── Food ─────────────────────────────────────────────
    { name: 'Nestlé NIDO Lait en Poudre Entier 900g',   image: LOCAL('nido-900g.jpg') },
    { name: 'Panier Alimentaire Sénégalais (riz + Maggi + épices)', image: LOCAL('panier-alimentaire.jpg') },
    { name: 'Poisson Braisé + Alloco (plat africain)',  image: LOCAL('poisson-alloco.jpg') },
    { name: 'Mafé Sénégalais (sauce arachide, portion)', image: LOCAL('mafe-senegalais.jpg') },
    { name: 'Thiéboudienne (plat national sénégalais)',  image: LOCAL('thieboudienne.jpg') },

    // ── Books ─────────────────────────────────────────────
    { name: 'Divine Speech — Nouman Ali Khan',           image: LOCAL('divine-speech.jpg') },
    { name: 'Revive Your Heart — Nouman Ali Khan',       image: LOCAL('revive-your-heart.jpg') },
    { name: 'Le Cygne Noir — Nassim Nicholas Taleb',    image: LOCAL('cygne-noir.jpg') },
    { name: 'Libérez Votre Cerveau — Idriss Aberkane',  image: LOCAL('liberez-cerveau.jpg') },
    { name: 'Ubuntu — Souleymane Bachir Diagne',        image: LOCAL('ubuntu-diagne.jpg') },

    // ── Other ─────────────────────────────────────────────
    { name: 'Philips Airfryer XXL (7,3L — HD9650)',     image: LOCAL('philips-airfryer.jpg') },
    { name: 'Kenwood Blender (BL430 — 1,5L)',           image: LOCAL('kenwood-blender.jpg') },
    { name: 'Bleu de Chanel Eau de Parfum 100 ml',      image: LOCAL('chanel-bleu.jpg') },
    { name: 'Montre Chronographe Luxe Homme (or/noir)', image: LOCAL('montre-chrono-luxe.jpg') },
]

const run = async () => {
    await mongoose.connect(process.env.MONGO_URI as string)
    console.log('MongoDB connecté\n')

    let ok = 0
    let notFound = 0

    for (const { name, image } of updates) {
        const result = await Product.updateOne({ name }, { $set: { image } })
        if (result.modifiedCount > 0) {
            console.log(`✅  ${name}`)
            ok++
        } else {
            console.log(`⚠️  introuvable : ${name}`)
            notFound++
        }
    }

    console.log(`\n${ok} produits mis à jour, ${notFound} introuvables.`)
    await mongoose.disconnect()
    process.exit(0)
}

run()
