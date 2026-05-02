import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Product from '../models/Product'

dotenv.config()

const img = (file: string) => `/images/products/${file}`

const products = [

    // ─────────────────────────────────────────
    // ELECTRONICS (6)
    // ─────────────────────────────────────────
    {
        name: 'Apple AirPods Max',
        description: 'Casque over-ear premium Apple avec réduction de bruit active, son spatial personnalisé et armature en aluminium anodisé. Confort exceptionnel pour une écoute immersive totale, compatibilité H1 pour une connexion instantanée avec tous vos appareils Apple.',
        price: 365000,
        image: img('airpods-max.jpg'),
        category: 'electronics',
        stock: 8,
        rating: 4.9,
    },
    {
        name: 'Xiaomi Redmi Buds 5 Pro',
        description: 'Écouteurs TWS haut de gamme avec réduction de bruit active 52 dB, son Hi-Res Audio certifié et autonomie de 38h avec boîtier de charge. Design ergonomique léger, Bluetooth 5.3 stable. Le meilleur rapport qualité-prix du marché à Dakar.',
        price: 35000,
        image: img('redmi-buds-5-pro.jpg'),
        category: 'electronics',
        stock: 45,
        rating: 4.5,
    },
    {
        name: 'Apple iPad 10ème Génération (PRODUCT)RED',
        description: 'Tablette Apple avec écran Liquid Retina 10,9 pouces, puce A14 Bionic et connecteur USB-C. Compatibilité Apple Pencil 1ère génération et Magic Keyboard Folio. Disponible en rouge (PRODUCT)RED — 5% des ventes reversés au Fonds mondial contre le SIDA.',
        price: 210000,
        image: img('ipad-10-rouge.jpg'),
        category: 'electronics',
        stock: 10,
        rating: 4.8,
    },
    {
        name: 'Infinix Note 40 Pro 5G',
        description: 'Smartphone 5G milieu de gamme premium avec écran AMOLED 6,78" 120 Hz, processeur Dimensity 7020, 8 Go RAM et 256 Go de stockage. Charge rapide 45W, triple caméra 108 MP et batterie 5000 mAh pour deux jours d\'autonomie. Best-seller en Afrique de l\'Ouest.',
        price: 175000,
        image: img('infinix-note-40-pro.jpg'),
        category: 'electronics',
        stock: 22,
        rating: 4.4,
    },
    {
        name: 'Xiaomi Redmi Watch 3 Active',
        description: 'Montre connectée abordable avec grand écran LCD 1,83 pouces, suivi santé continu (fréquence cardiaque, SpO2, sommeil), GPS intégré et étanchéité 5 ATM. Plus de 100 modes sportifs et 14 jours d\'autonomie. La smartwatch la plus populaire à Dakar.',
        price: 22000,
        image: img('redmi-watch-3.jpg'),
        category: 'electronics',
        stock: 55,
        rating: 4.3,
    },
    {
        name: 'Samsung Réfrigérateur Twin Cooling Plus 400L',
        description: 'Réfrigérateur combiné Samsung avec technologie Twin Cooling Plus maintenant 70% d\'humidité dans le compartiment frais. Deux systèmes de refroidissement indépendants sans transfert d\'odeurs, dégivrage automatique et design inox. Idéal pour les familles sénégalaises.',
        price: 420000,
        image: img('samsung-frigo.jpg'),
        category: 'electronics',
        stock: 6,
        rating: 4.6,
    },

    // ─────────────────────────────────────────
    // CLOTHING (10)
    // ─────────────────────────────────────────
    {
        name: 'Tissu Wax Africain Hitarget (6 mètres)',
        description: 'Pagne wax 100% coton pur imprimé aux motifs colorés et géométriques emblématiques de l\'Afrique de l\'Ouest. Qualité Hitarget, idéal pour confectionner boubous, robes et tenues de cérémonie. Vendu en coupe de 6 mètres, disponible en plusieurs motifs selon le stock.',
        price: 9000,
        image: img('tissu-wax.jpg'),
        category: 'clothing',
        stock: 80,
        rating: 4.7,
    },
    {
        name: 'Tissu Bogolan Noir/Blanc (5 mètres)',
        description: 'Tissu traditionnel bogolan en coton teint naturellement, motifs géométriques authentiques noirs et blancs hérités du Mali et du Sénégal. Symbole fort d\'identité culturelle africaine, utilisé pour boubous, tenues de cérémonie et accessoires mode.',
        price: 10000,
        image: img('tissu-bogolan.jpg'),
        category: 'clothing',
        stock: 40,
        rating: 4.6,
    },
    {
        name: 'Tissu Bazin Riche (5 mètres)',
        description: 'Tissu bazin riche 100% coton mercerisé guinéen au toucher soyeux et à l\'éclat lumineux caractéristique. Incontournable pour les grands boubous et tenues de fête. Disponible en bleu marine, beige et autres coloris classiques. Référence incontestée de l\'élégance sénégalaise.',
        price: 15000,
        image: img('tissu-bazin.jpg'),
        category: 'clothing',
        stock: 35,
        rating: 4.8,
    },
    {
        name: 'Grand Boubou Agbada 3 Pièces Vert',
        description: 'Ensemble boubou agbada 3 pièces (grand boubou, tunique, pantalon) en bazin riche vert brodé d\'arabesques dorées. Allure royale et élégante pour mariages, baptêmes et cérémonies. Confection artisanale dakaroise sur mesure incluse selon disponibilité.',
        price: 85000,
        image: img('boubou-agbada-vert.jpg'),
        category: 'clothing',
        stock: 12,
        rating: 4.9,
    },
    {
        name: 'Tenue Aso-Ebi Bordeaux Couple',
        description: 'Tenue assortie pour couple en tissu bordeaux à motifs traditionnels, style aso-ebi typique des cérémonies africaines. Coupe élégante et moderne mêlant tradition et tendance contemporaine. Livré en ensemble homme (agbada) et femme (robe longue), taille personnalisable.',
        price: 65000,
        image: img('tenue-asoebi-bordeaux.jpg'),
        category: 'clothing',
        stock: 8,
        rating: 4.7,
    },
    {
        name: 'Jeans Warp+Weft JFK Skinny',
        description: 'Jean skinny américain de la marque Warp+Weft, conçu avec une coupe sculpturale confortable et des matières durables fabriquées éthiquement. Denim stretch premium disponible en plusieurs lavis (clair, medium, brut). Importé et disponible dans les boutiques streetwear de Dakar.',
        price: 30000,
        image: img('jeans-warp-weft.jpg'),
        category: 'clothing',
        stock: 25,
        rating: 4.3,
    },
    {
        name: 'Survêtement Zara Bicolore Marron/Blanc',
        description: 'Jogging bicolore Zara en matière douce et légère, design minimaliste et moderne pour un look streetwear décontracté. Veste zippée et pantalon assortis en coton molletonné. Très demandé par la jeunesse dakaroise, disponible via boutiques restock de Dakar.',
        price: 35000,
        image: img('survet-zara.jpg'),
        category: 'clothing',
        stock: 20,
        rating: 4.4,
    },
    {
        name: 'Survêtement NY New York Beige',
        description: 'Ensemble jogging beige brodé du logo NY, style urban casual très prisé par la jeunesse sénégalaise. Sweat col rond et pantalon jogger en matière confortable et coupe ample. Parfait pour le quotidien, les sorties décontractées et les séances de sport.',
        price: 28000,
        image: img('survet-ny.jpg'),
        category: 'clothing',
        stock: 30,
        rating: 4.2,
    },
    {
        name: 'Hoodie Yahweh Bleu Marine',
        description: 'Sweat à capuche bleu marine avec inscription calligraphiée Yahweh, alliant foi et style streetwear urbain contemporain. Coton molletonné épais et chaud, coupe oversize tendance. Créé par des marques locales dakaroises engagées dans la mode africaine moderne.',
        price: 22000,
        image: img('hoodie-yahweh.jpg'),
        category: 'clothing',
        stock: 35,
        rating: 4.3,
    },
    {
        name: 'Maillot Équipe Nationale Sénégal Puma 2024',
        description: 'Maillot officiel des Lions de la Teranga signé Puma, design blanc et vert avec technologie dryCELL pour évacuer la transpiration. Broderies traditionnelles sénégalaises sur l\'encolure, disponible en version domicile. Portez les couleurs du Sénégal champion d\'Afrique 2022.',
        price: 35000,
        image: img('maillot-senegal-puma.jpg'),
        category: 'clothing',
        stock: 50,
        rating: 4.9,
    },

    // ─────────────────────────────────────────
    // FOOD (5)
    // ─────────────────────────────────────────
    {
        name: 'Nestlé NIDO Lait en Poudre Entier 900g',
        description: 'Lait entier en poudre Nestlé NIDO enrichi en vitamines A, C, D et minéraux essentiels pour la croissance et l\'immunité. Produit de référence dans les foyers sénégalais, facile à dissoudre, idéal pour le café Touba, le lakh et les bouillies de bébé.',
        price: 8500,
        image: img('nido-900g.jpg'),
        category: 'food',
        stock: 120,
        rating: 4.8,
    },
    {
        name: 'Panier Alimentaire Sénégalais (riz + Maggi + épices)',
        description: 'L\'essentiel du garde-manger sénégalais réuni : riz brisé de qualité, boîte de cubes Maggi arôme poulet et assortiment d\'aromates et épices locales (piment, thym, safran). Tout ce qu\'il faut pour préparer un thiéboudienne ou un yassa maison. Livré à domicile à Dakar.',
        price: 14500,
        image: img('panier-alimentaire.jpg'),
        category: 'food',
        stock: 60,
        rating: 4.5,
    },
    {
        name: 'Poisson Braisé + Alloco (plat africain)',
        description: 'Plat de rue iconique de l\'Afrique de l\'Ouest : poisson capitaine ou thiof grillé au feu de bois, servi avec des morceaux de plantain mûr frit bien dorés. Saveurs fumées et épicées, condimenté d\'oignons et de citron. Incontournable des snacks et maquis de Dakar.',
        price: 2500,
        image: img('poisson-alloco.jpg'),
        category: 'food',
        stock: 30,
        rating: 4.6,
    },
    {
        name: 'Mafé Sénégalais (sauce arachide, portion)',
        description: 'Sauce onctueuse à base de pâte d\'arachide fraîche, viande de bœuf mijotée, tomate concentrée, oignon et épices africaines. Servi avec du riz blanc, le mafé est l\'un des plats les plus réconfortants du Sénégal. Cuisiné à la commande, livré chaud à Dakar.',
        price: 2000,
        image: img('mafe-senegalais.jpg'),
        category: 'food',
        stock: 25,
        rating: 4.7,
    },
    {
        name: 'Thiéboudienne (plat national sénégalais)',
        description: 'Le plat national du Sénégal classé patrimoine culturel immatériel de l\'UNESCO : riz à la tomate cuit dans un bouillon de poisson parfumé, servi avec légumes (manioc, aubergine, carotte) et poisson entier farci aux épices yett et guedj. Cuisiné par nos mamans dakaroises.',
        price: 1500,
        image: img('thieboudienne.jpg'),
        category: 'food',
        stock: 20,
        rating: 4.9,
    },

    // ─────────────────────────────────────────
    // BOOKS (5)
    // ─────────────────────────────────────────
    {
        name: 'Divine Speech — Nouman Ali Khan',
        description: 'Ouvrage analytique de référence explorant la dimension littéraire et rhétorique du Coran. Nouman Ali Khan rend accessible une riche tradition de commentaires coraniques pour le lecteur francophone et anglophone. Très apprécié par la communauté musulmane sénégalaise instruite.',
        price: 18000,
        image: img('divine-speech.jpg'),
        category: 'books',
        stock: 20,
        rating: 4.9,
    },
    {
        name: 'Revive Your Heart — Nouman Ali Khan',
        description: 'Essai spirituel de Nouman Ali Khan invitant à un renouveau intérieur à travers des méditations coraniques accessibles et profondes. Un livre de développement personnel islamique limpide et moderne, destiné aux jeunes musulmans sénégalais en quête de sens et de spiritualité.',
        price: 12000,
        image: img('revive-your-heart.jpg'),
        category: 'books',
        stock: 28,
        rating: 4.8,
    },
    {
        name: 'Le Cygne Noir — Nassim Nicholas Taleb',
        description: 'Best-seller mondial de philosophie économique explorant les événements imprévisibles à fort impact qui façonnent l\'histoire humaine. Lecture indispensable pour tout entrepreneur, étudiant ou intellectuel désireux de comprendre l\'incertitude et l\'aléatoire dans nos sociétés modernes.',
        price: 14000,
        image: img('cygne-noir.jpg'),
        category: 'books',
        stock: 22,
        rating: 4.7,
    },
    {
        name: 'Libérez Votre Cerveau — Idriss Aberkane',
        description: 'Traité de neurosagesse par le neuroscientifique franco-algérien Idriss Aberkane : clés pratiques pour optimiser ses capacités cognitives, apprendre mieux et vivre plus intelligemment. Très populaire auprès des étudiants africains francophones en informatique et management.',
        price: 13000,
        image: img('liberez-cerveau.jpg'),
        category: 'books',
        stock: 30,
        rating: 4.6,
    },
    {
        name: 'Ubuntu — Souleymane Bachir Diagne',
        description: 'Essai philosophique du grand penseur sénégalais Souleymane Bachir Diagne, professeur à Columbia University, sur le concept africain d\'Ubuntu (« Je suis parce que nous sommes »). Une réflexion sur l\'identité, la communauté et la philosophie africaine contemporaine. Fierté nationale.',
        price: 11000,
        image: img('ubuntu-diagne.jpg'),
        category: 'books',
        stock: 18,
        rating: 4.8,
    },

    // ─────────────────────────────────────────
    // OTHER (4)
    // ─────────────────────────────────────────
    {
        name: 'Philips Airfryer XXL (7,3L — HD9650)',
        description: 'Friteuse à air chaud XXL Philips pour cuire jusqu\'à 1,4 kg d\'aliments avec 90% moins de graisse qu\'une friteuse traditionnelle. Technologie Rapid Air, 13 programmes préréglés, écran digital tactile. Idéale pour les familles sénégalaises nombreuses. Disponible chez Diaytar Sénégal.',
        price: 110000,
        image: img('philips-airfryer.jpg'),
        category: 'other',
        stock: 10,
        rating: 4.5,
    },
    {
        name: 'Kenwood Blender (BL430 — 1,5L)',
        description: 'Blender robuste Kenwood 450W à 5 vitesses avec fonction pulse, bol en verre de 1,5 litre et lames en acier inoxydable. Parfait pour smoothies, jus de bissap, bouillies et sauces. Marque de référence en électroménager cuisine, disponible chez Electroménager Dakar et Jumia.',
        price: 45000,
        image: img('kenwood-blender.jpg'),
        category: 'other',
        stock: 18,
        rating: 4.4,
    },
    {
        name: 'Bleu de Chanel Eau de Parfum 100 ml',
        description: 'Fragrance emblématique de la maison Chanel pour l\'homme moderne — notes de fraîcheur citronnée, bois de cèdre et vétiver. Version Eau de Parfum à la tenue longue durée 8-10h. Bestseller mondial disponible chez Radiance Parfumerie, Kaynoo et boutiques de luxe de Dakar.',
        price: 75000,
        image: img('chanel-bleu.jpg'),
        category: 'other',
        stock: 15,
        rating: 4.8,
    },
    {
        name: 'Montre Chronographe Luxe Homme (or/noir)',
        description: 'Montre chronographe pour homme au design élégant bicolore or rose et noir, cadran détaillé avec sous-compteurs, bracelet en cuir alligator et boîtier en acier inoxydable. Mouvement quartz japonais précis. Style luxe accessible très apprécié lors des mariages et cérémonies au Sénégal.',
        price: 55000,
        image: img('montre-chrono-luxe.jpg'),
        category: 'other',
        stock: 12,
        rating: 4.6,
    },
]

const seedProducts = async () => {
    await mongoose.connect(process.env.MONGO_URI as string)
    console.log('MongoDB connecté')

    await Product.deleteMany({})
    console.log('Anciens produits supprimés')

    await Product.insertMany(products)
    console.log(`✅ ${products.length} produits insérés avec succès`)

    await mongoose.disconnect()
    process.exit(0)
}

seedProducts()
