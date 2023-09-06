// @ts-nocheck
const admin = require('firebase-admin');
const serviceAccount = require('./service.json'); // Substitua pelo caminho do seu arquivo JSON de chave de serviço

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://console.firebase.google.com/u/2/project/eienotaku-5ce77/firestore/data/~2F?hl=pt-br', // Substitua pelo URL do seu projeto Firebase
});

const firestore = admin.firestore();

const animesData = require('./Bd-lote-animes.json'); // Substitua pelo caminho do seu arquivo JSON

const batch = firestore.batch();
const animesCollection = firestore.collection('animes');

animesData.forEach((animeData) => {
  const animeRef = animesCollection.doc();
  batch.set(animeRef, animeData);
});

batch.commit()
  .then(() => {
    console.log('Dados dos animes adicionados com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao adicionar dados dos animes:', error);
  });
