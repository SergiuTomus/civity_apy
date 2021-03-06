'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('restaurants', [{
      name: 'Alloro',
      address: 'bld. Revolutiei, nr. 71',
      phone: '02582256',
      image_url: "img/logos/alloro.jpg",
      minimum_order: 50,
      cost_delivery: 0,
      week_program: '08:00 - 22:00',
      saturday_program: '08:00 - 22:00',
      sunday_program: '10:00 - 20:00',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Spartan',
      address: 'str. Aviatiei, nr. 45',
      phone: '02582256',
      image_url: "img/logos/spartan.jpg",
      minimum_order: 60,
      cost_delivery: 0,
      week_program: '08:00 - 22:00',
      saturday_program: '08:00 - 20:00',
      sunday_program: 'inchis',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Zamore',
      address: 'str. Muresului, nr. 6',
      phone: '02582256',
      image_url: "img/logos/zamore.png",
      minimum_order: 50,
      cost_delivery: 0,
      week_program: '08:00 - 21:00',
      saturday_program: 'inchis',
      sunday_program: 'inchis',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Pasta',
      address: 'str. Iazului, nr. 55',
      phone: '02582256',
      image_url: "img/logos/logo8.jpg",
      minimum_order: 70,
      cost_delivery: 0,
      week_program: '09:00 - 21:00',
      saturday_program: '10:00 - 20:00',
      sunday_program: 'inchis',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Chili Pistols',
      address: 'str. Rosiori, nr. 40',
      phone: '02582256',
      image_url: "img/logos/logo4.png",
      minimum_order: 50,
      cost_delivery: 5,
      week_program: '08:00 - 23:00',
      saturday_program: '08:00 - 23:00',
      sunday_program: 'inchis',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Chicken Hut',
      address: 'str. Lalelelor, nr. 22',
      phone: '02582256',
      image_url: "img/logos/logo3.jpg",
      minimum_order: 60,
      cost_delivery: 15,
      week_program: '09:00 - 22:00',
      saturday_program: '09:00 - 22:00',
      sunday_program: '10:00 - 20:00',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Hanul Dacilor',
      address: 'str. Livezii, nr. 11',
      phone: '02582256',
      image_url: "img/logos/logo6.jpg",
      minimum_order: 30,
      cost_delivery: 10,
      week_program: '08:00 - 19:00',
      saturday_program: '08:00 - 16:00',
      sunday_program: '08:00 - 16:00',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Trattoria',
      address: 'str. Jupiter, nr. 4',
      phone: '02582256',
      image_url: "img/logos/logo10.png",
      minimum_order: 40,
      cost_delivery: 0,
      week_program: '08:00 - 23:00',
      saturday_program: '08:00 - 23:00',
      sunday_program: '08:00 - 23:00',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('restaurants', null, {});
    */
  }
};
