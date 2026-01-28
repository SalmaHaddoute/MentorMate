import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const AccompagnantSchema = new mongoose.Schema({
  nomComplet: String,
  photo: String,
  domaineEtude: String,
  estDisponible: Boolean,
  rating: String,
  sessions: Number
});

const Accompagnant = mongoose.model('Accompagnant', AccompagnantSchema);

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Supprimer les données existantes
    await Accompagnant.deleteMany({});
    console.log('🗑️  Old data cleaned');

    // Insérer de nouvelles données
    const accompagnants = [
      {
        nomComplet: "Dr. Marie Dubois",
        photo: "https://picsum.photos/seed/mentor1/70/70",
        domaineEtude: "Développement Web",
        estDisponible: true,
        rating: "+4.9",
        sessions: 12
      },
      {
        nomComplet: "Prof. Jean Martin",
        photo: "https://picsum.photos/seed/mentor2/70/70",
        domaineEtude: "Data Science",
        estDisponible: true,
        rating: "+4.8",
        sessions: 8
      },
      {
        nomComplet: "M. Ahmed Benali",
        photo: "https://picsum.photos/seed/mentor3/70/70",
        domaineEtude: "Intelligence Artificielle",
        estDisponible: false,
        rating: "+5.0",
        sessions: 15
      }
    ];

    const result = await Accompagnant.insertMany(accompagnants);
    console.log(`✅ ${result.length} accompagnants inserted`);
    
    // Afficher les IDs générés
    result.forEach(acc => {
      console.log(`- ${acc.nomComplet}: ${acc._id}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

seedData();