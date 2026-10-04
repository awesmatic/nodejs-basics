function randomNumber() {
  return Math.floor(Math.random() * 100 ) + 1;
}

const number = () => randomNumber()

// console.log(randomNumber());

// export {randomNumber};
export default randomNumber;

