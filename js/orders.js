//console.log("Hello")
const OrderList=[];

function addOrder(){
    let txtRname=document.getElementById("txtResellername").value;
    let txtCname=document.getElementById("txtCustomerName").value;
    let txtName=document.getElementById("txtItemname").value;
    let txtQuan=document.getElementById("txtQuantity").value;
    let txtNum=document.getElementById("txtNumber").value;
    let txtCAddress=document.getElementById("txtAddress").value;
    let txtCPrice=document.getElementById("txtPrice").value;
    let txtYPrice=document.getElementById("txtYourPrice").value;

    console.log(txtRname);
    console.log(txtCname);
    console.log(txtName);
    console.log(txtQuan);
    console.log(txtNum);
    console.log(txtCAddress);
    console.log(txtCPrice);
    console.log(txtYPrice);

    let Order = {
        Rname:txtRname, 
        Cname:txtCname,
        Iname:txtName,
        quantity:txtQuan,
        pnumber:txtNum,
        CAddress:txtCAddress,
        Cprice:txtCPrice,
        Yprice:txtYPrice
    }

    console.log(Order)

    OrderList.push(Order)

    console.log(OrderList)
    
    localStorage.setItem("OrderList",JSON.stringify(OrderList));

    loadTable();

}

function loadTable(){
    let tbl1=document.getElementById("tblStudent");
    document.getElementById("h2").innerText="View Order Details"

    let localStorageItemlist=localStorage.getItem("OrderList");
    console.log(JSON.parse(localStorageItemlist));

    let body=`
    <tr>
        <th>Reseller Name</th>
        <th>Customer Name</th>
        <th>Item Name</th>
        <th>Quantity</th>
        <th>Phone Number</th>
        <th>Address</th>
        <th>Price</th>
        <th>Your Price</th>
    </tr>
    `

    let localitem=JSON.parse(localStorageItemlist)

    localitem.forEach(Order => {
        body+=`
        <tr>
            <td>${Order.Rname}</td>
            <td>${Order.Cname}</td>
            <td>${Order.Iname}</td>
            <td>${Order.quantity}</td>
            <td>${Order.pnumber}</td>
            <td>${Order.CAddress}</td>
            <td>${Order.Cprice}</td>
            <td>${Order.Yprice}</td>
        </tr>
        `
    })
    
    tbl1.innerHTML=body;
}