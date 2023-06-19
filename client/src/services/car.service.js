import axios from 'axios'

class CarService {
    constructor() {
        this.api = axios.create({
            baseURL: `http://localhost:5005/api/cars`
        })
    }

    getAll() {
        return this.api.get('/')
    }

    getOne(id) {
        return this.api.get(`/${id}`)
    }

    create(data) {
        return this.api.post("/")
    }

    update(data, id) {
        return this.api.put(`/${id}`)
    }

    delete(id) {
        return this.api.delete(`/${id}`)
    }

}

const carService = new CarService()
export default carService;