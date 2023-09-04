const admin = require('firebase-admin');
const serviceAccount = require('./service.json'); // Substitua pelo caminho do seu arquivo JSON de chave de serviço

// Inicialize o Firebase Admin SDK com as credenciais do serviço
admin.initializeApp({
  // @ts-ignore
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://console.firebase.google.com/u/2/project/eienotaku-5ce77/firestore/data/~2F?hl=pt-br', // Substitua pelo URL do seu projeto Firebase
});

const firestore = admin.firestore();

const usersData = require('./users-data.json'); // Substitua pelo caminho do seu arquivo JSON de dados de usuários

const usersCollection = firestore.collection('users');

usersData.forEach(async (userData) => {
  try {
    // Adicione os dados do usuário à coleção "users" e deixe o Firestore gerar automaticamente um ID
    await usersCollection.add(userData);

    console.log('Dados do usuário adicionados com sucesso.');
  } catch (error) {
    console.error('Erro ao adicionar dados do usuário:', error);
  }
});
