// STATE
const names = ["Alice", "Bob", "Carol"];
const occupations = [
    "writer",
    "teacher",
    "programmer",
];

// Array of initial freelancers
const freelancers = [
    {name: "Alice", price: 30, occupation:"Writer"},
    {name: "Bob", price: 50, occupation: "Teacher"}
];

//REFERENCES
const average = document.getElementById("average");
const tableBody = document.querySelector("#table-body");

//Render initial data
render();

// Have you written and called a function to render the initial freelancer data?
function render() {
    const newRows = freelancers.map((freelancer) => {
        const newRow = document.createElement("tr");

        const name = document.createElement("td");
        name.innerText = freelancer.name;

        const occupation = document.createElement("td");
        occupation.innerText = freelancer.occupation;

        const price = document.createElement("td");
        price.innerText = `$${freelancer.price}`;

        newRow.append(name, occupation, price);
        return newRow;
});

    tableBody.replaceChildren(...newRows);
}

function addRandomFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = Math.floor(Math.random() * 5000);

    freelancers.push({name, occupation, price});

    render();

    if (freelancers.legth === 10) {
        clearInterval(addFreelancerIntervalID);
    }
}

// Have you written a function to calculate the average starting price of your freelancers' array?
function calculateAveragePrice() {
    // average = total amount / total elements
    const total = freelancers.reduce(
        (accum, current) => accum + current.price,
        0
    );
    return total / freelancers.length;
}