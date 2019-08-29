async function getTickets() {
  try{
    const response = await fetch('https://front-test.beta.aviasales.ru/search');
    const data = await response.json();
    return getById(data.searchId)
  } catch (error) {
    console.log(error)
  }
}

async function getById(id){
  try{
    const response = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}

export default getTickets();
