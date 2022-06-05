document.getElementById('getButton').addEventListener('click', apiRequest)

async function apiRequest() {
    const animalName = document.querySelector('select').value
    try {
        const response = await fetch(`https://flatufacts.herokuapp.com/api/${animalName}`)
        const data = await response.json()

        console.log(data)

        document.getElementById('animalName').innerText = data.animalName
        document.getElementById('scientificName').innerText = data.scientificName
        document.getElementById('doesItFart').innerText = data.doesItFart
        document.getElementById('notes').innerText = data.notes
        document.getElementById('research').innerText = data.research
        document.getElementById('fartoligist').innerText = data.fartoligist

        document.getElementById('animalImage').src = data.image
        document.getElementById('animalCaption').innerText = data.animalName

    } catch (error) {
        console.log(error)
    }
}
