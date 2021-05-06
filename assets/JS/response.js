getData2();
async function getData2() {

    const response = await fetch('/submitdata');
    const data = await response.json();
    // console.log(data)

    for (var i = 0; i < data.length; i++) {
        console.log(data[i].name)
    }
}



{/* <tr>
    <td>1</td>
    <td id>Everything is either 0 or 1</td>
    <td>yashsrivstav</td>
    <td class="done">Quote</td>
    <td class="done">Yash Srivastava</td>
    <td>yashsv51@gmail.com</td>

</tr> */}