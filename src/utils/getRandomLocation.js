const getRandomLocation = () => {
  const randomNumber = Math.ceil(Math.random() * 126);
  return randomNumber;
};

export default getRandomLocation;
