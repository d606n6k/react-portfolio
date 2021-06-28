import axios from "axios";

export default {
  fetchRepos: function () {
    return axios.get("https://api.github.com/users/d606n6k/repos?per_page=50");
  },
};

// old static repo data
// export default [
//   {
//     name: "Weather Dashboard",
//   },
//   {
//     name: "Employee Dashboard",
//   },
//   {
//     name: "Fitness Tracker",
//   },
//   {
//     name: "Original Portfolio",
//   },
// ];
