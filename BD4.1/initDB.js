const sqlite = require('sqlite3').verbose();

const db = new sqlite3.Database('./BD4_Assignment1/database.sqlite', (err) => {
  if (err) {
    console.log('Error opening database');
  } else {
    console.log('Connected to database');
  }
});

db.serialize(() => {
  db.run(
    `Create table if not exist restaurents(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      cuisine TEXT,
      isveg BOOLEAN,
      rating FLOAT,
      pricefortwo INT,
      location TEXT,
      hasoutdoorseating BOOLEAN,
      isLuxury BOOLEAN

    )`,
    (err) => {
      if (err) {
        console.log('error occured');
      }
    else{
      console.log("Movies table created successfully");
    }
  }
  );


  //insert random restaurent data
  const stmt=db.prepare(
    "INSERT INTO restaurents(name,cuisine,isVeg,rating,priceforTwo,location,hasOutdoorSeating,isLuxury) VALUES(?,?,?,?,?,?,?,?)",
  );

      const restaurents = [
        //unique restaurents
        {
          id: 1,
          name: 'Spice Kitchen',
          cuisine: 'Indian',
          isVeg: 'true',
          rating: 4.5,
          priceForTwo: 1500,
          location: 'MG Road',
          hasOutdoorSeating: 'true',
          isLuxury: 'false',
        },
        {
          id: 2,
          name: 'Olive Bistro',
          cuisine: 'Italian',
          isVeg: 'false',
          rating: 4.2,
          priceForTwo: 2000,
          location: 'Jubilee Hills',
          hasOutdoorSeating: 'false',
          isLuxury: 'true',
        },
        {
          id: 3,
          name: 'Green Leaf',
          cuisine: 'Chinese',
          isVeg: 'true',
          rating: 4.0,
          priceForTwo: 1000,
          location: 'Banjara Hills',
          hasOutdoorSeating: 'false',
          isLuxury: 'false',
        },
      ];
    }
  );
});
