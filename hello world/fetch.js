// let url = "https://jsonplaceholder.typicode.com/todos"
//        let fetchUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
       .then((response) => {
        console.log(response);
        return response.json()
       })
    //    .then((data) => {
    //     let mappedData = "<ul>";
    //         data.map((value, ind, arr) => {
    //             mappedData += `<li>${value.title}</li>`;
    //         });
    //         mappedData += "</ul>"
    //         const myData = document.getElementById("mydata");;
    //         myData.innerHTML = mappedData;
    //    })
       
       .catch((error) => {
        console.log(error);
       })

    // }