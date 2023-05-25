import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"

class PlanetsService{
  async getPlanetsByGalaxyId(galaxyId) {
    const planets = await dbContext.Planets.find({ galaxyId: galaxyId })
    return planets
  }
  
  async createPlanet(planetData) {
  const newPlanet = await dbContext.Planets.create(planetData)
  return newPlanet
}

}


export const planetsService = new PlanetsService()




//  async editPlanet(planetId) {
//     const planet = await dbContext.Planets.findById(planetId)
//     if (!planetId){
//     throw new BadRequest('Wrong ID')
//   }
//   return planet
// }
  // async  getPlanets() {
  //   const planets = await dbContext.Planets.find()
  //   return planets
    
  // }