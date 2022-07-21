export const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
      'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY
    }
  };

  // export const movieOptions = {
  //   method: 'GET',
  //   params: {page: '10', sort: 'year', type: 'movies'},
  //   headers: {
  //     'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
  //     'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY
  //   }
  // };
  

export async function fetchData(url, options){
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

