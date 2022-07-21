export const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
      'X-RapidAPI-Key':"0f711d84eamsh1a3223652e50501p1ae223jsnb03321179d6b"
    }
  };

  export const movieOptions = {
    method: 'GET',
    params: {page: '10', sort: 'year', type: 'movies'},
    headers: {
      'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
      'X-RapidAPI-Key':"0f711d84eamsh1a3223652e50501p1ae223jsnb03321179d6b"
    }
  };
  

export async function fetchData(url, options){
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

