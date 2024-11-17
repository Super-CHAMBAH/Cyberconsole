export const repairServices = [
  {
    id: 'repair-1',
    name: 'Remplacement écran LCD',
    description: 'Remplacement complet de l\'écran LCD endommagé',
    price: 69.99,
    duration: '1-2 heures',
    consoleType: 'Nintendo Switch',
  },
  {
    id: 'repair-2',
    name: 'Réparation Joy-Con Drift',
    description: 'Correction du problème de drift des Joy-Con',
    price: 39.99,
    duration: '1 heure',
    consoleType: 'Nintendo Switch',
  },
  {
    id: 'repair-3',
    name: 'Remplacement lecteur PS4',
    description: 'Remplacement du lecteur Blu-ray défectueux',
    price: 89.99,
    duration: '2-3 heures',
    consoleType: 'PlayStation 4',
  },
];

export const spareParts = [
  {
    id: 'part-1',
    name: 'Batterie Nintendo Switch',
    description: 'Batterie de remplacement originale 4310mAh',
    price: 29.99,
    compatibility: ['Nintendo Switch V1', 'Nintendo Switch V2'],
    stock: 15,
    imageUrl: 'https://images.unsplash.com/photo-1578598336003-1514a96268a0?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'part-2',
    name: 'Ventilateur PS4',
    description: 'Ventilateur de remplacement pour PS4 Pro',
    price: 24.99,
    compatibility: ['PS4 Pro', 'PS4 Slim'],
    stock: 8,
    imageUrl: 'https://images.unsplash.com/photo-1621259182978-fbf389b38f37?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'part-3',
    name: 'Stick analogique Xbox',
    description: 'Module stick analogique de remplacement',
    price: 12.99,
    compatibility: ['Xbox One', 'Xbox Series X/S'],
    stock: 20,
    imageUrl: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&q=80&w=400',
  },
];