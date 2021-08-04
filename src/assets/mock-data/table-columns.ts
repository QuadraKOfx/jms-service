export const TABLE_DATA = [
  {
    id: '1',
    name: 'Costas',
    address: '34 Makedonias Street',
    telephone: '96423552',
    ignitionKey: '32453DEAD23',
    actions: ['mode_edit', 'delete'],
    carInfo: {
      make: 'Honda',
      model: 'Integra',
      chassis: '1HIGH41JAXEN',
      engine: '62WVC10332',
      date: new Date('11/12/2021').toDateString(),
      plates: 'KAI234',
      service: {
        date: new Date('11/12/2021').toDateString(),
        mileage: '40Mi',
        repair: 'Service/Oil Changes',
        work: null
      }
    },
  },
];
