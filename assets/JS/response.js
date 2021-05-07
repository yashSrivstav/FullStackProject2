var tbody = document.getElementById("dynamic")
// console.log(tbody)
async function verifyemail() {
    const responseadmin = await fetch('/adminapi');
    const dataadmin = await responseadmin.json();
    for (var i = 0; i < dataadmin.length; i++) {
        if (localStorage.getItem('email') === dataadmin[i].email) {
            return true
        }
        return false
    }
}
if (localStorage.getItem('email') != "") {
    (async () => { //used for getting the return value from an async function
        var a = await verifyemail()
        if (a) {
            getData2();
            async function getData2() {

                const response = await fetch('/submitdata');
                const data = await response.json();
                // console.log(data)

                for (var i = 0; i < data.length; i++) {
                    // console.log(data[i].name)
                    var tr = document.createElement("tr")

                    var td1 = document.createElement('td')
                    td1.innerHTML = i + 1
                    tr.appendChild(td1)

                    var td2 = document.createElement('td')
                    td2.innerHTML = data[i].msg
                    tr.appendChild(td2)

                    var td3 = document.createElement('td')
                    td3.innerHTML = data[i].insta_id
                    tr.appendChild(td3)

                    var td4 = document.createElement('td')
                    td4.innerHTML = data[i].category
                    td4.classList.add('done') // to add css class
                    tr.appendChild(td4)


                    var td5 = document.createElement('td')
                    td5.innerHTML = data[i].name
                    tr.appendChild(td5)


                    var td6 = document.createElement('td')
                    td6.innerHTML = data[i].email
                    tr.appendChild(td6)


                    tbody.appendChild(tr)
                }
            }
        }
    })()


}
function rem() {
    localStorage.setItem("email", "")
}

