import axios from "axios";


export function readAll(){
    console.log("searching foursquare");
    return function(dispatch) {
    axios.get("https://api.foursquare.com/v2/venues/search?near=${search}&query=bar+rooftop&oauth_token=TRVTWDKGQ3PL1EFYGMKR5GNEPXLFZNOSBA5TAROXSTA4VGZP&v=20170313")
      .then((response) => {
        dispatch({type: "TODO_READ", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "TODO_READ_FAILED", payload: err})
      })
  }
}

// export function create(text){
//     return {
//         type:"TODO_CREATE",
//         payload:text
//     }
// }
