import axios from "axios";

const instence = axios.create({
  baseURL: `http://localhost:5001/TechHaven/api`,
});
export default instence;
