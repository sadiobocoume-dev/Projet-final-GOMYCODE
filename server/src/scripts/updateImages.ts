import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Product from '../models/Product'

dotenv.config()

const img = (id: string) =>
    `https://images.unsplash.com/photo-${id}?w=400&h=400&fit=crop&auto=format`

// Images corrigées — chaque produit a une photo unique et correspondante
const updates: { name: string; image: string }[] = [

    // ── Doublons electronics ──────────────────────────
    // Caméra : on remplace l'image du fer par une vraie caméra de surveillance
    { name: 'Caméra de Surveillance WiFi', image: img('1557597774-9d273605dfa9') },
    // Fer à repasser : photo dédiée d'un fer vapeur
    { name: 'Fer à Repasser Philips',      image: img('1556909114-f6e7ad7d3136') },

    // ── Doublons other ───────────────────────────────
    // Ventilateur : on garde Machine à Coudre sur son image, on change le ventilateur
    { name: 'Ventilateur de Table Cosmos', image: img('1507919909716-c8262fcdf0cd') },
    // Chapelet : image dédiée chapelet / misbaha
    { name: 'Chapelet Musulman Misbaha',   image: img('1615359471461-c54c8d440b76') },

    // ── Doublons books ───────────────────────────────
    // Guide Touristique Sénégal : carte de voyage
    { name: 'Guide Touristique Sénégal',   image: img('1476514525535-07fb3b4ae5f1') },
    // Code de la Route : route / volant
    { name: 'Code de la Route Sénégal',    image: img('1449965408869-eaa3f722e40d') },
    // Dictionnaire Wolof-Français : image dictionnaire différente
    { name: 'Dictionnaire Wolof-Français', image: img('1457369804613-52c61a468e7d') },
    // Gestion de Projet Agile : bureau / post-its agile
    { name: 'Gestion de Projet Agile',     image: img('1552664730-d307ca884978') },
    // Ces Fruits si Doux : roman africain
    { name: "Ces Fruits si Doux de l'Arbre à Pain", image: img('1497633762014-94e5745a6a86') },
    // Xala Sembène : littérature africaine
    { name: 'Xala — Ousmane Sembène',      image: img('1495446815901-a7297e633e8d') },
]

const run = async () => {
    await mongoose.connect(process.env.MONGO_URI as string)
    console.log('MongoDB connecté')

    for (const { name, image } of updates) {
        const result = await Product.updateOne({ name }, { $set: { image } })
        const status = result.modifiedCount > 0 ? '✅' : '⚠️  introuvable'
        console.log(`${status}  ${name}`)
    }

    console.log('\nMise à jour terminée.')
    await mongoose.disconnect()
    process.exit(0)
}

run()
