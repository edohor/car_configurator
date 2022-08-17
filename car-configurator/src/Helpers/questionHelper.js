export const getCarMakes = () => {
  return [
    'Peugeot',
    'Volkwagen',
    'Citroen',
    'Audi',
    'Bmw',
    'Seat',
    'Alfa Romeo',
    'Kia',
    'Hyundai',
    'Honda',
    'Toyota',
  ];
};

export const getServices = () => {
  return [
    { label: 'Zamjena ulja i filtera (500kn)', price: 500 },
    { label: 'Promjena pakni (450kn)', price: 450 },
    { label: 'Promjena guma (100kn)', price: 100 },
    { label: 'Servis klima uređaja (299kn)', price: 299 },
    { label: 'Balansiranje guma (50kn)', price: 50 },
    { label: 'Zamjena ulja u kočnicama (229kn)', price: 229 },
  ];
};

export const getLocalizedValue = (value) => {
  return value.toLocaleString('hr-HR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
