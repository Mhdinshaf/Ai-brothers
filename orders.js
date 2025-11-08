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

}

function loadTable(){
    let tbl1=document.getElementById("tblStudent");
    let body=
    <tr>
        <th>Reseller Name</th>
        <th>Customer Name</th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
    </tr>
}