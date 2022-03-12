import axios from 'axios';

const dbURL = 'https://localhost:44363';

const getAllDreams = () => new Promise((reject) => {
  axios.get(`${dbURL}/dreams`)
    .then((response) => console.warn(response))
    .catch((error) => reject(error));
});

const getSingleDream = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/dreams/${id}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addDream = (newDream) => new Promise ((resolve, reject) => {
  axios.post(`${dbURL}/dreams`, newDream)
    .then(() => {
      getAllDreams().then((response) => resolve(response));
    })
    .catch((error) => reject(error));
});

const updateDream = (id, updatedDream) => new Promise((resolve, reject) => {
  axios.put(`${dbURL}/dreams/${id}`, updatedDream)
    .then(() => {
      getAllDreams().then((response) => resolve(response));
    })
    .catch((error) => reject(error));
});

const deleteDream = (id) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/dreams/${id}`)
    .then(() => {
      getAllDreams().then((response) => resolve(response));
    })
    .catch((error) => reject(error));
});

export {
  getAllDreams,
  getSingleDream,
  addDream,
  updateDream,
  deleteDream
};
