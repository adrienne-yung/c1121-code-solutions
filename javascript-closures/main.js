const graduate = credential => {
  return fullName => {
    return `${fullName} ${credential}`;
  };
};

const medicalSchool = graduate('M.D');
const lawSchool = graduate('Esq.');

console.log(medicalSchool('Dan Abramov'));
console.log(lawSchool('Ryan Florence'));
