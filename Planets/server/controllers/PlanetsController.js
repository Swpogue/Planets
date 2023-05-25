import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";

export class PlanetsController extends BaseController{
constructor(){
  super('/api/planets')
  this.router
  .post('', this.createPlanet)
}
async createPlanet(req, res, next) {
  try {
    const planetData = req.body
    const newPlanet = await planetsService.createPlanet(planetData)
    return res.send(newPlanet)
  } catch (error) {
    next(error)
  }
  
}

}





// .get('', this.getPlanets)
// .put('/planetId', this.editPlanet)









//  async editPlanet(req, res, next) {
//     try {
//       const planetId = req.params.planetId
//       const planet = await planetsService.editPlanet(planetId)
//       return res.send(planet)
//     } catch (error) {
//       next(error)
//     }
//   }
// async getPlanets(req, res, next) {
//   try {
//     const planets = await planetsService.getPlanets()
//     return req.send(planets)
//   } catch (error) {
//     next(error)
//   }
// }