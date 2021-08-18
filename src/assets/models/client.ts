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
  $key: string;
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


