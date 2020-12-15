import {getParks, copiedParks} from "./ParkProvider.js"
const contentTarget = document.querySelector(".container")


export const ParkSelect = () => {
    // Trigger fetching the API data and then loading it into application state
    getParks()
    .then( () => {
      // Get all convictions from application state
      const parks = copiedParks()
      render(parks)
    })
}

const render = parksCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="ParkSelect">
            <option value="0">Chose your destination...</option>
            ${
                parksCollection.map((parks) => `
                  <option value=${parks.id}>
                    ${parks.fullName}
                  </option>
                `)
            }
        </select>
    `
}

// eventHub.addEventListener("click", (event) => {
    //   if (event.target.id.includes("??--")) {
    //     const customEvent = new CustomEvent("detailsBtnClicked", {
    //       detail: {
    //         clickedParksDetailsButton: event.target.id.split("--")[1]
    //       }
    //     })
    //     eventHub.dispatchEvent(customEvent)
    //   }
    // })
// export const Park = (parkObj) => {
//   return `
//     <article class="parks">
//       <h2>${parkObj.fullName}</h2>
//       <div>Park: ${parkObj.conviction}</div>
//       <div>Term Start: ${new Date(parkObj.incarceration.start).toLocaleDateString('en-US')}</div>
//       <div>Term End: ${new Date(parkObj.incarceration.end).toLocaleDateString('en-US')}</div>
//       <button id="associates--${parkObj.id}">Associate Alibis</button>
//     </article>
//   `
// }



// parks: {
//     fullName: string
//     description: string
//     addresses: string
//     operatingHours: string
//     contacts.phoneNumbers.phoneNumber: string
//     id: number
//     }
    
    