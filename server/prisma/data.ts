export const route = [
  "Zone III, Digos City - Tacul, Magsaysay via Hagonoy and Vice Versa",
  "Zone III, Digos City - Upper Bala, Magsaysay Route and Vice Versa",
  "Padada, Centro - Tacul, Magsaysay via Hagonoy and Vice Versa",
  "Bansalan, Market - Upper Bala, Magsaysay Route and Vice Versa",
];

export const point = [
  {
    name: "Zone III, Digos City to Tacul, Magsaysay via Hagonoy",
    routeId: 1,
  },
  {
    name: "Tacul, Magsaysay via Hagonoy to Zone III, Digos City",
    routeId: 1,
  },
  {
    name: "Zone III, Digos City to Upper Bala, Magsaysay Route",
    routeId: 2,
  },
  {
    name: "Upper Bala, Magsaysay Route to Zone III, Digos City",
    routeId: 2,
  },
  {
    name: "Padada, Centro to Tacul, Magsaysay via Hagonoy",
    routeId: 3,
  },
  {
    name: "Tacul, Magsaysay via Hagonoy to Padada, Centro",
    routeId: 3,
  },
  {
    name: "Bansalan, Market to Upper Bala, Magsaysay Route",
    routeId: 4,
  },
  {
    name: "Upper Bala, Magsaysay Route to Bansalan, Market",
    routeId: 4,
  },
];

export const bus = [
  // route=1 point=1,2
  {
    number: 1,
    routeId: 1,
    destinationId: 1,
  },
  {
    number: 2,
    routeId: 1,
    destinationId: 1,
  },
  {
    number: 3,
    routeId: 1,
    destinationId: 2,
  },
  {
    number: 4,
    routeId: 1,
    destinationId: 2,
  },
  //route=2 point=3,4
  {
    number: 5,
    routeId: 2,
    destinationId: 3,
  },
  {
    number: 6,
    routeId: 2,
    destinationId: 3,
  },
  {
    number: 7,
    routeId: 2,
    destinationId: 4,
  },
  {
    number: 8,
    routeId: 2,
    destinationId: 4,
  },
  //route=3 point=5,6
  {
    number: 9,
    routeId: 3,
    destinationId: 5,
  },
  {
    number: 10,
    routeId: 3,
    destinationId: 5,
  },
  {
    number: 11,
    routeId: 3,
    destinationId: 6,
  },
  {
    number: 12,
    routeId: 3,
    destinationId: 6,
  },
  //route=4 point=7,8
  {
    number: 13,
    routeId: 4,
    destinationId: 7,
  },
  {
    number: 14,
    routeId: 4,
    destinationId: 7,
  },
  {
    number: 15,
    routeId: 4,
    destinationId: 8,
  },
  {
    number: 16,
    routeId: 4,
    destinationId: 8,
  },
];
