export interface IClientProfile {
  id: string;
  $key: string;
  name: string;
  address: string;
  telephone: string;
  actions: string[];
  carIds: number[];
  lastName: string;
}

export class ClientProfile implements IClientProfile {
  actions: string[];
  $key: string;
  address: string;
  carIds: number[];
  id: string;
  name: string;
  lastName: string;
  telephone: string;

  constructor(id: string, fields?) {
    this.actions = ['mode_edit', 'delete', 'directions_car'];
    this.id = id;
    this.carIds = [0];
    Object.assign(this, fields);
  }
}

export interface ICarProfile {
  id: string;
  make: string;
  model: string;
  ignitionKey: string;
  chassis: string;
  engine: string;
  date: string;
  plates: string;
  service: IServiceProfile;
  serviceid: string;
}

export interface IServiceProfile {
  id: string;
  date: string;
  mileage: string;
  repair: string[];
  work: string;
}


// const ELEMENT_DATA: IClientProfile[] = [
//   {
//     id: '1',
//     name: 'Marios',
//     address: '37 Stasinou Street',
//     telephone: '96423552',
//     actions: ['mode_edit', 'delete'],
//     carId: '1',
//     carInfo: [
//       {
//         id: '1',
//         make: 'Honda',
//         model: 'Civic',
//         chassis: '1HIGH41JAXEN',
//         engine: '62WVC10332',
//         date: new Date('11/12/2021').toDateString(),
//         plates: 'KAI234',
//         service: {
//           id: '1',
//           date: new Date('11/12/2021').toDateString(),
//           mileage: '40Mi',
//           repair: ['Service'],
//           work: null
//         }
//       },
//       {
//         make: 'Toyota',
//         model: 'Auris',
//         chassis: '1HIGH41JAXEN',
//         engine: '62WVC10332',
//         date: new Date('11/12/2021').toDateString(),
//         plates: 'KAI234',
//         service: {
//           date: new Date('11/12/2021').toDateString(),
//           mileage: '24Mi',
//           repair: ['Service'],
//           work: null
//         }
//       }],
//   },
//   {
//     id: '2',
//     name: 'George',
//     address: '6 Panagron Street',
//     telephone: '96423552',
//     ignitionKey: '32453DEAD23',
//     actions: ['mode_edit', 'delete'],
//     carInfo: [{
//       make: 'KIA',
//       model: 'Seed',
//       chassis: '1HIGH41JAXEN',
//       engine: '62WVC10332',
//       date: new Date('04/08/2021').toDateString(),
//       plates: 'KAI234',
//       service: {
//         date: new Date('11/12/2021').toDateString(),
//         mileage: '66Mi',
//         repair: ['Service'],
//         work: null
//       }
//     }],
//   }
// ];

