import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-type": "application/json"
  }
});
//  REACT_APP_API_URL="http://127.0.0.1:8000"