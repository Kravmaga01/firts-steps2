import { Injectable, Body } from '@nestjs/common';
import { ok } from 'assert';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      first_name: 'Virginia',
      last_name: 'Sharrock',
      email: 'vsharrock0@wp.com',
      gender: 'Female',
      ip_address: '66.80.90.100',
    },
    {
      id: 2,
      first_name: 'Bartolemo',
      last_name: 'Sexton',
      email: 'bsexton1@cafepress.com',
      gender: 'Male',
      ip_address: '243.52.128.194',
    },
    {
      id: 3,
      first_name: 'Rubi',
      last_name: 'Gerholz',
      email: 'rgerholz2@deliciousdays.com',
      gender: 'Female',
      ip_address: '124.221.52.36',
    },
    {
      id: 4,
      first_name: 'Steven',
      last_name: 'Segot',
      email: 'ssegot3@mashable.com',
      gender: 'Agender',
      ip_address: '47.155.126.78',
    },
    {
      id: 5,
      first_name: 'Carlina',
      last_name: 'Tomovic',
      email: 'ctomovic4@yellowpages.com',
      gender: 'Female',
      ip_address: '228.202.82.186',
    },
    {
      id: 6,
      first_name: 'Corey',
      last_name: 'Bevens',
      email: 'cbevens5@unblog.fr',
      gender: 'Male',
      ip_address: '255.61.105.194',
    },
    {
      id: 7,
      first_name: 'Mufinella',
      last_name: 'Billam',
      email: 'mbillam6@gravatar.com',
      gender: 'Female',
      ip_address: '98.58.245.245',
    },
    {
      id: 8,
      first_name: 'Cleavland',
      last_name: 'Celler',
      email: 'cceller7@spotify.com',
      gender: 'Male',
      ip_address: '55.140.198.172',
    },
    {
      id: 9,
      first_name: 'Giacomo',
      last_name: 'Ryding',
      email: 'gryding8@gmpg.org',
      gender: 'Male',
      ip_address: '78.197.189.126',
    },
    {
      id: 10,
      first_name: 'Mathew',
      last_name: 'Afonso',
      email: 'mafonso9@i2i.jp',
      gender: 'Male',
      ip_address: '86.159.193.111',
    },
    {
      id: 11,
      first_name: 'Pattie',
      last_name: 'Lewsley',
      email: 'plewsleya@shinystat.com',
      gender: 'Female',
      ip_address: '122.138.16.112',
    },
    {
      id: 12,
      first_name: 'Gertrudis',
      last_name: 'Lorenc',
      email: 'glorencb@sphinn.com',
      gender: 'Female',
      ip_address: '116.224.81.162',
    },
    {
      id: 13,
      first_name: 'Benjy',
      last_name: 'Affleck',
      email: 'baffleckc@examiner.com',
      gender: 'Male',
      ip_address: '242.66.218.77',
    },
    {
      id: 14,
      first_name: 'Flinn',
      last_name: 'Dibdin',
      email: 'fdibdind@webeden.co.uk',
      gender: 'Male',
      ip_address: '45.21.59.144',
    },
    {
      id: 15,
      first_name: 'Joane',
      last_name: 'Strood',
      email: 'jstroode@samsung.com',
      gender: 'Female',
      ip_address: '205.76.85.89',
    },
    {
      id: 16,
      first_name: 'Anny',
      last_name: 'Clyant',
      email: 'aclyantf@bloglines.com',
      gender: 'Female',
      ip_address: '95.37.241.142',
    },
    {
      id: 17,
      first_name: 'Hedvig',
      last_name: 'Rikel',
      email: 'hrikelg@shop-pro.jp',
      gender: 'Female',
      ip_address: '80.196.138.209',
    },
    {
      id: 18,
      first_name: 'Meridel',
      last_name: 'Lepick',
      email: 'mlepickh@canalblog.com',
      gender: 'Female',
      ip_address: '180.16.59.146',
    },
    {
      id: 19,
      first_name: 'Alley',
      last_name: 'Southgate',
      email: 'asouthgatei@elpais.com',
      gender: 'Male',
      ip_address: '126.247.161.102',
    },
    {
      id: 20,
      first_name: 'Adriano',
      last_name: 'Worsley',
      email: 'aworsleyj@youku.com',
      gender: 'Male',
      ip_address: '15.99.118.136',
    },
  ];
  async getAllUsers() {
    return this.users;
  }
  async getUserById(id:string){
    return this.users.find((user)=> (user.id == parseInt(id))); 
  }

  async createUser(body:any){
    this.users.push(body);
    return 'ok';

  }

  async updateUser(body:any, id){
    const index = this.users.findIndex(user=> user.id === parseInt(id));
    this.users[index] = body;
    return body;

  }
  async deleteUser(id){
    
    this.users = this.users.filter(user => user.id !== parseInt(id));
    return this.users;

  }
}