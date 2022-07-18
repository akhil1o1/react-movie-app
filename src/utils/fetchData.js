export const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
      'X-RapidAPI-Key':"e5664d8631msh7986803c20bd967p158b33jsn1b4ffc1b0108"
    }
  };
  

export async function fetchData(url, options){
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

