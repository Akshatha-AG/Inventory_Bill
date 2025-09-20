let items = document.querySelectorAll(".inside");
let bill = document.querySelector(".bill");
let table =document.querySelector("table");
let btn = document.querySelector("button");
let newBill =document.querySelector("#newBill");

items.forEach(function(item){
    item.addEventListener("click", () =>{

        let rows = document.querySelectorAll("tr");
        let found = false;
        

        rows.forEach(row => {
            let firstCell = row.children[0];
            let Qty = row.children[2];
            let total = row.children[3];
            let pri = row.children[1];

            if (firstCell && firstCell.innerText === item.textContent) {
            // Match found → increment quantity
            Qty.innerText = parseInt(Qty.innerText) + 1;
            total.innerText = parseInt(Qty.innerText) * parseInt(pri.innerText);
            found = true;
        }
        });
    if(!found){
    
        
    let tr = document.createElement("tr");
    let td =document.createElement("td");
   
    td.innerText = item.textContent;
    tr.appendChild(td);
    
    
    let td2 =document.createElement("td");
    td2.innerText=item.id;
    tr.appendChild(td2);
    
    

    let td3 = document.createElement("td");
    td3.innerText=1;
    tr.appendChild(td3);
    
    
    let td4 = document.createElement("td");
    td4.innerText =parseInt(td3.innerText) * parseInt(td2.innerText);
    tr.appendChild(td4);
    table.appendChild(tr);
    
    }
    
})
})

btn.addEventListener("click", () => {
    
    let rows = document.querySelectorAll("tr");
    let sum = 0;
    rows.forEach((row, index )=>{

           if(index==0)return;
            
            let total = row.children[3];
            
            if(total){
            sum += parseInt(total.innerText);
            }
        });

        let newRow = document.createElement("tr");
        let newData = document.createElement("td");
        newData.colSpan=3;
        newData.innerText="Total Amount to pay";
        newRow.appendChild(newData);

        let newData2 = document.createElement("td");
        newData2.innerText=sum;
        newRow.appendChild(newData2);
        table.append(newRow);

        newRow.style.marginTop="200px";
        newRow.style.backgroundColor="grey";
        newRow.style.color="black";
        

})








