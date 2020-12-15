import { copiedAttractions, getAttractions} from "./AttractionProvider.js"
const contentTarget = document.querySelector(".filters__attraction")


export const AttractionSelect = () => {
    // Trigger fetching the API data and then loading it into application state
    getAttractions()
    .then( () => {
      // Get all convictions from application state
      const attractions = copiedAttractions()
      render(attractions)
      console.log(attractions)
    })
    
}


const render = attractionsCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="AttractionSelect">
            <option value="0">Chose your attraction...</option>
            ${
                attractionsCollection.map((bizarreries) => 
                // console.log("WHat is this ->", bizarreries)
                `
                  <option value=${bizarreries.id}>
                    ${bizarreries.name}
                  </option>
                `)
                
            }
        </select>
        ` 
    }