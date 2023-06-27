import axios from 'axios'

const api = axios.create({
	baseURL: 'https://mcb-backend-app-e15061d9058f.herokuapp.com',
	// baseURL: 'http://localhost:5000',
})

export default api
