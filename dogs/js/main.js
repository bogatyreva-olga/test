function getDogsData() {
    return [
        {
            name: "Tom",
            age: 2
        },
        {
            name: "Jack",
            age: 5
        },
        {
            name: "Bim",
            age: 1
        },
        {
            name: "Bom",
            age: 8
        }
    ]
}

function getSortDogs(dogs) {
    return dogs.sort(function (a, b) {
        return a.age - b.age
    })
}

document.addEventListener("DOMContentLoaded", function (event) {
    let dogs = getSortDogs(getDogsData())
    for (let i = 0; i < dogs.length; i++) {
        let liElement = document.createElement('li')

        let spanElement = document.createElement('span')
        spanElement.innerText = dogs[i].#name
        liElement.appendChild(spanElement)

        spanElement = document.createElement('span')
        spanElement.innerText = dogs[i].age
        liElement.appendChild(spanElement)

        document.getElementById('result').appendChild(liElement)
    }
})
