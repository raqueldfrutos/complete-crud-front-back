import apiInstance from './apiInstance'

class CarService {
  constructor() {
    this.api = apiInstance
  }

  getAll() {
    return this.api.get('/cars')
  }

  getOne(id) {
    return this.api.get(`/cars/${id}`)
  }

  create(data) {
    return this.api.post('/cars', data)
  }

  update(id, data) {
    return this.api.put(`/cars/${id}`, data)
  }

  delete(id) {
    return this.api.delete(`/cars/${id}`)
  }
}

const carService = new CarService()
export default carService
