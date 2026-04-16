const URL = "https://dog.ceo/api/breeds/list/all";


const getFacts = async () => {
    console.log("Getting Data.....")
    let response = await fetch(URL);
    console.log(response); //JSON format
    let data = await response.json();
    console.log(data);
}